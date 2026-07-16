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
      <p v-if="section?.note" class="rg-pricing-note">{{ section.note }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
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
    const price = resolvePlanPrice('light', props.at)
    return {
      ...card,
      badge: price.promotion?.badge,
      price: `$${price.year}`,
      compareAtPrice: price.compareAtYear ? `$${price.compareAtYear}` : undefined,
      discountLabel: price.promotion?.discountLabel,
      period: '/ year',
      sub: '',
      billingNote: '1 developer seat · 1 app usage',
      link: price.link,
    }
  }

  if (card.id === 'advanced') {
    const price = resolvePlanPrice('advanced', props.at)
    return {
      ...card,
      price: `$${price.year}`,
      period: '/ year',
      sub: '',
      billingNote: '1 developer seat · Unlimited production usage',
      link: price.link,
    }
  }

  return {
    ...card,
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
  color: var(--rg-text-2);
  font-size: 12px;
  line-height: 1.45;
  text-align: center;
  margin: 22px auto 0;
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
}
</style>
