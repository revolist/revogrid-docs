<template>
  <Teleport to="body">
    <Transition name="demo-feedback-card">
      <aside
        :id="DEMO_FEEDBACK_ELEMENT_IDS.card"
        v-if="cardVisible && feedbackDemo"
        class="demo-feedback-card"
        data-demo-feedback-ui
        aria-labelledby="demo-feedback-card-title"
      >
        <button
          :id="DEMO_FEEDBACK_ELEMENT_IDS.cardClose"
          class="demo-feedback-card-close"
          type="button"
          :aria-label="DEMO_FEEDBACK_COPY.card.closeLabel"
          @click="dismissCard"
        >
          <VPImage :image="{ src: 'plus.svg' }" aria-hidden="true" />
        </button>
        <p class="demo-feedback-card-kicker">{{ DEMO_FEEDBACK_COPY.card.kicker }}</p>
        <p id="demo-feedback-card-title" class="demo-feedback-card-title">
          {{ DEMO_FEEDBACK_COPY.card.title(feedbackDemo.title) }}
        </p>
        <div
          class="demo-feedback-card-actions"
          :aria-label="DEMO_FEEDBACK_COPY.card.title(feedbackDemo.title)"
        >
          <button
            v-for="option in DEMO_FEEDBACK_CARD_OPTIONS"
            :key="option.code"
            :id="DEMO_FEEDBACK_ELEMENT_IDS.cardResponse(option.code)"
            type="button"
            @click="handleCardAnswer(option.code)"
          >
            {{ option.label }}
          </button>
        </div>
        <button
          :id="DEMO_FEEDBACK_ELEMENT_IDS.cardResponse(DEMO_FEEDBACK_BROWSING_OPTION.code)"
          class="demo-feedback-card-browsing"
          type="button"
          @click="handleCardAnswer(DEMO_FEEDBACK_BROWSING_OPTION.code)"
        >
          {{ DEMO_FEEDBACK_BROWSING_OPTION.label }}
        </button>
      </aside>
    </Transition>
  </Teleport>

  <DemoFeedbackFlow
    :is-visible="flowVisible"
    :demo="feedbackDemo"
    :initial-primary-answer="initialPrimaryAnswer"
    :submission-state="submissionState"
    :error-message="errorMessage"
    @close="closeFlow"
    @submit="submitDetailedAnswer"
    @next-action="takeNextAction"
  />
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import type { CatalogDemo, DemoId } from '../../commercial/productCatalog'
import DemoFeedbackFlow, { type DemoFeedbackFlowCloseReason } from './DemoFeedbackFlow.vue'
import VPImage from './VPImage.vue'
import {
  DEMO_FEEDBACK_BROWSING_OPTION,
  DEMO_FEEDBACK_CARD_OPTIONS,
  DEMO_FEEDBACK_COOLDOWN_STORAGE_KEY,
  DEMO_FEEDBACK_COPY,
  DEMO_FEEDBACK_ELEMENT_IDS,
  DEMO_FEEDBACK_INTERACTION_EVENTS,
  DEMO_FEEDBACK_MIN_TIME_MS,
  DEMO_FEEDBACK_PROMPT_SPACING_MS,
  DEMO_FEEDBACK_SESSION_STORAGE_KEY,
  DEMO_FEEDBACK_SURVEY_VERSION,
  DEMO_FEEDBACK_TRIGGER,
  addDemoVisibleTime,
  canRequestDemoFeedback,
  createDemoFeedbackAnalyticsProperties,
  createInitialDemoFeedbackAnswers,
  createDemoFeedbackPayload,
  createDemoFeedbackSessionId,
  deriveDemoFeedbackTrafficSource,
  dismissDemoFeedback,
  evaluateDemoFeedbackEligibility,
  getDemoByPath,
  getDemoVisibleTime,
  getDemosViewedInSession,
  getPrimaryAnswerForCardResponse,
  isDemoFeedbackConversionCta,
  markDemoFeedbackCooldown,
  markDemoFeedbackShown,
  parseDemoFeedbackCooldownState,
  parseDemoFeedbackSession,
  recordDemoFeedbackAnalyticsKey,
  recordDemoInteraction,
  recordDemoView,
  serializeDemoFeedbackCooldownState,
  serializeDemoFeedbackSession,
  setDemoFeedbackCardResponse,
  setDemoFeedbackPrimaryAnswer,
  shouldRestoreDemoFeedbackCard,
  submitDemoFeedback,
  suppressDemoFeedbackForCta,
  type DemoFeedbackAction,
  type DemoFeedbackAnalyticsEvent,
  type DemoFeedbackAnalyticsProperties,
  type DemoFeedbackAnswers,
  type DemoFeedbackCardResponse,
  type DemoFeedbackCooldownState,
  type DemoFeedbackPayload,
  type DemoFeedbackPrimaryAnswer,
  type DemoFeedbackSessionContext,
  type DemoFeedbackSessionState,
} from './demoFeedback'

