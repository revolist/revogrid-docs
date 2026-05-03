<template>
  <div class="gantt-page">
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="eyebrow fade-up">
            <span class="eyebrow-dot"></span>
            RevoGrid Pro / Gantt
          </div>
          <h1 class="hero-title fade-up-2">
            The interactive Gantt your app deserves.
          </h1>
          <p class="hero-sub fade-up-3">
            Production-ready project scheduling for SaaS, ERP, and operations platforms.
            Drag-to-reschedule tasks, assign owners, track progress, and embed it as a
            native product feature.
          </p>
          <div class="hero-actions fade-up-4">
            <ProDocButton href="/demo/gantt" arrow>Try live demo</ProDocButton>
            <ProDocButton href="https://pro.rv-grid.com/guides/gantt/" variant="secondary" target="_blank" rel="noopener">Read docs</ProDocButton>
          </div>
          <div class="hero-badges fade-up-4">
            <span v-for="badge in HERO_BADGES" :key="badge">{{ badge }}</span>
          </div>
        </div>

        <ClientOnly>
          <div class="gantt-demo-wrap fade-up-3">
            <div class="gd-toolbar">
              <span class="traffic red"></span>
              <span class="traffic yellow"></span>
              <span class="traffic green"></span>
              <span class="gd-title">gantt-planning.revogrid.ts</span>
              <span class="gd-pill active">Basic plan</span>
              <span class="gd-pill">Assignees</span>
              <span class="gd-live">Live</span>
            </div>
            <div class="gantt-grid-stage">
              <RevoGrid
                ref="gridRef"
                class="gantt-preview-grid"
                hide-attribution
                :row-size="31"
                :readonly="false"
                :resize="true"
                :row-headers="false"
                :theme="isDark ? 'darkCompact' : 'compact'"
                :plugins="plugins"
                :source="tasks"
                :columns="columns"
              />
            </div>
          </div>
        </ClientOnly>
      </div>
    </section>

    <ProStatsBar :items="STATS" aria-label="Gantt product stats" />

    <section id="features" class="features">
      <div class="container">
        <div class="section-kicker">Features</div>
        <h2 class="section-title">Everything a production Gantt needs.</h2>
        <p class="section-sub">
          Built for applications where planning data is part of the product, not a static report.
        </p>

        <ProFeatureGrid :features="FEATURES" />
      </div>
    </section>

    <section id="integrations" class="integrations">
      <div class="container">
        <div class="section-kicker center">Integrations</div>
        <h2 class="section-title center">Works with your stack</h2>
        <p class="section-sub center">
          One scheduling component with framework bindings for the RevoGrid ecosystem.
        </p>
        <div class="integration-grid">
          <div v-for="integration in INTEGRATIONS" :key="integration.name" class="integration-card">
            <span class="integration-icon">{{ integration.icon }}</span>
            <strong>{{ integration.name }}</strong>
            <small>{{ integration.badge }}</small>
          </div>
        </div>
      </div>
    </section>

    <ProAdvancedCallout title="Gantt is part of the Pro Advanced bundle." />

    <ProCtaBanner
      title="Ship Gantt as a feature, not a project."
      description="Embed RevoGrid Gantt in your product and keep the scheduling experience under your control."
      primary-href="/demo/gantt"
      primary-label="Try live demo"
      secondary-href="/pro/prices"
      secondary-label="View Pro pricing"
    />
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import RevoGrid from '@revolist/vue3-datagrid'
import {
  GanttPlugin,
  createDefaultTaskTableColumn,
  type AssignmentEntity,
  type CalendarEntity,
  type GanttPluginConfig,
  type ResourceEntity,
  type TaskEntity,
} from '@revolist/revogrid-enterprise'
import ProAdvancedCallout from './pro/ProAdvancedCallout.vue'
import ProCtaBanner from './pro/ProCtaBanner.vue'
import ProDocButton from './pro/ProDocButton.vue'
import ProFeatureGrid from './pro/ProFeatureGrid.vue'
import ProStatsBar from './pro/ProStatsBar.vue'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

