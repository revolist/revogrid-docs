<template>
  <section id="pricing" class="rg-section pricing-plans-section" aria-labelledby="pricing-page-title">
    <div class="rg-container">
      <PricingSectionHeader
        :section="section"
        heading-level="h1"
        heading-id="pricing-page-title"
      />
      <div class="rg-pricing-grid">
        <HomePricingCard
          v-for="card in pricingCards"
          :key="card.id"
          :card="card"
          @contact-sales="$emit('contact-sales')"
        />
      </div>
      <p v-if="section?.note" class="rg-pricing-note">
        <span class="rg-pricing-note-icon" aria-hidden="true">
          <FontAwesomeSvgIcon class="rg-pricing-note-shield" name="shield" />
          <FontAwesomeSvgIcon class="rg-pricing-note-check" name="check" />
        </span>
        <span>{{ section.note }}</span>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { getPlan } from '../../commercial/productCatalog'
import FontAwesomeSvgIcon from '../../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import { resolvePlanPrice, type PriceTimestamp } from '../prices'
import type { PricingCardData, PricingSectionData, ResolvedPricingCardData } from '../types'
import HomePricingCard from './HomePricingCard.vue'
import PricingSectionHeader from './PricingSectionHeader.vue'

const props = defineProps<{
  section?: PricingSectionData
  at?: PriceTimestamp
}>()

defineEmits<{
  (event: 'contact-sales'): void
}>()

const resolveCard = (card: PricingCardData): ResolvedPricingCardData => {
  if (card.id === 'light') {
    const plan = getPlan('pro-lite')
    const price = resolvePlanPrice('light', props.at)
    return {
      ...card,
      name: plan.name,
      action: plan.actionLabel,
      features: [...plan.pricingHighlights],
      badge: undefined,
      price: `$${price.year}`,
      compareAtPrice: price.compareAtYear ? `$${price.compareAtYear}` : undefined,
      discountLabel: price.promotion?.discountLabel,
      period: '/ year',
      sub: '',
      billingNote: plan.billingSummary,
      link: price.link,
    }
  }

  if (card.id === 'advanced') {
    const plan = getPlan('pro-advanced')
    const price = resolvePlanPrice('advanced', props.at)
    return {
      ...card,
      name: plan.name,
      action: plan.actionLabel,
      features: [...plan.pricingHighlights],
      price: `$${price.year}`,
      compareAtPrice: price.compareAtYear ? `$${price.compareAtYear}` : undefined,
      discountLabel: price.promotion?.discountLabel,
      period: '/ year',
      sub: '',
      billingNote: plan.billingSummary,
      link: price.link,
    }
  }

  const plan = getPlan('enterprise')
  return {
    ...card,
    name: plan.name,
    action: plan.actionLabel,
    features: [...plan.pricingHighlights],
    price: 'Custom',
    billingNote: plan.billingSummary,
    link: '#contact-sales',
  }
}

const pricingCards = computed<ResolvedPricingCardData[]>(() =>
  (props.section?.cards ?? []).map(resolveCard),
)
</script>

<style lang="scss" scoped>
.pricing-plans-section {
  padding-top: 64px;
}

:deep(.rg-section-title) {
  max-width: 780px;
  margin-right: auto;
  margin-left: auto;
}

.rg-pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
}

.rg-pricing-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--rg-text-2);
  font-size: 14px;
  line-height: 1.5;
  margin: 24px auto 0;
}

.rg-pricing-note-icon {
  position: relative;
  display: inline-flex;
  flex: 0 0 19.2px;
  width: 19.2px;
  height: 22.4px;
  color: var(--rg-font-green);
}

:deep(.rg-pricing-note-shield) {
  width: 19.2px;
  height: 22.4px;
}

:deep(.rg-pricing-note-shield svg) {
  fill: none;
  stroke: currentColor;
  stroke-width: 24px;
  stroke-linejoin: round;
}

:deep(.rg-pricing-note-check) {
  position: absolute;
  top: 7.2px;
  left: 5.6px;
  width: 8px;
  height: 8px;
}

:deep(.rg-pricing-note-check svg) {
  fill: currentColor;
}

@media (max-width: 1023px) {
  .rg-pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 720px) and (max-width: 1023px) {
  .rg-pricing-grid > :nth-child(3) {
    grid-column: 1 / -1;
  }
}

@media (max-width: 719px) {
  .pricing-plans-section {
    padding-top: 52px;
  }

  .rg-pricing-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  .rg-pricing-note {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