type SubmissionState = 'idle' | 'submitting' | 'succeeded' | 'error'
type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> }

const route = useRoute()
const cardVisible = ref(false)
const flowVisible = ref(false)
const feedbackDemo = ref<CatalogDemo | null>(null)
const initialPrimaryAnswer = ref<DemoFeedbackPrimaryAnswer | undefined>()
const submissionState = ref<SubmissionState>('idle')
const errorMessage = ref('')

const featureEnabled = ['1', 'true', 'yes'].includes(
  (import.meta.env.VITE_DEMO_FEEDBACK_ENABLED || '').toLowerCase(),
)
const contactApiUrl = (import.meta.env.VITE_API_URL || '').trim()

let isActive = false
let storage: Storage | null = null
let cooldownStorage: Storage | null = null
let feedbackState: DemoFeedbackSessionState
let feedbackCooldownState: DemoFeedbackCooldownState
let activeDemoId: DemoId | undefined
let activeStartedAt: number | null = null
let eligibilityTimer: number | undefined
let gridObserver: MutationObserver | null = null
let activeAbortController: AbortController | null = null
const observedGrids = new Set<HTMLElement>()

const interactionEventNames = Object.keys(DEMO_FEEDBACK_INTERACTION_EVENTS)
const directGridHandlers = new Map<HTMLElement, Map<string, EventListener>>()

const createSessionContext = (): DemoFeedbackSessionContext => ({
  anonymousSessionId: createDemoFeedbackSessionId(Date.now(), Math.random()),
  landingPage: `${window.location.pathname}${window.location.search}`.slice(0, 500),
  trafficSource: deriveDemoFeedbackTrafficSource(window.location.href, document.referrer),
})

const getBrowserStorage = (kind: 'sessionStorage' | 'localStorage'): Storage | null => {
  try {
    const candidate = window[kind]
    const probeKey = `${DEMO_FEEDBACK_SESSION_STORAGE_KEY}:${kind}:probe`
    candidate.setItem(probeKey, '1')
    candidate.removeItem(probeKey)
    return candidate
  } catch {
    return null
  }
}

const disable = () => {
  isActive = false
  storage = null
  cooldownStorage = null
  cardVisible.value = false
  flowVisible.value = false
  if (eligibilityTimer !== undefined) window.clearTimeout(eligibilityTimer)
}

const persistState = (): boolean => {
  if (!storage) return false
  try {
    storage.setItem(DEMO_FEEDBACK_SESSION_STORAGE_KEY, serializeDemoFeedbackSession(feedbackState))
    return true
  } catch {
    disable()
    return false
  }
}

const persistCooldownState = (): boolean => {
  if (!cooldownStorage) return false
  try {
    cooldownStorage.setItem(
      DEMO_FEEDBACK_COOLDOWN_STORAGE_KEY,
      serializeDemoFeedbackCooldownState(feedbackCooldownState),
    )
    return true
  } catch {
    disable()
    return false
  }
}

const activeElapsedMs = (): number => activeStartedAt === null
  ? 0
  : Math.max(0, Date.now() - activeStartedAt)

