<template>
  <section class="cards-section">
    <div class="pricing-container">
      <ProPricingCards include-enterprise variant="pricing" />

      <div class="oss-card">
        <div class="oss-left">
          <div class="oss-badge">Free forever</div>
          <div class="oss-title">Open Source</div>
          <div class="oss-desc">
            MIT-licensed. Free for individuals, teams, and commercial use. No credit card required.
          </div>
          <div class="oss-ctas">
            <a href="https://github.com/revolist/revogrid" class="oss-cta-btn" target="_blank" rel="noopener">Get started free</a>
          </div>
        </div>
        <div class="oss-features">
          <div v-for="feature in FREE_FEATURES" :key="feature" class="oss-feature">
            <span class="oss-check">✓</span>
            <span>{{ feature }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ProPricingCards from './ProPricingCards.vue'
import { FREE_FEATURES } from '../proPricingPlans'
</script>

<style lang="scss" scoped>
.cards-section {
  padding-bottom: 80px;
}

.oss-card {
  background: linear-gradient(135deg, color-mix(in srgb, var(--green) 5%, transparent), var(--vp-c-bg-soft));
  border: 1px solid color-mix(in srgb, var(--green) 25%, transparent);
  border-radius: 14px;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 28px;
    padding: 28px 24px;
  }
}

.oss-left {
  flex-shrink: 0;
}

.oss-badge {
  display: inline-flex;
  align-items: center;
  background: color-mix(in srgb, var(--green) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--green) 30%, transparent);
  color: var(--green);
  font-size: 11px;
  font-weight: 700;
  font-family: var(--vp-font-family-mono);
  padding: 3px 10px;
  border-radius: 100px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.oss-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  letter-spacing: -0.5px;
  margin-bottom: 8px;
}

.oss-desc {
  font-size: 14px;
  line-height: 1.6;
  max-width: 320px;
}

.oss-ctas {
  margin-top: 20px;
}

.oss-cta-btn {
  background: none;
  border: 1px solid color-mix(in srgb, var(--green) 40%, transparent);
  padding: 10px 22px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;

  &:hover {
    background: color-mix(in srgb, var(--green) 8%, transparent);
    transform: translateY(-1px);
  }
}

.oss-features {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.oss-feature {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
}

.oss-check {
  color: var(--green);
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;
}
</style>
