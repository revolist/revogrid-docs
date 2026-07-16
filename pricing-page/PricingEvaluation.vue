<template>
  <section class="evaluation-section" aria-labelledby="evaluation-heading">
    <div class="pricing-container evaluation-shell">
      <header class="section-heading">
        <h2 id="evaluation-heading">{{ evaluation.heading }}</h2>
      </header>

      <div class="evaluation-grid">
        <article
          v-for="option in evaluation.options"
          :key="option.heading"
          class="evaluation-card"
          :class="{ recommended: option.recommended }"
        >
          <span class="evaluation-icon" aria-hidden="true">
            <FontAwesomeSvgIcon :name="option.icon" />
          </span>
          <div class="evaluation-content">
            <div class="evaluation-eyebrow">{{ option.eyebrow }}</div>
            <h3>{{ option.heading }}</h3>
            <p>{{ option.description }}</p>
            <a
              class="rg-btn"
              :class="{ 'rg-btn-secondary': !option.recommended }"
              :href="linkOf(option.action.href)"
            >
              {{ option.action.label }}
            </a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
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
  padding-top: 8px;
}

.section-heading {
  margin-bottom: 20px;
  text-align: center;

  h2 {
    color: var(--rg-text);
    font-size: clamp(24px, 3vw, 30px);
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin: 0;
  }
}

.evaluation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
}

.evaluation-card {
  min-width: 0;
  display: grid;
  grid-template-columns: 84px minmax(0, 1fr);
  gap: 22px;
  padding: 0 48px 0 0;

  & + & {
    padding-right: 0;
    padding-left: 48px;
    border-left: 1px solid var(--rg-border);
  }

  h3 {
    color: var(--rg-text);
    font-size: 18px;
    line-height: 1.25;
    margin: 0 0 8px;
  }

  p {
    min-height: 66px;
    color: var(--rg-text-2);
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 18px;
  }

  .rg-btn {
    min-width: 210px;
  }

  .rg-btn-secondary {
    border-color: var(--rg-font-green);
    background: transparent;
    color: var(--rg-font-green);

    &:hover {
      background: color-mix(in srgb, var(--rg-font-green) 7%, transparent);
      color: var(--rg-font-green);
    }
  }
}

.evaluation-eyebrow {
  margin-bottom: 5px;
  color: var(--rg-text-3);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.evaluation-icon {
  display: grid;
  width: 84px;
  height: 84px;
  place-items: center;
  border-radius: 10px;
  background: color-mix(in srgb, var(--rg-font-green) 6%, var(--rg-bg-2));
  color: var(--rg-font-green);
}

:deep(.evaluation-icon .fa-svg-icon) {
  width: 34px;
  height: 34px;
}

:deep(.evaluation-icon svg) {
  fill: currentColor;
  opacity: 1;
}

@media (max-width: 760px) {
  .evaluation-section {
    padding-bottom: 64px;
  }

  .evaluation-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 28px;
  }

  .evaluation-shell {
    padding-top: 0;
  }

  .evaluation-card {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 16px;
    padding: 0;

    & + & {
      padding: 28px 0 0;
      border-top: 1px solid var(--rg-border);
      border-left: 0;
    }

    p {
      min-height: 0;
    }

    .rg-btn {
      width: 100%;
      min-width: 0;
    }
  }

  .evaluation-icon {
    width: 64px;
    height: 64px;
  }

  :deep(.evaluation-icon .fa-svg-icon) {
    width: 28px;
    height: 28px;
  }
}
</style>
