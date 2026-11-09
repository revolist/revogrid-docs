import { readonly, ref } from 'vue'

const cacheKey = 'revogrid:github-stars'
const refreshInterval = 60 * 60 * 1000
const stars = ref<number | null>(null)
let pending: Promise<void> | undefined
let lastAttempt = 0

function isStarCount(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0
}

async function refreshStars() {
  const now = Date.now()
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey) ?? 'null')
    if (cached && isStarCount(cached.count) && Number.isFinite(cached.updatedAt)) {
      stars.value ??= cached.count
      const age = now - cached.updatedAt
      if (age >= 0 && age < refreshInterval) return
    }
  } catch {
    // Storage may be unavailable; the public API can still supply the count.
  }

  // Share failures as well as successful requests across navigation instances.
  if (now - lastAttempt < refreshInterval) return
  lastAttempt = now
  try {
    const response = await fetch('https://api.github.com/repos/revolist/revogrid', {
      signal: AbortSignal.timeout(5000),
    })
    if (!response.ok) return
    const repo: { stargazers_count?: unknown } = await response.json()
    if (!isStarCount(repo.stargazers_count)) return
    stars.value = repo.stargazers_count
    localStorage.setItem(cacheKey, JSON.stringify({ count: stars.value, updatedAt: Date.now() }))
  } catch {
    // Keep the last known count during outages, rate limiting or storage errors.
  }
}

export function useGitHubStars() {
  return {
    stars: readonly(stars),
    loadStars: () => {
      pending ??= refreshStars().finally(() => {
        pending = undefined
      })
      return pending
    },
  }
}
