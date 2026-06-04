<template>
  <section class="compare-links-section">
    <div class="pricing-container">
      <div class="compare-links">
        <div class="compare-copy">
          <h2>{{ compareLinks.heading }}</h2>
          <p>{{ compareLinks.description }}</p>
        </div>
        <div class="compare-actions">
          <a
            v-for="link in compareLinks.items"
            :key="link.href"
            class="rg-btn rg-btn-secondary"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PricingCompareLinksData } from './types'

defineProps<{
  compareLinks: PricingCompareLinksData
}>()
</script>

<style lang="scss" scoped>
.compare-links-section {
  padding: 0 0 56px;
}

.compare-links {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 24px;
  background: var(--vp-c-bg-soft);
}

.compare-copy {
  h2 {
    color: var(--vp-c-text-1);
    font-size: 18px;
    line-height: 1.3;
    margin: 0 0 6px;
  }

  p {
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
    max-width: 620px;
  }
}

.compare-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}

@media (max-width: 760px) {
  .compare-links {
    align-items: flex-start;
    flex-direction: column;
  }

  .compare-actions {
    justify-content: flex-start;
  }
}
</style>
