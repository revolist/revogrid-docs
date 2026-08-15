import type {
  ColumnFilterConfig,
  ColumnRegular,
  ColumnTypes,
  DataType,
  GridPlugin,
  RowHeaders,
} from '@revolist/revogrid'
import type {
  DataGridContextMenuConfig,
  DataGridFormattingPresetState,
  EventManagerConfig,
  TreeConfig,
} from '@revolist/revogrid-pro'
import type { HomeV2Record } from '../homeV2Utils'

export type FeatureId = 'editing' | 'control' | 'filtering' | 'formatting' | 'tree'

export type ShowcaseFeature = HomeV2Record & {
  id: FeatureId
  icon: string
  title: string
  description: string
  link: string
}

export type CapabilityCodeLine = {
  text: string
  accent?: boolean
}

export type CustomerRow = {
  id: string
  parentId?: string | null
  company: string
  owner: string
  ownerIndex: number
  growth: number
  health: string
}

export type CapabilityExample = {
  id: FeatureId
  code: CapabilityCodeLine[]
  source: DataType[]
  columns: ColumnRegular[]
  columnTypes: ColumnTypes
  plugins: GridPlugin[]
  eventManager?: EventManagerConfig
  filter: boolean | ColumnFilterConfig
  readonly: boolean
  rowHeaders: RowHeaders | boolean
  canMoveColumns: boolean
  tree?: TreeConfig
  formatting?: DataGridFormattingPresetState
  contextMenu: false | DataGridContextMenuConfig
  rowSize: number
  height: number
  surface: 'default' | 'spreadsheet'
  theme: (isDark: boolean) => string
  syncFilterColumns: boolean
}
