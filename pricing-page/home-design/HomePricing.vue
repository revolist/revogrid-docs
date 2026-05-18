<template>
  <section id="pricing" class="rg-section rg-section-soft">
    <div class="rg-container">
      <PricingSectionHeader :section="section" />
      <div class="rg-pricing-grid">
        <HomePricingCard
          v-for="card in pricingCards"
          :key="card.id"
          :card="card"
          @contact-sales="$emit('contact-sales')"
        />
      </div>
      <p class="rg-pricing-note">{{ section?.note }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { PRICES } from '../prices'
import HomePricingCard from './HomePricingCard.vue'
import PricingSectionHeader from './PricingSectionHeader.vue'
import { type PricingRecord } from './pricingDesignUtils'

const props = defineProps<{
  section?: PricingRecord
}>()

defineEmits<{
  (event: 'contact-sales'): void
}>()

const pricingCards = computed(() => {
  const cards = props.section?.cards ?? []
  return cards.map((card: PricingRecord) => {
    if (card.id === 'light') {
      return {
        ...card,
        price: `$${PRICES.light.year.USD}`,
        period: '/ year',
        sub: '',
        billingNote: '1 developer seat · Unlimited production usage',
        link: PRICES.light.link,
      }
    }
    if (card.id === 'advanced') {
      return {
        ...card,
        price: `$${PRICES.advanced.year.USD}`,
        period: '/ year',
        sub: '',
        billingNote: '1 developer seat · Unlimited production usage',
        link: PRICES.advanced.link,
      }
    }
    return card
  })
})
</script>

<style lang="scss" scoped>
.rg-pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

@media (max-width: 1040px) {
  .rg-pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .rg-pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
