<template>
  <div class="pricing-page">
    <PricingHero :hero="pricingPage.hero" />
    <!-- <PricingPlansSection /> -->
    <HomePricing :section="frontmatter.pricing" />
    <PricingFeatureComparison :heading="pricingPage.featureComparison.heading" />
    <PricingFaq :faq="pricingPage.faq" />
    <PricingFinalCta :cta="pricingPage.cta" />
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import PricingFaq from './pricing-page/PricingFaq.vue'
import PricingFeatureComparison from './pricing-page/PricingFeatureComparison.vue'
import PricingFinalCta from './pricing-page/PricingFinalCta.vue'
import PricingHero from './pricing-page/PricingHero.vue'
import HomePricing from '../.vitepress/theme/home-v2/HomePricing.vue'
// import HomePricing from '../.vitepress/theme/home-v2/HomePricing.vue'
import type { PricingPageData } from './pricing-page/types'

const { frontmatter } = useData()

const pricingPage = frontmatter.value.pricingPage as PricingPageData
</script>

<style lang="scss" scoped>
.pricing-page {
  --green: oklch(0.72 0.18 155);
  --purple: oklch(0.65 0.22 290);
}

:global(.dark) .pricing-page {
  --green: oklch(0.72 0.18 155);
}

:deep(.pricing-container) {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

:deep(.pricing-section-heading) {
  color: var(--vp-c-text-1);
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 48px;
  text-align: center;
}
</style>
