<template>
  <section class="cards-section">
    <div class="pricing-container">
      <ProPricingCards include-enterprise variant="pricing" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProPricingCards from './ProPricingCards.vue'
</script>

<style lang="scss" scoped>
.cards-section {
  padding-bottom: 80px;
}
</style>
