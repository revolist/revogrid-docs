import type { ColumnRegular } from '@revolist/revogrid'
import {
  avatarWithTextRenderer,
  badgeRenderer,
  heatmapRenderer,
} from '@revolist/revogrid-pro'
import { heatmapOptions, statusBadgeStyles } from './presentation'

const syncedBadgeStyle = {
  display: 'inline-block',
  backgroundColor: 'color-mix(in srgb, var(--badge-cell-value-background-color) 60%, transparent)',
  color: 'var(--badge-cell-value-color, inherit)',
  padding: '4px 8px',
  borderRadius: '12px',
  fontSize: '12px',
  fontWeight: '500',
  letterSpacing: '0.3px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  lineHeight: '14px',
} as const

function titleCaseNormalizedLabel(value: unknown) {
  const label = String(value ?? '').trim()
  if (!label || label !== label.toLocaleLowerCase()) return label

  return label.replace(/(^|\s)(\p{L})/gu, (_match, separator: string, letter: string) => (
    `${separator}${letter.toLocaleUpperCase()}`
  ))
}

function canonicalStatusLabel(value: unknown) {
  const normalized = String(value ?? '').trim().toLocaleLowerCase()
  return Object.keys(statusBadgeStyles).find(label => label.toLocaleLowerCase() === normalized)
    ?? String(value ?? '')
}

export const statusBadgeCellTemplate: ColumnRegular['cellTemplate'] = (h, props, additionalData) => {
  const createElement = h as unknown as (
    tag: string,
    data: Record<string, unknown>,
    children: unknown,
  ) => unknown
  const syncedCreateElement = ((
    tag: string,
    data: Record<string, unknown> = {},
    children: unknown,
  ) => createElement(tag, {
    ...data,
    style: {
      ...(typeof data.style === 'object' && data.style ? data.style : {}),
      ...syncedBadgeStyle,
    },
  }, children)) as typeof h

  const canonicalValue = canonicalStatusLabel(props.value)
  return badgeRenderer?.(syncedCreateElement, {
    ...props,
    value: canonicalValue,
    model: {
      ...props.model,
      [props.prop ?? props.column.prop]: canonicalValue,
    },
  }, additionalData)
}

export const ownerCellTemplate: ColumnRegular['cellTemplate'] = (h, props, additionalData) => {
  const { column, model, value } = props
  const rawLabelValue = column.avatarLabelProp ? model[column.avatarLabelProp] : value
  const labelValue = titleCaseNormalizedLabel(rawLabelValue)

  if (!String(labelValue ?? '').trim()) return ''

  return avatarWithTextRenderer(h, {
    ...props,
    value: labelValue,
    model: {
      ...model,
      ...(column.avatarLabelProp ? { [column.avatarLabelProp]: labelValue } : {}),
    },
  }, additionalData)
}

export const percentageHeatmapCellTemplate: ColumnRegular['cellTemplate'] = (h, props, additionalData) => (
  heatmapRenderer?.(
    ((tag, data) => h(tag, data, `${props.value}%`)) as typeof h,
    props,
    additionalData,
  )
)

export const ownerColumn: ColumnRegular = {
  name: 'Owner',
  prop: 'owner',
  sortable: true,
  cellTemplate: ownerCellTemplate,
  avatarIndexProp: 'ownerIndex',
  avatarLabelProp: 'owner',
  avatarSize: 20,
}

export const growthColumn: ColumnRegular = {
  name: 'Growth %',
  prop: 'growth',
  sortable: true,
  cellTemplate: percentageHeatmapCellTemplate,
  ...heatmapOptions,
}

export const statusColumn: ColumnRegular = {
  name: 'Status',
  prop: 'health',
  sortable: true,
  cellTemplate: statusBadgeCellTemplate,
  badgeStyles: statusBadgeStyles,
}
