import { stripeLinkWithClientReferenceId } from '../pricing-page/stripeClientReference'
import { featuresPro as proFeatureMarketing } from '../pro/features.pro'

export type Currency = 'EUR' | 'USD'
export type PlanId = 'open-source' | 'pro-lite' | 'pro-advanced' | 'enterprise'
export type PurchasablePlanId = 'pro-lite' | 'pro-advanced'
export type FeatureStatus = 'stable' | 'beta' | 'preview'
export type SupportLevel = 'community' | 'self-service' | 'priority' | 'dedicated'
export type ApplicationLimit = 'unlimited-mit' | 'one-product' | 'unlimited-products' | 'custom'
export type SourceAccess = 'public-source' | 'typed-private-packages' | 'original-private-source'
export type TrialDeliveryMethod = 'none' | 'private-npm' | 'sales-assisted'
export type ProductId = 'revogrid' | 'pivot' | 'kanban' | 'gantt' | 'scheduler' | 'event-scheduler'
export type DemoId =
  | 'grid-at-scale'
  | 'project-tracker'
  | 'excel'
  | 'audit-history'
  | 'column-collapse'
  | 'context-menu'
  | 'filtering'
  | 'infinity-scroll'
  | 'row-master'
  | 'tree-data'
  | 'pivot'
  | 'gantt'
  | 'gantt-big-data'
  | 'gantt-horizontal-big-data'
  | 'kanban'
  | 'kanban-performance'
  | 'kanban-server-loading'
  | 'event-scheduler'
  | 'planning'
export type CommercialFaqKey =
  | 'developer-licenses'
  | 'deployment-fees'
  | 'plan-difference'
  | 'open-source-production'
  | 'trial'
  | 'source-access'
  | 'application-limits'

export type PriceTimestamp = Date | number | string

export interface PeriodPrices {
  EUR: number
  USD: number
}

export interface CatalogPromotion {
  id: 'summer-sale-2026'
  planId: PurchasablePlanId
  startsAt: string
  expiresAt: string
  cutoffAt: string
  year: Partial<PeriodPrices>
  buyUrl: string
  label: string
  title: string
  description: string
  badge: string
  discountLabel: string
  priceValidUntil: string
}

export interface CatalogTrial {
  available: boolean
  durationDays?: number
  delivery: TrialDeliveryMethod
  requestUrl?: string
  boilerplateUrl?: string
  note?: string
}

export interface CatalogPlan {
  id: PlanId
  name: string
  shortName: string
  badge: string
  badgeClass: string
  yearlyPrice: PeriodPrices | 'custom'
  buyUrl?: string
  minimumPlan?: PlanId
  support: SupportLevel
  applicationLimit: ApplicationLimit
  sourceAccess: SourceAccess
  trial: CatalogTrial
  billingSummary: string
  actionLabel: string
  pricingHighlights: ReadonlyArray<{ text: string, link?: string }>
}

export interface CatalogFeatureDefinition {
  id: string
  title: string
  minimumPlan: PlanId
  status: FeatureStatus
  docsUrl?: string
  demoUrl?: string
}

export interface CatalogProduct {
  id: ProductId
  name: string
  minimumPlan: PlanId
  status: FeatureStatus
  featureId?: string
  pageUrl: string
  demoUrl?: string
  trialUrl?: string
  buyUrl?: string
}

export interface CatalogDemo {
  id: DemoId
  title: string
  planId: PlanId
  status: FeatureStatus
  pageUrl: string
}

export interface ResolvedPromotion {
  id: CatalogPromotion['id']
  label: string
  title: string
  description: string
  badge: string
  discountLabel: string
  expiresAt: string
  priceValidUntil: string
}

export interface ResolvedPlanPrice {
  month: PeriodPrices
  year: PeriodPrices
  compareAtYear?: Partial<PeriodPrices>
  link: string
  promotion?: ResolvedPromotion
}

const TRIAL_REQUEST_URL = '/trial'
const TRIAL_BOILERPLATE_URL = 'https://github.com/revolist/revogrid-pro-trial'
const CONTACT_SALES_URL = 'mailto:contact@revolist.eu'
const OPEN_SOURCE_GITHUB_URL = 'https://github.com/revolist/revogrid'
const OPEN_SOURCE_NPM_URL = 'https://www.npmjs.com/package/@revolist/revogrid'
const PRO_FEATURES_URL = '/pro/'

