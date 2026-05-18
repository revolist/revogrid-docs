export type GanttLandingAction = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
  target?: string
  rel?: string
  arrow?: boolean
}

export type GanttLandingPage = {
  colors: {
    accent: string
    accent2: string
    soft: string
    border: string
    darkAccent: string
    darkAccent2: string
    darkSoft: string
    darkBorder: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    actions: GanttLandingAction[]
    badges: string[]
  }
  preview: {
    enabled: boolean
    title: string
    pills: { label: string, active?: boolean }[]
    liveLabel?: string
  }
  statsAriaLabel: string
  stats: { value: string, label: string }[]
  features: {
    id: string
    kicker: string
    title: string
    description: string
    items: { icon: string, title: string, description: string, tags: string[] }[]
  }
  integrations: {
    id: string
    kicker: string
    title: string
    description: string
    items: { icon: string, name: string, badge?: string }[]
  }
  advancedCallout?: {
    title: string
    sectionId?: string
  }
  cta?: {
    title: string
    description: string
    primaryHref: string
    primaryLabel: string
    secondaryHref: string
    secondaryLabel: string
  }
}

export const DEFAULT_GANTT_PAGE: GanttLandingPage = {
  colors: {
    accent: '#1d4ed8',
    accent2: '#3b82f6',
    soft: 'rgba(29, 78, 216, 0.09)',
    border: 'rgba(29, 78, 216, 0.22)',
    darkAccent: '#60a5fa',
    darkAccent2: '#93c5fd',
    darkSoft: 'rgba(96, 165, 250, 0.14)',
    darkBorder: 'rgba(96, 165, 250, 0.28)',
  },
  hero: {
    eyebrow: 'RevoGrid Pro / Gantt',
    title: 'The interactive Gantt your app deserves.',
    description: 'Production-ready project scheduling for SaaS, ERP, and operations platforms. Drag-to-reschedule tasks, assign owners, track progress, and embed it as a native product feature.',
    actions: [
      { label: 'Try live demo', href: 'https://rv-grid.com/demo/gantt', arrow: true },
      { label: 'Get Pro', href: 'https://rv-grid.com/pricing/', variant: 'secondary', target: '_blank', rel: 'noopener' },
    ],
    badges: ['Drag to reschedule', 'Inline assignees', 'Progress bars', 'Milestones'],
  },
  preview: {
    enabled: true,
    title: 'gantt-planning.revogrid.ts',
    pills: [
      { label: 'Basic plan', active: true },
      { label: 'Assignees' },
    ],
    liveLabel: 'Live',
  },
  statsAriaLabel: 'Gantt product stats',
  stats: [
    { value: '10K+', label: 'tasks at 60fps' },
    { value: '1', label: 'Component' },
    { value: 'Unlimited', label: 'nested task groups' },
    { value: '5', label: 'framework targets' },
  ],
  features: {
    id: 'features',
    kicker: 'Features',
    title: 'Everything a production Gantt needs.',
    description: 'Built for applications where planning data is part of the product, not a static report.',
    items: [
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
    ],
  },
  integrations: {
    id: 'integrations',
    kicker: 'Integrations',
    title: 'Works with your stack',
    description: 'One scheduling component with framework bindings for the RevoGrid ecosystem.',
    items: [
      { icon: 'JS', name: 'JavaScript', badge: '' },
      { icon: 'Vue', name: 'Vue', badge: '' },
      { icon: 'React', name: 'React', badge: '' },
      { icon: 'Ng', name: 'Angular', badge: '' },
      { icon: 'Sv', name: 'Svelte', badge: '' },
    ],
  },
  advancedCallout: {
    title: 'Gantt is part of the Pro Advanced bundle.',
  },
  cta: {
    title: 'Ship Gantt as a feature, not a project.',
    description: 'Embed RevoGrid Gantt in your product and keep the scheduling experience under your control.',
    primaryHref: 'https://rv-grid.com/demo/gantt',
    primaryLabel: 'Try live demo',
    secondaryHref: '/pricing',
    secondaryLabel: 'View Pro pricing',
  },
}

export function mergeGanttPageConfig(config: Partial<GanttLandingPage> = {}): GanttLandingPage {
  return {
    ...DEFAULT_GANTT_PAGE,
    ...config,
    colors: { ...DEFAULT_GANTT_PAGE.colors, ...config.colors },
    hero: { ...DEFAULT_GANTT_PAGE.hero, ...config.hero },
    preview: { ...DEFAULT_GANTT_PAGE.preview, ...config.preview },
    features: { ...DEFAULT_GANTT_PAGE.features, ...config.features },
    integrations: { ...DEFAULT_GANTT_PAGE.integrations, ...config.integrations },
    advancedCallout: config.advancedCallout === null
      ? undefined
      : { ...DEFAULT_GANTT_PAGE.advancedCallout, ...config.advancedCallout },
    cta: config.cta === null
      ? undefined
      : { ...DEFAULT_GANTT_PAGE.cta, ...config.cta },
  }
}
