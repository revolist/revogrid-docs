<template>
  <section id="tree" class="excel-story-section" aria-labelledby="tree-title">
    <div class="excel-container">
      <div class="excel-story-heading">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="tree-title">{{ content.title }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-tree-layout">
        <div class="excel-grid-card excel-grid-card--tree">
          <ExcelRevoGrid
            class="excel-live-grid--tree"
            :source="treeNodes"
            :columns="treeColumns"
            :plugins="treePlugins"
            :tree="treeConfig"
            :data-grid-formatting="treeFormatting"
            :row-size="36"
            range
            resize
            readonly
            @tree-state-changed="onTreeStateChanged"
          />
          <div class="excel-table-status"><span>{{ visibleTreeCount }} visible of {{ treeNodes.length }} nodes</span><span>TreeDataPlugin reads parent references from your model</span></div>
        </div>
        <aside class="excel-code-note">
          <strong>{{ content.sourceTitle }}</strong>
          <ExcelHighlightedCode
            class="excel-tree-code"
            :code="treeShapeCode"
            language="ts"
            label="Tree data source shape"
          />
          <p>{{ content.sourceDetail }}</p>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { TreeDataPlugin, type TreeConfig } from '@revolist/revogrid-pro'
import ExcelHighlightedCode from './ExcelHighlightedCode.vue'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import {
  createHierarchyFormattingState,
  excelMonoFormat,
  excelMonoRightFormat,
  excelProgressFormat,
} from './excelFormattingPlugins'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['tree'] }>()

const treeShapeCode = `{
  id: 'ws-2',
  parent: 'atlas',
  name: 'Data migration',
  effort: 420
}`

const treeNodes = [
  { id: 'atlas', parentId: null, label: 'Atlas platform migration', owner: 'H. Ibarra', effort: '1,240h', progress: 62, due: '2027-02-28' },
  { id: 'migration', parentId: 'atlas', label: 'Data migration', owner: 'C. Whitfield', effort: '420h', progress: 78, due: '2026-11-30' },
  { id: 'schema', parentId: 'migration', label: 'Schema mapping', owner: 'C. Whitfield', effort: '120h', progress: 100, due: '2026-09-15' },
  { id: 'backfill', parentId: 'migration', label: 'Historical backfill', owner: 'P. Novak', effort: '180h', progress: 74, due: '2026-10-28' },
  { id: 'reconciliation', parentId: 'migration', label: 'Reconciliation reports', owner: 'L. Marchetti', effort: '120h', progress: 55, due: '2026-11-30' },
  { id: 'cutover', parentId: 'atlas', label: 'Application cutover', owner: 'D. Okonjo', effort: '520h', progress: 48, due: '2027-01-20' },
  { id: 'service', parentId: 'cutover', label: 'Service rewrite', owner: 'D. Okonjo', effort: '260h', progress: 61, due: '2026-12-12' },
  { id: 'replacement', parentId: 'cutover', label: 'Grid UI replacement', owner: 'T. Vasquez', effort: '160h', progress: 40, due: '2027-01-08' },
  { id: 'rollback', parentId: 'cutover', label: 'Rollback plan', owner: 'K. Duarte', effort: '100h', progress: 25, due: '2027-01-20' },
  { id: 'enablement', parentId: 'atlas', label: 'Enablement', owner: 'Y. Tanabe', effort: '300h', progress: 31, due: '2027-02-28' },
  { id: 'training', parentId: 'enablement', label: 'Internal training', owner: 'Y. Tanabe', effort: '160h', progress: 38, due: '2027-02-01' },
  { id: 'comms', parentId: 'enablement', label: 'Customer comms', owner: 'M. Rahman', effort: '140h', progress: 22, due: '2027-02-28' },
  { id: 'harbor', parentId: null, label: 'Harbor reporting suite', owner: 'L. Marchetti', effort: '860h', progress: 44, due: '2027-04-30' },
  { id: 'designer', parentId: 'harbor', label: 'Report designer', owner: 'P. Novak', effort: '460h', progress: 52, due: '2027-03-15' },
  { id: 'layout', parentId: 'designer', label: 'Layout engine', owner: 'P. Novak', effort: '240h', progress: 58, due: '2027-01-31' },
  { id: 'export', parentId: 'designer', label: 'Export pipeline', owner: 'J. Kowalski', effort: '220h', progress: 46, due: '2027-03-15' },
  { id: 'filters', parentId: 'harbor', label: 'Filter builder', owner: 'M. Rahman', effort: '200h', progress: 35, due: '2027-03-28' },
  { id: 'delivery', parentId: 'harbor', label: 'Scheduled delivery', owner: 'K. Duarte', effort: '200h', progress: 31, due: '2027-04-30' },
  { id: 'alerts', parentId: 'delivery', label: 'Alert routing', owner: 'K. Duarte', effort: '100h', progress: 26, due: '2027-04-01' },
  { id: 'archive', parentId: 'delivery', label: 'Archive policies', owner: 'L. Marchetti', effort: '100h', progress: 36, due: '2027-04-30' },
  { id: 'audit', parentId: 'harbor', label: 'Audit trail', owner: 'T. Vasquez', effort: '80h', progress: 18, due: '2027-04-15' },
]
const treePlugins = [TreeDataPlugin]
const treeConfig: TreeConfig = {
  idField: 'id',
  parentIdField: 'parentId',
  rootParentId: null,
  expandedRowIds: new Set(['atlas', 'migration', 'cutover']),
}
const visibleTreeCount = ref(11)
const treeNodeById = new Map(treeNodes.map((node) => [node.id, node]))
const treeFormattingRows = treeNodes.map((node) => {
  let depth = 0
  let parentId = node.parentId
  while (parentId) {
    depth += 1
    parentId = treeNodeById.get(parentId)?.parentId ?? null
  }
  return {
    depth,
    hasChildren: treeNodes.some((candidate) => candidate.parentId === node.id),
  }
})
const treeFormatting = createHierarchyFormattingState(treeFormattingRows)

async function onTreeStateChanged(event: CustomEvent<{ expandedRowIds: Set<string> }>) {
  await nextTick()
  const grid = event.target as HTMLRevoGridElement | null
  visibleTreeCount.value = (await grid?.getVisibleSource?.())?.length ?? visibleTreeCount.value
}
const treeColumns = [
  { name: 'Project structure', prop: 'label', size: 390, readonly: true, tree: true },
  { name: 'Assignee', prop: 'owner', size: 130, readonly: true },
  { name: 'Effort', prop: 'effort', size: 105, readonly: true, dataGridFormat: excelMonoRightFormat },
  { name: 'Progress', prop: 'progress', size: 140, readonly: true, dataGridFormat: excelProgressFormat },
  { name: 'Due', prop: 'due', size: 115, readonly: true, dataGridFormat: excelMonoFormat },
]
</script>
