export type PivotLandingAction = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
  target?: string
  rel?: string
  arrow?: boolean
}

export type PivotLandingPage = {
  colors: {
    accent: string
    accentMid: string
    accentVivid: string
    soft: string
    border: string
    darkAccent: string
    darkAccentMid: string
    darkAccentVivid: string
    darkSoft: string
    darkBorder: string
  }
  hero: {
    eyebrow: string
    titleHighlightParts: string[]
    titleSuffix: string
    description: string
    actions: PivotLandingAction[]
    badges: string[]
  }
  preview: {
    enabled: boolean
  }
  statsAriaLabel: string
  stats: { value: string, label: string }[]
  features: {
    id: string
    kicker: string
    title: string
    description: string
    items: { icon: string, title: string, description: string, tags: string[], codeExample?: string }[]
  }
  useCases: {
    enabled: boolean
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

export type PivotLandingPageConfig = Partial<Omit<PivotLandingPage, 'advancedCallout' | 'cta'>> & {
  advancedCallout?: PivotLandingPage['advancedCallout'] | null
  cta?: PivotLandingPage['cta'] | null
}
