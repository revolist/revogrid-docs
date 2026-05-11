import { computed } from 'vue'
import { useData } from 'vitepress'
import { mergePivotPageConfig } from './pivotPageConfig'
import type { PivotLandingPageConfig } from './types'

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, '')
}

export function usePivotPage() {
  const { frontmatter, isDark } = useData()
  const rvGridBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_BASE_URL || 'https://rv-grid.com')
  const rvGridProBaseUrl = trimTrailingSlash(import.meta.env.VITE_RV_GRID_PRO_BASE_URL || 'https://pro.rv-grid.com')
  const page = computed(() => mergePivotPageConfig((frontmatter.value.pivotLanding ?? {}) as PivotLandingPageConfig))
  const pageStyle = computed(() => ({
    '--pivot-accent': isDark.value ? page.value.colors.darkAccent : page.value.colors.accent,
    '--pivot-accent-mid': isDark.value ? page.value.colors.darkAccentMid : page.value.colors.accentMid,
    '--pivot-accent-vivid': isDark.value ? page.value.colors.darkAccentVivid : page.value.colors.accentVivid,
    '--pivot-accent-soft': isDark.value ? page.value.colors.darkSoft : page.value.colors.soft,
    '--pivot-accent-border': isDark.value ? page.value.colors.darkBorder : page.value.colors.border,
  }))

  function resolvePivotLink(href: string) {
    if (href.startsWith('https://rv-grid.com')) {
      return `${rvGridBaseUrl}${href.slice('https://rv-grid.com'.length)}`
    }

    if (href.startsWith('https://pro.rv-grid.com')) {
      return `${rvGridProBaseUrl}${href.slice('https://pro.rv-grid.com'.length)}`
    }

    if (frontmatter.value.externalHomeLinks && href.startsWith('/')) {
      return `${rvGridBaseUrl}${href}`
    }

    return href
  }

  return {
    page,
    pageStyle,
    resolvePivotLink,
  }
}
