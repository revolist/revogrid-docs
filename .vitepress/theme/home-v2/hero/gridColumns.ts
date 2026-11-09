import type { ColumnRegular } from '@revolist/vue3-datagrid'
import {
  avatarTemplate,
  editorDropdown,
  dropdownEditor,
  editorSlider,
} from '@revolist/revogrid-pro'
import NumberColumnType from '@revolist/revogrid-column-numeral'
import type { HomeV2Record } from '../homeV2Utils'
import { heroOwnerPhotos } from './people'

export const createHeroColumnTypes = () => ({ currency: new NumberColumnType('$0,0') })

/** Native grid editors and filter configuration, separate from view lifecycle. */
export function createHeroGridColumns(labels: HomeV2Record): ColumnRegular[] {
  const statusName = (value: string) => labels.statuses[value] ?? value
  const ownerCell: ColumnRegular['cellTemplate'] = (h, { value }) =>
    h('span', { class: 'hero-owner' }, [
      h(
        'span',
        { 'aria-hidden': 'true' },
        avatarTemplate(h, {
          value: heroOwnerPhotos[String(value)] ?? value,
          label: String(value),
          size: 20,
        }),
      ),
      h('span', {}, value),
    ])
  const statusColors: Record<string, string> = {
    'not-started': '#d97706',
    'in-progress': '#3b82f6',
    done: '#16a34a',
    blocked: '#ef4444',
  }
  const statusCell: ColumnRegular['cellTemplate'] = (h, { value }) => {
    const color = statusColors[value] ?? '#64748b'
    return h(
      'span',
      {
        class: 'hero-status',
        style: {
          display: 'inline-flex',
          lineHeight: '20px',
          padding: '2px 8px',
          borderRadius: '4px',
          fontSize: '11px',
          backgroundColor: `color-mix(in srgb, ${color} 14%, transparent)`,
          color: `color-mix(in srgb, ${color} 75%, var(--rg-text))`,
        },
      },
      statusName(value),
    )
  }
  // Use the shared renderer/editor directly so each trigger can carry its own
  // project-specific accessible name through the public dropdown config.
  const labeledDropdown =
    (message: 'ownerControl' | 'statusControl'): NonNullable<ColumnRegular['cellTemplate']> =>
    (h, cell, additionalData) =>
      editorDropdown(
        h,
        {
          ...cell,
          column: {
            ...cell.column,
            dropdown: {
              ...cell.column.dropdown,
              config: {
                ...cell.column.dropdown?.config,
                ariaLabel: String(labels[message]).replace('{project}', String(cell.model.name)),
              },
            },
          },
        },
        additionalData,
      )
  // Bounds let native stretching fit the pane while keeping editors usable.
  return [
    {
      prop: 'name',
      name: labels.project,
      minSize: 180,
      sortable: true,
      filter: ['string'],
      filterPlaceholder: labels.searchProjects,
    },
    {
      prop: 'owner',
      name: labels.owner,
      minSize: 170,
      sortable: true,
      filter: ['selection'],
      filterPlaceholder: labels.all,
      editor: dropdownEditor,
      cellProperties: () => ({ style: { padding: '0' } }),
      cellTemplate: labeledDropdown('ownerControl'),
      dropdown: {
        config: { ariaLabel: labels.owner },
        source: Object.keys(heroOwnerPhotos).map(value => ({ value, label: value })),
        syncCellTemplate: true,
        cellTemplate: ownerCell,
      },
    },
    {
      prop: 'workflowStatus',
      name: labels.status,
      minSize: 120,
      sortable: true,
      filter: ['selection'],
      filterPlaceholder: labels.all,
      editor: dropdownEditor,
      cellProperties: () => ({ style: { padding: '0' } }),
      cellTemplate: labeledDropdown('statusControl'),
      dropdown: {
        config: { ariaLabel: labels.status },
        source: Object.entries(labels.statuses).map(([value, label]) => ({ value, label })),
        syncCellTemplate: true,
        cellTemplate: statusCell,
      },
    },
    {
      prop: 'percentDone',
      name: labels.progress,
      minSize: 190,
      cellProperties: () => ({ class: 'hero-progress-editor' }),
      sortable: true,
      filter: ['slider'],
      filterPlaceholder: labels.range,
      min: 0,
      max: 100,
      step: 1,
      formatValue: (value: number) => `${value}%`,
      thresholds: [
        { value: 0, className: 'low' },
        { value: 35, className: 'medium' },
        { value: 65, className: 'info' },
        { value: 85, className: 'high' },
      ],
      cellTemplate: editorSlider,
    },
    {
      prop: 'budget',
      name: labels.budget,
      minSize: 110,
      sortable: true,
      columnType: 'currency',
      filter: ['number'],
      filterPlaceholder: labels.budgetRange,
      cellProperties: () => ({ style: { textAlign: 'right', fontVariantNumeric: 'tabular-nums' } }),
      columnProperties: () => ({ class: 'hero-budget-header' }),
    },
  ]
}
