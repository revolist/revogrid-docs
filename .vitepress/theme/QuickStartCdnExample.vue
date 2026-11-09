<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const closeScript = '</scr' + 'ipt>'

const srcDoc = computed(() =>
  [
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    '<style>',
    `html,body{height:100%;margin:0;background:${isDark.value ? '#161618' : '#fff'};font-family:Inter,system-ui,sans-serif;}`,
    'body{box-sizing:border-box;padding:0;}',
    'revo-grid{height:310px;min-height:0;width:100%;}',
    '</style>',
    '</head>',
    '<body>',
    '<revo-grid hide-attribution></revo-grid>',
    '<script type="module">',
    "import { defineCustomElement as defineRevoGrid } from 'https://cdn.jsdelivr.net/npm/@revolist/revogrid@latest/standalone/revo-grid.js/+esm';",
    'defineRevoGrid();',
    '',
    "const grid = document.querySelector('revo-grid');",
    `grid.theme = '${isDark.value ? 'darkMaterial' : 'material'}';`,
    'grid.rowHeaders = true;',
    'grid.range = true;',
    'grid.filter = true;',
    'grid.columns = [',
    "  { prop: 'task', name: 'Task', size: 260, sortable: true, filter: 'string' },",
    "  { prop: 'status', name: 'Status', size: 140, filter: 'string' },",
    "  { prop: 'owner', name: 'Owner', size: 120, sortable: true, filter: 'string' },",
    "  { prop: 'due', name: 'Due', size: 130, sortable: true },",
    "  { prop: 'hours', name: 'Hours', size: 90, sortable: true, filter: 'number' },",
    '];',
    'grid.source = [',
    "  { task: 'Review onboarding flow', status: 'In progress', owner: 'Ada', due: '2026-09-24', hours: 4 },",
    "  { task: 'Fix CSV import errors', status: 'To do', owner: 'Grace', due: '2026-09-25', hours: 2 },",
    "  { task: 'Update help article', status: 'Done', owner: 'Lin', due: '2026-09-26', hours: 1 },",
    "  { task: 'Check mobile layout', status: 'In progress', owner: 'Sam', due: '2026-09-27', hours: 3 },",
    "  { task: 'Test keyboard shortcuts', status: 'To do', owner: 'Ada', due: '2026-09-29', hours: 2 },",
    "  { task: 'Prepare release notes', status: 'Done', owner: 'Grace', due: '2026-09-30', hours: 1 },",
    "  { task: 'Review error states', status: 'In progress', owner: 'Lin', due: '2026-10-01', hours: 3 },",
    "  { task: 'Plan customer interview', status: 'To do', owner: 'Sam', due: '2026-10-02', hours: 2 },",
    "  { task: 'Verify export columns', status: 'Done', owner: 'Ada', due: '2026-10-03', hours: 2 },",
    "  { task: 'Document shortcut keys', status: 'In progress', owner: 'Grace', due: '2026-10-05', hours: 4 },",
    '];',
    closeScript,
    '</body>',
    '</html>',
  ].join('\n'),
)
</script>

<template>
  <ClientOnly>
    <iframe
      class="quick-start-cdn-example"
      data-testid="quick-start-cdn-example"
      title="Interactive project task grid"
      :srcdoc="srcDoc"
      loading="lazy"
    ></iframe>
  </ClientOnly>
</template>

<style scoped>
.quick-start-cdn-example {
  display: block;
  width: 100%;
  height: 312px;
  margin: 18px 0 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
}
</style>
