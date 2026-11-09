export type RevoUiProduct =
  | 'grid'
  | 'pro'
  | 'pivot'
  | 'charts'
  | 'gantt'
  | 'kanban'
  | 'scheduler'
  | 'event-scheduler'
  | 'excel'

export interface RevoUiPreviewCopy {
  eyebrow: string
  title: string
  name: string
  defaultName: string
  progress: string
  notify: string
  review: string
  save: string
  saved: string
  caption: string
}
export interface RevoUiSectionContent {
  eyebrow: string
  title: string
  description: string
  license: string
  frameworks: string
  explore: string
  github: string
  preview: RevoUiPreviewCopy
}
export type RevoUiSectionOverrides = Omit<Partial<RevoUiSectionContent>, 'preview'> & {
  preview?: Partial<RevoUiPreviewCopy>
}

const descriptions: Record<Exclude<RevoUiProduct, 'event-scheduler'>, string> = {
  grid: 'Give your data grid a complete interface. Build search bars, editing forms and settings panels with the same components used across RevoGrid.',
  pro: 'Bring the polish of RevoGrid Pro to the rest of your app. Compose filter panels, action menus and edit dialogs with one shared component library.',
  pivot:
    'Make reports easier to explore. Surround your Pivot table with clear filters, date pickers and settings panels built with Revo UI.',
  charts:
    'Give every dashboard a clear way to explore. Pair your charts with date ranges, selection controls and menus that feel like one interface.',
  gantt:
    'Build the workflow around your plan. Add task forms, date pickers, resource selectors and dialogs that feel at home beside your Gantt chart.',
  kanban:
    'Make every card easier to act on. Build card editors, assignee pickers and action menus with components that work together.',
  scheduler:
    'Turn a calendar into a complete booking experience. Add date pickers, resource selectors and clear confirmation dialogs with Revo UI.',
  excel:
    'Take the same care with the interface around your spreadsheet. Build editing forms, toolbars and settings panels with Revo UI.',
}
const defaults: RevoUiSectionContent = {
  eyebrow: 'Revo UI · Component library',
  title: 'Build the interface around your data.',
  description: descriptions.grid,
  license: 'Free · MIT licensed',
  frameworks: 'React · Vue · Angular · Svelte · Preact · TypeScript',
  explore: 'Explore Revo UI',
  github: 'View on GitHub',
  preview: {
    eyebrow: 'Try the real components',
    title: 'Workspace settings',
    name: 'Workspace name',
    defaultName: 'Customer portal',
    progress: 'Progress',
    notify: 'Notify the team',
    review: 'Ready for review',
    save: 'Save changes',
    saved: 'Changes saved for {name}.',
    caption: 'Buttons, fields, sliders and switches. Ready for your app.',
  },
}

/** Product context and optional page translations share one presentation contract. */
export function getRevoUiContent(
  product: RevoUiProduct,
  overrides: RevoUiSectionOverrides = {},
): RevoUiSectionContent {
  return {
    ...defaults,
    description: descriptions[product === 'event-scheduler' ? 'scheduler' : product],
    ...overrides,
    preview: { ...defaults.preview, ...overrides.preview },
  }
}
