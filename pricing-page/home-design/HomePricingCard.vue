<template>
  <div class="rg-pricing-card" :class="{ featured: card.featured }">
    <span v-if="card.badge" class="rg-featured-tag">{{ card.badge }}</span>
    <div class="rg-plan-head">
      <h3>{{ card.name }}</h3>
      <p class="rg-plan-desc">{{ card.description }}</p>
      <div class="rg-price">
        <span>{{ card.price }}</span>
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
        <a
          v-if="featureHref(feature)"
          :href="linkOf(featureHref(feature))"
          :target="targetOf(featureHref(feature))"
          :rel="relOf(featureHref(feature))"
        >
          {{ featureText(feature) }}
        </a>
        <template v-else>{{ featureText(feature) }}</template>
      </li>
      <li v-for="feature in card.dim" :key="feature" class="dim">{{ feature }}</li>
    </ul>
    <a
      class="rg-btn"
      :class="{ 'rg-btn-secondary': !card.featured }"
      :href="linkOf(card.link)"
      :target="targetOf(card.link)"
      :rel="relOf(card.link)"
      @click="handlePlanClick"
    >
      {{ card.action }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { type PricingRecord, usePricingLinks } from './pricingDesignUtils'
import { handleStripeClientReferenceClick } from '../stripeClientReference'

const props = defineProps<{
  card: PricingRecord
}>()

const emit = defineEmits<{
  (event: 'contact-sales'): void
}>()

const { linkOf, targetOf, relOf } = usePricingLinks()

const featureText = (feature: string | PricingRecord) => typeof feature === 'string' ? feature : feature.text
const featureHref = (feature: string | PricingRecord) => typeof feature === 'string' ? undefined : feature.link
const featureKey = (feature: string | PricingRecord) => `${featureText(feature)}:${featureHref(feature) ?? ''}`

const handleCtaClick = (event: MouseEvent) => {
  if (props.card.id !== 'enterprise') return

  event.preventDefault()
  emit('contact-sales')
}

const handlePlanClick = (event: MouseEvent) => {
  handleCtaClick(event)
  handleStripeClientReferenceClick(event)
}
</script>

<style lang="scss" scoped>
.rg-pricing-card {
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  background: var(--rg-bg-2);
  padding: 28px 24px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--rg-border-hover);
  }

  &.featured {
    border-color: var(--rg-font-green);
    background: color-mix(in srgb, var(--rg-font-green) 4%, var(--rg-bg-2));
  }

  h3 {
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
    color: var(--rg-text-2);
    font-size: 13px;
    line-height: 1.45;
    margin: 7px 0;

    a {
      color: inherit;
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 3px;

      &:hover {
        color: var(--rg-text);
      }
    }

    &::before {
      content: '✓';
      color: var(--rg-font-green);
      font-weight: 600;
      margin-right: 8px;
    }

    &.dim {
      color: var(--rg-text-3);

      &::before {
        content: '-';
        color: var(--rg-text-3);
      }
    }
  }
}

.rg-plan-head {
  min-height: 144px;
}

@media (max-width: 640px) {
  .rg-plan-head {
    min-height: 0;
  }
}

.rg-featured-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background: var(--rg-font-green);
  color: #fff;
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 11px;
  font-weight: 600;
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
}

.rg-billing-note {
  margin-top: 6px;

  span {
    color: var(--rg-text-2);
    font-size: 12px;
    font-weight: 400;
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
</style>
