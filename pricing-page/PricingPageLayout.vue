<template>
  <div class="pricing-page">
    <PricingHero :hero="pricingPage.hero" />
    <HomePricing :section="frontmatter.pricing" @contact-sales="showContactForm = true" />
    <PricingFeatureComparison :heading="pricingPage.featureComparison.heading" />
    <PricingFaq :faq="pricingPage.faq" />
    <PricingFinalCta :cta="pricingPage.cta" @contact-sales="showContactForm = true" />
    <ContactForm :isVisible="showContactForm" @close="showContactForm = false" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import ContactForm from '../pro/ContactForm.vue'
import PricingFaq from './PricingFaq.vue'
import PricingFeatureComparison from './PricingFeatureComparison.vue'
import PricingFinalCta from './PricingFinalCta.vue'
import PricingHero from './PricingHero.vue'
import HomePricing from './home-design/HomePricing.vue'
import type { PricingPageData } from './types'

const { frontmatter } = useData()

const pricingPage = frontmatter.value.pricingPage as PricingPageData
const showContactForm = ref(false)
</script>

<style lang="scss" scoped>
.pricing-page {
  --green: var(--vp-c-brand-3);
  --purple: oklch(0.65 0.22 290);
}

:global(.dark) .pricing-page {
  --green: var(--vp-c-brand-3);
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