const plans = {
  'open-source': {
    id: 'open-source',
    name: 'Open Source',
    shortName: 'Core',
    badge: 'Core',
    badgeClass: 'core',
    yearlyPrice: { EUR: 0, USD: 0 },
    support: 'community',
    applicationLimit: 'unlimited-mit',
    sourceAccess: 'public-source',
    trial: { available: false, delivery: 'none' },
    billingSummary: 'MIT licensed · Unlimited applications with attribution',
    actionLabel: 'Explore open source',
    pricingHighlights: [
      { text: 'Public MIT source repository', link: '/guide/' },
      { text: 'Unlimited applications with attribution' },
      { text: 'Community support' },
    ],
  },
  'pro-lite': {
    id: 'pro-lite',
    name: 'Pro Lite',
    shortName: 'Lite',
    badge: 'Lite',
    badgeClass: 'pro-lite',
    yearlyPrice: { EUR: 170, USD: 199 },
    buyUrl: 'https://buy.stripe.com/3cIcN62oL6MEcWm8miew80e',
    minimumPlan: 'open-source',
    support: 'self-service',
    applicationLimit: 'one-product',
    sourceAccess: 'typed-private-packages',
    trial: {
      available: true,
      durationDays: 30,
      delivery: 'private-npm',
      requestUrl: TRIAL_REQUEST_URL,
      boilerplateUrl: TRIAL_BOILERPLATE_URL,
      note: 'The public repository is evaluation boilerplate. Pro packages are delivered through approved private npm access.',
    },
    billingSummary: '1 developer seat',
    actionLabel: 'Buy Pro Lite',
    pricingHighlights: [
      { text: 'Commercial production use' },
      { text: 'Production-ready modules and examples', link: '/pro/' },
      { text: 'One year of updates' },
    ],
  },
  'pro-advanced': {
    id: 'pro-advanced',
    name: 'Pro Advanced',
    shortName: 'Advanced',
    badge: 'Adv',
    badgeClass: 'pro-advanced',
    yearlyPrice: { EUR: 430, USD: 499 },
    buyUrl: 'https://buy.stripe.com/dRm14ofbxfja5tU6eaew80f',
    minimumPlan: 'pro-lite',
    support: 'priority',
    applicationLimit: 'unlimited-products',
    sourceAccess: 'original-private-source',
    trial: {
      available: true,
      durationDays: 30,
      delivery: 'private-npm',
      requestUrl: TRIAL_REQUEST_URL,
      boilerplateUrl: TRIAL_BOILERPLATE_URL,
      note: 'The public repository is evaluation boilerplate. Pro packages are delivered through approved private npm access.',
    },
    billingSummary: '1 developer seat · Unlimited product usage',
    actionLabel: 'Buy Pro Advanced',
    pricingHighlights: [
      { text: 'Everything in Pro Lite' },
      { text: 'Priority support and bug-fix queue' },
      { text: 'Original source code access' },
      { text: 'Pivot Table, Kanban, Gantt, Calendar, and Scheduler' },
    ],
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    shortName: 'Enterprise',
    badge: 'Ent',
    badgeClass: 'enterprise',
    yearlyPrice: 'custom',
    buyUrl: CONTACT_SALES_URL,
    minimumPlan: 'pro-advanced',
    support: 'dedicated',
    applicationLimit: 'custom',
    sourceAccess: 'original-private-source',
    trial: {
      available: true,
      delivery: 'sales-assisted',
      requestUrl: CONTACT_SALES_URL,
    },
    billingSummary: 'Custom team, procurement, and licensing terms',
    actionLabel: 'Talk to sales',
    pricingHighlights: [
      { text: 'Everything in Pro Advanced' },
      { text: 'Dedicated support' },
      { text: 'Custom contracts and invoicing' },
      { text: 'Procurement and security-review support' },
      { text: 'Custom commercial terms and product scope' },
    ],
  },
} as const satisfies Record<PlanId, CatalogPlan>

export const SUMMER_SALE_EXPIRES_AT = '2026-08-31T23:59:59Z'
export const SUMMER_SALE_CUTOFF = '2026-09-01T00:00:00Z'