const analyticsProperties = (
  primaryAnswer?: DemoFeedbackPrimaryAnswer,
  answers?: DemoFeedbackAnswers,
  nextAction?: DemoFeedbackAction['code'],
): DemoFeedbackAnalyticsProperties | null => {
  const demo = feedbackDemo.value
  if (!demo) return null

  if (primaryAnswer) {
    return createDemoFeedbackAnalyticsProperties(createDemoFeedbackPayload({
      demo,
      state: feedbackState,
      primaryAnswer,
      ...(answers ? { answers } : {}),
      ...(nextAction ? { nextAction } : {}),
      activeDemoId,
      activeElapsedMs: activeElapsedMs(),
    }))
  }

  const engagement = feedbackState.demoEngagement[demo.id]
  return {
    survey_version: DEMO_FEEDBACK_SURVEY_VERSION,
    demo_name: demo.title,
    demo_slug: demo.id,
    demo_tier: demo.planId,
    feedback_trigger: DEMO_FEEDBACK_TRIGGER,
    ...(feedbackState.cardResponse ? { card_response: feedbackState.cardResponse } : {}),
    time_on_demo: Math.floor(((engagement?.timeMs || 0)
      + (activeDemoId === demo.id ? activeElapsedMs() : 0)) / 1000),
    demo_interactions: engagement?.interactions || 0,
    demos_viewed_in_session: getDemosViewedInSession(feedbackState),
    traffic_source: feedbackState.trafficSource,
    landing_page: feedbackState.landingPage,
    anonymous_session_id: feedbackState.anonymousSessionId,
  }
}

const pushAnalytics = (
  event: DemoFeedbackAnalyticsEvent,
  key: string,
  properties: DemoFeedbackAnalyticsProperties | null,
  extra: Record<string, unknown> = {},
) => {
  if (!properties) return
  const result = recordDemoFeedbackAnalyticsKey(feedbackState, `${properties.demo_slug}:${key}`)
  feedbackState = result.state
  persistState()
  if (!result.shouldEmit) return

  const analyticsWindow = window as DataLayerWindow
  analyticsWindow.dataLayer ??= []
  analyticsWindow.dataLayer.push({ event, ...properties, ...extra })
}

const flushActiveTime = (restart = false) => {
  if (!activeDemoId || activeStartedAt === null) return
  feedbackState = addDemoVisibleTime(feedbackState, activeDemoId, activeElapsedMs())
  activeStartedAt = restart && document.visibilityState === 'visible' ? Date.now() : null
  persistState()
}

const recordPromptOutcome = (outcome: 'dismissed' | 'submitted') => {
  const demoId = feedbackDemo.value?.id
  if (!demoId) return
  feedbackCooldownState = markDemoFeedbackCooldown(
    feedbackCooldownState,
    demoId,
    outcome,
    Date.now(),
  )
  persistCooldownState()
}

const showFeedbackCard = () => {
  if (!activeDemoId) return
  const now = Date.now()
  if (!canRequestDemoFeedback(feedbackState, activeDemoId, {
    at: now,
    cooldownState: feedbackCooldownState,
  })) return
  const demo = getDemoByPath(route.path)
  if (!demo || demo.id !== activeDemoId) return

  feedbackDemo.value = demo
  feedbackState = markDemoFeedbackShown(feedbackState, demo.id, now)
  if (!persistState()) return
  cardVisible.value = true
  pushAnalytics('demo_feedback_shown', 'shown', analyticsProperties())
}

const evaluateEligibility = () => {
  if (!isActive || !activeDemoId) return
  feedbackDemo.value = getDemoByPath(route.path) || null
  const result = evaluateDemoFeedbackEligibility(feedbackState, {
    activeDemoId,
    activeElapsedMs: activeElapsedMs(),
    at: Date.now(),
    cooldownState: feedbackCooldownState,
  })
  feedbackState = result.state
  if (result.becameEligible) {
    persistState()
    pushAnalytics('demo_feedback_eligible', 'eligible', analyticsProperties())
  }
  if (feedbackState.eligibleDemoIds.includes(activeDemoId)) showFeedbackCard()
}

