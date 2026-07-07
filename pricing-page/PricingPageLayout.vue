<template>
  <div class="pricing-page">
    <div v-if="pricingPromo" class="pricing-promo-ribbon" role="note">
      <span class="pricing-promo-label">{{ pricingPromo.label }}</span>
      <span class="pricing-promo-copy">
        <strong>{{ pricingPromo.title }}</strong>
        <span>{{ pricingPromo.description }}</span>
      </span>
    </div>
    <HomePricing :section="frontmatter.pricing" @contact-sales="showContactForm = true" />
    <PricingFeatureComparison :heading="pricingPage.featureComparison.heading" />
    <PricingCompareLinks :compare-links="pricingPage.compareLinks" />
    <PricingFaq :faq="pricingPage.faq" />
    <PricingFinalCta :cta="pricingPage.cta" @contact-sales="showContactForm = true" />
    <ContactForm :isVisible="showContactForm" @close="showContactForm = false" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import ContactForm from '../pro/ContactForm.vue'
import PricingCompareLinks from './PricingCompareLinks.vue'
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
  compareLinks: {
    heading: 'Comparing grid vendors?',
    description: 'Review side-by-side notes for licensing, deployment, pricing, and advanced workflow support before choosing a plan.',
    items: [
      {
        label: 'Explore comparisons',
        href: '/compare/',
      },
    ],
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
    compareLinks: {
      ...defaultPricingPage.compareLinks,
      ...page?.compareLinks,
      items: page?.compareLinks?.items ?? defaultPricingPage.compareLinks.items,
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
const pricingPromo = computed(() => frontmatter.value.pricing?.promo)
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

.pricing-promo-ribbon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 14px;
  margin: 0;
  padding: 10px max(24px, calc((100vw - 1200px) / 2 + 24px));
  background: color-mix(in srgb, var(--rg-font-green) 8%, transparent);
  text-align: center;

  strong {
    color: var(--rg-text);
    font-size: 13px;
    font-weight: 700;
    line-height: 1.35;
  }
}

.pricing-promo-copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px 8px;
  color: var(--rg-text-2);
  font-size: 13px;
  line-height: 1.45;
}

.pricing-promo-label {
  flex: 0 0 auto;
  color: #fff;
  border: 1px solid var(--rg-font-green);
  border-radius: 999px;
  background: var(--rg-font-green);
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
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
