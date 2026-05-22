<template>
  <section class="revo-band">
    <div class="revo-inner">
      <div>
        <div class="section-label">Powered by</div>
        <h2>Pivot is a plugin.<br /><span>RevoGrid</span> is the grid.</h2>
        <p>This pivot functionality is one of several advanced plugins in RevoGrid Pro. The grid handles virtual rendering, column types, editors, event model, and framework adapters. Pivot extends it - doesn't replace it.</p>
        <div class="revo-list">
          <span v-for="item in REVO_FEATURES" :key="item">{{ item }}</span>
        </div>
        <div class="hero-actions">
          <a :href="revoGridBaseUrl" class="rg-btn" target="_blank" rel="noopener">Explore RevoGrid -></a>
          <a :href="pivotDocsUrl" class="rg-btn rg-btn-secondary" target="_blank" rel="noopener">Read docs</a>
        </div>
      </div>
      <div class="revo-stats">
        <div><strong>5+</strong><span>Framework adapters</span></div>
        <div><strong>1M+</strong><span>Rows rendered virtually</span></div>
        <div><strong>MIT</strong><span>Open-source core</span></div>
        <div><strong>Pro</strong><span>Pivot via plugin</span></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PIVOT_DOCS_URL, REVO_FEATURES, RV_GRID_BASE_URL } from './pivotLandingData'

const revoGridBaseUrl = `${RV_GRID_BASE_URL}/`
const pivotDocsUrl = PIVOT_DOCS_URL
</script>
