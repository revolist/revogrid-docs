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
  revenue: string
  revenueChart: string
  period: string
  threeMonths: string
  sixMonths: string
  recurring: string
  oneTime: string
  invoices: string
  outstanding: string
  selectInvoice: string
  pending: string
  paid: string
  selection: string
  markPaid: string
  settled: string
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
  license: 'Open Source MIT License',
  frameworks: 'React · Vue · Angular · Svelte · Preact · TypeScript',
  explore: 'Explore Revo UI',
  github: 'View on GitHub',
  preview: {
    revenue: 'Total revenue',
    revenueChart: 'Revenue over time',
    period: 'Reporting period',
    threeMonths: '3 months',
    sixMonths: '6 months',
    recurring: 'Recurring',
    oneTime: 'One-time',
    invoices: 'Invoices',
    outstanding: 'Outstanding',
    selectInvoice: 'Select {invoice}',
    pending: 'Pending',
    paid: 'Paid',
    selection: '{count} selected · {amount}',
    markPaid: 'Mark as paid',
    settled: 'Invoices marked as paid in this example: {count}.',
    caption: 'Charts and bulk actions. Real components, working together.',
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
