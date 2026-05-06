<template>
  <section id="top" class="hero">
    <div class="hero-left">
      <div class="eyebrow"><span></span>RevoGrid Pro · Pivot Plugin</div>
      <h1>Build <span>data-heavy</span><br />pivot tables -<br /><em>not just tables.</em></h1>
      <p>
        Client-side pivoting, aggregation, and grouping -
        <strong>powered by RevoGrid</strong>. No backend. Works with hundreds
        of thousands of rows.
      </p>
      <div class="hero-actions">
        <a href="#demo" class="btn primary">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.5" />
            <path d="M5.5 4.5L9.5 7L5.5 9.5V4.5Z" fill="currentColor" />
          </svg>
          View Live Demo
        </a>
        <a href="/" class="btn secondary">Use with RevoGrid -></a>
      </div>
      <div class="frameworks">
        <span class="fw-label">Works with</span>
        <span v-for="fw in FRAMEWORKS" :key="fw.name" class="fw-pill">
          <span :style="{ background: fw.color }"></span>{{ fw.name }}
        </span>
      </div>
    </div>

    <div class="hero-visual">
      <PivotMockWindow :theme="theme" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { FRAMEWORKS } from './pivotLandingData'
import PivotMockWindow from './PivotMockWindow.vue'

defineProps<{
  theme: 'light' | 'dark'
}>()
</script>
