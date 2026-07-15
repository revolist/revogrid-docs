<template>
  <section class="comparison-section" aria-labelledby="key-differences-heading">
    <div class="pricing-container">
      <header class="section-heading">
        <h2 id="key-differences-heading">{{ differences.heading }}</h2>
        <p>{{ differences.description }}</p>
      </header>

      <p class="scroll-hint">{{ differences.scrollHint }}</p>
      <div
        class="table-scroll"
        role="region"
        aria-labelledby="key-differences-heading"
        tabindex="0"
      >
        <table>
          <thead>
            <tr>
              <th scope="col">Key difference</th>
              <th scope="col">Free</th>
              <th scope="col">Pro Lite</th>
              <th scope="col">Pro Advanced</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in differences.rows" :key="featureText(row.feature)">
              <th scope="row">
                <template
                  v-for="(part, index) in featureParts(row.feature)"
                  :key="`${featureText(row.feature)}-${index}`"
                >
                  <a v-if="part.href" :href="linkOf(part.href)">{{ part.text }}</a>
                  <span v-else>{{ part.text }}</span>
                </template>
              </th>
              <PricingDifferenceCell :value="row.free" />
              <PricingDifferenceCell :value="row.lite" />
              <PricingDifferenceCell :value="row.advanced" />
            </tr>
          </tbody>
        </table>
      </div>

      <div class="comparison-action">
        <a class="rg-btn rg-btn-secondary" :href="linkOf(differences.link.href)">
          {{ differences.link.label }}
          <VPImage class="action-icon" :image="{ src: 'arrow-right.svg' }" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import VPImage from '../.vitepress/theme/VPImage.vue'
import PricingDifferenceCell from './PricingDifferenceCell.vue'
import type {
  PricingDifferenceFeature,
  PricingDifferenceFeaturePart,
  PricingKeyDifferencesData,
} from './types'
import { usePricingLinks } from './home-design/pricingDesignUtils'

defineProps<{
  differences: PricingKeyDifferencesData
}>()

const { linkOf } = usePricingLinks()

const featureText = (feature: PricingDifferenceFeature) =>
  typeof feature === 'string' ? feature : feature.text

const featureParts = (feature: PricingDifferenceFeature): PricingDifferenceFeaturePart[] => {
  if (typeof feature === 'string') return [{ text: feature }]
  return feature.parts ?? [{ text: feature.text, href: feature.href }]
}
</script>

<style lang="scss" scoped>
.comparison-section {
  padding: 76px 0;
  border-top: 1px solid var(--rg-border);
}

.section-heading {
  margin-bottom: 24px;
  text-align: center;

  h2 {
    color: var(--rg-text);
    font-size: clamp(26px, 3vw, 34px);
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin: 0 0 10px;
  }

  p {
    color: var(--rg-text-2);
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }
}

.scroll-hint {
  display: none;
  margin: 0 0 8px;
  color: var(--rg-text-3);
  font-size: 12px;
  text-align: right;
}

.table-scroll {
  max-width: 100%;
  overflow-x: auto;
  contain: inline-size paint;
  border: 1px solid var(--rg-border);
  border-radius: 12px;
  background: var(--rg-bg);
  box-shadow: inset -18px 0 20px -24px var(--rg-text);
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--rg-font-green) 30%, transparent),
      inset -18px 0 20px -24px var(--rg-text);
  }
}

table {
  width: 100%;
  min-width: 760px;
  border-collapse: separate;
  border-spacing: 0;
}

th,
:deep(td) {
  padding: 15px 18px;
  border-bottom: 1px solid var(--rg-border);
  color: var(--rg-text-2);
  font-size: 13px;
  line-height: 1.45;
  text-align: center;
  vertical-align: middle;
}

thead th {
  color: var(--rg-text-3);
  background: var(--rg-bg-2);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

th:first-child {
  width: 31%;
  min-width: 220px;
  color: var(--rg-text);
  font-weight: 600;
  text-align: left;
}

tbody th a {
  color: inherit;
  text-decoration-line: underline;
  text-decoration-color: color-mix(in srgb, var(--rg-font-green) 55%, transparent);
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;

  &:hover {
    color: var(--rg-font-green);
  }

  &:focus-visible {
    border-radius: 3px;
    outline: 2px solid var(--rg-font-green);
    outline-offset: 2px;
  }
}

tbody tr:last-child th,
tbody tr:last-child :deep(td) {
  border-bottom: 0;
}

tbody tr:hover th,
tbody tr:hover :deep(td) {
  background: var(--rg-bg-2);
}

.comparison-action {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .rg-btn {
    min-width: min(100%, 360px);
  }
}

:deep(.action-icon) {
  width: 12px;
  height: 12px;
  margin-left: 8px;
}

@media (max-width: 800px) {
  .comparison-section {
    padding: 64px 0;
  }

  .scroll-hint {
    display: block;
  }

  th:first-child {
    position: sticky;
    z-index: 1;
    left: 0;
    background: var(--rg-bg);
    box-shadow: 10px 0 14px -16px var(--rg-text);
  }

  thead th:first-child {
    z-index: 2;
    background: var(--rg-bg-2);
  }
}
</style>
