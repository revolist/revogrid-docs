<template>
  <section class="pricing-hero">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="pricing-container">
      <div class="eyebrow fade-up">{{ hero.eyebrow }}</div>
      <h1 class="hero-title fade-up-2">
        {{ hero.title }}<br /><em>{{ hero.titleEmphasis }}</em>
      </h1>
      <p class="hero-sub fade-up-3">{{ hero.subtitle }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PricingHeroData } from './types'

defineProps<{
  hero: PricingHeroData
}>()
</script>

<style lang="scss" scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-up { animation: fadeUp 0.55s ease both; }
.fade-up-2 { animation: fadeUp 0.55s 0.08s ease both; }
.fade-up-3 { animation: fadeUp 0.55s 0.16s ease both; }

.pricing-hero {
  padding: 96px 0 56px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 360px;
  background: radial-gradient(ellipse, var(--vp-c-brand-soft) 0%, transparent 70%);
  pointer-events: none;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
  font-size: 11px;
  font-weight: 500;
  font-family: var(--vp-font-family-mono);
  padding: 4px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(36px, 5vw, 58px);
  letter-spacing: -2px;
  line-height: 1.06;
  color: var(--vp-c-text-1);
  margin-bottom: 18px;

  em {
    font-style: normal;
    background: linear-gradient(90deg, var(--vp-c-brand-3), var(--vp-c-brand-1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.hero-sub {
  font-size: 17px;
  color: var(--vp-c-text-2);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}
</style>
