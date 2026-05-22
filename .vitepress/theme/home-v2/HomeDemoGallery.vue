<template>
  <section id="demos" class="rg-section rg-demos-section">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-demo-grid">
        <a
          v-for="demo in section?.items"
          :key="demo.title"
          class="rg-demo-card"
          :href="linkOf(demo.link)"
          :target="demo.target"
          :rel="demo.rel"
        >
          <DemoPreview :type="demo.type" />
          <div class="rg-demo-card-body">
            <h3>{{ demo.title }}</h3>
            <p>{{ demo.description }}</p>
            <span>
              Open demo
              <HomeChevron />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import DemoPreview from './DemoPreview.vue'
import HomeChevron from './HomeChevron.vue'
import HomeSectionHeader from './HomeSectionHeader.vue'
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()
</script>

<style lang="scss" scoped>
.rg-demos-section {
  background: var(--rg-bg);
}

.rg-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
}

.rg-demo-card {
  background: var(--rg-bg-2);
  border: 1px solid var(--rg-border);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: var(--rg-border-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
}

.rg-demo-card-body {
  padding: 14px;

  h3 {
    margin: 0 0 4px;
    color: var(--rg-text);
    font-size: 14px;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: var(--rg-text-2);
    font-size: 12px;
    line-height: 1.6;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    margin-top: 8px;
    color: var(--rg-font-green);
    font-size: 11px;
    font-weight: 600;

    :deep(.rg-chevron) {
      width: 8px;
      height: 8px;
    }
  }
}
</style>