const scheduleEligibilityCheck = () => {
  if (eligibilityTimer !== undefined) window.clearTimeout(eligibilityTimer)
  if (!isActive || !activeDemoId) return

  const now = Date.now()
  const nextAllowedAt = Math.max(now, (feedbackState.lastPromptedAt || 0) + DEMO_FEEDBACK_PROMPT_SPACING_MS)
  if (!canRequestDemoFeedback(feedbackState, activeDemoId, {
    at: nextAllowedAt,
    cooldownState: feedbackCooldownState,
  })) return

  const engagementRemaining = Math.max(
    0,
    DEMO_FEEDBACK_MIN_TIME_MS - getDemoVisibleTime(feedbackState, activeDemoId, activeElapsedMs()),
  )
  const spacingRemaining = Math.max(0, nextAllowedAt - now)
  const remaining = Math.max(engagementRemaining, spacingRemaining)
  eligibilityTimer = window.setTimeout(() => {
    eligibilityTimer = undefined
    evaluateEligibility()
    scheduleEligibilityCheck()
  }, remaining + 20)
}

const recordInteraction = (manipulatedData: boolean) => {
  if (!isActive || !activeDemoId || document.visibilityState !== 'visible') return
  const result = recordDemoInteraction(feedbackState, activeDemoId, {
    at: Date.now(),
    manipulatedData,
  })
  if (!result.recorded) return
  feedbackState = result.state
  persistState()
  evaluateEligibility()
  scheduleEligibilityCheck()
}

const directGridEvent = (eventName: string) => {
  const interaction = DEMO_FEEDBACK_INTERACTION_EVENTS[
    eventName as keyof typeof DEMO_FEEDBACK_INTERACTION_EVENTS
  ]
  if (interaction) recordInteraction(interaction.manipulatedData)
}

const observeGrid = (grid: HTMLElement) => {
  if (observedGrids.has(grid)) return
  observedGrids.add(grid)
  const handlers = new Map<string, EventListener>()
  for (const eventName of interactionEventNames) {
    const handler = () => directGridEvent(eventName)
    grid.addEventListener(eventName, handler)
    handlers.set(eventName, handler)
  }
  directGridHandlers.set(grid, handlers)
}

const scanForGrids = () => {
  document.querySelectorAll<HTMLElement>('revo-grid').forEach(observeGrid)
  for (const grid of observedGrids) {
    if (grid.isConnected) continue
    const handlers = directGridHandlers.get(grid)
    handlers?.forEach((handler, eventName) => grid.removeEventListener(eventName, handler))
    directGridHandlers.delete(grid)
    observedGrids.delete(grid)
  }
}

const handleDocumentInteractionEvent = (event: Event) => {
  directGridEvent(event.type)
}

const clickedElement = (event: Event): Element | null => event.target instanceof Element
  ? event.target
  : null

const handleDocumentClick = (event: MouseEvent) => {
  const target = clickedElement(event)
  if (!target || target.closest('[data-demo-feedback-ui]')) return

  const action = target.closest<HTMLElement>('a, button, [role="button"]')
  if (action) {
    const href = action instanceof HTMLAnchorElement ? action.href : action.getAttribute('data-href') || ''
    if (isDemoFeedbackConversionCta(href, action.textContent || action.getAttribute('aria-label') || '')) {
      feedbackState = suppressDemoFeedbackForCta(feedbackState)
      persistState()
      cardVisible.value = false
      if (flowVisible.value) closeFlow('close')
      scheduleEligibilityCheck()
      return
    }
  }

  if (!activeDemoId || !target.closest('.demo-main-widget')) return
  if (target.closest('button, [role="button"], select, input[type="checkbox"], input[type="radio"], input[type="range"]')) {
    recordInteraction(true)
  }
}

