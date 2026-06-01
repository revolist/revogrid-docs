<template>
  <div class="pricing-page">
    <HomePricing :section="frontmatter.pricing" @contact-sales="showContactForm = true" />
    <PricingFeatureComparison :heading="pricingPage.featureComparison.heading" />
    <PricingFaq :faq="pricingPage.faq" />
    <PricingFinalCta :cta="pricingPage.cta" @contact-sales="showContactForm = true" />
    <ContactForm :isVisible="showContactForm" @close="showContactForm = false" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import ContactForm from '../pro/ContactForm.vue'
import PricingFaq from './PricingFaq.vue'
import PricingFeatureComparison from './PricingFeatureComparison.vue'
import PricingFinalCta from './PricingFinalCta.vue'
import HomePricing from './home-design/HomePricing.vue'
import type { PricingPageData } from './types'

const { frontmatter } = useData()

const defaultPricingPage: PricingPageData = {
  featureComparison: {
    heading: 'Full feature comparison',
  },
  faq: {
    heading: 'Frequently asked questions',
    items: [],
  },
  cta: {
    title: 'Start free. Upgrade when',
    titleEmphasis: "you're ready.",
    subtitle: 'No credit card required for the open-source build. Pro trials available on request.',
    primary: {
      label: 'Get started free',
      href: 'https://github.com/revolist/revogrid',
      external: true,
    },
    secondary: {
      label: 'Explore Pro features',
      href: '/pro/',
    },
    footerLinks: [],
  },
}

const pricingPage = computed<PricingPageData>(() => {
  const page = frontmatter.value.pricingPage as Partial<PricingPageData> | undefined

  return {
    featureComparison: {
      ...defaultPricingPage.featureComparison,
      ...page?.featureComparison,
    },
    faq: {
      ...defaultPricingPage.faq,
      ...page?.faq,
      items: page?.faq?.items ?? defaultPricingPage.faq.items,
    },
    cta: {
      ...defaultPricingPage.cta,
      ...page?.cta,
      primary: { ...defaultPricingPage.cta.primary, ...page?.cta?.primary },
      secondary: { ...defaultPricingPage.cta.secondary, ...page?.cta?.secondary },
      footerLinks: page?.cta?.footerLinks ?? defaultPricingPage.cta.footerLinks,
    },
  }
})
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
  letter-spacing: -1px;
  margin-bottom: 48px;
  text-align: center;
}
</style>
