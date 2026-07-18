import {
  PRODUCT_CATALOG,
  getPlan,
  type CatalogDemo,
  type DemoId,
  type PlanId,
} from '../../commercial/productCatalog'

export const DEMO_FEEDBACK_SESSION_STORAGE_KEY = 'revogrid:demo-evaluation-feedback:v1'
export const DEMO_FEEDBACK_COOLDOWN_STORAGE_KEY = 'revogrid:demo-evaluation-feedback:cooldowns:v1'
export const DEMO_FEEDBACK_SURVEY_VERSION = 'demo-evaluation-v4'
export const DEMO_FEEDBACK_STATE_VERSION = 1 as const
export const DEMO_FEEDBACK_COOLDOWN_STATE_VERSION = 1 as const
export const DEMO_FEEDBACK_MIN_TIME_MS = 30_000
export const DEMO_FEEDBACK_MAX_PROMPTS_PER_SESSION = 2
export const DEMO_FEEDBACK_PROMPT_SPACING_MS = 120_000
export const DEMO_FEEDBACK_DEMO_COOLDOWN_MS = 30 * 24 * 60 * 60 * 1_000
export const DEMO_FEEDBACK_INTERACTION_DEDUPE_MS = 350
export const DEMO_FEEDBACK_TEXT_MAX_LENGTH = 200
export const DEMO_FEEDBACK_TRIGGER = 'engagement_card' as const

export const DEMO_FEEDBACK_PRIMARY_OPTIONS = [
  { code: 'ready_to_try', label: 'I’m ready to try it in my app' },
  { code: 'needs_more_information', label: 'I need to check a few things first' },
  { code: 'comparing_options', label: 'I’m comparing it with other options' },
  { code: 'not_a_fit', label: 'It’s not a fit for my project' },
  { code: 'just_exploring', label: 'I’m just exploring' },
] as const

export const DEMO_FEEDBACK_CARD_OPTIONS = [
  { code: 'yes', label: 'Yes' },
  { code: 'not_yet', label: 'Not yet' },
  { code: 'no', label: 'No' },
] as const

export const DEMO_FEEDBACK_BROWSING_OPTION = {
  code: 'just_browsing',
  label: 'Just browsing',
} as const

export const DEMO_FEEDBACK_NOT_FIT_OPTIONS = [
  { code: 'missing_feature', label: 'A feature I need' },
  { code: 'use_case_mismatch', label: 'It doesn’t match my use case' },
  { code: 'integration_difficult', label: 'Integration looks difficult' },
  { code: 'performance_concern', label: 'Performance concerns' },
  { code: 'pricing_licensing', label: 'Pricing or licensing' },
  { code: 'demo_unclear_broken', label: 'The demo was unclear or didn’t work' },
] as const

export const DEMO_FEEDBACK_NOT_FIT_FOLLOW_UPS = {
  missing_feature: { label: 'Which feature were you looking for?' },
  use_case_mismatch: { label: 'What are you building?' },
  integration_difficult: { label: 'Which framework are you using?' },
  performance_concern: { label: 'What data size do you need to handle?' },
  pricing_licensing: { label: 'What would you like to know about pricing or licensing?' },
  demo_unclear_broken: { label: 'What happened?' },
} as const satisfies Record<DemoFeedbackNotFitReason, { label: string }>

export const DEMO_FEEDBACK_ROW_VOLUME_OPTIONS = [
  { code: 'under_100k', label: 'Under 100K' },
  { code: '100k_to_1m', label: '100K–1M' },
  { code: 'over_1m', label: 'More than 1M' },
  { code: 'not_sure', label: 'Not sure yet' },
] as const

export const DEMO_FEEDBACK_DEMO_CONFIG = {
  'grid-at-scale': {
    docsUrl: '/guide/',
    verificationOptions: [
      { code: 'performance_data_volume', label: 'Try it with my own data volume' },
      { code: 'operations_under_load', label: 'Check editing, filtering and grouping' },
      { code: 'framework_integration', label: 'See an integration example' },
      { code: 'core_pro_differences', label: 'Understand open source vs Pro' },
      { code: 'pricing_licensing', label: 'Review pricing and licensing' },
    ],
  },
  'project-tracker': {
    docsUrl: '/pro/',
    verificationOptions: [
      { code: 'project_data_performance', label: 'Try it with my own project data' },
      { code: 'custom_cells_statuses', label: 'Check custom cells, editors and statuses' },
      { code: 'framework_integration', label: 'See an integration example' },
      { code: 'core_pro_differences', label: 'Understand open source vs Pro' },
      { code: 'pricing_licensing', label: 'Review pricing and licensing' },
    ],
  },
  excel: {
    docsUrl: '/pro/',
    verificationOptions: [
      { code: 'xlsx_import_export', label: 'Try it with my own workbook' },
      { code: 'formulas_calculated_cells', label: 'Check formulas and calculated cells' },
      { code: 'framework_integration', label: 'See an integration example' },
      { code: 'core_pro_differences', label: 'Understand open source vs Pro' },
      { code: 'pricing_licensing', label: 'Review pricing and licensing' },
    ],
  },
  ecommerce: {
    docsUrl: '/pro/',
    verificationOptions: [
      { code: 'own_dataset_performance', label: 'Try it with my own commerce data' },
      { code: 'advanced_filter_group', label: 'Check advanced filtering and grouping' },
      { code: 'framework_custom_cells', label: 'See a framework integration example' },
      { code: 'core_pro_differences', label: 'Understand open source vs Pro' },
      { code: 'pricing_licensing', label: 'Review pricing and licensing' },
    ],
  },
  pivot: {
    docsUrl: '/pivot/',
    verificationOptions: [
      { code: 'own_data', label: 'Try Pivot with my own data' },
      { code: 'custom_aggregations_totals', label: 'Check custom aggregations and totals' },
      { code: 'app_integration', label: 'See an integration example' },
      { code: 'core_pro_differences', label: 'Understand open source vs Pro' },
      { code: 'pricing_licensing', label: 'Review pricing and licensing' },
    ],
  },
  gantt: {
    docsUrl: '/gantt',
    verificationOptions: [
      { code: 'own_project_data', label: 'Try it with my own project data' },
      { code: 'dependencies_scheduling', label: 'Check dependencies and scheduling logic' },
      { code: 'app_integration', label: 'See an integration example' },
      { code: 'core_pro_differences', label: 'Understand open source vs Pro' },
      { code: 'pricing_licensing', label: 'Review pricing and licensing' },
    ],
  },
  'event-scheduler': {
    docsUrl: '/event-scheduler',
    verificationOptions: [
      { code: 'own_event_data', label: 'Try it with my own event data' },
      { code: 'recurring_multi_resource', label: 'Check recurring and multi-resource events' },
      { code: 'app_integration', label: 'See an integration example' },
      { code: 'core_pro_differences', label: 'Understand open source vs Pro' },
      { code: 'pricing_licensing', label: 'Review pricing and licensing' },
    ],
  },
} as const satisfies Record<DemoId, {
  docsUrl: string
  verificationOptions: readonly { code: string, label: string }[]
}>

