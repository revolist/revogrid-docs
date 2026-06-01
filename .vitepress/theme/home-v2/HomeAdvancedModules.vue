<template>
  <section id="advanced" class="rg-section">
    <div class="rg-container">
      <HomeSectionHeader :section="section" />
      <div class="rg-modules-grid">
        <div
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
            <h3>{{ item.title }} <span class="rg-module-tag">{{ item.tag }}</span></h3>
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
        </div>
      </div>
      <div class="rg-centered-action">
        <a class="rg-btn rg-btn-secondary" :href="linkOf(section?.action?.link)">
          {{ section?.action?.text }}
          <HomeChevron />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import HomeSectionHeader from './HomeSectionHeader.vue'
import HomeChevron from './HomeChevron.vue'
import ModulePreview from './ModulePreview.vue'
import { type HomeV2Record, useHomeV2Links } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()

const { linkOf, targetOf, relOf } = useHomeV2Links()
</script>

<style lang="scss">
#advanced .rg-module-card {
  padding: 0;
}

#advanced .rg-module-preview {
  height: 200px;
  margin-top: 0;
  border: none;
  border-radius: 0;
}
</style>

<style lang="scss" scoped>
.rg-module-card {
  border: 1px solid var(--vp-c-gray-2);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(27, 71, 193, 0.4);
  }
}

.rg-module-card-body {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 6px;
  flex: 1;

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  p {
    font-size: 14px;
    color: var(--vp-c-text-2);
    margin: 0;
    flex: 1;
  }
}

.rg-module-tag {
  font-size: 11px;
  font-weight: 500;
  padding: 0px 6px 0 0px;
  border-radius: 4px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  white-space: nowrap;
  vertical-align: middle;
}

.rg-module-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  margin-top: 4px;

  &:hover {
    text-decoration: underline;
  }
}
</style>