const promotions: CatalogPromotion[] = [
  {
    id: 'summer-sale-2026',
    planId: 'pro-lite',
    startsAt: '2026-06-01T00:00:00Z',
    expiresAt: SUMMER_SALE_EXPIRES_AT,
    cutoffAt: SUMMER_SALE_CUTOFF,
    year: { USD: 149 },
    buyUrl: 'https://buy.stripe.com/5kQeVe8N9ef67C29qmew80g',
    label: 'Summer sale',
    title: '25% off Pro plans.',
    description: '',
    badge: '25% off summer discount',
    discountLabel: '25% off',
    priceValidUntil: '2026-08-31',
  },
  {
    id: 'summer-sale-2026',
    planId: 'pro-advanced',
    startsAt: '2026-06-01T00:00:00Z',
    expiresAt: SUMMER_SALE_EXPIRES_AT,
    cutoffAt: SUMMER_SALE_CUTOFF,
    year: { USD: 375 },
    buyUrl: plans['pro-advanced'].buyUrl,
    label: 'Summer sale',
    title: '25% off Pro plans.',
    description: '',
    badge: '25% off summer discount',
    discountLabel: '25% off',
    priceValidUntil: '2026-08-31',
  },
]

const featureFacts = [
  ['hierarchical-data-view', 'Hierarchical Data View', 'pro-lite', 'stable'],
  ['row-transpose', 'Row Transpose', 'pro-lite', 'stable'],
  ['merge-cells', 'Merge Cells', 'pro-lite', 'stable'],
  ['auto-merge', 'Auto Merge', 'pro-lite', 'stable'],
  ['column-drill-down', 'Column Collapse & Expand (Drill Down)', 'pro-lite', 'stable'],
  ['column-hide', 'Column Hide', 'pro-lite', 'stable'],
  ['column-group-reorder', 'Column Group Reorder', 'pro-lite', 'stable'],
  ['audit-trail-history', 'Audit Trail History', 'pro-lite', 'stable'],
  ['history', 'History', 'pro-lite', 'stable'],
  ['range-apply-preview', 'Range Apply Preview', 'pro-lite', 'stable'],
  ['excel-import-export', 'Excel Export/Import', 'pro-lite', 'stable'],
  ['infinite-scroll', 'Infinite Scroll', 'pro-lite', 'stable'],
  ['pagination', 'Pagination', 'pro-lite', 'stable'],
  ['pagination-remote', 'Pagination Remote', 'pro-lite', 'stable'],
  ['server-side-grouping', 'Server-side Grouping', 'pro-lite', 'stable'],
  ['formula', 'Formula', 'pro-lite', 'stable'],
  ['grouping-aggregation', 'Grouping Aggregation', 'pro-lite', 'stable'],
  ['advanced-selection-filtering', 'Advanced Selection Filtering', 'pro-lite', 'stable'],
  ['selection-filter-cascade', 'Selection Filter Cascade', 'pro-lite', 'stable'],
  ['advanced-slider-filtering', 'Advanced Slider Filtering', 'pro-lite', 'stable'],
  ['header-input-filtering', 'Header Input Filtering', 'pro-lite', 'stable'],
  ['date-filter', 'Date Filter', 'pro-lite', 'stable'],
  ['column-stretch', 'Column Stretch', 'pro-lite', 'stable'],
  ['sticky-cells-and-rows', 'Sticky Cells and Rows', 'pro-lite', 'stable'],
  ['charts', 'Charts', 'pro-lite', 'stable'],
  ['multi-cell-formatting', 'Multi-Cell Formatting', 'pro-lite', 'stable'],
  ['heat-cold-maps', 'Heat&Cold Maps', 'pro-lite', 'stable'],
  ['conditional-formatting', 'Conditional Formatting', 'pro-lite', 'stable'],
  ['nested-grid', 'Nested Grid', 'pro-lite', 'stable'],
  ['master-detail', 'Master Detail', 'pro-lite', 'stable'],
  ['cell-validation', 'Cell Validation', 'pro-lite', 'stable'],
  ['input-validation', 'Input Validation', 'pro-lite', 'stable'],
  ['clipboard-json', 'Clipboard with JSON', 'pro-lite', 'stable'],
  ['cell-flash', 'Cell Flash', 'pro-lite', 'stable'],
  ['context-menu', 'Context Menu', 'pro-lite', 'stable'],
  ['tooltip', 'Tooltip', 'pro-lite', 'stable'],
  ['row-grouping-drag-drop', 'Row Grouping Drag and Drop', 'pro-lite', 'stable'],
  ['row-auto-size', 'Row Auto Size', 'pro-lite', 'stable'],
  ['row-odd-styling', 'Row Odd Styling', 'pro-lite', 'stable'],
  ['row-custom-heading', 'Row Custom Heading', 'pro-lite', 'stable'],
  ['row-advanced-drag-drop', 'Row Advanced Drag and Drop', 'pro-lite', 'stable'],
  ['row-checkbox-selection', 'Row Checkbox Selection', 'pro-lite', 'stable'],
  ['column-selection', 'Column Selection', 'pro-lite', 'stable'],
  ['next-line-focus', 'Next Line Focus (WCAG)', 'pro-lite', 'stable'],
  ['overlay-layers', 'Overlay layers', 'pro-lite', 'stable'],
  ['smart-auto-fill', 'Smart Auto Fill', 'pro-lite', 'stable'],
  ['dynamic-form-editing', 'Dynamic Form Editing', 'pro-lite', 'stable'],
  ['full-row-editing', 'Full Row Editing', 'pro-lite', 'stable'],
  ['cell-checkbox-editors', 'Cell Checkbox Editors', 'pro-lite', 'stable'],
  ['cell-slider-editor', 'Cell Slider Editor', 'pro-lite', 'stable'],
  ['cell-counter-editor', 'Cell Counter Editor', 'pro-lite', 'stable'],
  ['timeline-editor', 'Timeline Editor', 'pro-lite', 'stable'],
  ['event-manager', 'Event Manager', 'pro-lite', 'stable'],
  ['pivot', 'Pivot Table', 'pro-advanced', 'stable'],
  ['kanban', 'Kanban', 'pro-advanced', 'stable'],
  ['gantt', 'Gantt & Scheduling', 'pro-advanced', 'stable'],
  ['event-scheduler', 'Scheduler JS', 'pro-advanced', 'stable'],
  ['collaborative-editing', 'Collaborative Editing', 'pro-lite', 'beta'],
] as const satisfies ReadonlyArray<readonly [string, string, PlanId, FeatureStatus]>