export const DEMO_FEEDBACK_COPY = {
  card: {
    kicker: 'One quick follow-up',
    title: (demoName: string) => `Did ${demoName} show what you needed?`,
    closeLabel: 'Dismiss demo feedback',
  },
  ready: {
    title: 'Great! How would you like to continue?',
  },
  needsInformation: {
    title: 'What do you still need to check?',
    description: 'Select all that apply.',
    rowVolume: 'Approximately how many rows do you need to handle?',
  },
  notFit: {
    title: 'What would have made this demo more useful for you?',
    description: 'Choose the option that best reflects your experience.',
  },
  other: 'Would you like to tell us more?',
  submit: 'Send feedback',
  skip: 'Skip',
  done: 'Done',
  confirmation: 'Thanks — this helps us improve the RevoGrid evaluation experience.',
} as const

export type DemoFeedbackPrimaryAnswer = (typeof DEMO_FEEDBACK_PRIMARY_OPTIONS)[number]['code']
export type DemoFeedbackCardResponse =
  | (typeof DEMO_FEEDBACK_CARD_OPTIONS)[number]['code']
  | typeof DEMO_FEEDBACK_BROWSING_OPTION.code
export type DemoFeedbackNotFitReason = (typeof DEMO_FEEDBACK_NOT_FIT_OPTIONS)[number]['code']
export type DemoFeedbackRowVolume = (typeof DEMO_FEEDBACK_ROW_VOLUME_OPTIONS)[number]['code']
export type DemoFeedbackVerificationCode = {
  [K in DemoId]: (typeof DEMO_FEEDBACK_DEMO_CONFIG)[K]['verificationOptions'][number]['code']
}[DemoId]
export type DemoFeedbackOptionQuestionId = 'verification' | 'row_volume' | 'not_fit'
export type DemoFeedbackTextQuestionId = 'not_fit_follow_up'
export type DemoFeedbackTextLengthBucket = '1_50' | '51_100' | '101_200'
export type DemoFeedbackBranch = 'ready' | 'needs_information' | 'comparing' | 'not_fit' | 'complete'
export type DemoFeedbackFlowStep = 'ready' | 'needs_information' | 'not_fit' | 'confirmation'
export type DemoFeedbackNextAction =
  | 'start_pro_trial'
  | 'use_open_source'
  | 'explore_pro_features'
  | 'view_documentation'
export type DemoFeedbackAnalyticsEvent =
  | 'demo_feedback_eligible'
  | 'demo_feedback_shown'
  | 'demo_feedback_primary_answer'
  | 'demo_feedback_detail_answer'
  | 'demo_feedback_next_action'
  | 'demo_feedback_closed'

export const DEMO_FEEDBACK_ELEMENT_IDS = {
  card: 'demo-feedback-card',
  cardClose: 'demo-feedback-card-close',
  flow: 'demo-feedback-flow',
  flowClose: 'demo-feedback-flow-close',
  done: 'demo-feedback-done',
  question: {
    verification: 'demo-feedback-question-verification',
    rowVolume: 'demo-feedback-question-row-volume',
    notFit: 'demo-feedback-question-not-fit',
  },
  step: (step: DemoFeedbackFlowStep) => `demo-feedback-step-${step}`,
  cardResponse: (response: DemoFeedbackCardResponse) => `demo-feedback-card-response-${response}`,
  verificationOption: (code: DemoFeedbackVerificationCode) => `demo-feedback-verification-option-${code}`,
  verification: (code: DemoFeedbackVerificationCode) => `demo-feedback-verification-${code}`,
  rowVolumeOption: (code: DemoFeedbackRowVolume) => `demo-feedback-row-volume-option-${code}`,
  rowVolume: (code: DemoFeedbackRowVolume) => `demo-feedback-row-volume-${code}`,
  notFitOption: (reason: DemoFeedbackNotFitReason) => `demo-feedback-not-fit-option-${reason}`,
  notFit: (reason: DemoFeedbackNotFitReason) => `demo-feedback-not-fit-${reason}`,
  followUpLabel: (reason: DemoFeedbackNotFitReason) => `demo-feedback-follow-up-label-${reason}`,
  followUp: (reason: DemoFeedbackNotFitReason) => `demo-feedback-follow-up-${reason}`,
  submit: (step: DemoFeedbackFlowStep) => `demo-feedback-submit-${step}`,
  skip: (step: DemoFeedbackFlowStep) => `demo-feedback-skip-${step}`,
  nextAction: (action: DemoFeedbackNextAction) => `demo-feedback-next-action-${action}`,
} as const

