<template>
  <section class="stats-bar">
    <div class="stats-inner">
      <div v-for="stat in STATS" :key="stat.label" class="stat-cell">
        <div class="stat-num" v-html="stat.value"></div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { STATS } from './pivotLandingData'
</script>
