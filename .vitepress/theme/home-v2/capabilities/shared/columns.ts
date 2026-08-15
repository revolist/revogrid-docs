import type { ColumnRegular } from '@revolist/revogrid'
import {
  avatarWithTextRenderer,
  badgeRenderer,
  heatmapRenderer,
} from '@revolist/revogrid-pro'
import { heatmapOptions, statusBadgeStyles } from './presentation'

export const ownerCellTemplate: ColumnRegular['cellTemplate'] = (h, props, additionalData) => {
  const { column, model, value } = props
  const labelValue = column.avatarLabelProp ? model[column.avatarLabelProp] : value

  if (!String(labelValue ?? '').trim()) return ''

  return avatarWithTextRenderer(h, props, additionalData)
}

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
  cellTemplate: heatmapRenderer,
  ...heatmapOptions,
}

export const statusColumn: ColumnRegular = {
  name: 'Status',
  prop: 'health',
  sortable: true,
  cellTemplate: badgeRenderer,
  badgeStyles: statusBadgeStyles,
}