const HERO_BADGES = [
  'Drag to reschedule',
  'Inline assignees',
  'Progress bars',
  'Milestones',
]

const STATS = [
  { value: '10K+', label: 'tasks at 60fps' },
  { value: '1', label: 'Component' },
  { value: 'Unlimited', label: 'nested task groups' },
  { value: '5', label: 'framework targets' },
]

const FEATURES = [
  {
    icon: '01',
    title: 'Interactive scheduling',
    description: 'Drag bars to reschedule tasks, resize durations, and update rows without leaving the grid context.',
    tags: ['Drag and drop', 'Resize', 'Touch support'],
  },
  {
    icon: '02',
    title: 'Task dependencies',
    description: 'Model finish-to-start, start-to-start, finish-to-finish, and start-to-finish relationships.',
    tags: ['FS / SS / FF / SF', 'Connectors', 'Auto update'],
  },
  {
    icon: '03',
    title: 'Critical path analysis',
    description: 'Highlight the sequence of tasks that determines the minimum delivery timeline.',
    tags: ['Critical path', 'Float', 'Status colors'],
  },
  {
    icon: '04',
    title: 'Resource tracking',
    description: 'Assign multiple people per task and expose workload context directly in the schedule.',
    tags: ['Assignees', 'Teams', 'Workload'],
  },
  {
    icon: '05',
    title: 'Cost and progress',
    description: 'Track cost, start dates, completion percent, and group-level progress in one synchronized view.',
    tags: ['Cost columns', 'Progress bars', 'Groups'],
  },
  {
    icon: '06',
    title: 'Plugin API',
    description: 'Customize cells, columns, toolbar actions, and context menus with the RevoGrid Pro plugin API.',
    tags: ['Custom renderers', 'Toolbar SDK', 'Column types'],
  },
] as const

const INTEGRATIONS = [
  { icon: 'JS', name: 'JavaScript', badge: '' },
  { icon: 'Vue', name: 'Vue', badge: '' },
  { icon: 'React', name: 'React', badge: '' },
  { icon: 'Ng', name: 'Angular', badge: '' },
  { icon: 'Sv', name: 'Svelte', badge: '' },
]

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

