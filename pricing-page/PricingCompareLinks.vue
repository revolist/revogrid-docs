<template>
  <section class="compare-links-section" aria-labelledby="comparison-guides-heading">
    <div class="pricing-container">
      <div class="compare-links">
        <div class="compare-copy">
          <h2 id="comparison-guides-heading">{{ compareLinks.heading }}</h2>
          <p>{{ compareLinks.description }}</p>
        </div>
        <div class="compare-actions">
          <a
            v-for="link in compareLinks.items"
            :key="link.href"
            class="rg-btn rg-btn-secondary"
            :href="linkOf(link.href)"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
          >
            {{ link.label }}
            <VPImage class="action-icon" :image="{ src: 'arrow-right.svg' }" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import VPImage from '../.vitepress/theme/VPImage.vue'
import { usePricingLinks } from './home-design/pricingDesignUtils'
import type { PricingCompareLinksData } from './types'

defineProps<{
  compareLinks: PricingCompareLinksData
}>()

const { linkOf } = usePricingLinks()
</script>

<style lang="scss" scoped>
.compare-links-section {
  padding: 28px 0 64px;
  background: var(--rg-bg-2);
}

.compare-links {
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 22%, var(--rg-border));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 28px;
  background: color-mix(in srgb, var(--vp-c-brand-soft) 42%, var(--rg-bg));
}

.compare-copy {
  h2 {
    color: var(--rg-text);
    font-size: 19px;
    line-height: 1.3;
    margin: 0 0 6px;
  }

  p {
    color: var(--rg-text-2);
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
    max-width: 650px;
  }
}

.compare-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;

  .rg-btn {
    white-space: nowrap;
  }
}

:deep(.action-icon) {
  width: 12px;
  height: 12px;
  margin-left: 8px;
}

@media (max-width: 760px) {
  .compare-links-section {
    padding-bottom: 56px;
  }

  .compare-links {
    align-items: flex-start;
    flex-direction: column;
    padding: 22px;
  }

  .compare-actions,
  .compare-actions .rg-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
