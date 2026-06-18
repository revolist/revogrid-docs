export class GanttPlugin {}

export class EventSchedulerPlugin {}

export class PivotPlugin {}

export function createDefaultTaskTableColumn(prop: string) {
  return {
    prop,
    name: prop,
  }
}
