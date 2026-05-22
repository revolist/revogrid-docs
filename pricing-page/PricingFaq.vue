<template>
  <section class="faq-section">
    <div class="pricing-container">
      <h2 class="pricing-section-heading">{{ faq.heading }}</h2>
      <div class="faq-grid">
        <div v-for="item in faq.items" :key="item.question" class="faq-item">
          <div class="faq-q">{{ item.question }}</div>
          <div class="faq-a" v-html="item.answer"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PricingFaqData } from './types'

defineProps<{
  faq: PricingFaqData
}>()
</script>

<style lang="scss" scoped>
.faq-section {
  padding: 80px 0;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.faq-item {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 24px 28px;
}

.faq-q {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 10px;
  line-height: 1.3;
}

.faq-a {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.7;

  :deep(strong) {
    color: var(--vp-c-text-1);
    font-weight: 600;
  }

  :deep(a) {
    color: var(--vp-c-brand-1);
    text-decoration: underline;
  }
}
</style>
