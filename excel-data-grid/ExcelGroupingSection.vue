<template>
  <section id="grouping" class="excel-story-section" aria-labelledby="grouping-title">
    <div class="excel-container">
      <div class="excel-story-heading">
        <div>
          <span class="excel-section-index">{{ content.index }}</span>
          <h2 id="grouping-title">{{ content.title }}</h2>
        </div>
        <p>{{ content.description }}</p>
      </div>

      <div class="excel-grid-card excel-grid-card--grouping">
        <div class="excel-group-actions">
          <span>Drag any column header into the panel, then drag keys to reorder them.</span>
          <button type="button" @click="collapseAllGroups">Collapse all</button>
          <button type="button" @click="expandAllGroups">Expand all</button>
        </div>
        <ExcelRevoGrid
          class="excel-live-grid--grouping"
          :source="projectRows"
          :columns="groupColumns"
          :plugins="[ColumnGroupPanelPlugin]"
          :grouping="grouping"
          :column-group-panel="{ emptyPanelText: 'Drag a column header here to group rows' }"
          :row-size="36"
          range
          resize
          readonly
          @grouping-change="onGroupingChange"
        />
        <div class="excel-table-status">
          <div><span>{{ groupingProps.length }} grouping levels · {{ projectRows.length }} projects</span></div>
          <span>drag keys to reorder · × removes a level</span>
        </div>
      </div>
      <p class="excel-demo-caption">{{ content.caption }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ColumnProp, GroupCellTemplateFunc, GroupingOptions, VNode } from '@revolist/revogrid'
import { expandSvgIconVNode } from '@revolist/revogrid'
import { ColumnGroupPanelPlugin, getGroupingData } from '@revolist/revogrid-pro'
import ExcelRevoGrid from './ExcelRevoGrid.vue'
import { excelNumberFormat, excelSignedIntegerFormat } from './excelFormattingPlugins'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent['grouping'] }>()

interface ProjectRow {
  id: string
  region: string
  department: string
  project: string
  budget: number
  spent: number
  variance: number
  owner: string
}

type ProjectTuple = [string, string, string, string, number, number, string]
const projectRows: ProjectRow[] = ([
  ['warehouse', 'EMEA', 'Operations', 'Warehouse automation', 480000, 412300, 'K. Duarte'],
  ['fleet', 'EMEA', 'Operations', 'Fleet telemetry', 265000, 291400, 'J. Kowalski'],
  ['returns', 'EMEA', 'Operations', 'Returns processing', 132000, 108900, 'K. Duarte'],
  ['consolidation', 'EMEA', 'Finance', 'Consolidation rewrite', 340000, 318700, 'L. Marchetti'],
  ['treasury', 'EMEA', 'Finance', 'Treasury reporting', 158000, 142100, 'P. Novak'],
  ['distribution', 'AMER', 'Operations', 'Distribution planning', 512000, 498600, 'D. Okonjo'],
  ['replenishment', 'AMER', 'Operations', 'Store replenishment', 224000, 236800, 'T. Vasquez'],
  ['forecasting', 'AMER', 'R&D', 'Forecasting models', 398000, 344500, 'H. Ibarra'],
  ['platform', 'AMER', 'R&D', 'Data platform', 276000, 263200, 'C. Whitfield'],
  ['ports', 'APAC', 'Operations', 'Port integrations', 187000, 171400, 'Y. Tanabe'],
  ['tax', 'APAC', 'Finance', 'Local tax engine', 96000, 88300, 'M. Rahman'],
] as ProjectTuple[]).map(([id, region, department, project, budget, spent, owner]) => ({
  id,
  region,
  department,
  project,
  budget,
  spent,
  variance: budget - spent,
  owner,
}))

const groupingProps = ref<ColumnProp[]>(['region', 'department'])
const expandedAll = ref(true)

const groupCellTemplate: GroupCellTemplateFunc = (h, props) => {
  const columnProp = props.column.prop
  const aggregation = getGroupingData({
    store: props.providers.data,
    itemIndex: props.rowIndex,
    currentDepth: props.group.depth,
    columnProp,
    aggregator: columnProp === 'budget' || columnProp === 'spent' || columnProp === 'variance'
      ? values => values.reduce((total, row) => total + Number(row[columnProp] ?? 0), 0)
      : columnProp === 'owner'
        ? values => {
            const owners = [...new Set(values.map(row => String(row.owner ?? '')))]
            return owners.length === 1 ? owners[0] : 'Mixed'
          }
        : undefined,
  })

  if (props.group.isLabelColumn) {
    const groupIndent = `calc(12px + ${props.group.depth} * 24px)`
    const icon = expandSvgIconVNode(props.group.expanded)
    icon.$attrs$.width = '12px'
    icon.$attrs$.height = '12px'
    return h('button', {
      class: 'excel-core-group-toggle',
      style: { '--excel-group-depth-indent': groupIndent },
      type: 'button',
      'aria-expanded': String(props.group.expanded),
      'aria-label': `${props.group.expanded ? 'Collapse' : 'Expand'} ${props.group.name}`,
      onClick: props.group.onExpand,
    }, [icon, h('strong', null, props.group.name), h('small', null, `(${aggregation.count})`)] as VNode[])
  }

  if (columnProp === 'budget' || columnProp === 'spent') {
    return h('span', {
      class: 'excel-group-summary excel-group-summary--number',
    }, Number(aggregation.aggregationValue).toLocaleString('en-US'))
  }
  if (columnProp === 'variance') {
    const value = Number(aggregation.aggregationValue)
    return h('span', {
      class: `excel-group-summary excel-group-summary--number ${value < 0 ? 'excel-negative' : 'excel-positive'}`,
    }, `${value >= 0 ? '+' : ''}${value.toLocaleString('en-US')}`)
  }
  if (columnProp === 'owner') return String(aggregation.aggregationValue)
  return ''
}

const grouping = computed<GroupingOptions>(() => ({
  props: groupingProps.value,
  expandedAll: expandedAll.value,
  preserveGroupingOnUpdate: true,
  groupCellTemplate,
}))

function onGroupingChange(payload: { props: ColumnProp[] }) {
  groupingProps.value = [...payload.props]
}

function collapseAllGroups() {
  expandedAll.value = false
}

function expandAllGroups() {
  expandedAll.value = true
}

const groupColumns = [
  { name: 'Region', prop: 'region', size: 150, readonly: true },
  { name: 'Department', prop: 'department', size: 170, readonly: true },
  { name: 'Project', prop: 'project', size: 300, readonly: true },
  { name: 'Budget', prop: 'budget', size: 140, readonly: true, dataGridFormat: excelNumberFormat },
  { name: 'Spent', prop: 'spent', size: 140, readonly: true, dataGridFormat: excelNumberFormat },
  { name: 'Variance', prop: 'variance', size: 140, readonly: true, dataGridFormat: excelSignedIntegerFormat },
  { name: 'Owner', prop: 'owner', size: 150, readonly: true },
]
</script>
