<template>
  <section class="pro-topic-links">
    <h3>Related Pro &amp; Enterprise Features</h3>
    <ul>
      <li v-for="item in resolvedItems" :key="item.label">
        <a :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener' : undefined">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

const props = defineProps<{
  topic: string;
}>();

const proBase = (import.meta.env.VITE_RV_GRID_PRO_BASE_URL || 'https://pro.rv-grid.com').replace(/\/$/, '');

function pro(path: string) {
  return `${proBase}${path.startsWith('/') ? path : `/${path}`}`;
}

const common: LinkItem[] = [
  { label: 'Pro Feature Table', href: '/pro/feature-table' },
  { label: 'Pro Demo Portal', href: '/demo/' },
];

const topics: Record<string, LinkItem[]> = {
  core: [
    { label: 'History (Undo/Redo)', href: pro('/guides/data-manage/history/'), external: true },
    { label: 'Overlay Notes', href: '/demo/overlay-notes' },
    { label: 'Event Manager', href: '/demo/event-manager' },
  ],
  column: [
    { label: 'Column Selection (Pro)', href: '/demo/column-selection' },
    { label: 'Column Stretch (Pro)', href: '/demo/column-stretch' },
    { label: 'Column Hide (Pro)', href: '/demo/column-hide' },
    { label: 'Column Collapse (Pro)', href: '/demo/column-collapse' },
  ],
  row: [
    { label: 'Row Selection (Pro)', href: '/demo/row-select' },
    { label: 'Row Master/Detail (Pro)', href: '/demo/row-master' },
    { label: 'Row Transpose (Pro)', href: '/demo/row-transpose' },
    { label: 'Row Autosize (Pro)', href: '/demo/row-autosize' },
  ],
  cell: [
    { label: 'Cell Merge (Pro)', href: '/demo/cell-merge' },
    { label: 'Auto Merge (Pro)', href: '/demo/auto-merge' },
    { label: 'Cell Flash (Pro)', href: '/demo/cell-flash' },
    { label: 'Formula (Pro)', href: '/demo/formula' },
  ],
  editing: [
    { label: 'Advanced Editors (Pro)', href: '/demo/editor-dropdown' },
    { label: 'Form Edit (Pro)', href: '/demo/form-edit' },
    { label: 'History (Undo/Redo)', href: pro('/guides/data-manage/history/'), external: true },
    { label: 'Validation (Pro)', href: '/demo/validate-input' },
  ],
  filters: [
    { label: 'Advanced Filters (Pro)', href: '/demo/filter-showcase' },
    { label: 'Filter Header (Pro)', href: '/demo/filter-header' },
    { label: 'Filter Date (Pro)', href: '/demo/filter-date' },
    { label: 'Filter Slider (Pro)', href: '/demo/filter-slider' },
  ],
  sorting: [
    { label: 'Pivot Sorting (Enterprise)', href: pro('/guides/pivot/'), external: true },
    { label: 'Pivot Demos', href: '/demo/pivot' },
  ],
  clipboard: [
    { label: 'Clipboard JSON (Pro)', href: '/demo/clipboard-json' },
    { label: 'Autofill (Pro)', href: '/demo/autofill' },
  ],
  pagination: [
    { label: 'Local Pagination (Pro)', href: '/demo/pagination-local' },
    { label: 'Remote Pagination (Pro)', href: '/demo/pagination-remote' },
    { label: 'Infinity Scroll (Pro)', href: '/demo/infinity-scroll' },
  ],
  tree: [
    { label: 'Tree Data (Pro)', href: pro('/guides/data-manage/tree/'), external: true },
    { label: 'Tree Demo', href: '/demo/tree' },
  ],
  grouping: [
    { label: 'Grouping Plugin (Pro)', href: '/demo/grouping' },
    { label: 'Pivot Grouping (Enterprise)', href: pro('/guides/pivot/'), external: true },
  ],
  export: [
    { label: 'Excel Export (Pro)', href: '/demo/export-excel' },
    { label: 'Pivot Export State (Enterprise)', href: '/demo/pivot-export-state' },
  ],
  performance: [
    { label: 'Gantt (Enterprise)', href: pro('/guides/gantt/'), external: true },
    { label: 'Pivot (Enterprise)', href: pro('/guides/pivot/'), external: true },
    { label: 'Charts (Pro)', href: '/demo/charts' },
  ],
  api: [
    { label: 'Pro API docs', href: '/pro/' },
    { label: 'Pro Playground', href: pro('/demo/playground'), external: true },
  ],
};

const resolvedItems = computed(() => [...(topics[props.topic] || []), ...common]);
</script>

<style scoped>
.pro-topic-links {
  margin: 1.25rem 0;
  padding: 1rem 1.1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.pro-topic-links h3 {
  margin: 0 0 0.55rem;
  font-size: 0.95rem;
}

.pro-topic-links ul {
  margin: 0;
  padding-left: 1rem;
}

.pro-topic-links li {
  margin: 0.25rem 0;
}
</style>
