<template>
  <div class="feature-grid">
    <article v-for="feature in features" :key="feature.title" class="feature-card">
      <div class="feature-icon">{{ feature.icon }}</div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
      <ProFeatureCodeExample v-if="feature.codeExample" :example="feature.codeExample" />
      <div class="feature-tags">
        <span v-for="tag in feature.tags" :key="tag">{{ tag }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import ProFeatureCodeExample from './ProFeatureCodeExample.vue'

interface ProFeatureItem {
  icon: string
  title: string
  description: string
  tags: readonly string[]
  codeExample?: 'pivot'
}

defineProps<{
  features: readonly ProFeatureItem[]
}>()
</script>

<style lang="scss" scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-divider);

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  padding: 30px 26px;
  background: var(--vp-c-bg);

  &:hover {
    background: var(--vp-c-bg-soft);
  }

  h3 {
    margin: 0 0 9px;
    color: var(--vp-c-text-1);
    font-size: 17px;
    line-height: 1.25;
  }

  p {
    margin: 0 0 16px;
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.65;
  }
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin-bottom: 18px;
  border: 1px solid color-mix(in srgb, var(--pro-doc-accent, var(--gantt-accent, #1d4ed8)) 20%, transparent);
  border-radius: 10px;
  color: var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
  background: var(--pro-doc-soft, var(--gantt-soft, rgba(29, 78, 216, 0.09)));
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 600;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    padding: 2px 7px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 5px;
    color: var(--vp-c-text-3);
    background: var(--vp-c-bg-soft);
    font-family: var(--vp-font-family-mono);
    font-size: 10px;
  }
}

</style>