const handleDocumentChange = (event: Event) => {
  const target = clickedElement(event)
  if (!activeDemoId || !target?.closest('.demo-main-widget')) return
  if (target.matches('select, input')) recordInteraction(true)
}

const handleVisibilityChange = () => {
  if (document.visibilityState === 'hidden') {
    flushActiveTime(false)
    return
  }
  if (activeDemoId && activeStartedAt === null) activeStartedAt = Date.now()
  scheduleEligibilityCheck()
}

const activateRoute = async (path: string) => {
  if (!isActive) return
  flushActiveTime(false)
  const demo = getDemoByPath(path)
  activeDemoId = demo?.id
  activeStartedAt = activeDemoId && document.visibilityState === 'visible' ? Date.now() : null

  if (activeDemoId) {
    feedbackState = recordDemoView(feedbackState, activeDemoId, Date.now())
    persistState()
    await nextTick()
    scanForGrids()
    if (shouldRestoreDemoFeedbackCard(feedbackState, activeDemoId)) {
      feedbackDemo.value = demo || null
      cardVisible.value = true
    } else {
      evaluateEligibility()
    }
  }
  scheduleEligibilityCheck()
}

const dismissCard = () => {
  if (!cardVisible.value) return
  cardVisible.value = false
  feedbackState = dismissDemoFeedback(feedbackState)
  recordPromptOutcome('dismissed')
  persistState()
  pushAnalytics('demo_feedback_closed', 'closed', analyticsProperties(), { close_reason: 'card_dismissed' })
  scheduleEligibilityCheck()
}

const handleCardAnswer = (response: DemoFeedbackCardResponse) => {
  feedbackState = setDemoFeedbackCardResponse(feedbackState, response)
  cardVisible.value = false
  const primaryAnswer = getPrimaryAnswerForCardResponse(response)
  recordPrimaryAnswer(primaryAnswer)

  if (response === DEMO_FEEDBACK_BROWSING_OPTION.code) {
    completeWithoutDetails({
      primaryAnswer,
      answers: createInitialDemoFeedbackAnswers(),
    })
    return
  }

  initialPrimaryAnswer.value = primaryAnswer
  submissionState.value = 'idle'
  errorMessage.value = ''
  flowVisible.value = true
}

const closeFlow = (reason: DemoFeedbackFlowCloseReason) => {
  if (!flowVisible.value) return
  activeAbortController?.abort()
  activeAbortController = null
  flowVisible.value = false
  submissionState.value = 'idle'
  errorMessage.value = ''
  if (!feedbackState.submitted) {
    const primaryAnswer = feedbackState.primaryAnswer
    if (feedbackDemo.value && primaryAnswer) {
      const payload = createDemoFeedbackPayload({
        demo: feedbackDemo.value,
        state: feedbackState,
        primaryAnswer,
        answers: createInitialDemoFeedbackAnswers(),
        activeDemoId,
        activeElapsedMs: activeElapsedMs(),
      })
      feedbackState = submitDemoFeedback(feedbackState)
      recordPromptOutcome('submitted')
      sendPayloadInBackground(payload)
    } else {
      feedbackState = dismissDemoFeedback(feedbackState)
      recordPromptOutcome('dismissed')
    }
  }
  persistState()
  pushAnalytics('demo_feedback_closed', 'closed', analyticsProperties(feedbackState.primaryAnswer), {
    close_reason: reason,
  })
  scheduleEligibilityCheck()
}

const recordPrimaryAnswer = (answer: DemoFeedbackPrimaryAnswer) => {
  feedbackState = setDemoFeedbackPrimaryAnswer(feedbackState, answer)
  initialPrimaryAnswer.value = answer
  persistState()
  pushAnalytics(
    'demo_feedback_primary_answer',
    `primary:${answer}`,
    analyticsProperties(answer),
  )
}

