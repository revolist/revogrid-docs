<template>
  <section id="feature-comparison" class="comparison-section">
    <div class="pricing-container">
      <h2 class="pricing-section-heading">{{ heading }}</h2>
      <div class="table-wrap">
        <table class="comp-table">
          <thead>
            <tr>
              <th class="feat-col">Feature</th>
              <th class="center-col">Free</th>
              <th class="center-col highlight-col">Pro Light</th>
              <th class="center-col">Pro Advanced</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="section in COMP_SECTIONS" :key="section.label">
              <tr class="category-row">
                <td colspan="4">
                  <button
                    class="category-toggle"
                    type="button"
                    :aria-expanded="expandedSections[section.label]"
                    @click="toggleSection(section.label)"
                  >
                    <span class="expand-icon" aria-hidden="true">
                      {{ expandedSections[section.label] ? '▼' : '▶' }}
                    </span>
                    <span>{{ section.label }}</span>
                  </button>
                </td>
              </tr>
              <template v-if="expandedSections[section.label]">
                <tr
                  v-for="row in visibleRows(section)"
                  :key="`${section.label}-${row.name}`"
                  :class="{ 'collapsible-feature': row.collapsible }"
                >
                  <td :class="['feature-name', `nesting-${row.nesting}`]">
                    <button
                      v-if="row.collapsible"
                      class="feature-expand"
                      type="button"
                      :aria-expanded="isFeatureExpanded(section.label, row.name)"
                      @click="toggleFeature(section.label, row.name)"
                    >
                      {{ isFeatureExpanded(section.label, row.name) ? '▼' : '▶' }}
                    </button>
                    <span class="feature-name-text">{{ row.name }}</span>
                    <span v-if="row.beta" class="beta-badge">Beta</span>

                    <span v-if="hasFeatureActions(row)" class="feature-actions">
                      <a
                        v-if="row.link"
                        class="rg-btn rg-btn-secondary feature-action-link docs-preview"
                        :href="row.link"
                        :target="isExternalHref(row.link) ? '_blank' : undefined"
                        :rel="isExternalHref(row.link) ? 'noopener' : undefined"
                        title="Documentation"
                      >
                        Docs
                      </a>
                      <a
                        v-if="row.demoUrl"
                        class="rg-btn rg-btn-secondary feature-action-link demo-preview"
                        :href="row.demoUrl"
                        target="_blank"
                        rel="noopener"
                        title="Interactive demo"
                      >
                        Demo
                      </a>
                      <button
                        class="video-preview"
                        :class="{ 'video-placeholder': !row.video }"
                        type="button"
                        :title="row.video ? 'Video preview' : undefined"
                        :disabled="!row.video"
                        :tabindex="row.video ? 0 : -1"
                        @click="row.video && openPreview(row.video)"
                      >
                        <VPImage
                          v-if="row.video"
                          style="width: 18px"
                          :image="{ src: 'video.svg' }"
                        />
                      </button>
                    </span>
                  </td>
                  <td class="center-col">
                    <span v-if="row.supported.includes('Basic')" class="check-yes">✓</span>
                    <span v-else class="check-no">—</span>
                  </td>
                  <td class="center-col highlight-col">
                    <span v-if="row.supported.includes('Pro Lite')" class="check-yes">✓</span>
                    <span v-else class="check-no">—</span>
                  </td>
                  <td class="center-col">
                    <span v-if="row.supported.includes('Pro Advanced')" class="check-yes">✓</span>
                    <span v-else class="check-no">—</span>
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <ElDialog v-model="dialogVisible" width="600">
    <video
      class="video"
      :src="videoUrl"
      loop
      muted
      playsinline
      autoplay
    ></video>
  </ElDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElDialog } from 'element-plus'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import VPImage from '../.vitepress/theme/VPImage.vue'
import { featureTableGroups } from '../pro/featureTableData'
import type { FeatureTableGroup, FeatureTableItem } from '../pro/featureTableData'

defineProps<{
  heading: string
}>()

type ComparisonSection = {
  label: string
  rows: FeatureTableGroup['features']
}

const COMP_SECTIONS: ComparisonSection[] = featureTableGroups.map((group) => ({
  label: group.name,
  rows: group.features,
}))