const features: CatalogFeatureDefinition[] = featureFacts.map(([id, title, minimumPlan, status]) => {
  const marketing = proFeatureMarketing.find((feature) => feature.title === title)
  return {
    id,
    title,
    minimumPlan,
    status,
    docsUrl: marketing?.link || marketing?.sponsor,
    demoUrl: marketing?.demoUrl,
  }
})

features.push({
  id: 'revogrid-mcp',
  title: 'RevoGrid MCP - AI-Native Grid Intelligence',
  minimumPlan: 'pro-lite',
  status: 'beta',
  docsUrl: '/guide/mcp',
})

const products = {
  revogrid: {
    id: 'revogrid',
    name: 'RevoGrid',
    minimumPlan: 'open-source',
    status: 'stable',
    pageUrl: '/',
    demoUrl: '/demo/',
    trialUrl: TRIAL_REQUEST_URL,
    buyUrl: '/pricing',
  },
  pivot: {
    id: 'pivot',
    name: 'RevoGrid Pivot',
    minimumPlan: 'pro-advanced',
    status: 'stable',
    featureId: 'pivot',
    pageUrl: '/pivot/',
    demoUrl: '/demo/pivot',
    trialUrl: TRIAL_REQUEST_URL,
    buyUrl: '/pricing',
  },
  kanban: {
    id: 'kanban',
    name: 'RevoKanban',
    minimumPlan: 'pro-advanced',
    status: 'stable',
    featureId: 'kanban',
    pageUrl: '/kanban',
    demoUrl: '/demo/kanban',
    trialUrl: TRIAL_REQUEST_URL,
    buyUrl: '/pricing',
  },
  gantt: {
    id: 'gantt',
    name: 'RevoGantt',
    minimumPlan: 'pro-advanced',
    status: 'stable',
    featureId: 'gantt',
    pageUrl: '/gantt',
    demoUrl: '/demo/gantt',
    trialUrl: TRIAL_REQUEST_URL,
    buyUrl: '/pricing',
  },
  scheduler: {
    id: 'scheduler',
    name: 'RevoScheduler',
    minimumPlan: 'pro-advanced',
    status: 'stable',
    featureId: 'event-scheduler',
    pageUrl: '/jsscheduler',
    demoUrl: '/demo/event-scheduler',
    trialUrl: TRIAL_REQUEST_URL,
    buyUrl: '/pricing',
  },
  'event-scheduler': {
    id: 'event-scheduler',
    name: 'RevoScheduler',
    minimumPlan: 'pro-advanced',
    status: 'stable',
    featureId: 'event-scheduler',
    pageUrl: '/jsscheduler',
    demoUrl: '/demo/event-scheduler',
    trialUrl: TRIAL_REQUEST_URL,
    buyUrl: '/pricing',
  },
} as const satisfies Record<ProductId, CatalogProduct>

