<template>
  <section class="section">
    <div class="section-label">Use Cases</div>
    <h2>Built for data-heavy <span>production apps</span></h2>
    <p class="section-copy">Pivot is a UI primitive, not a reporting add-on. It replaces heavy backend analytics infrastructure in these contexts.</p>
    <div class="use-grid">
      <article v-for="useCase in USE_CASES" :key="useCase.title" class="use-card">
        <div>{{ useCase.num }} -</div>
        <h3>{{ useCase.title }}</h3>
        <p>{{ useCase.text }}</p>
        <span>{{ useCase.tag }}</span>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { USE_CASES } from './pivotLandingData'
</script>
