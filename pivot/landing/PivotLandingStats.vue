<template>
  <section class="stats-bar">
    <div class="stats-inner">
      <div v-for="stat in STATS" :key="stat.label" class="stat-cell">
        <div class="stat-num" v-html="stat.value"></div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
    <div class="stat-tag">
      Used by engineering teams at <strong>Fortune 500 companies</strong> in automotive, pharma, finance, and enterprise software
    </div>
  </section>
</template>

<script lang="ts" setup>
import { STATS } from './pivotLandingData'
</script>