const demos = {
  'grid-at-scale': { id: 'grid-at-scale', title: 'Grid at Scale', planId: 'open-source', status: 'stable', pageUrl: '/demo/' },
  'project-tracker': { id: 'project-tracker', title: 'Project Tracker', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/color' },
  excel: { id: 'excel', title: 'Excel', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/excel' },
  'audit-history': { id: 'audit-history', title: 'Audit History', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/audit-history' },
  'column-collapse': { id: 'column-collapse', title: 'Column Collapse', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/column-collapse' },
  'context-menu': { id: 'context-menu', title: 'Context Menu & Formatting', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/context-menu' },
  filtering: { id: 'filtering', title: 'Advanced Filtering', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/filtering' },
  'infinity-scroll': { id: 'infinity-scroll', title: 'Infinity Scroll', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/infinity-scroll' },
  'row-master': { id: 'row-master', title: 'Row Master', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/row-master' },
  'tree-data': { id: 'tree-data', title: 'Tree Data', planId: 'pro-lite', status: 'stable', pageUrl: '/demo/tree-data' },
  pivot: { id: 'pivot', title: 'Pivot Table Demo', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/pivot' },
  gantt: { id: 'gantt', title: 'Gantt Chart JS', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/gantt' },
  'gantt-big-data': { id: 'gantt-big-data', title: '10K-Task Gantt', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/gantt-big-data' },
  'gantt-horizontal-big-data': { id: 'gantt-horizontal-big-data', title: '20Y-Timeline Gantt', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/gantt-horizontal-big-data' },
  kanban: { id: 'kanban', title: 'Kanban Board', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/kanban' },
  'kanban-performance': { id: 'kanban-performance', title: '50K-Task Kanban', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/kanban-performance' },
  'kanban-server-loading': { id: 'kanban-server-loading', title: '100K Server-Loaded Kanban', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/kanban-server-loading' },
  'event-scheduler': { id: 'event-scheduler', title: 'Scheduler JS', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/event-scheduler' },
  planning: { id: 'planning', title: 'Grid, Kanban, Gantt & Scheduler', planId: 'pro-advanced', status: 'stable', pageUrl: '/demo/planning' },
} as const satisfies Record<DemoId, CatalogDemo>

export const PRODUCT_CATALOG = {
  plans,
  promotions,
  features,
  products,
  demos,
  urls: {
    pricing: '/pricing',
    trialRequest: TRIAL_REQUEST_URL,
    trialBoilerplate: TRIAL_BOILERPLATE_URL,
    contactSales: CONTACT_SALES_URL,
    openSourceGitHub: OPEN_SOURCE_GITHUB_URL,
    openSourceNpm: OPEN_SOURCE_NPM_URL,
    proFeatures: PRO_FEATURES_URL,
  },
} as const

const asTimestamp = (at: PriceTimestamp): number => {
  const value = at instanceof Date ? at.getTime() : new Date(at).getTime()
  return Number.isFinite(value) ? value : Number.POSITIVE_INFINITY
}

const monthlyPrices = (year: PeriodPrices): PeriodPrices => ({
  EUR: Math.round(year.EUR / 12),
  USD: Math.round(year.USD / 12),
})

export const getPlan = (planId: PlanId): CatalogPlan => PRODUCT_CATALOG.plans[planId]
export const getProduct = (productId: ProductId): CatalogProduct => PRODUCT_CATALOG.products[productId]
export const getFeature = (featureId: string): CatalogFeatureDefinition | undefined =>
  PRODUCT_CATALOG.features.find((feature) => feature.id === featureId)

export const getPlanChain = (planId: PlanId): PlanId[] => {
  const chain: PlanId[] = []
  let current: PlanId | undefined = planId
  while (current) {
    chain.unshift(current)
    current = getPlan(current).minimumPlan
  }
  return chain
}

export const planIncludesFeature = (planId: PlanId, featureId: string): boolean => {
  const feature = getFeature(featureId)
  return Boolean(feature && getPlanChain(planId).includes(feature.minimumPlan))
}

export const resolvePlanPrice = (
  planId: PurchasablePlanId,
  at: PriceTimestamp = new Date(),
): ResolvedPlanPrice => {
  const plan = PRODUCT_CATALOG.plans[planId]
  const baseYear = plan.yearlyPrice as PeriodPrices
  const timestamp = asTimestamp(at)
  const promotion = PRODUCT_CATALOG.promotions.find((candidate) =>
    candidate.planId === planId
    && timestamp >= asTimestamp(candidate.startsAt)
    && timestamp < asTimestamp(candidate.cutoffAt))

  if (!promotion) {
    return {
      month: monthlyPrices(baseYear),
      year: { ...baseYear },
      link: stripeLinkWithClientReferenceId(plan.buyUrl!),
    }
  }

  const year = { ...baseYear, ...promotion.year }
  return {
    month: monthlyPrices(year),
    year,
    compareAtYear: Object.fromEntries(
      Object.keys(promotion.year).map((currency) => [currency, baseYear[currency as Currency]]),
    ),
    link: stripeLinkWithClientReferenceId(promotion.buyUrl),
    promotion: {
      id: promotion.id,
      label: promotion.label,
      title: promotion.title,
      description: promotion.description,
      badge: promotion.badge,
      discountLabel: promotion.discountLabel,
      expiresAt: promotion.expiresAt,
      priceValidUntil: promotion.priceValidUntil,
    },
  }
}

export const formatFrameworkPricingNote = (at: PriceTimestamp = new Date()): string => {
  const lightPrice = resolvePlanPrice('pro-lite', at)
  const advancedPrice = resolvePlanPrice('pro-advanced', at)
  const lightPriceCopy = lightPrice.compareAtYear?.USD
    ? `$${lightPrice.year.USD}/year sale ($${lightPrice.compareAtYear.USD} regular)`
    : `$${lightPrice.year.USD}/year`
  const advancedPriceCopy = advancedPrice.compareAtYear?.USD
    ? `$${advancedPrice.year.USD}/year sale ($${advancedPrice.compareAtYear.USD} regular)`
    : `$${advancedPrice.year.USD}/year`

  return `Open-source core. ${plans['pro-lite'].name}: ${lightPriceCopy}. ${plans['pro-advanced'].name}: ${advancedPriceCopy}. Per-developer licensing. No deployment counting.`
}

export const getCatalogProFeatures = () => proFeatureMarketing.map((feature) => {
  const facts = PRODUCT_CATALOG.features.find((candidate) => candidate.title === feature.title)
  if (!facts) throw new Error(`Missing catalog feature facts for "${feature.title}"`)
  return {
    ...feature,
    ...facts,
    beta: facts.status === 'beta',
    preview: facts.status === 'preview',
  }
})

export const getDemoBadge = (demoId: DemoId) => {
  const demo = PRODUCT_CATALOG.demos[demoId]
  const plan = PRODUCT_CATALOG.plans[demo.planId]
  return {
    label: demo.title,
    badge: plan.badge,
    className: plan.badgeClass,
    title: plan.name,
    status: demo.status,
  }
}

export const commercialFaqs: Record<CommercialFaqKey, { q: string, a: string }> = {
  'developer-licenses': {
    q: 'How many developer licenses do I need?',
    a: 'The number of licenses must match the maximum number of concurrent front-end developers contributing to code that uses RevoGrid Pro.',
  },
  'deployment-fees': {
    q: 'Is there a deployment fee?',
    a: 'No. RevoGrid Pro pricing is based on the selected plan and developer licenses, not deployments, environments, servers, or end users.',
  },
  'plan-difference': {
    q: 'What is the difference between Pro Lite and Pro Advanced?',
    a: 'Pro Lite covers one product or app and includes typed Pro packages through private npm. Pro Advanced adds unlimited product usage, original private source repository access, the JavaScript Pivot Table, Kanban, Gantt, Scheduler, and priority support.',
  },
  'open-source-production': {
    q: 'Can I use the open-source core in production?',
    a: 'Yes. The MIT-licensed Open Source plan can be used in production, including commercial applications, subject to the documented attribution requirements.',
  },
  trial: {
    q: 'Can I evaluate RevoGrid Pro before purchasing?',
    a: `Yes. Request a 30-day trial for approved private npm access. The public trial repository is boilerplate for evaluation setup; it does not contain the Pro packages.`,
  },
  'source-access': {
    q: 'What source access is included?',
    a: 'Pro Lite includes typed private npm packages and development examples. Pro Advanced also includes access to the original private source repository.',
  },
  'application-limits': {
    q: 'How many applications can I build?',
    a: 'Pro Lite covers one product or app. Pro Advanced allows unlimited product usage. Enterprise terms can be customized for larger organizations.',
  },
}

export const resolveCommercialFaqs = (keys: CommercialFaqKey[] = []) =>
  keys.map((key) => commercialFaqs[key])

export const getProductOfferPlanIds = (productId: ProductId): PlanId[] => {
  const product = getProduct(productId)
  if (product.minimumPlan === 'open-source') return ['open-source', 'pro-lite', 'pro-advanced']
  return [product.minimumPlan]
}

export const applicationLimitLabel: Record<ApplicationLimit, string> = {
  'unlimited-mit': 'Unlimited applications under MIT terms',
  'one-product': '1 product/app',
  'unlimited-products': 'Unlimited product usage',
  custom: 'Custom product scope',
}

export const sourceAccessLabel: Record<SourceAccess, string> = {
  'public-source': 'Public MIT source repository',
  'typed-private-packages': 'Typed Pro packages via private npm',
  'original-private-source': 'Private npm plus original source repository',
}

export const supportLevelLabel: Record<SupportLevel, string> = {
  community: 'Community support',
  'self-service': 'Documentation and self-service support',
  priority: 'Priority support',
  dedicated: 'Dedicated support',
}

export const getPricingDifferenceRows = () => {
  const included = { kind: 'included' as const }
  const excluded = { kind: 'not-included' as const }

  return [
    {
      feature: {
        text: 'Advanced grid features',
        href: '/pro',
        description: 'Editing, filtering, grouping, validation, export, and workflows',
        icon: 'grid',
      },
      lite: included,
      advanced: included,
      enterprise: included,
    },
    {
      feature: {
        text: 'Pivot Table, Kanban, Gantt & Scheduler',
        icon: 'calendarDays',
        parts: [
          { text: 'Pivot Table', href: '/pivot/' },
          { text: ', ' },
          { text: 'Kanban', href: '/kanban' },
          { text: ', ' },
          { text: 'Gantt', href: '/gantt' },
          { text: ' & ' },
          { text: 'Scheduler JS', href: '/jsscheduler' },
        ],
      },
      lite: excluded,
      advanced: included,
      enterprise: included,
    },
    {
      feature: {
        text: 'Priority support',
        icon: 'headset',
      },
      lite: excluded,
      advanced: included,
      enterprise: included,
    },
    {
      feature: {
        text: 'Custom terms & onboarding',
        icon: 'users',
      },
      lite: excluded,
      advanced: excluded,
      enterprise: included,
    },
  ]
}

export const getPricingEvaluationFacts = () => {
  const openSource = getPlan('open-source')
  const advanced = getPlan('pro-advanced')
  const trialDays = advanced.trial.durationDays!

  return {
    options: [
      {
        id: 'open-source' as const,
        icon: 'code',
        eyebrow: 'Start immediately',
        heading: 'Start with the free core',
        description: 'Use the MIT-licensed RevoGrid core in your application. Free for commercial use — this is not a Pro trial.',
        features: openSource.pricingHighlights.map(({ text }) => text),
        action: { label: openSource.actionLabel, href: '/guide/' },
        recommended: false,
      },
      {
        id: 'pro-trial' as const,
        icon: 'starOutline',
        eyebrow: 'Evaluate Pro features',
        heading: 'Evaluate RevoGrid Pro',
        description: 'Test Pro functionality in your own project before purchasing. Access is provided on request.',
        features: [
          `${trialDays}-day private npm access`,
          'Pro plugins and production-ready examples',
          'Pivot Table, Kanban, Gantt, and JavaScript Scheduler',
          'Public GitHub repository is setup boilerplate only',
        ],
        action: { label: 'Request Pro Trial', href: advanced.trial.requestUrl! },
        recommended: true,
      },
    ],
  }
}

export interface CatalogFeatureTableItem {
  name: string
  planIds: PlanId[]
  nesting: number
  parent?: string
  collapsible?: boolean
  expanded?: boolean
  link?: string
  featureId?: string
}

export interface CatalogFeatureTableGroup {
  name: string
  expanded: boolean
  features: CatalogFeatureTableItem[]
}

const allPublishedPlans: PlanId[] = ['open-source', 'pro-lite', 'pro-advanced']

export const featureTableSupplementalGroups: CatalogFeatureTableGroup[] = [
  {
    name: 'Core Features',
    expanded: true,
    features: [
      { name: 'Basic Cell Formats', planIds: allPublishedPlans, nesting: 1 },
      { name: 'Text Format', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/types#String' },
      { name: 'Number Format', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/types#Number' },
      { name: 'Date Format', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/types#Date' },
      { name: 'Selection Format', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/types#Select-Dropdown' },
      { name: 'Column Features', planIds: allPublishedPlans, nesting: 1 },
      { name: 'Last Column Stretch', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/stretch' },
      { name: 'Column Groups', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/grouping' },
      { name: 'Column Resizing', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/resize' },
      { name: 'Column Autosizing', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/autosize' },
      { name: 'Column Ordering', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/order' },
      { name: 'Column Pinning', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/pin' },
      { name: 'Selection Features', planIds: allPublishedPlans, nesting: 1 },
      { name: 'Cell Range Selection', planIds: allPublishedPlans, nesting: 2 },
      { name: 'Fill Handle', planIds: allPublishedPlans, nesting: 2 },
      { name: 'Core Features', planIds: allPublishedPlans, nesting: 1 },
      { name: 'Column Virtualization', planIds: allPublishedPlans, nesting: 2, link: '/guide/viewports' },
      { name: 'Row Virtualization', planIds: allPublishedPlans, nesting: 2, link: '/guide/viewports' },
      { name: 'Keyboard Support', planIds: allPublishedPlans, nesting: 2, link: '/guide/defs#Keyboard' },
      { name: 'Intelligent Virtual DOM', planIds: allPublishedPlans, nesting: 2, link: '/guide/overview#VNode-Reactive-DOM' },
      { name: 'Basic Sorting', planIds: allPublishedPlans, nesting: 2, link: '/guide/sorting' },
      { name: 'Theme Support', planIds: allPublishedPlans, nesting: 2, link: '/guide/theme' },
      { name: 'Plugin System', planIds: allPublishedPlans, nesting: 2, link: '/guide/plugin/' },
      { name: 'Trimmed Rows', planIds: allPublishedPlans, nesting: 2, link: '/guide/row/#Trimmed-Rows' },
      { name: 'Custom Header Templates', planIds: allPublishedPlans, nesting: 2, link: '/guide/column/header.template' },
      { name: 'Custom Cell Properties', planIds: allPublishedPlans, nesting: 2, link: '/guide/cell/' },
      { name: 'Accessibility', planIds: allPublishedPlans, nesting: 2 },
      { name: 'Localization', planIds: allPublishedPlans, nesting: 2 },
    ],
  },
  {
    name: 'Advanced Support',
    expanded: true,
    features: [
      { name: 'AI Agent Support', planIds: ['pro-advanced'], nesting: 1, link: '/pro/ai' },
      { name: 'RevoGrid MCP - AI-Native Grid Intelligence', planIds: ['pro-lite', 'pro-advanced'], nesting: 1, featureId: 'revogrid-mcp' },
      { name: 'Private GitHub repository access', planIds: ['pro-advanced'], nesting: 1 },
      { name: 'Support via GitHub', planIds: ['pro-advanced'], nesting: 1 },
      { name: 'Support via Email', planIds: ['pro-advanced'], nesting: 1 },
    ],
  },
]

export const chartFeatureTableItems: CatalogFeatureTableItem[] = [
  { name: 'Charts', planIds: ['pro-lite', 'pro-advanced'], nesting: 1, collapsible: true, expanded: false, featureId: 'charts' },
  ...['Progress Line', 'Progress Line with Value', 'Sparkline', 'Bar Chart', 'Timeline', 'Rating Star', 'Badge', 'Change', 'Thumbs', 'Pie Chart']
    .map((name) => ({ name, planIds: ['pro-lite', 'pro-advanced'] as PlanId[], nesting: 2, parent: 'Charts' })),
]
