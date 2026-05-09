<template>
  <section class="rg-stats">
    <div class="rg-container rg-stats-inner">
      <template v-for="(stat, index) in stats" :key="stat.label">
        <a v-if="stat.link" class="rg-stat" :href="stat.link" target="_blank" rel="noopener">
          <span class="rg-stat-num">{{ stat.num }}</span>
          <span class="rg-stat-label">{{ stat.label }}</span>
        </a>
        <div v-else class="rg-stat">
          <span class="rg-stat-num">{{ stat.num }}</span>
          <span class="rg-stat-label">{{ stat.label }}</span>
        </div>
        <span v-if="index < stats.length - 1" class="rg-stat-divider" aria-hidden="true"></span>
      </template>
      <p class="rg-trust-copy">{{ trustText }}</p>
    </div>
  </section>

  <section class="rg-trust">
    <div class="rg-container rg-badges">
      <span v-for="badge in badges" :key="badge" class="rg-trust-badge">
        <span aria-hidden="true">✓</span>
        {{ badge }}
      </span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { HomeV2Record } from './homeV2Utils'

withDefaults(defineProps<{
  stats?: HomeV2Record[]
  trustText?: string
  badges?: string[]
}>(), {
  stats: () => [],
  trustText: '',
  badges: () => [],
})
</script>