const ganttConfig: GanttPluginConfig = {
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

const calendars: CalendarEntity[] = [
  {
    id: GANTT_CALENDAR_ID,
    name: 'Standard',
    timeZone: 'UTC',
    workingDays: [1, 2, 3, 4, 5],
    holidays: [],
    hoursPerDay: 8,
  },
]

const tasks: LandingTask[] = [
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

const resources: ResourceEntity[] = [
  { id: 'am', name: 'Ava Morgan', role: 'Product', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 120 },
  { id: 'mk', name: 'Maks Kim', role: 'Backend', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 110 },
  { id: 'ns', name: 'Nina Stone', role: 'Design', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 95 },
  { id: 'jd', name: 'Jon Diaz', role: 'Frontend', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 105 },
  { id: 'rp', name: 'Ravi Patel', role: 'QA', calendarId: GANTT_CALENDAR_ID, allocationCapacity: 100, hourlyCost: 90 },
]

const assignments: AssignmentEntity[] = [
  { id: 'asg-launch', taskId: 'launch', resourceId: 'am', allocationUnits: 50, responsibility: 'Owner' },
  { id: 'asg-backend', taskId: 'backend', resourceId: 'mk', allocationUnits: 100, responsibility: 'Owner' },
  { id: 'asg-design', taskId: 'design', resourceId: 'ns', allocationUnits: 100, responsibility: 'Owner' },
  { id: 'asg-frontend', taskId: 'frontend', resourceId: 'jd', allocationUnits: 100, responsibility: 'Owner' },
  { id: 'asg-iac', taskId: 'iac', resourceId: 'mk', allocationUnits: 50, responsibility: 'Support' },
  { id: 'asg-pipeline', taskId: 'pipeline', resourceId: 'mk', allocationUnits: 75, responsibility: 'Owner' },
  { id: 'asg-test-plan', taskId: 'test-plan', resourceId: 'rp', allocationUnits: 100, responsibility: 'Owner' },
  { id: 'asg-integration-tests', taskId: 'integration-tests', resourceId: 'rp', allocationUnits: 100, responsibility: 'Owner' },
]

const columns = [
  taskColumn('name', 230, { name: 'Task' }),
]

const { isDark } = useData()
const plugins = ref([GanttPlugin])
const gridRef = ref<(InstanceType<typeof RevoGrid> & { $el?: HTMLRevoGridElement }) | HTMLRevoGridElement | null>(null)
let applyFrame = 0

function getGridEl(): HTMLRevoGridElement | null {
  const refValue = gridRef.value
  if (!refValue) return null
  return '$el' in refValue ? refValue.$el ?? null : refValue
}

function applyGanttProperties() {
  const grid = getGridEl()
  if (!grid) return

  grid.ganttCalendars = calendars
  grid.ganttDependencies = []
  grid.ganttResources = resources
  grid.ganttAssignments = assignments
  grid.gantt = ganttConfig
}

onMounted(async () => {
  await nextTick()
  applyFrame = requestAnimationFrame(applyGanttProperties)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(applyFrame)
})
</script>

<style lang="scss" scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-up { animation: fadeUp 0.6s ease both; }
.fade-up-2 { animation: fadeUp 0.6s 0.08s ease both; }
.fade-up-3 { animation: fadeUp 0.6s 0.16s ease both; }
.fade-up-4 { animation: fadeUp 0.6s 0.24s ease both; }

.gantt-page {
  --gantt-accent: #1d4ed8;
  --gantt-accent-2: #3b82f6;
  --gantt-soft: rgba(29, 78, 216, 0.09);
  --gantt-accent-border: rgba(29, 78, 216, 0.22);
  --pro-doc-accent: var(--gantt-accent);
  --pro-doc-accent-2: var(--gantt-accent-2);
  --pro-doc-soft: var(--gantt-soft);
  --pro-doc-accent-border: var(--gantt-accent-border);
  --gantt-border: var(--vp-c-divider);
  --gantt-card: var(--vp-c-bg-soft);
  --gantt-panel: var(--vp-c-bg);
  --pro-doc-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --pro-doc-shadow-lg: 0 18px 48px rgba(0, 0, 0, 0.1), 0 6px 18px rgba(0, 0, 0, 0.06);
  color: var(--vp-c-text-1);
}

:global(.dark) .gantt-page {
  --gantt-accent: #60a5fa;
  --gantt-accent-2: #93c5fd;
  --gantt-soft: rgba(96, 165, 250, 0.14);
  --gantt-accent-border: rgba(96, 165, 250, 0.28);
  --pro-doc-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.32);
  --pro-doc-shadow-lg: 0 26px 80px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.28);
}

:global(.gantt-page-doc .VPDoc) {
  padding-top: 0;
}

.container,
.container-sm {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
}

.container-sm {
  max-width: 1040px;
}

.hero {
  position: relative;
  padding: 112px 0 88px;
}

.hero .container {
  max-width: 1400px;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(400px, 0.85fr) minmax(720px, 1.65fr);
  gap: 36px;
  align-items: center;

  @media (max-width: 1160px) {
    grid-template-columns: 1fr;
  }
}

.eyebrow,
.section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gantt-accent);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow {
  padding: 5px 13px;
  margin-bottom: 22px;
  border: 1px solid var(--gantt-accent-border);
  border-radius: 999px;
  background: var(--gantt-soft);
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gantt-accent);
}

.hero-title {
  max-width: 680px;
  margin: 0 0 22px;
  font-size: clamp(40px, 5.2vw, 68px);
  font-weight: 760;
  line-height: 1.04;
  letter-spacing: -2px;
}

