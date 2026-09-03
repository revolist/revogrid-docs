export interface ExcelLinkContent {
  label: string
  href: string
}

export interface ExcelFeatureNoteContent {
  title: string
  detail: string
}

export type ExcelUseCaseId = 'ops' | 'report' | 'plan' | 'saas'

export interface ExcelSectionContent {
  index: string
  title: string
  description: string
}

export interface ExcelLandingContent {
  hero: {
    product: string
    eyebrow: string
    titleAccent: string
    titleLine: string
    snap: string
    description: string
    primary: ExcelLinkContent
    secondary: ExcelLinkContent
    facts: Array<{ value: string; label: string }>
    aside: string
    previewLabel: string
  }
  workflowNav: {
    title: string
    description: string
    items: Array<{ number: string; id: string; title: string; detail: string }>
  }
  clipboard: ExcelSectionContent & { action: string; notes: ExcelFeatureNoteContent[] }
  editing: ExcelSectionContent & {
    keyboardTitle: string
    keys: Array<{ key: string; detail: string }>
    eventTitle: string
    eventDetail: string
  }
  filtering: ExcelSectionContent & { modeLabel: string; caption: string }
  structure: ExcelSectionContent & { notes: ExcelFeatureNoteContent[] }
  grouping: ExcelSectionContent & { caption: string }
  tree: ExcelSectionContent & { sourceTitle: string; sourceDetail: string }
  scale: ExcelSectionContent & {
    titleLine: string
    metrics: Array<{ value: string; label: string }>
    controlTitle: string
    controls: string[]
  }
  remote: ExcelSectionContent & { notes: ExcelFeatureNoteContent[] }
  positioning: ExcelSectionContent & {
    spreadsheet: { label: string; title: string; items: string[] }
    revogrid: { label: string; title: string; items: string[] }
  }
  developer: ExcelSectionContent & {
    gettingStarted: string
    extensions: Array<{ icon: string; title: string; detail: string }>
  }
  useCases: {
    title: string
    description: string
    items: Array<{ id: ExcelUseCaseId; title: string; detail: string }>
  }
  capability: ExcelSectionContent & {
    groups: Array<{ tier: string; title: string; items: string[] }>
    noteTitle: string
    noteDetail: string
  }
  closing: {
    eyebrow: string
    title: string
    description: string
    primary: ExcelLinkContent
    secondary: ExcelLinkContent
    footnote: string
  }
}
