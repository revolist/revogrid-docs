<template>
  <section class="stats-bar">
    <div class="stats-inner">
      <div v-for="stat in STATS" :key="stat.label" class="stat-cell">
        <div class="stat-num" v-html="stat.value"></div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
    <TrustedLogoStrip title-id="trusted-strip-title" variant="pivot" />
  </section>
</template>

<script lang="ts" setup>
import TrustedLogoStrip from '../../.vitepress/theme/TrustedLogoStrip.vue'
import { STATS } from './pivotLandingData'
</script>
