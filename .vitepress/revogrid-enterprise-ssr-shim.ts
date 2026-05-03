export class GanttPlugin {}

export class PivotPlugin {}

export function createDefaultTaskTableColumn(prop: string) {
  return {
    prop,
    name: prop,
  }
}
