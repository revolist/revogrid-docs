<template>
  <section class="compare-links-section" aria-labelledby="comparison-guides-heading">
    <div class="pricing-container">
      <div class="compare-links">
        <div class="compare-icon" aria-hidden="true">
          <FontAwesomeSvgIcon name="scaleBalanced" />
        </div>
        <div class="compare-copy">
          <h2 id="comparison-guides-heading">{{ compareLinks.heading }}</h2>
          <p>{{ compareLinks.description }}</p>
          <nav class="compare-examples" aria-label="Featured grid comparisons">
            <template v-for="(example, index) in compareLinks.examples" :key="example.href">
              <a :href="linkOf(example.href)">{{ example.label }}</a>
              <span v-if="index < compareLinks.examples.length - 1" aria-hidden="true">·</span>
            </template>
          </nav>
        </div>
        <div class="compare-actions">
          <a
            v-for="link in compareLinks.items"
            :key="link.href"
            class="rg-btn rg-btn-secondary"
            :href="linkOf(link.href)"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
          >
            {{ link.label }}
            <FontAwesomeSvgIcon class="action-icon" name="arrowDown" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'
import { usePricingLinks } from './home-design/pricingDesignUtils'
import type { PricingCompareLinksData } from './types'

defineProps<{
  compareLinks: PricingCompareLinksData
}>()

const { linkOf } = usePricingLinks()
</script>

<style lang="scss" scoped>
.compare-links-section {
  padding: 28px 0 64px;
}

.compare-links {
  display: grid;
  grid-template-columns: 78px minmax(0, 1fr) auto;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 22%, var(--rg-border));
  border-radius: 12px;
  align-items: center;
  gap: 26px;
  padding: 24px 30px;
  background:
    radial-gradient(circle at 12% 50%, color-mix(in srgb, var(--vp-c-brand-1) 7%, transparent), transparent 28%),
    color-mix(in srgb, var(--vp-c-brand-soft) 28%, var(--rg-bg));
}

.compare-icon {
  display: grid;
  width: 70px;
  height: 70px;
  place-items: center;
  color: var(--rg-font-green);
}

:deep(.compare-icon .fa-svg-icon) {
  width: 54px;
  height: 54px;
}

:deep(.compare-icon svg) {
  fill: currentColor;
  opacity: 1;
}

.compare-copy {
  h2 {
    color: var(--rg-text);
    font-size: 20px;
    line-height: 1.3;
    margin: 0 0 4px;
  }

  p {
    color: var(--rg-text-2);
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
    max-width: 680px;
  }
}

.compare-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 3px 9px;
  margin-top: 7px;
  color: var(--rg-text-3);
  font-size: 12px;
  line-height: 1.5;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--rg-font-green);
    }

    &:focus-visible {
      border-radius: 3px;
      outline: 2px solid var(--rg-font-green);
      outline-offset: 2px;
    }
  }
}

.compare-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;

  .rg-btn {
    min-width: 250px;
    border-color: var(--rg-text);
    background: transparent;
    color: var(--rg-text);
    white-space: nowrap;

    &:hover {
      border-color: var(--rg-font-green);
      background: color-mix(in srgb, var(--rg-font-green) 6%, transparent);
      color: var(--rg-font-green);
    }
  }
}

:deep(.action-icon) {
  width: 11px;
  height: 11px;
  margin-left: 8px;
  transform: rotate(-90deg);
}

:deep(.action-icon svg) {
  fill: currentColor;
  opacity: 1;
}

@media (max-width: 760px) {
  .compare-links-section {
    padding-bottom: 56px;
  }

  .compare-links {
    grid-template-columns: 58px minmax(0, 1fr);
    align-items: flex-start;
    gap: 16px;
    padding: 22px 20px;
  }

  .compare-icon {
    width: 54px;
    height: 54px;
  }

  :deep(.compare-icon .fa-svg-icon) {
    width: 40px;
    height: 40px;
  }

  .compare-actions {
    grid-column: 1 / -1;
  }

  .compare-actions,
  .compare-actions .rg-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 420px) {
  .compare-links {
    grid-template-columns: minmax(0, 1fr);
  }

  .compare-icon {
    justify-self: start;
  }
}
</style>
