<template>
  <section class="guidance-section" aria-labelledby="guidance-heading">
    <div class="pricing-container">
      <div class="guidance-card">
        <div class="guidance-logo" aria-hidden="true">
          <VPImage :image="{ src: 'logo.svg' }" />
        </div>
        <div class="guidance-copy">
          <div class="guidance-eyebrow">{{ guidance.eyebrow }}</div>
          <h2 id="guidance-heading">{{ guidance.heading }}</h2>
          <p>{{ guidance.description }}</p>
        </div>
        <button class="rg-btn" type="button" @click="$emit('contact-sales')">
          {{ guidance.action }}
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import VPImage from '../.vitepress/theme/VPImage.vue'
import type { PricingGuidanceData } from './types'

defineProps<{
  guidance: PricingGuidanceData
}>()

defineEmits<{
  (event: 'contact-sales'): void
}>()
</script>

<style lang="scss" scoped>
.guidance-section {
  padding: 0 0 72px;
}

.guidance-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 22px;
  padding: 28px 30px;
  border: 1px solid color-mix(in srgb, var(--rg-font-green) 22%, var(--rg-border));
  border-radius: 14px;
  background: color-mix(in srgb, var(--rg-font-green) 3%, var(--rg-bg-2));

  .rg-btn {
    white-space: nowrap;
  }
}

.guidance-logo {
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--rg-font-green) 26%, var(--rg-border));
  border-radius: 50%;
  background: var(--rg-bg);

  :deep(svg) {
    width: 28px;
    height: 28px;
  }
}

.guidance-eyebrow {
  margin-bottom: 6px;
  color: var(--rg-font-green);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.guidance-copy {
  h2 {
    margin: 0 0 7px;
    color: var(--rg-text);
    font-size: 22px;
    line-height: 1.25;
  }

  p {
    max-width: 680px;
    margin: 0;
    color: var(--rg-text-2);
    font-size: 13px;
    line-height: 1.6;
  }
}

@media (max-width: 760px) {
  .guidance-section {
    padding-bottom: 64px;
  }

  .guidance-card {
    grid-template-columns: auto minmax(0, 1fr);
    padding: 24px;

    .rg-btn {
      grid-column: 1 / -1;
      width: 100%;
    }
  }
}
</style>
