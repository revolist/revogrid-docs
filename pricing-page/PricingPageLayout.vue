<template>
  <div class="pricing-page">
    <div v-if="pricingPromo" class="pricing-promo-ribbon" role="note">
      <span class="pricing-promo-label">{{ pricingPromo.label }}</span>
      <span class="pricing-promo-copy">
        <strong>{{ pricingPromo.title }}</strong>
        <span>{{ pricingPromo.description }}</span>
      </span>
    </div>

    <HomePricing
      :section="pricingSection"
      :at="pricingClock"
      @contact-sales="showContactForm = true"
    />
    <PricingFeatureComparison
      :differences="pricingPage.keyDifferences"
      @tailored-package="showTailoredPackageForm = true"
    />
    <PricingEvaluation :evaluation="pricingPage.evaluation" />
    <PricingFaq :faq="faq" />
    <PricingCompareLinks :compare-links="pricingPage.compareLinks" />
    <ContactForm :is-visible="showContactForm" @close="showContactForm = false" />
    <PricingTailoredPackageForm
      :is-visible="showTailoredPackageForm"
      @close="showTailoredPackageForm = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { getPricingDifferenceRows, getPricingEvaluationFacts } from '../commercial/productCatalog'
import ContactForm from '../pro/ContactForm.vue'
import PricingCompareLinks from './PricingCompareLinks.vue'
import PricingEvaluation from './PricingEvaluation.vue'
import PricingFaq from './PricingFaq.vue'
import PricingFeatureComparison from './PricingFeatureComparison.vue'
import PricingTailoredPackageForm from './PricingTailoredPackageForm.vue'
import HomePricing from './home-design/HomePricing.vue'
import { resolvePlanPrice, SUMMER_SALE_CUTOFF } from './prices'
import type { PricingFaqData, PricingPageData, PricingSectionData } from './types'

const { frontmatter } = useData()
const pricingClock = ref(new Date())
const showContactForm = ref(false)
const showTailoredPackageForm = ref(false)
let promotionTimer: ReturnType<typeof setTimeout> | undefined

const pricingPage = computed(() => {
  const page = frontmatter.value.pricingPage as PricingPageData
  const evaluationFacts = getPricingEvaluationFacts()
  return {
    ...page,
    keyDifferences: {
      ...page.keyDifferences,
      rows: getPricingDifferenceRows(),
    },
    evaluation: {
      ...page.evaluation,
      options: evaluationFacts.options,
    },
  }
})
const pricingSection = computed(() => frontmatter.value.pricing as PricingSectionData)
const faq = computed(() => frontmatter.value.faq as PricingFaqData)
const pricingPromo = computed(() => resolvePlanPrice('light', pricingClock.value).promotion)

const schedulePromotionRefresh = () => {
  if (promotionTimer) clearTimeout(promotionTimer)

  const remaining = new Date(SUMMER_SALE_CUTOFF).getTime() - Date.now()
  if (remaining <= 0) {
    pricingClock.value = new Date()
    return
  }

  promotionTimer = setTimeout(() => {
    pricingClock.value = new Date()
    schedulePromotionRefresh()
  }, Math.min(remaining + 100, 2_147_483_647))
}

onMounted(schedulePromotionRefresh)
onBeforeUnmount(() => {
  if (promotionTimer) clearTimeout(promotionTimer)
})
</script>

<style lang="scss" scoped>
.pricing-page {
  --green: var(--vp-c-brand-3);
  --purple: oklch(0.65 0.22 290);
  overflow-x: clip;
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
  width: min(1100px, calc(100% - 48px));
  margin: 0 auto;
}

:deep(.pricing-section-heading) {
  color: var(--rg-text);
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0 0 34px;
  text-align: center;
}

:global(body:has(.pricing-page) .VPFooter hr) {
  width: 100vw;
  max-width: 100vw;
  margin-right: calc((100% - 100vw) / 2);
  margin-left: calc((100% - 100vw) / 2);
  box-sizing: border-box;
}

@media (max-width: 520px) {
  .pricing-promo-ribbon {
    padding-right: 18px;
    padding-left: 18px;
  }

  :deep(.pricing-container) {
    width: min(100% - 32px, 1100px);
  }
}

@media (min-width: 768px) and (max-width: 800px) {
  :global(body:has(.pricing-page) .VPNavBar .content) {
    flex: 1 1 auto;
    width: auto;
    min-width: 0;
  }

  :global(body:has(.pricing-page) .VPNavBar .content-body) {
    min-width: 0;
  }

  :global(body:has(.pricing-page) .VPNavBarMenu),
  :global(body:has(.pricing-page) .VPNavBarExtra) {
    display: none;
  }

  :global(body:has(.pricing-page) .VPNavBarHamburger) {
    display: flex;
  }
}
</style>
