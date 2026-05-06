<template>
  <section class="final-cta">
    <div class="section-label centered">Get started</div>
    <h2>Use Pivot Grid with <span>RevoGrid</span></h2>
    <p>Pivot is in RevoGrid Pro. The MIT open-source core includes grouping, sorting, and virtual rendering. Start free - upgrade when you need pivot.</p>
    <div class="cta-actions">
      <a :href="revoGridProPricesUrl" class="btn primary large" target="_blank" rel="noopener">Get full access in RevoGrid Pro -></a>
      <a :href="pivotDocsUrl" class="btn secondary large" target="_blank" rel="noopener">Read the docs</a>
    </div>
    <div class="cta-sub">RevoGrid core is MIT licensed · Pro plugin requires a commercial seat license</div>
  </section>
</template>

<script lang="ts" setup>
import { PIVOT_DOCS_URL, RV_GRID_BASE_URL } from './pivotLandingData'

const revoGridProPricesUrl = `${RV_GRID_BASE_URL}/pro/prices`
const pivotDocsUrl = PIVOT_DOCS_URL
</script>
