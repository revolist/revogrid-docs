<template>
  <div :class="['pricing-grid', `pricing-grid--${variant}`, { 'with-enterprise': includeEnterprise }]">
    <div class="price-card">
      <div class="card-label subtle">Pro Light</div>
      <div class="card-name">Pro Light</div>
      <div class="card-tagline">For teams building production data apps that need advanced column types and export.</div>
      <div class="card-price-row">
        <span class="price-currency">$</span>
        <span class="price-num">{{ lightUsdYr }}</span>
        <span class="price-period">/dev/yr</span>
      </div>
      <div class="price-note">Billed annually · ~${{ Math.round(lightUsdYr / 12) }}/mo</div>
      <a :href="PRICES.light.link" class="card-cta ghost">Start Pro Light</a>
      <div class="card-divider"></div>
      <ul class="card-features">
        <li v-for="feature in PRO_LIGHT_FEATURES" :key="feature" class="card-feature">
          <span class="feat-icon check">✓</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <div class="price-card featured">
      <div class="card-label accent">Most Popular</div>
      <div class="card-name">Pro Advanced</div>
      <div class="card-tagline">For teams building complex, plugin-driven data platforms at scale.</div>
      <div class="card-price-row">
        <span class="price-currency">$</span>
        <span class="price-num">{{ advUsdYr }}</span>
        <span class="price-period">/dev/yr</span>
      </div>
      <div class="price-note">Billed annually · ~${{ Math.round(advUsdYr / 12) }}/mo</div>
      <a :href="PRICES.advanced.link" class="card-cta primary">Start Pro Advanced</a>
      <div class="card-divider"></div>
      <ul class="card-features">
        <li v-for="feature in PRO_ADV_FEATURES" :key="feature" class="card-feature">
          <span class="feat-icon check">✓</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <div v-if="includeEnterprise" class="price-card enterprise-tile">
      <div class="card-label purple">Enterprise</div>
      <div class="card-name">Enterprise</div>
      <div class="card-tagline">For large teams that need custom contracts, SLA support, and dedicated engineering.</div>
      <div class="card-price-row">
        <span class="price-num">&nbsp;</span>
      </div>
      <div class="price-note">&nbsp;</div>
      <a href="mailto:contact@revolist.eu" class="card-cta ghost-purple">Contact Sales</a>
      <div class="card-divider"></div>
      <ul class="card-features">
        <li v-for="feature in ENTERPRISE_FEATURES" :key="feature" class="card-feature">
          <span class="feat-icon ent">✓</span>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PRICES } from './prices'
import { ENTERPRISE_FEATURES, PRO_ADV_FEATURES, PRO_LIGHT_FEATURES } from './proPricingPlans'

withDefaults(defineProps<{
  includeEnterprise?: boolean
  variant?: 'pricing' | 'tiers'
}>(), {
  includeEnterprise: false,
  variant: 'tiers',
})

const lightUsdYr = PRICES.light.year.USD
const advUsdYr = PRICES.advanced.year.USD
</script>

<style lang="scss" scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;

  &.with-enterprise {
    grid-template-columns: repeat(3, 1fr);
    max-width: none;
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    &.with-enterprise {
      grid-template-columns: 1fr;
      max-width: 420px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
}

.price-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--vp-c-brand-2);
  }

  &.featured {
    border-color: var(--vp-c-brand-2);
    background: linear-gradient(145deg, var(--vp-c-brand-soft), var(--vp-c-bg-soft));
  }
}

.card-label {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  font-family: var(--vp-font-family-mono);
  padding: 3px 10px;
  border-radius: 100px;
  margin-bottom: 18px;
  width: fit-content;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  &.accent {
    background: var(--vp-c-brand-3);
    color: #fff;
  }

  &.subtle {
    background: var(--vp-c-bg-elv);
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-2);
  }

  &.purple {
    background: color-mix(in srgb, var(--purple, oklch(0.65 0.22 290)) 15%, transparent);
    border: 1px solid color-mix(in srgb, var(--purple, oklch(0.65 0.22 290)) 30%, transparent);
    color: oklch(0.75 0.18 290);
  }
}

.card-name {
  font-size: 21px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
  letter-spacing: -0.3px;
}

.card-tagline {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-bottom: 24px;
  line-height: 1.5;
}

.card-price-row {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 4px;
}

.price-currency {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  align-self: flex-start;
  margin-top: 8px;
}

.price-num {
  font-size: 46px;
  font-weight: 700;
  letter-spacing: -2px;
  color: var(--vp-c-text-1);
  line-height: 1;
}

.price-period {
  font-size: 13px;
  color: var(--vp-c-text-3);
  font-weight: 400;
}

.price-note {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-bottom: 24px;
  font-family: var(--vp-font-family-mono);
}

.card-cta {
  display: block;
  width: 100%;
  padding: 11px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--vp-font-family-base);
  transition: all 0.2s;
  text-decoration: none;
  text-align: center;
  margin-bottom: 24px;

  &.primary {
    background: var(--vp-c-brand-3);
    color: #fff;
    border: none;

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }
  }

  &.ghost {
    background: none;
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-1);

    &:hover {
      background: var(--vp-c-bg-elv);
    }
  }

  &.ghost-purple {
    background: none;
    border: 1px solid color-mix(in srgb, var(--purple, oklch(0.65 0.22 290)) 40%, transparent);

    &:hover {
      background: color-mix(in srgb, var(--purple, oklch(0.65 0.22 290)) 8%, transparent);
    }
  }
}

.card-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin-bottom: 22px;
}

.card-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.card-feature {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
}

.feat-icon {
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;

  &.check { color: var(--green); }
  &.ent { color: oklch(0.75 0.18 290); }
}

.enterprise-tile {
  border-color: color-mix(in srgb, var(--purple, oklch(0.65 0.22 290)) 30%, transparent);
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--purple, oklch(0.65 0.22 290)) 6%, transparent),
    var(--vp-c-bg-soft)
  );

  &:hover {
    border-color: color-mix(in srgb, var(--purple, oklch(0.65 0.22 290)) 50%, transparent);
  }
}
</style>
