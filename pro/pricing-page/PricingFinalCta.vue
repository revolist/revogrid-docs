<template>
  <section class="cta-section">
    <div class="cta-glow" aria-hidden="true"></div>
    <h2 class="cta-title">{{ cta.title }}<br />{{ cta.titleEmphasis }}</h2>
    <p class="cta-sub">{{ cta.subtitle }}</p>
    <div class="cta-btns">
      <a
        :href="cta.primary.href"
        class="btn-cta-primary"
        :target="cta.primary.external ? '_blank' : undefined"
        :rel="cta.primary.external ? 'noopener' : undefined"
      >
        {{ cta.primary.label }}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a
        :href="cta.secondary.href"
        class="btn-cta-ghost"
        :target="cta.secondary.external ? '_blank' : undefined"
        :rel="cta.secondary.external ? 'noopener' : undefined"
      >
        {{ cta.secondary.label }}
      </a>
    </div>
    <div class="footer-links-row">
      <template v-for="(link, index) in cta.footerLinks" :key="link.href">
        <span v-if="index > 0" class="sep">|</span>
        <a
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener' : undefined"
        >
          {{ link.label }}
        </a>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PricingCtaData } from './types'

defineProps<{
  cta: PricingCtaData
}>()
</script>

<style lang="scss" scoped>
.cta-section {
  background: var(--vp-c-bg);
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  padding: 80px 48px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 64px 24px;
  }
}

.cta-glow {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, var(--vp-c-brand-soft) 0%, transparent 70%);
  pointer-events: none;
}

.cta-title {
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 700;
  letter-spacing: -1px;
  color: var(--vp-c-text-1);
  margin-bottom: 14px;
  line-height: 1.1;
  position: relative;
}

.cta-sub {
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  position: relative;
}

.cta-btns {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 40px;
}

.btn-cta-primary {
  background: var(--vp-c-brand-3);
  color: #fff;
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--vp-font-family-base);
  transition: all 0.25s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
}

.btn-cta-ghost {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  font-family: var(--vp-font-family-base);
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: var(--vp-c-bg-soft);
    border-color: var(--vp-c-brand-2);
  }
}

.footer-links-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;

  a {
    font-size: 13px;
    color: var(--vp-c-text-3);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--vp-c-text-2);
    }
  }

  .sep {
    color: var(--vp-c-divider);
    font-size: 13px;
  }
}
</style>
