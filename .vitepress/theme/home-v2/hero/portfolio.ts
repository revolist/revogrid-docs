import type { EventManagerEvent } from '@revolist/revogrid-pro'
import type { DependencyEntity, GanttDependencyDomainChangeDetail } from '@revolist/gantt'

export const heroChartPalette = ['#6647f0', '#ff6b26', '#0098fa', '#e900e8']
export const heroChartStatuses = ['not-started', 'in-progress', 'blocked', 'done']
export const heroStatusColor = (status: string) =>
  heroChartPalette[heroChartStatuses.indexOf(status)] ?? heroChartPalette[0]

export type HeroEdit = Pick<EventManagerEvent, 'data' | 'models' | 'domainChanges'> & {
  // Complete authored rows from the native owner for structural changes.
  eventTypes?: EventManagerEvent['eventTypes']
  source?: {
    ids: string[]
    rows: HeroProject[]
    dependencyIds?: string[]
    dependencies?: DependencyEntity[]
  }
}

export type HeroView = 'grid' | 'gantt' | 'scheduler' | 'pivot' | 'kanban' | 'charts'
export type HeroProject = {
  id: string
  name: string
  owner: string
  workflowStatus: string
  percentDone: number
  budget: number
  startDate: string
  endDate: string
  order: number
  color: string
  type: 'task'
}

export function createHeroProjects(): HeroProject[] {
  return [
    ['Commerce API', 'Alex Nguyen', 'in-progress', 64, 180000, '09', '13'],
    ['Mobile App', 'Maya Patel', 'blocked', 48, 120000, '10', '18'],
    ['Data Platform', 'Jordan Kim', 'done', 100, 240000, '09', '19'],
    ['Customer Portal', 'Alex Nguyen', 'in-progress', 35, 150000, '11', '20'],
    ['Design', 'Nina Patel', 'not-started', 0, 80000, '12', '17'],
    ['Research', 'Elias Novak', 'done', 100, 100000, '09', '11'],
  ].map(([name, owner, workflowStatus, percentDone, budget, start, end], index) => ({
    id: `hero-project-${index + 1}`,
    name: String(name),
    owner: String(owner),
    workflowStatus: String(workflowStatus),
    percentDone: Number(percentDone),
    budget: Number(budget),
    startDate: `2026-11-${start}T09:00:00.000Z`,
    endDate: `2026-11-${end}T17:00:00.000Z`,
    order: (index + 1) * 1000,
    color: ['#6654e8', '#8b78ee', '#6654e8', '#8b78ee', '#b4a7f4', '#51ad86'][index],
    type: 'task',
  }))
}

export function visibleHeroProjects(projects: HeroProject[], largeOnly: boolean) {
  return largeOnly ? projects.filter(project => project.budget > 100000) : projects
}
export function heroDependencies(projects: Pick<HeroProject, 'id'>[]): DependencyEntity[] {
  const ids = new Set(projects.map(row => row.id))
  return ids.has('hero-project-6') && ids.has('hero-project-5')
    ? [
        {
          id: 'hero-research-design',
          predecessorTaskId: 'hero-project-6',
          successorTaskId: 'hero-project-5',
          type: 'finish-to-start',
          lagDays: 0,
        },
      ]
    : []
}

// Dependency mutations share the native gridedit stream with task patches.
export function applyHeroDependencyEdit(dependencies: DependencyEntity[], detail: HeroEdit) {
  if (detail.source?.dependencies) {
    const next = new Map(dependencies.map(link => [link.id, link]))
    detail.source.dependencyIds?.forEach(id => next.delete(id))
    detail.source.dependencies.forEach(link => next.set(link.id, { ...link }))
    return [...next.values()]
  }
  const changes = detail.domainChanges?.filter(change => change.type === 'gantt-dependency')
  if (!changes?.length) return dependencies
  const next = new Map(dependencies.map(dependency => [dependency.id, dependency]))
  for (const change of changes) {
    const { dependencyId, dependency } = change.detail as GanttDependencyDomainChangeDetail
    if (dependency) next.set(dependencyId, { ...dependency })
    else next.delete(dependencyId)
  }
  return [...next.values()]
}

export type HeroBudgetRow = Pick<HeroProject, 'id' | 'name' | 'budget'>
export function heroBudgetRows(
  projects: HeroProject[],
  previous?: HeroBudgetRow[],
): HeroBudgetRow[] {
  const previousById = new Map(previous?.map(row => [row.id, row]))
  const next = projects.map(({ id, name, budget }) => {
    const old = previousById.get(id)
    return old?.name === name && old.budget === budget ? old : { id, name, budget }
  })
  return previous?.length === next.length && next.every((row, index) => row === previous[index])
    ? previous
    : next
}

// Native products publish authored patches with stable original models. Never
// treat a projected Gantt/Scheduler row index as an index into the portfolio.
export function applyHeroEdit(projects: HeroProject[], detail: HeroEdit): HeroProject[] {
  if (detail.source) {
    const { ids, rows } = detail.source
    const replaced = new Set([...ids, ...rows.map(row => row.id)])
    let index = 0
    const next = projects.flatMap(row => {
      if (!replaced.has(row.id)) return [row]
      return index < rows.length ? [rows[index++]!] : []
    })
    return [...next, ...rows.slice(index)]
  }
  const patches = new Map<string, Record<string, unknown>>()
  for (const [rowIndex, value] of Object.entries(detail.data ?? {})) {
    if (!value || typeof value !== 'object') continue
    const id = detail.models?.[Number(rowIndex)]?.id
    if (id == null) continue
    const patch = { ...value } as Record<string, unknown>
    delete patch.id
    if ('progressPercent' in patch) {
      if (!('percentDone' in patch)) patch.percentDone = patch.progressPercent
      delete patch.progressPercent
    }
    patches.set(String(id), { ...patches.get(String(id)), ...patch })
  }
  if (!patches.size) return projects
  return projects.map(project => {
    const patch = patches.get(project.id)
    if (!patch) return project
    const next = { ...project, ...patch }
    for (const field of ['budget', 'percentDone'] as const) {
      const value = Number(next[field])
      next[field] = Number.isFinite(value) && value >= 0 ? value : project[field]
    }
    next.percentDone = Math.min(100, next.percentDone)
    return next
  })
}
