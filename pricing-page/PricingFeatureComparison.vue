<template>
  <section class="comparison-section" aria-labelledby="key-differences-heading">
    <div class="pricing-container">
      <header class="section-heading">
        <h2 id="key-differences-heading">{{ differences.heading }}</h2>
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
              <th scope="col">Capability</th>
              <th scope="col">Pro Lite</th>
              <th scope="col">Pro Advanced</th>
              <th scope="col">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in differences.rows" :key="featureText(row.feature)">
              <th scope="row">
                <span class="capability-layout">
                  <FontAwesomeSvgIcon
                    class="capability-icon"
                    :name="featureIcon(row.feature)"
                  />
                  <span class="capability-copy">
                    <span class="capability-title">
                      <template
                        v-for="(part, index) in featureParts(row.feature)"
                        :key="`${featureText(row.feature)}-${index}`"
                      >
                        <a v-if="part.href" :href="linkOf(part.href)">{{ part.text }}</a>
                        <span v-else>{{ part.text }}</span>
                      </template>
                    </span>
                    <span v-if="featureDescription(row.feature)" class="capability-description">
                      {{ featureDescription(row.feature) }}
                    </span>
                  </span>
                </span>
              </th>
              <PricingDifferenceCell :value="row.lite" />
              <PricingDifferenceCell :value="row.advanced" />
              <PricingDifferenceCell :value="row.enterprise" />
            </tr>
          </tbody>
        </table>
      </div>

      <div class="comparison-action">
        <a :href="linkOf(differences.link.href)">
          {{ differences.link.label }}
          <FontAwesomeSvgIcon class="action-arrow" name="arrowDown" />
        </a>
      </div>

      <PricingTailoredPackage @contact-sales="$emit('contact-sales')" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import PricingDifferenceCell from './PricingDifferenceCell.vue'
import PricingTailoredPackage from './PricingTailoredPackage.vue'
import type {
  PricingDifferenceFeature,
  PricingDifferenceFeaturePart,
  PricingKeyDifferencesData,
} from './types'
import { usePricingLinks } from './home-design/pricingDesignUtils'

defineProps<{
  differences: PricingKeyDifferencesData
}>()

defineEmits<{
  (event: 'contact-sales'): void
}>()

const { linkOf } = usePricingLinks()

const featureText = (feature: PricingDifferenceFeature) =>
  typeof feature === 'string' ? feature : feature.text

const featureParts = (feature: PricingDifferenceFeature): PricingDifferenceFeaturePart[] => {
  if (typeof feature === 'string') return [{ text: feature }]
  return feature.parts ?? [{ text: feature.text, href: feature.href }]
}

const featureDescription = (feature: PricingDifferenceFeature) =>
  typeof feature === 'string' ? undefined : feature.description

const featureIcon = (feature: PricingDifferenceFeature) =>
  typeof feature === 'string' ? 'grid' : feature.icon ?? 'grid'
</script>

<style lang="scss" scoped>
.comparison-section {
  padding: 72px 0 76px;
  border-top: 1px solid var(--rg-border);
}

.section-heading {
  margin-bottom: 16px;

  h2 {
    color: var(--rg-text);
    font-size: clamp(24px, 3vw, 30px);
    letter-spacing: -0.02em;
    line-height: 1.15;
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
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--rg-font-green) 30%, transparent);
  }
}

table {
  width: 100%;
  min-width: 780px;
  border-collapse: separate;
  border-spacing: 0;
}

th,
:deep(td) {
  padding: 18px 24px;
  border-bottom: 1px solid var(--rg-border);
  color: var(--rg-text-2);
  font-size: 13px;
  line-height: 1.45;
  text-align: center;
  vertical-align: middle;
}

thead th {
  color: var(--rg-text);
  background: var(--rg-bg-2);
  font-size: 13px;
  font-weight: 600;
}

th:first-child {
  width: 40%;
  min-width: 310px;
  color: var(--rg-text);
  font-weight: 500;
  text-align: left;
}

.capability-layout {
  display: flex;
  align-items: center;
  gap: 20px;
}

.capability-icon {
  flex: 0 0 28px;
  width: 28px;
  height: 28px;
  color: var(--rg-font-green);
}

:deep(.capability-icon svg) {
  fill: currentColor;
  opacity: 1;
}

.capability-copy,
.capability-title,
.capability-description {
  display: block;
}

.capability-copy {
  min-width: 0;
}

.capability-title {
  color: var(--rg-text);
  font-size: 14px;
  line-height: 1.4;
}

.capability-description {
  color: var(--rg-text-3);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 3px;
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
  background: color-mix(in srgb, var(--rg-font-green) 3%, var(--rg-bg));
}

.comparison-action {
  display: flex;
  justify-content: center;
  margin-top: 24px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--rg-font-green);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: var(--vp-c-brand-2);
    }

    &:focus-visible {
      border-radius: 4px;
      outline: 2px solid var(--rg-font-green);
      outline-offset: 4px;
    }
  }
}

.action-arrow {
  width: 13px;
  height: 13px;
}

:deep(.action-arrow svg) {
  fill: currentColor;
  opacity: 1;
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

@media (max-width: 520px) {
  .comparison-section {
    padding: 56px 0 60px;
  }
}
</style>
