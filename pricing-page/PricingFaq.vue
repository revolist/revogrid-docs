<template>
  <section class="faq-section" aria-labelledby="faq-heading">
    <div class="pricing-container">
      <h2 id="faq-heading" class="pricing-section-heading">{{ faq.heading }}</h2>
      <div class="faq-grid">
        <article v-for="(item, index) in faq.items" :key="item.q" class="faq-item">
          <h3>
            <button
              :id="triggerId(index)"
              class="faq-trigger"
              type="button"
              :aria-expanded="openItem === index"
              :aria-controls="panelId(index)"
              @click="toggle(index)"
              @keydown="handleKeydown($event, index)"
            >
              <span>{{ item.q }}</span>
              <VPImage
                class="faq-icon"
                :class="{ open: openItem === index }"
                :image="{ src: 'plus.svg' }"
                aria-hidden="true"
              />
            </button>
          </h3>
          <div
            v-show="openItem === index"
            :id="panelId(index)"
            class="faq-answer"
            role="region"
            :aria-labelledby="triggerId(index)"
            v-html="item.a"
          ></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VPImage from '../.vitepress/theme/VPImage.vue'
import type { PricingFaqData } from './types'

defineProps<{
  faq: PricingFaqData
}>()

const openItem = ref<number | null>(null)
const triggerId = (index: number) => `pricing-faq-trigger-${index}`
const panelId = (index: number) => `pricing-faq-panel-${index}`
const toggle = (index: number) => {
  openItem.value = openItem.value === index ? null : index
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  if (event.key !== 'Enter' && event.key !== ' ') return

  event.preventDefault()
  toggle(index)
}
</script>

<style lang="scss" scoped>
.faq-section {
  padding: 72px 0;
  background: var(--rg-bg-2);
  border-top: 1px solid var(--rg-border);
}

.pricing-section-heading {
  color: var(--rg-text);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 10px;
}

.faq-item {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--rg-border);
  border-radius: 9px;
  background: var(--rg-bg);

  h3 {
    margin: 0;
  }
}

.faq-trigger {
  width: 100%;
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 15px 18px;
  border: 0;
  background: transparent;
  color: var(--rg-text);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;

  &:hover {
    background: var(--rg-bg-2);
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--rg-font-green) 34%, transparent);
    outline-offset: -3px;
  }
}

:deep(.faq-icon) {
  flex: 0 0 auto;
  width: 17px;
  height: 17px;
  color: var(--rg-text-3);
  transition: transform 0.18s ease;

  &.open {
    transform: rotate(45deg);
  }
}

.faq-answer {
  padding: 0 18px 18px;
  color: var(--rg-text-2);
  font-size: 13px;
  line-height: 1.65;

  :deep(strong) {
    color: var(--rg-text);
    font-weight: 600;
  }

  :deep(a) {
    color: var(--rg-font-green);
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

@media (max-width: 760px) {
  .faq-section {
    padding: 64px 0;
  }

  .faq-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  :deep(.faq-icon) {
    transition: none;
  }
}
</style>
