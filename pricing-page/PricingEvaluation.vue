<template>
  <section class="evaluation-section" aria-labelledby="evaluation-heading">
    <div class="pricing-container evaluation-shell">
      <header class="section-heading">
        <h2 id="evaluation-heading">{{ evaluation.heading }}</h2>
        <p>{{ evaluation.description }}</p>
      </header>

      <div class="evaluation-grid">
        <article
          v-for="option in evaluation.options"
          :key="option.heading"
          class="evaluation-card"
          :class="{ recommended: option.recommended }"
        >
          <div class="evaluation-eyebrow">{{ option.eyebrow }}</div>
          <h3>{{ option.heading }}</h3>
          <p>{{ option.description }}</p>
          <ul>
            <li v-for="feature in option.features" :key="feature">
              <VPImage class="feature-check" :image="{ src: 'check.svg' }" aria-hidden="true" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          <a
            class="rg-btn"
            :class="{ 'rg-btn-secondary': !option.recommended }"
            :href="linkOf(option.action.href)"
          >
            {{ option.action.label }}
          </a>
        </article>
      </div>

      <p class="evaluation-note">
        <strong>Open source and Pro access are different paths.</strong>
        {{ evaluation.clarification }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import VPImage from '../.vitepress/theme/VPImage.vue'
import { usePricingLinks } from './home-design/pricingDesignUtils'
import type { PricingEvaluationData } from './types'

defineProps<{
  evaluation: PricingEvaluationData
}>()

const { linkOf } = usePricingLinks()
</script>

<style lang="scss" scoped>
.evaluation-section {
  padding: 0 0 72px;
}

.evaluation-shell {
  box-sizing: border-box;
  padding: 42px 28px 28px;
  border: 1px solid color-mix(in srgb, var(--rg-font-green) 26%, var(--rg-border));
  border-radius: 16px;
  background: color-mix(in srgb, var(--rg-font-green) 3%, var(--rg-bg-2));
}

.section-heading {
  margin-bottom: 28px;
  text-align: center;

  h2 {
    color: var(--rg-text);
    font-size: clamp(25px, 3vw, 34px);
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin: 0 0 10px;
  }

  p {
    max-width: 650px;
    margin: 0 auto;
    color: var(--rg-text-2);
    font-size: 14px;
    line-height: 1.6;
  }
}

.evaluation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.evaluation-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 28px;
  border: 1px solid var(--rg-border);
  border-radius: 12px;
  background: var(--rg-bg);

  &.recommended {
    border-color: color-mix(in srgb, var(--rg-font-green) 55%, var(--rg-border));
  }

  h3 {
    color: var(--rg-text);
    font-size: 21px;
    line-height: 1.25;
    margin: 6px 0 8px;
  }

  > p {
    color: var(--rg-text-2);
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
  }

  ul {
    display: grid;
    gap: 8px;
    margin: 20px 0 24px;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    color: var(--rg-text-2);
    font-size: 13px;
    line-height: 1.45;
  }

  .rg-btn {
    width: 100%;
    margin-top: auto;
  }
}

.evaluation-eyebrow {
  color: var(--rg-font-green);
  font-size: 10px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

:deep(.feature-check) {
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  margin-top: 3px;
  color: var(--rg-font-green);
}

.evaluation-note {
  margin: 14px 0 0;
  padding: 14px 18px;
  border-radius: 9px;
  background: color-mix(in srgb, var(--vp-c-brand-soft) 65%, var(--rg-bg));
  color: var(--rg-text-2);
  font-size: 12px;
  line-height: 1.55;

  strong {
    color: var(--rg-text);
  }
}

@media (max-width: 760px) {
  .evaluation-section {
    padding-bottom: 64px;
  }

  .evaluation-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .evaluation-shell {
    padding: 34px 16px 22px;
    border-right: 0;
    border-left: 0;
    border-radius: 0;
  }

  .evaluation-card {
    padding: 24px;
  }
}
</style>
