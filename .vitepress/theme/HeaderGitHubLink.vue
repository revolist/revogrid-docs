<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useData } from 'vitepress'
import { useGitHubStars } from './useGitHubStars'

defineProps<{ screen?: boolean }>()
const { lang } = useData()
const { stars, loadStars } = useGitHubStars()
const count = computed(() =>
  stars.value === null
    ? ''
    : new Intl.NumberFormat(lang.value, {
        notation: 'compact',
        maximumFractionDigits: 1,
      }).format(stars.value),
)
const label = computed(() =>
  stars.value === null
    ? 'GitHub'
    : `GitHub · ${new Intl.NumberFormat(lang.value).format(stars.value)} ★`,
)
onMounted(loadStars)
</script>

<template>
  <a
    class="header-github"
    :class="{ 'header-github-screen': screen }"
    href="https://github.com/revolist/revogrid"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    :title="label"
  >
    <svg class="header-github-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .7a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.29-5.28-1.29-5.28-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.12c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.4-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
      />
    </svg>
    <span v-if="count" class="header-github-count" aria-hidden="true">
      {{ count }} <span>★</span>
    </span>
  </a>
</template>

<style scoped>
.header-github {
  display: none;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  margin-left: 16px;
  color: var(--vp-c-text-2);
  border-radius: 6px;
  transition: color 0.2s;
}

.header-github-icon {
  width: 20px;
  height: 20px;
}

.header-github-count {
  font-size: 12px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.header-github-count span {
  font-size: 11px;
}

.header-github:hover {
  color: var(--vp-c-text-1);
}

.header-github:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
}

.header-github-screen {
  display: flex;
  width: max-content;
  margin: 16px auto 0;
}

@media (min-width: 768px) {
  .header-github {
    display: flex;
  }
}
</style>
