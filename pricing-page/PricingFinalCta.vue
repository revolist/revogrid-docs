<template>
  <section class="cta-section">
    <div class="cta-glow" aria-hidden="true"></div>
    <h2 class="cta-title">{{ cta.title }}<br />{{ cta.titleEmphasis }}</h2>
    <p class="cta-sub">{{ cta.subtitle }}</p>
    <div class="cta-actions">
      <a
        :href="cta.primary.href"
        class="rg-btn"
        :target="cta.primary.external ? '_blank' : undefined"
        :rel="cta.primary.external ? 'noopener' : undefined"
        @click="handleLinkClick($event, cta.primary)"
      >
        {{ cta.primary.label }}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a
        :href="cta.secondary.href"
        class="rg-btn rg-btn-secondary"
        :target="cta.secondary.external ? '_blank' : undefined"
        :rel="cta.secondary.external ? 'noopener' : undefined"
        @click="handleLinkClick($event, cta.secondary)"
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
          @click="handleLinkClick($event, link)"
        >
          {{ link.label }}
        </a>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PricingCtaData, PricingCtaLink } from './types'

defineProps<{
  cta: PricingCtaData
}>()

const emit = defineEmits<{
  (event: 'contact-sales'): void
}>()

const isContactLink = (link: PricingCtaLink) => {
  return link.href.startsWith('mailto:') && /contact|sales/i.test(link.label)
}

const handleLinkClick = (event: MouseEvent, link: PricingCtaLink) => {
  if (!isContactLink(link)) return

  event.preventDefault()
  emit('contact-sales')
}
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
  font-weight: 600;
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

.cta-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 40px;
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