const sendPayload = async (payload: DemoFeedbackPayload): Promise<void> => {
  const controller = new AbortController()
  activeAbortController = controller
  const timeout = window.setTimeout(() => controller.abort(), 5_000)
  try {
    const response = await fetch(contactApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    if (!response.ok) throw new Error(response.statusText || `Feedback request failed (${response.status})`)
  } finally {
    window.clearTimeout(timeout)
    if (activeAbortController === controller) activeAbortController = null
  }
}

const sendPayloadInBackground = (payload: DemoFeedbackPayload) => {
  const body = JSON.stringify(payload)
  try {
    if (navigator.sendBeacon?.(
      contactApiUrl,
      new Blob([body], { type: 'application/json' }),
    )) return
  } catch {
    // Fall back to keepalive fetch when Beacon is unavailable or blocked.
  }
  void fetch(contactApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch((error) => console.error('Error sending demo feedback:', error))
}

const submitDetailedAnswer = async ({
  primaryAnswer,
  answers,
}: { primaryAnswer: DemoFeedbackPrimaryAnswer, answers: DemoFeedbackAnswers }) => {
  if (!feedbackDemo.value || submissionState.value === 'submitting') return
  feedbackState = setDemoFeedbackPrimaryAnswer(feedbackState, primaryAnswer)
  persistState()
  const payload = createDemoFeedbackPayload({
    demo: feedbackDemo.value,
    state: feedbackState,
    primaryAnswer,
    answers,
    activeDemoId,
    activeElapsedMs: activeElapsedMs(),
  })
  pushAnalytics(
    'demo_feedback_detail_answer',
    `detail:${primaryAnswer}`,
    createDemoFeedbackAnalyticsProperties(payload),
  )

  submissionState.value = 'submitting'
  errorMessage.value = ''
  try {
    await sendPayload(payload)
    feedbackState = submitDemoFeedback(feedbackState)
    recordPromptOutcome('submitted')
    persistState()
    submissionState.value = 'succeeded'
  } catch (error) {
    console.error('Error sending demo feedback:', error)
    submissionState.value = 'error'
    errorMessage.value = error instanceof DOMException && error.name === 'AbortError'
      ? 'The request timed out. Please try again.'
      : 'We could not send your feedback. Please try again.'
  }
}

const completeWithoutDetails = ({
  primaryAnswer,
  answers,
}: { primaryAnswer: DemoFeedbackPrimaryAnswer, answers: DemoFeedbackAnswers }) => {
  if (!feedbackDemo.value) return
  feedbackState = setDemoFeedbackPrimaryAnswer(feedbackState, primaryAnswer)
  const payload = createDemoFeedbackPayload({
    demo: feedbackDemo.value,
    state: feedbackState,
    primaryAnswer,
    answers,
    activeDemoId,
    activeElapsedMs: activeElapsedMs(),
  })
  feedbackState = submitDemoFeedback(feedbackState)
  recordPromptOutcome('submitted')
  persistState()
  sendPayloadInBackground(payload)
  flowVisible.value = false
  pushAnalytics('demo_feedback_closed', 'closed', createDemoFeedbackAnalyticsProperties(payload), {
    close_reason: 'completed',
  })
  scheduleEligibilityCheck()
}

const takeNextAction = ({
  action,
  primaryAnswer,
  answers,
}: {
  action: DemoFeedbackAction
  primaryAnswer: DemoFeedbackPrimaryAnswer
  answers: DemoFeedbackAnswers
}) => {
  if (!feedbackDemo.value) return
  const payload = createDemoFeedbackPayload({
    demo: feedbackDemo.value,
    state: feedbackState,
    primaryAnswer,
    answers,
    nextAction: action.code,
    activeDemoId,
    activeElapsedMs: activeElapsedMs(),
  })
  pushAnalytics(
    'demo_feedback_next_action',
    `next:${action.code}`,
    createDemoFeedbackAnalyticsProperties(payload),
  )
  if (!feedbackState.submitted) {
    feedbackState = submitDemoFeedback(feedbackState)
    recordPromptOutcome('submitted')
    persistState()
    sendPayloadInBackground(payload)
  }
  flowVisible.value = false
  pushAnalytics('demo_feedback_closed', 'closed', createDemoFeedbackAnalyticsProperties(payload), {
    close_reason: 'next_action',
  })
  scheduleEligibilityCheck()
}

watch(() => route.path, (path) => {
  void activateRoute(path)
})

onMounted(() => {
  if (!featureEnabled || !contactApiUrl) return
  storage = getBrowserStorage('sessionStorage')
  cooldownStorage = getBrowserStorage('localStorage')
  if (!storage || !cooldownStorage) return

  const context = createSessionContext()
  feedbackState = parseDemoFeedbackSession(
    storage.getItem(DEMO_FEEDBACK_SESSION_STORAGE_KEY),
    context,
  )
  feedbackCooldownState = parseDemoFeedbackCooldownState(
    cooldownStorage.getItem(DEMO_FEEDBACK_COOLDOWN_STORAGE_KEY),
  )
  isActive = true
  document.addEventListener('click', handleDocumentClick, true)
  document.addEventListener('change', handleDocumentChange, true)
  document.addEventListener('visibilitychange', handleVisibilityChange)
  interactionEventNames.forEach((eventName) => {
    document.addEventListener(eventName, handleDocumentInteractionEvent, true)
  })
  gridObserver = new MutationObserver(scanForGrids)
  gridObserver.observe(document.body, { childList: true, subtree: true })
  void activateRoute(route.path)
})

onBeforeUnmount(() => {
  flushActiveTime(false)
  isActive = false
  activeAbortController?.abort()
  if (eligibilityTimer !== undefined) window.clearTimeout(eligibilityTimer)
  gridObserver?.disconnect()
  document.removeEventListener('click', handleDocumentClick, true)
  document.removeEventListener('change', handleDocumentChange, true)
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  interactionEventNames.forEach((eventName) => {
    document.removeEventListener(eventName, handleDocumentInteractionEvent, true)
  })
  directGridHandlers.forEach((handlers, grid) => {
    handlers.forEach((handler, eventName) => grid.removeEventListener(eventName, handler))
  })
  directGridHandlers.clear()
  observedGrids.clear()
})
</script>

<style lang="scss" scoped>
.demo-feedback-card {
  position: fixed;
  right: max(18px, env(safe-area-inset-right));
  bottom: max(18px, env(safe-area-inset-bottom));
  z-index: 950;
  width: min(330px, calc(100vw - 32px));
  padding: 17px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: color-mix(in srgb, var(--vp-c-bg) 96%, transparent);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.24);
  color: var(--vp-c-text-1);
  backdrop-filter: blur(12px);
}

.demo-feedback-card-kicker {
  margin: 0 34px 5px 0;
  color: var(--vp-c-brand-1);
  font-size: 0.68rem;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.demo-feedback-card-title {
  margin: 0 30px 14px 0;
  font-size: 0.98rem;
  font-weight: 650;
  line-height: 1.45;
}

.demo-feedback-card-close {
  display: grid;
  place-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;

  &:hover {
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
  }

  :deep(svg) {
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
  }
}

.demo-feedback-card-actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;

  button {
    padding: 8px 10px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
    font: inherit;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      border-color: var(--vp-c-brand-1);
      background: var(--vp-c-brand-soft);
    }

    &:focus-visible {
      outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
      outline-offset: 2px;
    }
  }
}

.demo-feedback-card-browsing {
  display: block;
  margin: 10px auto -3px;
  padding: 5px 8px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  font: inherit;
  font-size: 0.78rem;
  cursor: pointer;

  &:hover {
    color: var(--vp-c-text-1);
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--vp-c-brand-1) 30%, transparent);
    outline-offset: 2px;
  }
}

.demo-feedback-card-enter-active,
.demo-feedback-card-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.demo-feedback-card-enter-from,
.demo-feedback-card-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 560px) {
  .demo-feedback-card {
    right: 12px;
    bottom: max(12px, env(safe-area-inset-bottom));
    left: 12px;
    width: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .demo-feedback-card-enter-active,
  .demo-feedback-card-leave-active {
    transition: none;
  }
}
</style>