export interface DemoFeedbackDemoEngagement {
  timeMs: number
  interactions: number
  manipulatedData: boolean
  viewedAt: number
  lastInteractionAt?: number
}

export interface DemoFeedbackSessionState {
  version: typeof DEMO_FEEDBACK_STATE_VERSION
  anonymousSessionId: string
  landingPage: string
  trafficSource: string
  eligibleDemoIds: DemoId[]
  promptedDemoIds: DemoId[]
  lastPromptedAt?: number
  shown: boolean
  submitted: boolean
  dismissed: boolean
  ctaSuppressed: boolean
  analyticsKeys: string[]
  demoEngagement: Partial<Record<DemoId, DemoFeedbackDemoEngagement>>
  feedbackDemoId?: DemoId
  primaryAnswer?: DemoFeedbackPrimaryAnswer
  cardResponse?: DemoFeedbackCardResponse
}

export type DemoFeedbackPromptOutcome = 'dismissed' | 'submitted'

export interface DemoFeedbackCooldownEntry {
  promptedAt: number
  outcome: DemoFeedbackPromptOutcome
}

export interface DemoFeedbackCooldownState {
  version: typeof DEMO_FEEDBACK_COOLDOWN_STATE_VERSION
  demos: Partial<Record<DemoId, DemoFeedbackCooldownEntry>>
}

export interface DemoFeedbackSessionContext {
  anonymousSessionId: string
  landingPage: string
  trafficSource: string
}

export interface DemoFeedbackAnswers {
  verificationAnswers: DemoFeedbackVerificationCode[]
  rowVolume?: DemoFeedbackRowVolume
  comparison?: string
  notFitReason?: DemoFeedbackNotFitReason
  freeText?: string
}

export interface DemoFeedbackOptionSelection {
  questionId: DemoFeedbackOptionQuestionId
  answerCode: DemoFeedbackVerificationCode | DemoFeedbackRowVolume | DemoFeedbackNotFitReason
  isSelected: boolean
}

export interface DemoFeedbackTextUsage {
  questionId: DemoFeedbackTextQuestionId
  hasText: true
  textLengthBucket: DemoFeedbackTextLengthBucket
}

export type DemoFeedbackOptionAnalyticsContext = Pick<
  DemoFeedbackAnalyticsProperties,
  'demo_slug' | 'demo_tier' | 'time_on_demo' | 'demo_interactions'
>

export interface DemoFeedbackAction {
  code: DemoFeedbackNextAction
  label: string
  href?: string
  external?: boolean
  primary?: boolean
}

export interface DemoFeedbackReadyBranch {
  title: string
  actions: DemoFeedbackAction[]
}

export interface DemoFeedbackPayload {
  requestType: 'contact'
  requestLabel: 'Demo feedback'
  applicationInfo: string
  surveyVersion: typeof DEMO_FEEDBACK_SURVEY_VERSION
  demoName: string
  demoSlug: DemoId
  demoTier: PlanId
  demoPath: string
  feedbackTrigger: typeof DEMO_FEEDBACK_TRIGGER
  cardResponse?: DemoFeedbackCardResponse
  primaryAnswer: DemoFeedbackPrimaryAnswer
  detailAnswers?: Array<DemoFeedbackVerificationCode | DemoFeedbackNotFitReason>
  freeText?: string
  expectedRowVolume?: DemoFeedbackRowVolume
  nextAction?: DemoFeedbackNextAction
  timeOnDemo: number
  demoInteractions: number
  demosViewedInSession: DemoId[]
  trafficSource: string
  landingPage: string
  anonymousSessionId: string
}

export interface CreateDemoFeedbackPayloadOptions {
  demo: CatalogDemo
  state: DemoFeedbackSessionState
  primaryAnswer: DemoFeedbackPrimaryAnswer
  answers?: DemoFeedbackAnswers
  nextAction?: DemoFeedbackNextAction
  activeDemoId?: DemoId
  activeElapsedMs?: number
}

export interface DemoFeedbackAnalyticsProperties {
  survey_version: typeof DEMO_FEEDBACK_SURVEY_VERSION
  demo_name: string
  demo_slug: DemoId
  demo_tier: PlanId
  feedback_trigger: typeof DEMO_FEEDBACK_TRIGGER
  card_response?: DemoFeedbackCardResponse
  primary_answer?: DemoFeedbackPrimaryAnswer
  detail_answers?: Array<DemoFeedbackVerificationCode | DemoFeedbackNotFitReason>
  expected_row_volume?: DemoFeedbackRowVolume
  next_action?: DemoFeedbackNextAction
  time_on_demo: number
  demo_interactions: number
  demos_viewed_in_session: DemoId[]
  traffic_source: string
  landing_page: string
  anonymous_session_id: string
}

const knownDemoIds = new Set<DemoId>(Object.values(PRODUCT_CATALOG.demos).map(({ id }) => id))
const knownPrimaryAnswers = new Set<string>(DEMO_FEEDBACK_PRIMARY_OPTIONS.map(({ code }) => code))
const knownCardResponses = new Set<string>([
  ...DEMO_FEEDBACK_CARD_OPTIONS.map(({ code }) => code),
  DEMO_FEEDBACK_BROWSING_OPTION.code,
])
const knownNotFitReasons = new Set<string>(DEMO_FEEDBACK_NOT_FIT_OPTIONS.map(({ code }) => code))
const knownRowVolumes = new Set<string>(DEMO_FEEDBACK_ROW_VOLUME_OPTIONS.map(({ code }) => code))
const knownNextActions = new Set<string>([
  'start_pro_trial',
  'use_open_source',
  'explore_pro_features',
  'view_documentation',
])

const verificationCodesByDemo = Object.fromEntries(
  Object.entries(DEMO_FEEDBACK_DEMO_CONFIG).map(([demoId, config]) => [
    demoId,
    new Set<string>(config.verificationOptions.map(({ code }) => code)),
  ]),
) as Record<DemoId, Set<string>>