.hero-sub {
  max-width: 600px;
  margin: 0 0 32px;
  color: var(--vp-c-text-2);
  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 26px;

  span {
    padding: 7px 11px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    color: var(--vp-c-text-2);
    background: var(--vp-c-bg-soft);
    font-size: 12px;
    font-weight: 600;
  }
}

.gantt-demo-wrap {
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  box-shadow: var(--pro-doc-shadow-lg);

  &::before {
    content: '';
    display: block;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, var(--gantt-accent) 35%, var(--gantt-accent-2) 65%, transparent 100%);
  }
}

.gd-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 9px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.traffic {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.red { background: #ff5f57; }
.yellow { background: #febc2e; }
.green { background: #28c840; }

.gd-title {
  flex: 1;
  margin-left: 4px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 11px;
  min-width: 0;
}

.gd-pill,
.gd-live {
  padding: 3px 8px;
  border-radius: 5px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  white-space: nowrap;
}

.gd-pill.active,
.gd-live {
  color: var(--gantt-accent);
  border-color: var(--gantt-accent-border);
  background: var(--gantt-soft);
}

.gantt-grid-stage {
  height: clamp(520px, 58vh, 640px);
  min-width: 0;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.gantt-preview-grid {
  width: 100%;
  height: 100%;
}

.gantt-grid-stage :deep(revo-grid) {
  width: 100%;
  height: 100%;
}

.gantt-grid-stage :deep(.main-viewport),
.gantt-grid-stage :deep(.viewports) {
  height: 100% !important;
  min-height: 100% !important;
  min-width: 0;
}

.gantt-grid-stage :deep(revogr-viewport-scroll) {
  height: 100% !important;
  min-height: 100% !important;
}

.gantt-grid-stage :deep(.vertical-inner) {
  height: 100% !important;
  min-height: 100% !important;
}

.gantt-grid-stage :deep(.rgCell),
.gantt-grid-stage :deep(.rgHeaderCell) {
  color: var(--revo-grid-text);
  padding-right: 8px;
  padding-left: 8px;
}

.gantt-grid-stage :deep(.rgCell) {
  font-size: 13px;
}

.gantt-grid-stage :deep(.rgHeaderCell) {
  font-size: 12px;
}

.gantt-grid-stage :deep(revo-grid[theme='darkCompact']) {
  --revo-grid-background: #17191f;
  --revo-grid-header-bg: #1f222a;
  --revo-grid-header-color: rgba(248, 250, 252, 0.92);
  --revo-grid-text: rgba(248, 250, 252, 0.9);
  --revo-grid-cell-border: rgba(148, 163, 184, 0.22);
  --revo-grid-header-border: rgba(148, 163, 184, 0.24);
  --revo-grid-row-hover: rgba(96, 165, 250, 0.1);
}

.features,
.integrations {
  padding: 92px 0;
  border-top: 1px solid var(--vp-c-divider);
}

.section-title {
  max-width: 660px;
  margin: 12px 0 14px;
  color: var(--vp-c-text-1);
  font-size: clamp(30px, 3.6vw, 46px);
  font-weight: 760;
  line-height: 1.08;
  letter-spacing: -1.4px;
}

.section-sub {
  max-width: 560px;
  margin: 0 0 48px;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1.7;
}

.center {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.integration-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.integration-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  text-align: center;

  strong {
    color: var(--vp-c-text-1);
    font-size: 14px;
  }

  small {
    color: var(--vp-c-text-3);
    font-family: var(--vp-font-family-mono);
  }
}

.integration-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  color: var(--gantt-accent);
  background: var(--gantt-soft);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 900;
}

@media (max-width: 620px) {
  .hero {
    padding-top: 76px;
  }

  .gd-pill {
    display: none;
  }

  .gantt-grid-stage {
    height: 480px;
    overflow-x: auto;
  }
}
</style>