const expandedSections = ref<Record<string, boolean>>(
  Object.fromEntries(featureTableGroups.map((group) => [group.name, group.expanded])),
)

const getFeatureKey = (groupName: string, featureName: string) => `${groupName}::${featureName}`

const expandedFeatures = ref<Record<string, boolean>>(
  Object.fromEntries(
    featureTableGroups.flatMap((group) =>
      group.features
        .filter((feature) => feature.collapsible)
        .map((feature) => [getFeatureKey(group.name, feature.name), Boolean(feature.expanded)]),
    ),
  ),
)
const dialogVisible = ref(false)
const videoUrl = ref('')

const toggleSection = (label: string) => {
  expandedSections.value[label] = !expandedSections.value[label]
}

const isFeatureExpanded = (groupName: string, featureName: string) => {
  return expandedFeatures.value[getFeatureKey(groupName, featureName)] ?? true
}

const toggleFeature = (groupName: string, featureName: string) => {
  const key = getFeatureKey(groupName, featureName)
  expandedFeatures.value[key] = !isFeatureExpanded(groupName, featureName)
}

const visibleRows = (section: ComparisonSection) => {
  return section.rows.filter((row) => {
    if (!row.parent) return true
    return isFeatureExpanded(section.label, row.parent)
  })
}

const hasFeatureActions = (row: FeatureTableItem) => {
  return Boolean(row.link || row.demoUrl || row.video)
}

const isExternalHref = (href: string) => /^https?:\/\//.test(href)

const openPreview = (video: string) => {
  videoUrl.value = video
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.comparison-section {
  padding: 80px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.table-wrap {
  overflow-x: auto;
}

.comp-table {
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 14px 20px;
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    color: var(--vp-c-text-3);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    border-bottom: 1px solid var(--vp-c-divider);

    &.center-col { text-align: center; }
    &.highlight-col { color: var(--vp-c-brand-1); }
  }

  td {
    padding: 13px 20px;
    font-size: 13px;
    color: var(--vp-c-text-2);
    border-bottom: 1px solid var(--vp-c-divider);

    &.center-col { text-align: center; }
    &.highlight-col { background: var(--vp-c-brand-soft); }
  }

  tbody tr:hover td {
    background: var(--vp-c-bg-soft);

    &.highlight-col {
      background: color-mix(in srgb, var(--vp-c-brand-soft) 60%, var(--vp-c-bg-soft));
    }
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  .category-row td {
    padding: 14px 20px;
    border-bottom: none;
    background: color-mix(in srgb, var(--vp-c-bg-alt) 80%, transparent) !important;

    &:first-child {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  .category-toggle {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 0;
    padding: 0;
    background: transparent;
    color: var(--vp-c-text-1);
    cursor: pointer;
    font-family: var(--vp-font-family-base);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 1.4;
    text-align: left;
    text-transform: uppercase;

    &:hover {
      color: var(--vp-c-text-1);
    }
  }

  .expand-icon {
    width: 10px;
    font-size: 10px;
    line-height: 1;
    opacity: 0.8;
  }

  .feature-name {
    color: var(--vp-c-text-1);

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--vp-c-brand-1);
      }
    }

    &.nesting-2 {
      padding-left: 40px;
    }
  }
}

.feature-expand {
  width: 16px;
  border: 0;
  padding: 0;
  margin-right: 4px;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  font-size: 10px;
  line-height: 1;
}

.feature-actions {
  float: right;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
}

.feature-action-link {
  height: 24px;
  min-width: 24px;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 11px;
  line-height: 1;
}

.video-preview {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  color: var(--vp-c-text-2);

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    cursor: default;
  }
}

.video-placeholder {
  opacity: 0;
  pointer-events: none;
}

.video {
  width: 100%;
  display: block;
}

.check-yes {
  color: var(--green);
  font-size: 15px;
  font-weight: 600;
}

.check-no {
  color: var(--vp-c-text-3);
  opacity: 0.4;
  font-size: 15px;
}

.beta-badge {
  display: inline-flex;
  align-items: center;
  margin-left: 6px;
  padding: 1px 5px;
  border-radius: 999px;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
  font-size: 10px;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
}
</style>