const primaryLabels = new Map<string, string>(
  DEMO_FEEDBACK_PRIMARY_OPTIONS.map(({ code, label }) => [code, label]),
)
const cardResponseLabels = new Map<string, string>(
  [...DEMO_FEEDBACK_CARD_OPTIONS, DEMO_FEEDBACK_BROWSING_OPTION]
    .map(({ code, label }) => [code, label]),
)
const notFitLabels = new Map<string, string>(
  DEMO_FEEDBACK_NOT_FIT_OPTIONS.map(({ code, label }) => [code, label]),
)

const finiteNumber = (value: unknown, fallback = 0): number =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : fallback

const finiteInteger = (value: unknown, fallback = 0): number =>
  typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : fallback

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value && typeof value === 'object' && !Array.isArray(value))

const unique = <T>(values: readonly T[]): T[] => Array.from(new Set(values))

export const normalizeDemoPath = (value: string): string => {
  try {
    const pathname = new URL(value, 'https://rv-grid.com').pathname
    return pathname === '/' ? pathname : pathname.replace(/\/+$/, '')
  } catch {
    const pathname = value.split(/[?#]/, 1)[0] || '/'
    return pathname === '/' ? pathname : pathname.replace(/\/+$/, '')
  }
}

const demosByPath = new Map<string, CatalogDemo>(
  Object.values(PRODUCT_CATALOG.demos).map((demo) => [normalizeDemoPath(demo.pageUrl), demo]),
)

export const getDemoByPath = (value: string): CatalogDemo | undefined =>
  demosByPath.get(normalizeDemoPath(value))

export const createInitialDemoFeedbackSession = (
  context: DemoFeedbackSessionContext,
): DemoFeedbackSessionState => ({
  version: DEMO_FEEDBACK_STATE_VERSION,
  anonymousSessionId: context.anonymousSessionId,
  landingPage: context.landingPage,
  trafficSource: context.trafficSource,
  eligibleDemoIds: [],
  promptedDemoIds: [],
  shown: false,
  submitted: false,
  dismissed: false,
  ctaSuppressed: false,
  analyticsKeys: [],
  demoEngagement: {},
})

export const parseDemoFeedbackSession = (
  raw: string | null,
  context: DemoFeedbackSessionContext,
): DemoFeedbackSessionState => {
  const initial = createInitialDemoFeedbackSession(context)
  if (!raw) return initial

  try {
    const candidate = JSON.parse(raw) as unknown
    if (!isRecord(candidate) || candidate.version !== DEMO_FEEDBACK_STATE_VERSION) return initial

    const demoEngagement: DemoFeedbackSessionState['demoEngagement'] = {}
    if (isRecord(candidate.demoEngagement)) {
      for (const [demoId, rawEngagement] of Object.entries(candidate.demoEngagement)) {
        if (!knownDemoIds.has(demoId as DemoId) || !isRecord(rawEngagement)) continue
        const lastInteractionAt = finiteNumber(rawEngagement.lastInteractionAt, -1)
        demoEngagement[demoId as DemoId] = {
          timeMs: finiteNumber(rawEngagement.timeMs),
          interactions: finiteInteger(rawEngagement.interactions),
          manipulatedData: rawEngagement.manipulatedData === true,
          viewedAt: finiteNumber(rawEngagement.viewedAt),
          ...(lastInteractionAt >= 0 ? { lastInteractionAt } : {}),
        }
      }
    }

    const primaryAnswer = typeof candidate.primaryAnswer === 'string'
      && knownPrimaryAnswers.has(candidate.primaryAnswer)
      ? candidate.primaryAnswer as DemoFeedbackPrimaryAnswer
      : undefined
    const cardResponse = typeof candidate.cardResponse === 'string'
      && knownCardResponses.has(candidate.cardResponse)
      ? candidate.cardResponse as DemoFeedbackCardResponse
      : undefined
    const feedbackDemoId = typeof candidate.feedbackDemoId === 'string'
      && knownDemoIds.has(candidate.feedbackDemoId as DemoId)
      ? candidate.feedbackDemoId as DemoId
      : undefined
    const eligibleDemoIds = Array.isArray(candidate.eligibleDemoIds)
      ? unique(candidate.eligibleDemoIds.filter((value): value is DemoId =>
          typeof value === 'string' && knownDemoIds.has(value as DemoId)))
      : []
    const promptedDemoIds = Array.isArray(candidate.promptedDemoIds)
      ? unique(candidate.promptedDemoIds.filter((value): value is DemoId =>
          typeof value === 'string' && knownDemoIds.has(value as DemoId)))
      : feedbackDemoId && (candidate.shown === true || candidate.submitted === true || candidate.dismissed === true)
        ? [feedbackDemoId]
        : []
    const lastPromptedAt = finiteNumber(candidate.lastPromptedAt, -1)

    return {
      version: DEMO_FEEDBACK_STATE_VERSION,
      anonymousSessionId: typeof candidate.anonymousSessionId === 'string'
        && candidate.anonymousSessionId.length <= 100
        ? candidate.anonymousSessionId
        : initial.anonymousSessionId,
      landingPage: typeof candidate.landingPage === 'string'
        ? candidate.landingPage.slice(0, 500)
        : initial.landingPage,
      trafficSource: typeof candidate.trafficSource === 'string'
        ? candidate.trafficSource.slice(0, 200)
        : initial.trafficSource,
      eligibleDemoIds,
      promptedDemoIds,
      ...(lastPromptedAt >= 0 ? { lastPromptedAt } : {}),
      shown: candidate.shown === true,
      submitted: candidate.submitted === true,
      dismissed: candidate.dismissed === true,
      ctaSuppressed: candidate.ctaSuppressed === true,
      analyticsKeys: Array.isArray(candidate.analyticsKeys)
        ? unique(candidate.analyticsKeys.filter((value): value is string =>
            typeof value === 'string' && value.length <= 100)).slice(0, 50)
        : [],
      demoEngagement,
      ...(feedbackDemoId ? { feedbackDemoId } : {}),
      ...(primaryAnswer ? { primaryAnswer } : {}),
      ...(cardResponse ? { cardResponse } : {}),
    }
  } catch {
    return initial
  }
}

export const serializeDemoFeedbackSession = (state: DemoFeedbackSessionState): string =>
  JSON.stringify(state)

export const shouldRestoreDemoFeedbackCard = (
  state: DemoFeedbackSessionState,
  demoId: DemoId,
): boolean => state.feedbackDemoId === demoId
  && state.shown
  && !state.dismissed
  && !state.submitted

export const createInitialDemoFeedbackCooldownState = (): DemoFeedbackCooldownState => ({
  version: DEMO_FEEDBACK_COOLDOWN_STATE_VERSION,
  demos: {},
})

export const parseDemoFeedbackCooldownState = (raw: string | null): DemoFeedbackCooldownState => {
  const initial = createInitialDemoFeedbackCooldownState()
  if (!raw) return initial

  try {
    const candidate = JSON.parse(raw) as unknown
    if (!isRecord(candidate) || candidate.version !== DEMO_FEEDBACK_COOLDOWN_STATE_VERSION) {
      return initial
    }

    const demos: DemoFeedbackCooldownState['demos'] = {}
    if (isRecord(candidate.demos)) {
      for (const [demoId, rawEntry] of Object.entries(candidate.demos)) {
        if (!knownDemoIds.has(demoId as DemoId) || !isRecord(rawEntry)) continue
        const promptedAt = finiteNumber(rawEntry.promptedAt, -1)
        const outcome = rawEntry.outcome
        if (
          promptedAt < 0
          || (outcome !== 'dismissed' && outcome !== 'submitted')
        ) continue
        demos[demoId as DemoId] = { promptedAt, outcome }
      }
    }
    return { version: DEMO_FEEDBACK_COOLDOWN_STATE_VERSION, demos }
  } catch {
    return initial
  }
}

export const serializeDemoFeedbackCooldownState = (state: DemoFeedbackCooldownState): string =>
  JSON.stringify(state)

const createEngagement = (viewedAt: number): DemoFeedbackDemoEngagement => ({
  timeMs: 0,
  interactions: 0,
  manipulatedData: false,
  viewedAt,
})

export const recordDemoView = (
  state: DemoFeedbackSessionState,
  demoId: DemoId,
  viewedAt: number,
): DemoFeedbackSessionState => state.demoEngagement[demoId]
  ? state
  : {
      ...state,
      demoEngagement: {
        ...state.demoEngagement,
        [demoId]: createEngagement(viewedAt),
      },
    }

export const addDemoVisibleTime = (
  state: DemoFeedbackSessionState,
  demoId: DemoId,
  elapsedMs: number,
): DemoFeedbackSessionState => {
  const current = state.demoEngagement[demoId] || createEngagement(0)
  return {
    ...state,
    demoEngagement: {
      ...state.demoEngagement,
      [demoId]: {
        ...current,
        timeMs: current.timeMs + finiteNumber(elapsedMs),
      },
    },
  }
}

export const recordDemoInteraction = (
  state: DemoFeedbackSessionState,
  demoId: DemoId,
  options: { at: number, manipulatedData: boolean },
): { state: DemoFeedbackSessionState, recorded: boolean } => {
  const current = state.demoEngagement[demoId] || createEngagement(options.at)
  if (
    current.lastInteractionAt !== undefined
    && options.at >= current.lastInteractionAt
    && options.at - current.lastInteractionAt < DEMO_FEEDBACK_INTERACTION_DEDUPE_MS
  ) {
    return { state, recorded: false }
  }

  return {
    recorded: true,
    state: {
      ...state,
      demoEngagement: {
        ...state.demoEngagement,
        [demoId]: {
          ...current,
          interactions: current.interactions + 1,
          manipulatedData: current.manipulatedData || options.manipulatedData,
          lastInteractionAt: options.at,
        },
      },
    },
  }
}

export const getDemoVisibleTime = (
  state: DemoFeedbackSessionState,
  demoId: DemoId,
  activeElapsedMs = 0,
): number => (state.demoEngagement[demoId]?.timeMs || 0) + finiteNumber(activeElapsedMs)

export const isDemoFeedbackInCooldown = (
  cooldownState: DemoFeedbackCooldownState,
  demoId: DemoId,
  at: number,
): boolean => {
  const promptedAt = cooldownState.demos[demoId]?.promptedAt
  return promptedAt !== undefined
    && (at < promptedAt || at - promptedAt < DEMO_FEEDBACK_DEMO_COOLDOWN_MS)
}

export const canRequestDemoFeedback = (
  state: DemoFeedbackSessionState,
  demoId: DemoId,
  options: { at?: number, cooldownState?: DemoFeedbackCooldownState } = {},
): boolean => {
  const at = finiteNumber(options.at)
  const currentPromptOpen = state.shown && !state.submitted && !state.dismissed
  const spacingActive = state.lastPromptedAt !== undefined
    && (at < state.lastPromptedAt || at - state.lastPromptedAt < DEMO_FEEDBACK_PROMPT_SPACING_MS)
  return !state.ctaSuppressed
    && !currentPromptOpen
    && state.promptedDemoIds.length < DEMO_FEEDBACK_MAX_PROMPTS_PER_SESSION
    && !state.promptedDemoIds.includes(demoId)
    && !spacingActive
    && !(options.cooldownState && isDemoFeedbackInCooldown(options.cooldownState, demoId, at))
}

export const evaluateDemoFeedbackEligibility = (
  state: DemoFeedbackSessionState,
  options: {
    activeDemoId?: DemoId
    activeElapsedMs?: number
    at?: number
    cooldownState?: DemoFeedbackCooldownState
  } = {},
): { state: DemoFeedbackSessionState, becameEligible: boolean } => {
  const demoId = options.activeDemoId
  if (
    !demoId
    || state.eligibleDemoIds.includes(demoId)
    || !canRequestDemoFeedback(state, demoId, options)
  ) {
    return { state, becameEligible: false }
  }

  const time = getDemoVisibleTime(state, demoId, options.activeElapsedMs)
  if (time < DEMO_FEEDBACK_MIN_TIME_MS) {
    return { state, becameEligible: false }
  }

  return {
    state: { ...state, eligibleDemoIds: [...state.eligibleDemoIds, demoId] },
    becameEligible: true,
  }
}

export const getDemosViewedInSession = (state: DemoFeedbackSessionState): DemoId[] =>
  (Object.entries(state.demoEngagement) as Array<[DemoId, DemoFeedbackDemoEngagement]>)
    .sort(([, left], [, right]) => left.viewedAt - right.viewedAt)
    .map(([demoId]) => demoId)

export const markDemoFeedbackShown = (
  state: DemoFeedbackSessionState,
  feedbackDemoId: DemoId,
  shownAt: number,
): DemoFeedbackSessionState => ({
  ...state,
  eligibleDemoIds: state.eligibleDemoIds.filter((demoId) => demoId !== feedbackDemoId),
  promptedDemoIds: unique([...state.promptedDemoIds, feedbackDemoId]),
  lastPromptedAt: finiteNumber(shownAt),
  shown: true,
  submitted: false,
  dismissed: false,
  feedbackDemoId,
  primaryAnswer: undefined,
  cardResponse: undefined,
})

export const markDemoFeedbackCooldown = (
  state: DemoFeedbackCooldownState,
  demoId: DemoId,
  outcome: DemoFeedbackPromptOutcome,
  promptedAt: number,
): DemoFeedbackCooldownState => ({
  ...state,
  demos: {
    ...state.demos,
    [demoId]: { promptedAt: finiteNumber(promptedAt), outcome },
  },
})

export const setDemoFeedbackCardResponse = (
  state: DemoFeedbackSessionState,
  cardResponse: DemoFeedbackCardResponse,
): DemoFeedbackSessionState => ({ ...state, cardResponse })

export const setDemoFeedbackPrimaryAnswer = (
  state: DemoFeedbackSessionState,
  primaryAnswer: DemoFeedbackPrimaryAnswer,
): DemoFeedbackSessionState => ({ ...state, primaryAnswer })

export const dismissDemoFeedback = (state: DemoFeedbackSessionState): DemoFeedbackSessionState => ({
  ...state,
  dismissed: true,
})

export const submitDemoFeedback = (state: DemoFeedbackSessionState): DemoFeedbackSessionState => ({
  ...state,
  submitted: true,
})

export const suppressDemoFeedbackForCta = (
  state: DemoFeedbackSessionState,
): DemoFeedbackSessionState => ({ ...state, ctaSuppressed: true })

export const recordDemoFeedbackAnalyticsKey = (
  state: DemoFeedbackSessionState,
  key: string,
): { state: DemoFeedbackSessionState, shouldEmit: boolean } => {
  if (state.analyticsKeys.includes(key)) return { state, shouldEmit: false }
  return {
    shouldEmit: true,
    state: { ...state, analyticsKeys: [...state.analyticsKeys, key].slice(-50) },
  }
}

export const getBranchForPrimaryAnswer = (
  answer: DemoFeedbackPrimaryAnswer,
): DemoFeedbackBranch => ({
  ready_to_try: 'ready',
  needs_more_information: 'needs_information',
  comparing_options: 'comparing',
  not_a_fit: 'not_fit',
  just_exploring: 'complete',
})[answer] as DemoFeedbackBranch

export const getPrimaryAnswerForCardResponse = (
  response: DemoFeedbackCardResponse,
): DemoFeedbackPrimaryAnswer => ({
  yes: 'ready_to_try',
  not_yet: 'needs_more_information',
  no: 'not_a_fit',
  just_browsing: 'just_exploring',
})[response] as DemoFeedbackPrimaryAnswer

export const createInitialDemoFeedbackAnswers = (): DemoFeedbackAnswers => ({
  verificationAnswers: [],
})

export const getDemoFeedbackVerificationOptions = (demoId: DemoId) =>
  DEMO_FEEDBACK_DEMO_CONFIG[demoId].verificationOptions

export const shouldShowRowVolumeQuestion = (
  demoId: DemoId,
  answers: readonly DemoFeedbackVerificationCode[],
): boolean => demoId === 'grid-at-scale' && answers.includes('performance_data_volume')

const withDemoAttribution = (href: string, demoId: DemoId): string => {
  const url = new URL(href, 'https://rv-grid.com')
  url.searchParams.set('source', 'demo-feedback')
  url.searchParams.set('demo', demoId)
  return url.origin === 'https://rv-grid.com'
    ? `${url.pathname}${url.search}${url.hash}`
    : url.toString()
}

export const getDemoFeedbackReadyBranch = (demo: CatalogDemo): DemoFeedbackReadyBranch => {
  if (demo.planId !== 'pro-advanced') {
    return {
      title: DEMO_FEEDBACK_COPY.ready.title,
      actions: [
        {
          code: 'use_open_source',
          label: 'Use open source',
          href: withDemoAttribution(PRODUCT_CATALOG.urls.openSourceNpm, demo.id),
          external: true,
          primary: true,
        },
        {
          code: 'explore_pro_features',
          label: 'Explore Pro features',
          href: withDemoAttribution(PRODUCT_CATALOG.urls.proFeatures, demo.id),
        },
      ],
    }
  }

  const plan = getPlan(demo.planId)
  const trialUrl = plan.trial.requestUrl || PRODUCT_CATALOG.urls.trialRequest
  return {
    title: DEMO_FEEDBACK_COPY.ready.title,
    actions: [
      {
        code: 'start_pro_trial',
        label: 'Start Pro trial',
        href: withDemoAttribution(trialUrl, demo.id),
        primary: true,
      },
      {
        code: 'view_documentation',
        label: 'View implementation guide',
        href: withDemoAttribution(DEMO_FEEDBACK_DEMO_CONFIG[demo.id].docsUrl, demo.id),
      },
    ],
  }
}

export const normalizeDemoFeedbackText = (value = ''): string =>
  value.trim().slice(0, DEMO_FEEDBACK_TEXT_MAX_LENGTH)

export const getDemoFeedbackTextLengthBucket = (
  value: string,
): DemoFeedbackTextLengthBucket | undefined => {
  const length = normalizeDemoFeedbackText(value).length
  if (length === 0) return undefined
  if (length <= 50) return '1_50'
  if (length <= 100) return '51_100'
  return '101_200'
}

const normalizedAnswers = (
  demo: CatalogDemo,
  primaryAnswer: DemoFeedbackPrimaryAnswer,
  answers: DemoFeedbackAnswers,
) => {
  if (primaryAnswer === 'needs_more_information') {
    const codes = verificationCodesByDemo[demo.id]
    return unique(answers.verificationAnswers)
      .filter((answer) => codes.has(answer)) as DemoFeedbackVerificationCode[]
  }
  if (primaryAnswer === 'not_a_fit' && answers.notFitReason
    && knownNotFitReasons.has(answers.notFitReason)) {
    return [answers.notFitReason]
  }
  return []
}

const asEmailLine = (value: string): string => value.replace(/\s+/g, ' ').trim()

const detailLabel = (
  demoId: DemoId,
  primaryAnswer: DemoFeedbackPrimaryAnswer,
  code: DemoFeedbackVerificationCode | DemoFeedbackNotFitReason,
): string => {
  const label = primaryAnswer === 'not_a_fit'
    ? notFitLabels.get(code)
    : DEMO_FEEDBACK_DEMO_CONFIG[demoId].verificationOptions
        .find((option) => option.code === code)?.label
  return label ? `${label} (${code})` : code
}

export const createDemoFeedbackApplicationInfo = (
  payload: Omit<DemoFeedbackPayload, 'applicationInfo'>,
): string => {
  const primaryLabel = primaryLabels.get(payload.primaryAnswer) || payload.primaryAnswer
  const cardLabel = payload.cardResponse
    ? cardResponseLabels.get(payload.cardResponse) || payload.cardResponse
    : 'Not answered'
  const lines = [
    'RevoGrid demo evaluation feedback',
    `Survey: ${payload.surveyVersion}`,
    `Demo: ${payload.demoName} (${payload.demoSlug})`,
    `Tier: ${payload.demoTier}`,
    `Demo page: ${payload.demoPath}`,
    `Feedback trigger: ${payload.feedbackTrigger}`,
    `Card response: ${cardLabel}${payload.cardResponse ? ` (${payload.cardResponse})` : ''}`,
    `Evaluation status: ${primaryLabel} (${payload.primaryAnswer})`,
    ...(payload.detailAnswers?.length
      ? [`Details: ${payload.detailAnswers
          .map((code) => detailLabel(payload.demoSlug, payload.primaryAnswer, code))
          .join(', ')}`]
      : []),
    ...(payload.expectedRowVolume
      ? [`Expected row volume: ${payload.expectedRowVolume}`]
      : []),
    ...(payload.freeText ? [`Visitor note: ${asEmailLine(payload.freeText)}`] : []),
    ...(payload.nextAction ? [`Next action: ${payload.nextAction}`] : []),
    `Time on selected demo: ${payload.timeOnDemo} seconds`,
    `Meaningful interactions: ${payload.demoInteractions}`,
    `Demos viewed: ${payload.demosViewedInSession.join(', ') || 'None'}`,
    `Traffic source: ${asEmailLine(payload.trafficSource)}`,
    `Landing page: ${asEmailLine(payload.landingPage)}`,
    `Anonymous session: ${asEmailLine(payload.anonymousSessionId)}`,
  ]
  return lines.join('\n')
}

export const createDemoFeedbackPayload = ({
  demo,
  state,
  primaryAnswer,
  answers = createInitialDemoFeedbackAnswers(),
  nextAction,
  activeDemoId,
  activeElapsedMs = 0,
}: CreateDemoFeedbackPayloadOptions): DemoFeedbackPayload => {
  if (!knownPrimaryAnswers.has(primaryAnswer)) throw new Error('A valid primary answer is required')
  if (nextAction && !knownNextActions.has(nextAction)) throw new Error('Invalid feedback next action')

  const engagement = state.demoEngagement[demo.id] || createEngagement(0)
  const detailAnswers = normalizedAnswers(demo, primaryAnswer, answers)
  const freeText = normalizeDemoFeedbackText(
    primaryAnswer === 'comparing_options' ? answers.comparison : answers.freeText,
  )
  const expectedRowVolume = primaryAnswer === 'needs_more_information'
    && shouldShowRowVolumeQuestion(demo.id, answers.verificationAnswers)
    && answers.rowVolume
    && knownRowVolumes.has(answers.rowVolume)
    ? answers.rowVolume
    : undefined

  const payload: Omit<DemoFeedbackPayload, 'applicationInfo'> = {
    requestType: 'contact',
    requestLabel: 'Demo feedback',
    surveyVersion: DEMO_FEEDBACK_SURVEY_VERSION,
    demoName: demo.title,
    demoSlug: demo.id,
    demoTier: demo.planId,
    demoPath: demo.pageUrl,
    feedbackTrigger: DEMO_FEEDBACK_TRIGGER,
    ...(state.cardResponse ? { cardResponse: state.cardResponse } : {}),
    primaryAnswer,
    ...(detailAnswers.length ? { detailAnswers } : {}),
    ...(freeText ? { freeText } : {}),
    ...(expectedRowVolume ? { expectedRowVolume } : {}),
    ...(nextAction ? { nextAction } : {}),
    timeOnDemo: Math.floor((engagement.timeMs
      + (activeDemoId === demo.id ? finiteNumber(activeElapsedMs) : 0)) / 1000),
    demoInteractions: engagement.interactions,
    demosViewedInSession: getDemosViewedInSession(state),
    trafficSource: state.trafficSource,
    landingPage: state.landingPage,
    anonymousSessionId: state.anonymousSessionId,
  }
  return {
    ...payload,
    applicationInfo: createDemoFeedbackApplicationInfo(payload),
  }
}

export const createDemoFeedbackAnalyticsProperties = (
  payload: DemoFeedbackPayload,
): DemoFeedbackAnalyticsProperties => ({
  survey_version: payload.surveyVersion,
  demo_name: payload.demoName,
  demo_slug: payload.demoSlug,
  demo_tier: payload.demoTier,
  feedback_trigger: payload.feedbackTrigger,
  ...(payload.cardResponse ? { card_response: payload.cardResponse } : {}),
  ...(payload.primaryAnswer ? { primary_answer: payload.primaryAnswer } : {}),
  ...(payload.detailAnswers ? { detail_answers: payload.detailAnswers } : {}),
  ...(payload.expectedRowVolume ? { expected_row_volume: payload.expectedRowVolume } : {}),
  ...(payload.nextAction ? { next_action: payload.nextAction } : {}),
  time_on_demo: payload.timeOnDemo,
  demo_interactions: payload.demoInteractions,
  demos_viewed_in_session: payload.demosViewedInSession,
  traffic_source: payload.trafficSource,
  landing_page: payload.landingPage,
  anonymous_session_id: payload.anonymousSessionId,
})

export const createDemoFeedbackOptionAnalyticsEvent = (
  context: DemoFeedbackOptionAnalyticsContext,
  selection: DemoFeedbackOptionSelection,
) => ({
  event: 'demo_feedback_option_selected' as const,
  ...context,
  question_id: selection.questionId,
  answer_code: selection.answerCode,
  is_selected: selection.isSelected,
})

export const createDemoFeedbackTextAnalyticsEvent = (
  demoSlug: DemoId,
  usage: DemoFeedbackTextUsage,
) => ({
  event: 'demo_feedback_text_used' as const,
  demo_slug: demoSlug,
  question_id: usage.questionId,
  has_text: usage.hasText,
  text_length_bucket: usage.textLengthBucket,
})

export const deriveDemoFeedbackTrafficSource = (href: string, referrer = ''): string => {
  try {
    const location = new URL(href, 'https://rv-grid.com')
    const campaignSource = location.searchParams.get('utm_source')
    if (campaignSource) return campaignSource.slice(0, 200)
    if (!referrer) return 'direct'
    return new URL(referrer, location.origin).hostname || 'direct'
  } catch {
    return 'direct'
  }
}

export const createDemoFeedbackSessionId = (
  now: number,
  randomValue: number,
): string => `demo_${Math.floor(now).toString(36)}_${Math.floor(Math.max(0, Math.min(1, randomValue)) * 0x100000000).toString(36)}`

export const isDemoFeedbackConversionCta = (href: string, label = ''): boolean => {
  if (href && getDemoByPath(href)) return false
  const normalizedLabel = label.trim().toLowerCase().replace(/\s+/g, ' ')
  if (/\b(start|request) (a )?(pro )?trial\b|\bbuy\b|\bpricing\b|\bgithub\b|\bnpm\b|\bdocs?\b|\bdocumentation\b|\binstall\b|\bget started\b/.test(normalizedLabel)) {
    return true
  }
  if (!href || href.startsWith('#')) return false
  if (href.startsWith('mailto:')) return true

  try {
    const url = new URL(href, 'https://rv-grid.com')
    if (['github.com', 'www.github.com', 'npmjs.com', 'www.npmjs.com', 'buy.stripe.com'].includes(url.hostname)) {
      return true
    }
    if (url.origin !== 'https://rv-grid.com') return false
    return /^\/(trial|pricing)(\/|$)/.test(url.pathname)
      || /^\/(guide|pro|pivot|gantt|scheduler|event-scheduler)(\/|$)/.test(url.pathname)
  } catch {
    return false
  }
}

export const DEMO_FEEDBACK_INTERACTION_EVENTS = {
  afteredit: { manipulatedData: true },
  afterfilterapply: { manipulatedData: true },
  filterconfigchanged: { manipulatedData: true },
  aftersortingapply: { manipulatedData: true },
  sortingconfigchanged: { manipulatedData: true },
  groupexpandclick: { manipulatedData: true },
  gridedit: { manipulatedData: true },
  'gantt-task-edit': { manipulatedData: false },
  'gantt-panel-resize': { manipulatedData: false },
  'gantt-zoom-in': { manipulatedData: false },
  'gantt-zoom-out': { manipulatedData: false },
  'gantt-zoom-set-level': { manipulatedData: false },
  'event-scheduler-event-created': { manipulatedData: true },
  'event-scheduler-event-changed': { manipulatedData: true },
  'event-scheduler-event-deleted': { manipulatedData: true },
  'event-scheduler-view-request': { manipulatedData: false },
  'event-scheduler-navigate-request': { manipulatedData: false },
} as const satisfies Record<string, { manipulatedData: boolean }>

export const getDemoFeedbackInteraction = (eventName: string) =>
  DEMO_FEEDBACK_INTERACTION_EVENTS[eventName as keyof typeof DEMO_FEEDBACK_INTERACTION_EVENTS]
