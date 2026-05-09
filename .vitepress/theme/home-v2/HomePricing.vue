<template>
  <section id="pricing" class="rg-section rg-section-soft">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-pricing-grid">
        <HomePricingCard
          v-for="card in pricingCards"
          :key="card.id"
          :card="card"
        />
      </div>
      <p class="rg-pricing-note">{{ section?.note }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { PRICES } from '../../../pro/prices'
import HomePricingCard from './HomePricingCard.vue'
import HomeSectionHeader from './HomeSectionHeader.vue'
import { type HomeV2Record } from './homeV2Utils'

const props = defineProps<{
  section?: HomeV2Record
}>()

const pricingCards = computed(() => {
  const cards = props.section?.cards ?? []
  return cards.map((card: HomeV2Record) => {
    if (card.id === 'light') {
      return {
        ...card,
        price: `$${PRICES.light.year.USD}`,
        period: '/dev/yr',
        sub: 'per developer',
        link: PRICES.light.link,
      }
    }
    if (card.id === 'advanced') {
      return {
        ...card,
        price: `$${PRICES.advanced.year.USD}`,
        period: '/dev/yr',
        sub: 'per developer',
        link: PRICES.advanced.link,
      }
    }
    return card
  })
})
</script>
