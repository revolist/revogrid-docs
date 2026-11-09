import type { ColumnRegular, ColumnCollection } from '@revolist/vue3-datagrid'
import type { ViewFieldMap } from '@revolist/revogrid-pro'
import type { DependencyEntity, GanttPluginConfig } from '@revolist/gantt'
import type { EventSchedulerConfig, EventSchedulerResourceEntity } from '@revolist/scheduler'
import type { KanbanConfig } from '@revolist/kanban'
import type { PivotConfig } from '@revolist/pivot'
import type { HomeV2Record } from '../../homeV2Utils'
import type { HeroProject } from '../portfolio'

export type HeroPivotGrouping = 'status' | 'owner'

export interface HeroProductContext {
  labels: HomeV2Record
  rows: HeroProject[]
  fields: ViewFieldMap
  resources: EventSchedulerResourceEntity[]
  pivotGrouping?: HeroPivotGrouping
}
export interface HeroProductConfig {
  columns?: ColumnRegular[]
  gantt?: GanttPluginConfig
  dependencies?: DependencyEntity[]
  scheduler?: EventSchedulerConfig
  kanban?: KanbanConfig
  pivot?: PivotConfig
}
export interface HeroProductModule {
  plugins: HTMLRevoGridElement['plugins']
  configure(context: HeroProductContext): HeroProductConfig
  beforeColumnsSet?(event: CustomEvent<ColumnCollection>): void
  afterGridRender?(event: Event): void | Promise<void>
}
