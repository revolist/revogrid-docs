<template>
  <div class="rg-pricing-card" :class="{ featured: card.featured }">
    <span v-if="card.badge" class="rg-featured-tag">{{ card.badge }}</span>
    <h3>{{ card.name }}</h3>
    <p class="rg-plan-desc">{{ card.description }}</p>
    <div class="rg-price">
      <span>{{ card.price }}</span>
      <small>{{ card.period }}</small>
    </div>
    <p class="rg-price-sub">{{ card.sub }}</p>
    <div class="rg-plan-divider"></div>
    <ul>
      <li v-for="feature in card.features" :key="feature">{{ feature }}</li>
      <li v-for="feature in card.dim" :key="feature" class="dim">{{ feature }}</li>
    </ul>
    <a
      class="rg-plan-btn"
      :class="card.featured ? 'primary' : 'secondary'"
      :href="linkOf(card.link)"
      :target="targetOf(card.link)"
      :rel="relOf(card.link)"
    >
      {{ card.action }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  card: HomeV2Record
}>()

const { linkOf, targetOf, relOf } = useHomeV2Links()
</script>
