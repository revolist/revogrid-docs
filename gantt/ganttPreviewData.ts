import {
  createDefaultTaskTableColumn,
  type AssignmentEntity,
  type CalendarEntity,
  type GanttPluginConfig,
  type ResourceEntity,
  type TaskEntity,
} from '@revolist/revogrid-enterprise'

const GANTT_PROJECT_ID = 'launch-saas-product'
const GANTT_CALENDAR_ID = 'launch-standard'

type LandingTask = TaskEntity & {
  estimatedCost?: number
}

function task(data: Omit<LandingTask, 'projectId' | 'calendarId' | 'isCritical' | 'tags'> & Partial<Pick<LandingTask, 'calendarId' | 'isCritical' | 'tags'>>): LandingTask {
  return {
    ...data,
    projectId: GANTT_PROJECT_ID,
    calendarId: data.calendarId ?? GANTT_CALENDAR_ID,
    isCritical: data.isCritical ?? false,
    manuallyScheduled: data.manuallyScheduled ?? true,
    tags: data.tags ?? [],
  }
}

function taskColumn(
  prop: Parameters<typeof createDefaultTaskTableColumn>[0],
  size?: number,
  overrides: Partial<ReturnType<typeof createDefaultTaskTableColumn>> = {},
) {
  return {
    ...createDefaultTaskTableColumn(prop),
    ...(size ? { size } : {}),
    ...overrides,
  }
}

function getLandingTaskBarColor({ row }: { row: { id: string, tags?: readonly string[], taskKind?: string, assigneeDetails?: readonly unknown[] } }) {
  const hasAssignee = (row.assigneeDetails?.length ?? 0) > 0
  if (row.taskKind === 'summary') {
    return {
      className: 'gantt-bar--landing-summary',
      barColor: '#2563eb',
      progressColor: '#1d4ed8',
      textColor: '#ffffff',
      borderColor: '#1d4ed8',
    }
  }

  if (row.tags?.includes('DevOps')) {
    return {
      ...(hasAssignee ? { className: 'gantt-bar--with-assignee' } : {}),
      barColor: '#f59e0b',
      progressColor: '#d97706',
      textColor: '#111827',
      borderColor: '#d97706',
    }
  }

  if (row.tags?.includes('QA')) {
    return {
      ...(hasAssignee ? { className: 'gantt-bar--with-assignee' } : {}),
      barColor: '#8b5cf6',
      progressColor: '#7c3aed',
      textColor: '#ffffff',
      borderColor: '#7c3aed',
    }
  }

  if (row.tags?.includes('Frontend')) {
    return {
      ...(hasAssignee ? { className: 'gantt-bar--with-assignee' } : {}),
      barColor: '#14b8a6',
      progressColor: '#0f766e',
      textColor: '#ffffff',
      borderColor: '#0f766e',
    }
  }

  return {
    ...(hasAssignee ? { className: 'gantt-bar--with-assignee' } : {}),
    barColor: '#3b82f6',
    progressColor: '#2563eb',
    textColor: '#ffffff',
    borderColor: '#2563eb',
  }
}

function renderLandingTaskBarContent({ h, row, defaultContent }: any) {
  if (!row.assigneeDetails?.length || row.taskKind === 'summary') {
    return defaultContent
  }

  return [
    ...defaultContent,
    h('span', { class: { 'gantt-bar__assignee-badge': true } }, row.assigneeDetails[0].initials),
  ]
}

export const ganttConfig: GanttPluginConfig = {
  id: GANTT_PROJECT_ID,
  name: 'Launch SaaS Product',
  version: '1',
  currency: 'USD',
  timeZone: 'UTC',
  primaryCalendarId: GANTT_CALENDAR_ID,
  updatedAt: '2026-04-01T00:00:00Z',
  zoomPreset: 'day-week',
  zoom: {
    enabled: true,
    levels: [
      {
        id: 'landing-day-week',
        label: 'Day / Week',
        tickUnit: 'day',
        tickWidth: 38,
        headerRows: [
          { id: 'week', unit: 'week' },
          { id: 'day', unit: 'day' },
        ],
      },
    ],
    defaultLevelId: 'landing-day-week',
    minLevelId: 'landing-day-week',
    maxLevelId: 'landing-day-week',
  },
  scheduling: {
    taskModeDefault: 'manual',
    manualDependencyViolationBehavior: 'warn',
    excludeHolidaysFromDuration: false,
  },
  visuals: {
    showTaskLabels: true,
    showCriticalPath: false,
    shadeNonWorkingTime: true,
    projectLineDate: '2026-04-03',
    taskBarColorHook: getLandingTaskBarColor,
    taskBarContentHook: renderLandingTaskBarContent,
  },
}

export const calendars: CalendarEntity[] = [
  {
    id: GANTT_CALENDAR_ID,
    name: 'Standard',
    timeZone: 'UTC',
    workingDays: [1, 2, 3, 4, 5],
    holidays: [],
    hoursPerDay: 8,
  },
]

