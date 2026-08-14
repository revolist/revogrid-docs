<template>
  <div
    :id="`rg-showcase-panel-${feature.id}`"
    class="rg-showcase-product"
    role="tabpanel"
    :aria-labelledby="`rg-showcase-tab-${feature.id}`"
    :aria-label="`${feature.title} interactive demo`"
  >
    <div
      class="rg-showcase-surface"
      :class="{ 'rg-showcase-surface-spreadsheet': example.surface === 'spreadsheet' }"
    >
      <ClientOnly>
        <VGrid
          ref="gridRef"
          :key="example.id"
          class="rg-showcase-grid"
          :theme="gridTheme"
          :source="example.source"
          :columns="example.columns"
          :column-types="example.columnTypes"
          :plugins="example.plugins"
          :filter="gridFilter"
          :readonly="example.readonly"
          :row-headers="example.rowHeaders"
          :can-move-columns="example.canMoveColumns"
          :tree.prop="example.tree"
          :data-grid-formatting.prop="example.formatting"
          :data-grid-formatting-panel.prop="false"
          :data-grid-context-menu.prop="example.contextMenu"
          :row-size="example.rowSize"
          :style="{ height: `${example.height}px`, minHeight: `${example.height}px` }"
          :stretch="true"
          range
          resize
          hide-attribution
        />
      </ClientOnly>
    </div>

    <div class="rg-showcase-code-panel">
      <code aria-label="RevoGrid configuration example">
        <span
          v-for="(line, index) in example.code"
          :key="`${example.id}-${index}`"
          class="rg-showcase-code-line"
          :class="{ 'rg-showcase-code-accent': line.accent }"
        >{{ line.text }}</span>
      </code>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useData } from 'vitepress'
import VGrid from '@revolist/vue3-datagrid'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import type { CapabilityExample, ShowcaseFeature } from '../types'

const props = defineProps<{
  feature: ShowcaseFeature
  example: CapabilityExample
}>()

const { isDark } = useData()
const gridRef = ref<{ $el?: HTMLRevoGridElement } | HTMLRevoGridElement | null>(null)
const gridTheme = computed(() => props.example.theme(isDark.value))
const gridFilter = computed(() => props.example.syncFilterColumns ? false : props.example.filter)

function getGrid() {
  const current = gridRef.value
  return current && '$el' in current ? current.$el : current ?? undefined
}

watch(
  () => props.example,
  async (example) => {
    if (!example.syncFilterColumns) return
    await nextTick()
    const grid = getGrid()
    await grid?.componentOnReady?.()
    if (!grid || props.example !== example) return
    grid.filter = example.filter
    grid.columns = example.columns
  },
  { flush: 'post' },
)
</script>

<style lang="scss" scoped>
@use '../styles/preview';
</style>
