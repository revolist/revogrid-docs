<template>
  <section id="advanced" class="rg-section rg-advanced-section">
    <div class="rg-container">
      <div class="rg-advanced-heading">
        <HomeSectionHeader :section="section" />
        <a class="rg-advanced-heading-action" :href="linkOf(section?.action?.link)">
          {{ section?.action?.text }}
          <HomeChevron />
        </a>
      </div>
      <div class="rg-modules-grid">
        <article
          v-for="item in section?.items"
          :key="item.title"
          class="rg-module-card"
        >
          <ModulePreview
            :type="item.type"
            :title="item.title"
            :thumbnail="item.thumbnail"
            :videoUrl="item.videoUrl"
          />
          <div class="rg-module-card-body">
            <h3>
              {{ item.title }}
              <span class="rg-module-tag">{{ catalogTag(item) }}</span>
              <span v-if="catalogStatus(item) !== 'stable'" class="rg-module-tag">
                {{ catalogStatus(item) }}
              </span>
            </h3>
            <p>{{ item.description }}</p>
            <a
              class="rg-module-link"
              :href="linkOf(item.link)"
              :target="targetOf(item.link)"
              :rel="relOf(item.link)"
              :aria-label="`Learn more about ${item.title}`"
            >
              Learn more
              <HomeChevron />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { getFeature, getPlan, getProduct } from '../../../commercial/productCatalog'
import HomeSectionHeader from './HomeSectionHeader.vue'
import HomeChevron from './HomeChevron.vue'
import ModulePreview from './ModulePreview.vue'
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const { linkOf, targetOf, relOf } = useHomeV2Links()
const catalogFacts = (item: HomeV2Record) => {
  if (item.catalogProductId) {
    const product = getProduct(item.catalogProductId)
    return { planId: product.minimumPlan, status: product.status }
  }
  const feature = item.catalogFeatureId ? getFeature(item.catalogFeatureId) : undefined
  return feature ? { planId: feature.minimumPlan, status: feature.status } : undefined
}
const catalogTag = (item: HomeV2Record) => {
  const facts = catalogFacts(item)
  return facts ? getPlan(facts.planId).name : item.tag
}
const catalogStatus = (item: HomeV2Record) => catalogFacts(item)?.status ?? 'stable'
</script>

<style lang="scss">
#advanced .rg-section-header {
  max-width: 820px;
  margin: 0;
  text-align: left;
}

#advanced .rg-section-label {
  margin-bottom: 14px;
  color: var(--rg-font-green);
  letter-spacing: 0.12em;
}

#advanced .rg-section-title {
  font-size: clamp(32px, 3.4vw, 46px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 14px;
}

#advanced .rg-section-desc {
  max-width: 680px;
  margin: 0;
  color: var(--rg-text-2);
  font-size: 17px;
  line-height: 1.5;
}

#advanced .rg-module-card {
  padding: 0;
}

#advanced .rg-module-preview {
  height: auto;
  margin-top: 0;
  border: none;
  border-radius: 0;
}

#advanced .rg-module-card .rg-module-preview {
  aspect-ratio: 2 / 1;
}

@media (max-width: 640px) {
  #advanced .rg-section-header {
    text-align: left;
  }

  #advanced .rg-section-title {
    font-size: 32px;
  }

  #advanced .rg-section-desc {
    margin-left: 0;
  }
}
</style>

<style lang="scss" scoped>
.rg-advanced-section {
  padding-block: clamp(80px, 9vw, 132px);
}

.rg-advanced-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 36px;
  margin-bottom: 42px;
}

.rg-advanced-heading-action {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  gap: 6px;
  color: var(--rg-font-green);
  font-size: 15px;
  font-weight: 650;
  text-decoration: none;
  padding-block: 8px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--rg-green) 35%, transparent);
    outline-offset: 4px;
    border-radius: 4px;
  }
}

.rg-advanced-section .rg-modules-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  overflow: visible;
}

.rg-module-card {
  min-width: 0;
  border: 1px solid var(--rg-border);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: color-mix(in srgb, var(--rg-green) 42%, var(--rg-border));
    box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
    transform: translateY(-3px);
  }
}

.rg-module-card-body {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 22px;
  gap: 9px;
  flex: 1;

  h3 {
    color: var(--rg-text);
    font-size: 18px;
    line-height: 1.3;
    font-weight: 650;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    color: var(--rg-text-2);
    margin: 0;
    flex: 1;
  }
}

.rg-module-tag {
  position: relative;
  font-size: 11px;
  line-height: 22px;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0 9px 0 16px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--rg-green) 12%, transparent);
  color: var(--rg-font-green);
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--rg-green);
  }
}

.rg-module-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  font-size: 15px;
  font-weight: 600;
  color: var(--rg-font-green);
  text-decoration: none;
  margin-top: 7px;

  &:hover {
    text-decoration: underline;
  }
}

@media (max-width: 960px) {
  .rg-advanced-section .rg-modules-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .rg-advanced-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

}

@media (max-width: 640px) {
  .rg-advanced-section .rg-modules-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .rg-advanced-heading {
    margin-bottom: 32px;
  }

  .rg-module-card-body {
    padding: 22px 20px 24px;
  }

}

@media (prefers-reduced-motion: reduce) {
  .rg-module-card {
    transition: none;
  }

  .rg-module-card:hover {
    transform: none;
  }
}
</style>
