<template>
  <article class="rg-pricing-card" :class="{ featured: card.featured }">
    <span v-if="card.badge" class="rg-featured-tag">{{ card.badge }}</span>
    <div class="rg-plan-head">
      <h2>{{ card.name }}</h2>
      <p class="rg-plan-desc">{{ card.description }}</p>
      <div class="rg-price">
        <span>{{ card.price }}</span>
        <del v-if="card.compareAtPrice">{{ card.compareAtPrice }}</del>
        <em v-if="card.discountLabel">{{ card.discountLabel }}</em>
        <small>{{ card.period }}</small>
      </div>
      <p v-if="card.sub" class="rg-price-sub">{{ card.sub }}</p>
      <div v-if="card.billingNote" class="rg-billing-note">
        <span>{{ card.billingNote }}</span>
      </div>
    </div>
    <div class="rg-plan-divider"></div>
    <ul>
      <li v-for="feature in card.features" :key="featureKey(feature)">
        <VPImage class="rg-feature-check" :image="{ src: 'check.svg' }" aria-hidden="true" />
        <a
          v-if="featureHref(feature)"
          :href="linkOf(featureHref(feature))"
          :target="targetOf(featureHref(feature))"
          :rel="relOf(featureHref(feature))"
        >
          {{ featureText(feature) }}
        </a>
        <span v-else>{{ featureText(feature) }}</span>
      </li>
    </ul>
    <a
      v-if="isPurchasable"
      class="rg-btn"
      :class="{ 'rg-btn-secondary': !card.featured }"
      :href="linkOf(card.link)"
      :target="targetOf(card.link)"
      :rel="relOf(card.link)"
      @click="handleStripeClientReferenceClick"
    >
      {{ card.action }}
    </a>
    <button
      v-else
      class="rg-btn rg-btn-secondary"
      type="button"
      @click="emit('contact-sales')"
    >
      {{ card.action }}
    </button>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import VPImage from '../../.vitepress/theme/VPImage.vue'
import { handleStripeClientReferenceClick } from '../stripeClientReference'
import type { PricingFeatureEntry, ResolvedPricingCardData } from '../types'
import { usePricingLinks } from './pricingDesignUtils'

const props = defineProps<{
  card: ResolvedPricingCardData
}>()

const emit = defineEmits<{
  (event: 'contact-sales'): void
}>()

const { linkOf, targetOf, relOf } = usePricingLinks()
const isPurchasable = computed(() => props.card.id === 'light' || props.card.id === 'advanced')

const featureText = (feature: PricingFeatureEntry) => typeof feature === 'string' ? feature : feature.text
const featureHref = (feature: PricingFeatureEntry) => typeof feature === 'string' ? undefined : feature.link
const featureKey = (feature: PricingFeatureEntry) => `${featureText(feature)}:${featureHref(feature) ?? ''}`

</script>

<style lang="scss" scoped>
.rg-pricing-card {
  min-width: 0;
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  padding: 28px 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--rg-bg);

  &:hover {
    border-color: var(--rg-border-hover);
  }

  &.featured {
    border-color: var(--rg-font-green);
    background: color-mix(in srgb, var(--rg-font-green) 1%, var(--rg-bg-2));
  }

  h2 {
    color: var(--rg-text);
    margin: 0 0 5px;
    font-size: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: var(--rg-text-2);
    font-size: 13px;
    line-height: 1.45;
    margin: 8px 0;

    a {
      color: inherit;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;

      &:hover {
        color: var(--rg-text);
      }
    }
  }
}

:deep(.rg-feature-check) {
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  margin-top: 3px;
  color: var(--rg-font-green);
}

.rg-plan-head {
  min-height: 166px;
}

.rg-featured-tag {
  position: absolute;
  z-index: 1;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  max-width: calc(100% - 32px);
  white-space: normal;
  overflow-wrap: anywhere;
  background: var(--rg-font-green);
  color: #fff;
  border-radius: 999px;
  padding: 5px 12px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
}

.rg-plan-desc,
.rg-price-sub {
  color: var(--rg-text-2);
  font-size: 12px;
  line-height: 1.45;
}

.rg-plan-desc {
  margin: 0;
}

.rg-price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 18px;

  span {
    color: var(--rg-text);
    font-size: 32px;
    font-weight: 600;
  }

  small {
    color: var(--rg-text-2);
  }

  del {
    color: var(--rg-text-3);
    font-size: 16px;
    font-weight: 600;
    text-decoration-thickness: 2px;
  }

  em {
    color: var(--rg-font-green);
    border: 1px solid color-mix(in srgb, var(--rg-font-green) 28%, transparent);
    border-radius: 999px;
    padding: 2px 7px;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
  }
}

.rg-billing-note {
  margin-top: 6px;

  span {
    color: var(--rg-text-2);
    font-size: 12px;
    line-height: 1.35;
  }
}

.rg-plan-divider {
  height: 1px;
  background: var(--rg-border);
  margin: 16px 0;
}

.rg-pricing-card > .rg-btn {
  margin-top: auto;
  width: 100%;
}

@media (max-width: 1023px) {
  .rg-plan-head {
    min-height: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .rg-pricing-card {
    transition: none;
  }
}
</style>
