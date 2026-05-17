<template>
  <section :id="sectionId" class="pro-advanced-callout">
    <div class="container">
      <div class="callout-inner">
        <div>
          <div class="callout-eyebrow">Included in RevoGrid Pro Advanced</div>
          <h2 class="callout-title">{{ title }}</h2>
          <p class="callout-desc">
            One Pro Advanced license gives your team Pivot Tables, Gantt charts,
            the full Plugin API, typed source access, and direct engineering
            support. No per-feature upsell.
          </p>
          <div class="callout-actions">
            <ProDocButton :href="proAdvancedLink" @click="handleStripeClientReferenceClick">See Pro Advanced pricing</ProDocButton>
            <ProDocButton href="/pro/" variant="secondary">Explore Pro bundle</ProDocButton>
          </div>
        </div>
        <div class="callout-price" aria-label="Pro Advanced price">
          <div class="callout-from">Pro Advanced from</div>
          <div class="amount-row">
            <span class="currency">$</span>
            <span class="amount">{{ proAdvancedUsdYear }}</span>
          </div>
          <div class="per">/developer/year</div>
          <div class="included-list">
            <div v-for="item in INCLUDED" :key="item" class="included-item">
              <span>+</span>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PRICES } from '../pricing-page/prices'
import { handleStripeClientReferenceClick } from '../pricing-page/stripeClientReference'
import ProDocButton from './ProDocButton.vue'

defineProps<{
  title: string
  sectionId?: string
}>()

const proAdvancedUsdYear = PRICES.advanced.year.USD
const proAdvancedLink = PRICES.advanced.link

const INCLUDED = [
  'Pivot Tables',
  'Gantt and dependencies',
  'Plugin API',
  'Typed source access',
  'Engineering support',
]
</script>

<style lang="scss" scoped>
.pro-advanced-callout {
  --callout-accent: var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
  --callout-blue: var(--pro-doc-accent-2, var(--gantt-accent-2, #2563eb));
  --callout-accent-border: color-mix(in srgb, var(--callout-accent) 24%, transparent);
  padding: 88px 0;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.callout-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 48px;
  align-items: center;
  padding: 50px 60px;
  border: 1px solid var(--callout-accent-border);
  border-radius: 16px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--callout-accent) 7%, transparent), color-mix(in srgb, var(--callout-blue) 4%, transparent));

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 38px 30px;
  }
}

.callout-eyebrow {
  color: var(--callout-accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.callout-title {
  max-width: 620px;
  margin: 12px 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 750;
  letter-spacing: -0.8px;
  line-height: 1.12;
}

.callout-desc {
  max-width: 560px;
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.7;
}

.callout-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-top: 24px;
}

.callout-price {
  min-width: 190px;
  color: var(--vp-c-text-2);

  @media (max-width: 820px) {
    min-width: 0;
  }
}

.callout-from,
.per {
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}

.amount-row {
  display: flex;
  align-items: flex-start;
  gap: 2px;
  margin-top: 4px;
}

.currency {
  margin-top: 8px;
  color: var(--vp-c-text-2);
  font-size: 22px;
  font-weight: 650;
}

.amount {
  color: var(--vp-c-text-1);
  font-size: 46px;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1;
}

.included-list {
  display: grid;
  gap: 6px;
  margin-top: 18px;
}

.included-item {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--vp-c-text-2);
  font-size: 13px;

  span:first-child {
    color: var(--callout-accent);
    font-weight: 800;
  }
}
</style>
