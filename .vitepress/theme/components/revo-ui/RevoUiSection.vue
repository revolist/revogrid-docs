<template>
  <section class="revo-ui-section" data-ui-library aria-labelledby="revo-ui-section-title">
    <div class="revo-ui-copy">
      <p class="revo-ui-eyebrow">{{ copy.eyebrow }}</p>
      <h2 id="revo-ui-section-title">{{ copy.title }}</h2>
      <p class="revo-ui-description">{{ copy.description }}</p>
      <p class="revo-ui-license">{{ copy.license }}</p>
      <p class="revo-ui-frameworks">{{ copy.frameworks }}</p>
      <div class="revo-ui-actions">
        <AppButton href="https://ui.rv-grid.com/" variant="primary">{{ copy.explore }}</AppButton>
        <AppButton href="https://github.com/revolist/revo-ui" variant="secondary">
          <GithubIcon class="revo-ui-github-icon" aria-hidden="true" />
          {{ copy.github }}
        </AppButton>
      </div>
    </div>
    <div class="revo-ui-demo">
      <ClientOnly>
        <RevoUiPreview :copy="copy.preview" />
        <template #fallback><div class="revo-ui-placeholder" aria-hidden="true"></div></template>
      </ClientOnly>
      <p class="revo-ui-caption">{{ copy.preview.caption }}</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useData } from 'vitepress'
import AppButton from '../../AppButton.vue'
import GithubIcon from '../../images/github.svg?component'
import { getRevoUiContent, type RevoUiProduct } from './revoUiContent'

const props = defineProps<{ product: RevoUiProduct }>()
const { frontmatter } = useData()
const copy = computed(() => getRevoUiContent(props.product, frontmatter.value.revoUiSection))
const RevoUiPreview = defineAsyncComponent(() => import('./RevoUiPreview.vue'))
</script>
<style scoped>
.revo-ui-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
  align-items: center;
  gap: clamp(32px, 6vw, 88px);
  width: 100%;
  max-width: 1184px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--vp-c-divider);
  margin: 0 auto;
  padding: clamp(56px, 7vw, 96px) 32px;
  color: var(--vp-c-text-1);
  text-align: left;
}
.revo-ui-copy,
.revo-ui-demo {
  min-width: 0;
}
.revo-ui-eyebrow {
  margin: 0 0 18px;
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
h2 {
  max-width: 17ch;
  margin: 0;
  border: 0;
  padding: 0;
  font-size: clamp(30px, 3.7vw, 44px);
  line-height: 1.12;
  letter-spacing: -0.04em;
  font-weight: 500;
}
.revo-ui-description {
  max-width: 46ch;
  margin: 22px 0;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.75;
}
.revo-ui-license {
  display: inline-flex;
  margin: 0;
  padding: 5px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
}
.revo-ui-frameworks {
  margin: 18px 0 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.8;
}
.revo-ui-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}
.revo-ui-github-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  fill: currentColor;
}
.revo-ui-caption {
  margin: 14px 12px 0;
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
}
.revo-ui-placeholder {
  height: 480px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
}
@media (max-width: 800px) {
  .revo-ui-section {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
  h2 {
    max-width: 22ch;
  }
  .revo-ui-demo {
    max-width: 520px;
    width: 100%;
  }
}
@media (max-width: 640px) {
  .revo-ui-section {
    padding-inline: 24px;
  }
  .revo-ui-actions :deep(.rg-btn) {
    min-height: 44px;
  }
}
</style>