export const tasks: LandingTask[] = [
  task({
    id: 'launch',
    parentId: null,
    wbsCode: '1',
    name: 'Launch SaaS Product',
    type: 'summary',
    status: 'in-progress',
    startDate: '2026-04-01',
    endDate: '2026-05-09',
    durationDays: 39,
    progressPercent: 57,
    estimatedCost: 248400,
    isCritical: true,
  }),
  task({
    id: 'backend',
    parentId: 'launch',
    wbsCode: '1.1',
    name: 'Backend Setup',
    type: 'task',
    status: 'done',
    startDate: '2026-04-01',
    endDate: '2026-04-09',
    durationDays: 9,
    progressPercent: 100,
    estimatedCost: 32400,
    isCritical: true,
    tags: ['Backend'],
  }),
  task({
    id: 'design',
    parentId: 'launch',
    wbsCode: '1.2',
    name: 'Design',
    type: 'task',
    status: 'done',
    startDate: '2026-04-01',
    endDate: '2026-04-12',
    durationDays: 12,
    progressPercent: 97,
    estimatedCost: 14800,
    tags: ['Design'],
  }),
  task({
    id: 'frontend',
    parentId: 'launch',
    wbsCode: '1.3',
    name: 'Frontend Dev',
    type: 'task',
    status: 'in-progress',
    startDate: '2026-04-02',
    endDate: '2026-04-24',
    durationDays: 23,
    progressPercent: 50,
    estimatedCost: 38600,
    isCritical: true,
    tags: ['Frontend'],
  }),
  task({
    id: 'devops',
    parentId: 'launch',
    wbsCode: '1.4',
    name: 'DevOps',
    type: 'summary',
    status: 'in-progress',
    startDate: '2026-04-05',
    endDate: '2026-04-17',
    durationDays: 13,
    progressPercent: 85,
    estimatedCost: 21800,
    tags: ['DevOps'],
  }),
  task({
    id: 'iac',
    parentId: 'devops',
    wbsCode: '1.4.1',
    name: 'Infrastructure as Code',
    type: 'task',
    status: 'done',
    startDate: '2026-04-06',
    endDate: '2026-04-11',
    durationDays: 6,
    progressPercent: 100,
    estimatedCost: 7800,
    tags: ['DevOps'],
  }),
  task({
    id: 'pipeline',
    parentId: 'devops',
    wbsCode: '1.4.2',
    name: 'CI / CD Pipeline',
    type: 'task',
    status: 'in-progress',
    startDate: '2026-04-08',
    endDate: '2026-04-15',
    durationDays: 8,
    progressPercent: 80,
    estimatedCost: 5200,
    tags: ['DevOps'],
  }),
  task({
    id: 'qa',
    parentId: 'launch',
    wbsCode: '1.5',
    name: 'QA',
    type: 'summary',
    status: 'in-progress',
    startDate: '2026-04-10',
    endDate: '2026-05-08',
    durationDays: 29,
    progressPercent: 32,
    estimatedCost: 12200,
    tags: ['QA'],
  }),
  task({
    id: 'test-plan',
    parentId: 'qa',
    wbsCode: '1.5.1',
    name: 'Test Plan',
    type: 'task',
    status: 'in-progress',
    startDate: '2026-04-10',
    endDate: '2026-04-17',
    durationDays: 8,
    progressPercent: 60,
    estimatedCost: 2800,
    tags: ['QA'],
  }),
  task({
    id: 'integration-tests',
    parentId: 'qa',
    wbsCode: '1.5.2',
    name: 'Integration Tests',
    type: 'task',
    status: 'not-started',
    startDate: '2026-05-01',
    endDate: '2026-05-08',
    durationDays: 6,
    progressPercent: 20,
    estimatedCost: 3400,
    isCritical: true,
    tags: ['QA'],
  }),
]

export const resources: ResourceEntity[] = [
  { id: 'am', name: 'Ava Morgan', role: 'Product', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 120 },
  { id: 'mk', name: 'Maks Kim', role: 'Backend', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 110 },
  { id: 'ns', name: 'Nina Stone', role: 'Design', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 95 },
  { id: 'jd', name: 'Jon Diaz', role: 'Frontend', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 105 },
  { id: 'rp', name: 'Ravi Patel', role: 'QA', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 90 },
]

export const assignments: AssignmentEntity[] = [
  { id: 'asg-launch', taskId: 'launch', resourceId: 'am', allocationUnits: 50, responsibility: 'Owner' },
  { id: 'asg-backend', taskId: 'backend', resourceId: 'mk', allocationUnits: 100, responsibility: 'Owner' },
  { id: 'asg-design', taskId: 'design', resourceId: 'ns', allocationUnits: 100, responsibility: 'Owner' },
  { id: 'asg-frontend', taskId: 'frontend', resourceId: 'jd', allocationUnits: 100, responsibility: 'Owner' },
  { id: 'asg-iac', taskId: 'iac', resourceId: 'mk', allocationUnits: 50, responsibility: 'Support' },
  { id: 'asg-pipeline', taskId: 'pipeline', resourceId: 'mk', allocationUnits: 75, responsibility: 'Owner' },
  { id: 'asg-test-plan', taskId: 'test-plan', resourceId: 'rp', allocationUnits: 100, responsibility: 'Owner' },
  { id: 'asg-integration-tests', taskId: 'integration-tests', resourceId: 'rp', allocationUnits: 100, responsibility: 'Owner' },
]

export const columns = [
  taskColumn('name', 230, { name: 'Task' }),
]
