import assert from 'node:assert/strict'
import test from 'node:test'
import { PRODUCT_CATALOG } from '../../commercial/productCatalog'
import {
  DEMO_FEEDBACK_BROWSING_OPTION,
  DEMO_FEEDBACK_CARD_OPTIONS,
  DEMO_FEEDBACK_COPY,
  DEMO_FEEDBACK_DEMO_CONFIG,
  DEMO_FEEDBACK_ELEMENT_IDS,
  DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS,
  DEMO_FEEDBACK_GLOBAL_MAX_PROMPTS,
  DEMO_FEEDBACK_GLOBAL_WINDOW_MS,
  DEMO_FEEDBACK_MAX_PROMPTS_PER_SESSION,
  DEMO_FEEDBACK_MIN_TIME_MS,
  DEMO_FEEDBACK_NOT_FIT_OPTIONS,
  DEMO_FEEDBACK_NOT_FIT_FOLLOW_UPS,
  DEMO_FEEDBACK_PROMPT_SPACING_MS,
  DEMO_FEEDBACK_REPEATED_DISMISSAL_COOLDOWN_MS,
  DEMO_FEEDBACK_ROW_VOLUME_OPTIONS,
  DEMO_FEEDBACK_SECOND_DISMISSAL_COOLDOWN_MS,
  DEMO_FEEDBACK_SUBMITTED_COOLDOWN_MS,
  addDemoVisibleTime,
  canRequestDemoFeedback,
  createDemoFeedbackAnalyticsProperties,
  createDemoFeedbackOptionAnalyticsEvent,
  createDemoFeedbackPayload,
  createDemoFeedbackTextAnalyticsEvent,
  createInitialDemoFeedbackCooldownState,
  createInitialDemoFeedbackSession,
  dismissDemoFeedback,
  evaluateDemoFeedbackEligibility,
  getBranchForPrimaryAnswer,
  getDemoByPath,
  getDemoFeedbackReadyBranch,
  getDemoFeedbackPromptFrequencyContext,
  getDemoFeedbackTextLengthBucket,
  getDemosViewedInSession,
  getPrimaryAnswerForCardResponse,
  isDemoFeedbackConversionCta,
  isDemoFeedbackInCooldown,
  markDemoFeedbackShown,
  normalizeDemoPath,
  parseDemoFeedbackCooldownState,
  parseDemoFeedbackSession,
  recordDemoFeedbackAnalyticsKey,
  recordDemoFeedbackOutcome,
  recordDemoFeedbackPromptDisplay,
  recordDemoInteraction,
  recordDemoView,
  serializeDemoFeedbackCooldownState,
  serializeDemoFeedbackSession,
  shouldRestoreDemoFeedbackCard,
  shouldShowRowVolumeQuestion,
  submitDemoFeedback,
  suppressDemoFeedbackForCta,
  type DemoFeedbackSessionContext,
  type DemoFeedbackVerificationCode,
} from './demoFeedback'

const NOW = Date.UTC(2026, 6, 18, 12)
const context: DemoFeedbackSessionContext = {
  anonymousSessionId: 'session-test',
  landingPage: '/demo/gantt?utm_source=test',
  trafficSource: 'test',
}

const initial = () => createInitialDemoFeedbackSession(context)

test('matches only catalogued demo routes after normalizing URLs, queries, and trailing slashes', () => {
  assert.equal(normalizeDemoPath('https://rv-grid.com/demo/pivot/?source=pricing#demo'), '/demo/pivot')
  assert.equal(getDemoByPath('/demo/')?.id, 'grid-at-scale')
  assert.equal(getDemoByPath('/demo/color?from=pricing')?.id, 'project-tracker')
  assert.equal(getDemoByPath('/guide/')?.id, undefined)
  assert.equal(getDemoByPath('/pricing')?.id, undefined)
})

test('parses session state safely without ever persisting answer text', () => {
  assert.deepEqual(parseDemoFeedbackSession('{broken', context), initial())
  assert.deepEqual(parseDemoFeedbackSession(JSON.stringify({ version: 99 }), context), initial())

  let state = recordDemoView(initial(), 'gantt', NOW)
  state = recordDemoInteraction(state, 'gantt', { at: NOW + 1, manipulatedData: true }).state
  const parsed = parseDemoFeedbackSession(JSON.stringify({
    ...state,
    freeText: 'must never enter browser state',
    answers: ['secret'],
    demoEngagement: {
      ...state.demoEngagement,
      unknown: { timeMs: 1, interactions: 100 },
      pivot: { timeMs: -2, interactions: 'bad', manipulatedData: false, viewedAt: NOW + 2 },
    },
  }), context)

  assert.equal('freeText' in parsed, false)
  assert.equal('answers' in parsed, false)
  assert.equal('unknown' in parsed.demoEngagement, false)
  assert.equal(parsed.demoEngagement.pivot?.timeMs, 0)
  assert.equal(parsed.demoEngagement.pivot?.interactions, 0)
  assert.deepEqual(
    parseDemoFeedbackSession(serializeDemoFeedbackSession(parsed), context),
    parsed,
  )
})

test('requires exactly 30 seconds of visible demo time without an interaction', () => {
  const state = recordDemoView(initial(), 'gantt', NOW)

  assert.equal(DEMO_FEEDBACK_MIN_TIME_MS, 30_000)
  const tooEarly = evaluateDemoFeedbackEligibility(state, {
    activeDemoId: 'gantt',
    activeElapsedMs: 29_999,
    at: NOW + 29_999,
  })
  assert.equal(tooEarly.becameEligible, false)

  const eligible = evaluateDemoFeedbackEligibility(state, {
    activeDemoId: 'gantt',
    activeElapsedMs: 30_000,
    at: NOW + 30_000,
  })
  assert.equal(eligible.becameEligible, true)
  assert.deepEqual(eligible.state.eligibleDemoIds, ['gantt'])
  assert.equal(eligible.state.demoEngagement.gantt?.interactions, 0)
})

test('does not count hidden-tab time toward eligibility', () => {
  let state = recordDemoView(initial(), 'pivot', NOW)
  state = addDemoVisibleTime(state, 'pivot', 20_000)
  // Ten seconds hidden: no visible-time transition is recorded.
  assert.equal(evaluateDemoFeedbackEligibility(state, {
    activeDemoId: 'pivot',
    at: NOW + 30_000,
  }).becameEligible, false)

  state = addDemoVisibleTime(state, 'pivot', 10_000)
  assert.equal(evaluateDemoFeedbackEligibility(state, {
    activeDemoId: 'pivot',
    at: NOW + 40_000,
  }).becameEligible, true)
})

test('deduplicates one interaction burst and remembers data manipulation', () => {
  let state = recordDemoView(initial(), 'ecommerce', NOW)
  const first = recordDemoInteraction(state, 'ecommerce', { at: NOW + 1_000, manipulatedData: false })
  state = first.state
  const duplicate = recordDemoInteraction(state, 'ecommerce', { at: NOW + 1_100, manipulatedData: true })
  const later = recordDemoInteraction(duplicate.state, 'ecommerce', { at: NOW + 1_500, manipulatedData: true })

  assert.equal(first.recorded, true)
  assert.equal(duplicate.recorded, false)
  assert.equal(later.state.demoEngagement.ecommerce?.interactions, 2)
  assert.equal(later.state.demoEngagement.ecommerce?.manipulatedData, true)
})

test('allows two spaced prompts for different demos but never repeats one in a session', () => {
  assert.equal(DEMO_FEEDBACK_MAX_PROMPTS_PER_SESSION, 2)
  assert.equal(DEMO_FEEDBACK_PROMPT_SPACING_MS, 120_000)

  const pivotShown = markDemoFeedbackShown(initial(), 'pivot', NOW)
  assert.equal(canRequestDemoFeedback(pivotShown, 'pivot', { at: NOW }), false)
  assert.equal(canRequestDemoFeedback(pivotShown, 'gantt', {
    at: NOW + DEMO_FEEDBACK_PROMPT_SPACING_MS,
  }), false, 'an open prompt blocks another prompt')

  const pivotDismissed = dismissDemoFeedback(pivotShown)
  assert.equal(canRequestDemoFeedback(pivotDismissed, 'gantt', {
    at: NOW + DEMO_FEEDBACK_PROMPT_SPACING_MS - 1,
  }), false)
  assert.equal(canRequestDemoFeedback(pivotDismissed, 'gantt', {
    at: NOW + DEMO_FEEDBACK_PROMPT_SPACING_MS,
  }), true)

  const ganttShown = markDemoFeedbackShown(
    pivotDismissed,
    'gantt',
    NOW + DEMO_FEEDBACK_PROMPT_SPACING_MS,
  )
  const ganttSubmitted = submitDemoFeedback(ganttShown)
  assert.equal(canRequestDemoFeedback(ganttSubmitted, 'ecommerce', {
    at: NOW + (2 * DEMO_FEEDBACK_PROMPT_SPACING_MS),
  }), false, 'the session prompt ceiling applies across demos')
  assert.equal(canRequestDemoFeedback(suppressDemoFeedbackForCta(initial()), 'pivot', { at: NOW }), false)
})

test('restores an unanswered card after reload until it is dismissed or submitted', () => {
  const shown = markDemoFeedbackShown(initial(), 'pivot', NOW)
  const reloaded = parseDemoFeedbackSession(serializeDemoFeedbackSession(shown), context)

  assert.equal(shouldRestoreDemoFeedbackCard(reloaded, 'pivot'), true)
  assert.equal(shouldRestoreDemoFeedbackCard(reloaded, 'gantt'), false)
  assert.equal(shouldRestoreDemoFeedbackCard(dismissDemoFeedback(reloaded), 'pivot'), false)
  assert.equal(shouldRestoreDemoFeedbackCard(submitDemoFeedback(reloaded), 'pivot'), false)
})

const displayAndRecord = (
  state: ReturnType<typeof createInitialDemoFeedbackCooldownState>,
  demoId: 'pivot' | 'gantt' | 'ecommerce',
  outcome: 'dismissed' | 'submitted',
  at: number,
) => recordDemoFeedbackOutcome(recordDemoFeedbackPromptDisplay(state, demoId, at), demoId, outcome, at)

test('uses progressive per-demo dismissal cooldowns', () => {
  assert.equal(DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS, 24 * 60 * 60 * 1_000)
  assert.equal(DEMO_FEEDBACK_SECOND_DISMISSAL_COOLDOWN_MS, 7 * 24 * 60 * 60 * 1_000)
  assert.equal(DEMO_FEEDBACK_REPEATED_DISMISSAL_COOLDOWN_MS, 30 * 24 * 60 * 60 * 1_000)

  let cooldown = displayAndRecord(createInitialDemoFeedbackCooldownState(), 'pivot', 'dismissed', NOW)
  assert.equal(cooldown.demos.pivot?.dismissalCount, 1)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'pivot', NOW + DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS - 1), true)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'pivot', NOW + DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS), false)
  assert.equal(canRequestDemoFeedback(initial(), 'pivot', {
    at: NOW + DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS,
    cooldownState: cooldown,
  }), true, 'a fresh session can prompt again at the first-dismissal boundary')

  const secondAt = NOW + DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS
  cooldown = displayAndRecord(cooldown, 'pivot', 'dismissed', secondAt)
  assert.equal(cooldown.demos.pivot?.dismissalCount, 2)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'pivot', secondAt + DEMO_FEEDBACK_SECOND_DISMISSAL_COOLDOWN_MS - 1), true)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'pivot', secondAt + DEMO_FEEDBACK_SECOND_DISMISSAL_COOLDOWN_MS), false)

  const thirdAt = secondAt + DEMO_FEEDBACK_SECOND_DISMISSAL_COOLDOWN_MS
  cooldown = displayAndRecord(cooldown, 'pivot', 'dismissed', thirdAt)
  assert.equal(cooldown.demos.pivot?.dismissalCount, 3)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'pivot', thirdAt + DEMO_FEEDBACK_REPEATED_DISMISSAL_COOLDOWN_MS - 1), true)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'pivot', thirdAt + DEMO_FEEDBACK_REPEATED_DISMISSAL_COOLDOWN_MS), false)

  const fourthAt = thirdAt + DEMO_FEEDBACK_REPEATED_DISMISSAL_COOLDOWN_MS
  cooldown = displayAndRecord(cooldown, 'pivot', 'dismissed', fourthAt)
  assert.equal(cooldown.demos.pivot?.dismissalCount, 4)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'pivot', fourthAt + DEMO_FEEDBACK_REPEATED_DISMISSAL_COOLDOWN_MS - 1), true)
})

test('uses a 90-day submission cooldown without incrementing dismissals', () => {
  assert.equal(DEMO_FEEDBACK_SUBMITTED_COOLDOWN_MS, 90 * 24 * 60 * 60 * 1_000)
  let cooldown = displayAndRecord(createInitialDemoFeedbackCooldownState(), 'gantt', 'dismissed', NOW)
  const submittedAt = NOW + DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS
  cooldown = displayAndRecord(cooldown, 'gantt', 'submitted', submittedAt)

  assert.equal(cooldown.demos.gantt?.dismissalCount, 1)
  assert.equal(cooldown.demos.gantt?.submittedAt, submittedAt)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'gantt', submittedAt + DEMO_FEEDBACK_SUBMITTED_COOLDOWN_MS - 1), true)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'gantt', submittedAt + DEMO_FEEDBACK_SUBMITTED_COOLDOWN_MS), false)
})

test('keeps cooldown histories independent by demo with a rolling global ceiling', () => {
  assert.equal(DEMO_FEEDBACK_GLOBAL_MAX_PROMPTS, 3)
  assert.equal(DEMO_FEEDBACK_GLOBAL_WINDOW_MS, 30 * 24 * 60 * 60 * 1_000)
  let cooldown = displayAndRecord(createInitialDemoFeedbackCooldownState(), 'pivot', 'dismissed', NOW)

  assert.equal(isDemoFeedbackInCooldown(cooldown, 'pivot', NOW + 1), true)
  assert.equal(isDemoFeedbackInCooldown(cooldown, 'gantt', NOW + 1), false)
  cooldown = displayAndRecord(cooldown, 'gantt', 'dismissed', NOW + 1)
  cooldown = displayAndRecord(cooldown, 'ecommerce', 'dismissed', NOW + 2)
  assert.equal(canRequestDemoFeedback(initial(), 'grid-at-scale', {
    at: NOW + 3,
    cooldownState: cooldown,
  }), false)
  assert.equal(canRequestDemoFeedback(initial(), 'grid-at-scale', {
    at: NOW + DEMO_FEEDBACK_GLOBAL_WINDOW_MS,
    cooldownState: cooldown,
  }), true)
})

test('restoration and duplicate close handling do not create another impression or dismissal', () => {
  let cooldown = recordDemoFeedbackPromptDisplay(createInitialDemoFeedbackCooldownState(), 'pivot', NOW)
  cooldown = parseDemoFeedbackCooldownState(serializeDemoFeedbackCooldownState(cooldown))
  cooldown = recordDemoFeedbackPromptDisplay(cooldown, 'pivot', NOW)
  assert.equal(cooldown.prompts.length, 1)

  const closed = recordDemoFeedbackOutcome(cooldown, 'pivot', 'dismissed', NOW)
  const duplicate = recordDemoFeedbackOutcome(closed, 'pivot', 'dismissed', NOW)
  assert.equal(duplicate.demos.pivot?.dismissalCount, 1)
  assert.equal(duplicate.prompts.length, 1)
  assert.equal(duplicate.prompts[0]?.outcome, 'dismissed')

  const shownAnalytics = recordDemoFeedbackAnalyticsKey(initial(), 'pivot:shown')
  const reloadedSession = parseDemoFeedbackSession(
    serializeDemoFeedbackSession(shownAnalytics.state),
    context,
  )
  assert.equal(recordDemoFeedbackAnalyticsKey(reloadedSession, 'pivot:shown').shouldEmit, false)
})

test('migrates valid version-1 cooldowns conservatively and ignores malformed storage', () => {
  const dismissed = parseDemoFeedbackCooldownState(JSON.stringify({
    version: 1,
    demos: { pivot: { promptedAt: NOW, outcome: 'dismissed' } },
  }))
  assert.equal(dismissed.version, 2)
  assert.equal(dismissed.demos.pivot?.dismissalCount, 1)
  assert.equal(isDemoFeedbackInCooldown(dismissed, 'pivot', NOW + DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS - 1), true)

  const submitted = parseDemoFeedbackCooldownState(JSON.stringify({
    version: 1,
    demos: { gantt: { promptedAt: NOW, outcome: 'submitted' } },
  }))
  assert.equal(submitted.demos.gantt?.submittedAt, NOW)
  assert.equal(submitted.demos.gantt?.dismissalCount, 0)
  assert.equal(isDemoFeedbackInCooldown(submitted, 'gantt', NOW + DEMO_FEEDBACK_SUBMITTED_COOLDOWN_MS - 1), true)

  assert.deepEqual(parseDemoFeedbackCooldownState('{broken'), createInitialDemoFeedbackCooldownState())
  assert.deepEqual(parseDemoFeedbackCooldownState(JSON.stringify({ version: 2, demos: 'bad', prompts: ['bad'] })), createInitialDemoFeedbackCooldownState())
})

test('cooldown persistence contains no answer content and exposes frequency analytics context', () => {
  let cooldown = displayAndRecord(createInitialDemoFeedbackCooldownState(), 'pivot', 'dismissed', NOW)
  const nextAt = NOW + DEMO_FEEDBACK_FIRST_DISMISSAL_COOLDOWN_MS
  cooldown = recordDemoFeedbackPromptDisplay(cooldown, 'pivot', nextAt)
  const serialized = serializeDemoFeedbackCooldownState(cooldown)
  assert.equal(serialized.includes('freeText'), false)
  assert.equal(serialized.includes('answer'), false)
  assert.deepEqual(getDemoFeedbackPromptFrequencyContext(cooldown, 'pivot', nextAt), {
    prompt_number_for_demo: 2,
    dismissal_count_before_prompt: 1,
    cooldown_policy: 'second_dismissal_7d',
    is_returning_prompt: true,
  })
  assert.equal(
    getDemoFeedbackPromptFrequencyContext(cooldown, 'pivot', nextAt, 'submitted').cooldown_policy,
    'submitted_90d',
  )
})

test('CTA suppression stays in session state and creates no local cooldown outcome', () => {
  const session = suppressDemoFeedbackForCta(initial())
  const cooldown = createInitialDemoFeedbackCooldownState()
  assert.equal(canRequestDemoFeedback(session, 'pivot', { at: NOW, cooldownState: cooldown }), false)
  assert.deepEqual(cooldown, createInitialDemoFeedbackCooldownState())
  assert.equal(shouldRestoreDemoFeedbackCard({
    ...markDemoFeedbackShown(initial(), 'pivot', NOW),
    ctaSuppressed: true,
  }, 'pivot'), false)
})

test('keeps typed verification choices centralized for all catalog demos', () => {
  assert.deepEqual(
    Object.keys(DEMO_FEEDBACK_DEMO_CONFIG).sort(),
    Object.keys(PRODUCT_CATALOG.demos).sort(),
  )
  for (const [demoId, config] of Object.entries(DEMO_FEEDBACK_DEMO_CONFIG)) {
    assert.equal(config.verificationOptions.length, 5, `${demoId} must stay short`)
    assert.equal(
      new Set(config.verificationOptions.map(({ code }) => code)).size,
      config.verificationOptions.length,
    )
    assert.ok(config.verificationOptions.some(({ code }) => code === 'core_pro_differences'))
    assert.ok(config.verificationOptions.some(({ code }) => code === 'pricing_licensing'))
  }
  assert.ok(DEMO_FEEDBACK_DEMO_CONFIG.pivot.verificationOptions.some(({ code }) => code === 'own_data'))
  assert.ok(DEMO_FEEDBACK_DEMO_CONFIG.gantt.verificationOptions.some(({ code }) => code === 'dependencies_scheduling'))
  assert.ok(DEMO_FEEDBACK_DEMO_CONFIG['event-scheduler'].verificationOptions
    .some(({ code }) => code === 'recurring_multi_resource'))
})

test('uses the practical compact question and six concise missing reasons', () => {
  assert.equal(DEMO_FEEDBACK_COPY.card.kicker, 'One quick follow-up')
  assert.equal(DEMO_FEEDBACK_COPY.card.title('Project Tracker'), 'Did Project Tracker show what you needed?')
  assert.equal(DEMO_FEEDBACK_COPY.notFit.title, 'What would have made this demo more useful for you?')
  assert.equal(
    DEMO_FEEDBACK_COPY.notFit.description,
    'Choose the option that best reflects your experience.',
  )
  assert.deepEqual(DEMO_FEEDBACK_CARD_OPTIONS.map(({ label }) => label), ['Yes', 'Not yet', 'No'])
  assert.equal(DEMO_FEEDBACK_BROWSING_OPTION.label, 'Just browsing')
  assert.deepEqual(DEMO_FEEDBACK_NOT_FIT_OPTIONS.map(({ label }) => label), [
    'A feature I need',
    'It doesn’t match my use case',
    'Integration looks difficult',
    'Performance concerns',
    'Pricing or licensing',
    'The demo was unclear or didn’t work',
  ])
  assert.deepEqual(
    Object.fromEntries(Object.entries(DEMO_FEEDBACK_NOT_FIT_FOLLOW_UPS)
      .map(([code, followUp]) => [code, followUp.label])),
    {
      missing_feature: 'Which feature were you looking for?',
      use_case_mismatch: 'What are you building?',
      integration_difficult: 'Which framework are you using?',
      performance_concern: 'What data size do you need to handle?',
      pricing_licensing: 'What would you like to know about pricing or licensing?',
      demo_unclear_broken: 'What happened?',
    },
  )
})

test('provides stable unique element IDs for GTM selectors', () => {
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.card, 'demo-feedback-card')
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.cardClose, 'demo-feedback-card-close')
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.flow, 'demo-feedback-flow')
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.flowClose, 'demo-feedback-flow-close')
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.done, 'demo-feedback-done')
  assert.deepEqual(DEMO_FEEDBACK_ELEMENT_IDS.question, {
    verification: 'demo-feedback-question-verification',
    rowVolume: 'demo-feedback-question-row-volume',
    notFit: 'demo-feedback-question-not-fit',
  })

  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.step('not_fit'), 'demo-feedback-step-not_fit')
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.cardResponse('not_yet'), 'demo-feedback-card-response-not_yet')
  assert.equal(
    DEMO_FEEDBACK_ELEMENT_IDS.verificationOption('framework_integration'),
    'demo-feedback-verification-option-framework_integration',
  )
  assert.equal(
    DEMO_FEEDBACK_ELEMENT_IDS.verification('framework_integration'),
    'demo-feedback-verification-framework_integration',
  )
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.rowVolumeOption('over_1m'), 'demo-feedback-row-volume-option-over_1m')
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.rowVolume('over_1m'), 'demo-feedback-row-volume-over_1m')
  assert.equal(
    DEMO_FEEDBACK_ELEMENT_IDS.notFitOption('missing_feature'),
    'demo-feedback-not-fit-option-missing_feature',
  )
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.notFit('missing_feature'), 'demo-feedback-not-fit-missing_feature')
  assert.equal(
    DEMO_FEEDBACK_ELEMENT_IDS.followUpLabel('missing_feature'),
    'demo-feedback-follow-up-label-missing_feature',
  )
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.followUp('missing_feature'), 'demo-feedback-follow-up-missing_feature')
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.submit('not_fit'), 'demo-feedback-submit-not_fit')
  assert.equal(DEMO_FEEDBACK_ELEMENT_IDS.skip('not_fit'), 'demo-feedback-skip-not_fit')
  assert.equal(
    DEMO_FEEDBACK_ELEMENT_IDS.nextAction('start_pro_trial'),
    'demo-feedback-next-action-start_pro_trial',
  )

  const verificationCodes = Array.from(new Set(
    Object.values(DEMO_FEEDBACK_DEMO_CONFIG)
      .flatMap(({ verificationOptions }) => verificationOptions.map(({ code }) => code)),
  ))
  const nextActions = [
    'start_pro_trial',
    'use_open_source',
    'explore_pro_features',
    'view_documentation',
  ] as const
  const ids = [
    ...(['ready', 'needs_information', 'not_fit', 'confirmation'] as const)
      .map(DEMO_FEEDBACK_ELEMENT_IDS.step),
    ...DEMO_FEEDBACK_CARD_OPTIONS.map(({ code }) => DEMO_FEEDBACK_ELEMENT_IDS.cardResponse(code)),
    DEMO_FEEDBACK_ELEMENT_IDS.cardResponse(DEMO_FEEDBACK_BROWSING_OPTION.code),
    ...verificationCodes.flatMap((code) => [
      DEMO_FEEDBACK_ELEMENT_IDS.verificationOption(code),
      DEMO_FEEDBACK_ELEMENT_IDS.verification(code),
    ]),
    ...DEMO_FEEDBACK_NOT_FIT_OPTIONS.flatMap(({ code }) => [
      DEMO_FEEDBACK_ELEMENT_IDS.notFitOption(code),
      DEMO_FEEDBACK_ELEMENT_IDS.notFit(code),
      DEMO_FEEDBACK_ELEMENT_IDS.followUpLabel(code),
      DEMO_FEEDBACK_ELEMENT_IDS.followUp(code),
    ]),
    ...DEMO_FEEDBACK_ROW_VOLUME_OPTIONS.flatMap(({ code }) => [
      DEMO_FEEDBACK_ELEMENT_IDS.rowVolumeOption(code),
      DEMO_FEEDBACK_ELEMENT_IDS.rowVolume(code),
    ]),
    ...nextActions.map(DEMO_FEEDBACK_ELEMENT_IDS.nextAction),
  ]
  assert.equal(new Set(ids).size, ids.length)
})

test('includes a normalized optional follow-up with a not-fit reason', () => {
  const payload = createDemoFeedbackPayload({
    demo: PRODUCT_CATALOG.demos.gantt,
    state: recordDemoView(initial(), 'gantt', NOW),
    primaryAnswer: 'not_a_fit',
    answers: {
      verificationAnswers: [],
      notFitReason: 'missing_feature',
      freeText: '  Resource leveling  ',
    },
  })

  assert.deepEqual(payload.detailAnswers, ['missing_feature'])
  assert.equal(payload.freeText, 'Resource leveling')
  assert.match(payload.applicationInfo, /Visitor note: Resource leveling/)
  assert.equal('free_text' in createDemoFeedbackAnalyticsProperties(payload), false)
})

test('buckets optional text length without exposing its contents', () => {
  assert.equal(getDemoFeedbackTextLengthBucket(''), undefined)
  assert.equal(getDemoFeedbackTextLengthBucket('   '), undefined)
  assert.equal(getDemoFeedbackTextLengthBucket('a'), '1_50')
  assert.equal(getDemoFeedbackTextLengthBucket('a'.repeat(50)), '1_50')
  assert.equal(getDemoFeedbackTextLengthBucket('a'.repeat(51)), '51_100')
  assert.equal(getDemoFeedbackTextLengthBucket('a'.repeat(100)), '51_100')
  assert.equal(getDemoFeedbackTextLengthBucket('a'.repeat(101)), '101_200')
  assert.equal(getDemoFeedbackTextLengthBucket('a'.repeat(250)), '101_200')
})

test('builds immediate option and privacy-safe text analytics events', () => {
  assert.deepEqual(createDemoFeedbackOptionAnalyticsEvent({
    demo_slug: 'gantt',
    demo_tier: 'pro-advanced',
    time_on_demo: 42,
    demo_interactions: 7,
  }, {
    questionId: 'not_fit',
    answerCode: 'pricing_licensing',
    isSelected: true,
  }), {
    event: 'demo_feedback_option_selected',
    demo_slug: 'gantt',
    demo_tier: 'pro-advanced',
    time_on_demo: 42,
    demo_interactions: 7,
    question_id: 'not_fit',
    answer_code: 'pricing_licensing',
    is_selected: true,
  })

  const textEvent = createDemoFeedbackTextAnalyticsEvent('gantt', {
    questionId: 'not_fit_follow_up',
    hasText: true,
    textLengthBucket: '1_50',
  })
  assert.deepEqual(textEvent, {
    event: 'demo_feedback_text_used',
    demo_slug: 'gantt',
    question_id: 'not_fit_follow_up',
    has_text: true,
    text_length_bucket: '1_50',
  })
  assert.equal('free_text' in textEvent, false)
})

test('maps primary answers to the correct short branch', () => {
  assert.equal(getBranchForPrimaryAnswer('ready_to_try'), 'ready')
  assert.equal(getBranchForPrimaryAnswer('needs_more_information'), 'needs_information')
  assert.equal(getBranchForPrimaryAnswer('comparing_options'), 'comparing')
  assert.equal(getBranchForPrimaryAnswer('not_a_fit'), 'not_fit')
  assert.equal(getBranchForPrimaryAnswer('just_exploring'), 'complete')
})

test('maps compact card answers directly to conditional follow-ups', () => {
  assert.equal(getPrimaryAnswerForCardResponse('yes'), 'ready_to_try')
  assert.equal(getPrimaryAnswerForCardResponse('not_yet'), 'needs_more_information')
  assert.equal(getPrimaryAnswerForCardResponse('no'), 'not_a_fit')
  assert.equal(getPrimaryAnswerForCardResponse('just_browsing'), 'just_exploring')
})

test('shows only relevant conditional questions', () => {
  assert.equal(shouldShowRowVolumeQuestion('grid-at-scale', ['performance_data_volume']), true)
  assert.equal(shouldShowRowVolumeQuestion('gantt', ['performance_data_volume']), false)
})

test('builds a normalized anonymous v4 payload with rich evaluation context', () => {
  let state = recordDemoView(initial(), 'grid-at-scale', NOW)
  state = addDemoVisibleTime(state, 'grid-at-scale', 50_900)
  state = recordDemoView(state, 'pivot', NOW + 10)
  state = recordDemoInteraction(state, 'grid-at-scale', { at: NOW + 1_000, manipulatedData: true }).state
  state = recordDemoInteraction(state, 'grid-at-scale', { at: NOW + 2_000, manipulatedData: true }).state

  const payload = createDemoFeedbackPayload({
    demo: PRODUCT_CATALOG.demos['grid-at-scale'],
    state,
    primaryAnswer: 'needs_more_information',
    answers: {
      verificationAnswers: [
        'performance_data_volume',
        'performance_data_volume',
        'own_data' as DemoFeedbackVerificationCode,
      ],
      rowVolume: 'over_1m',
    },
  })

  assert.equal(payload.requestType, 'contact')
  assert.equal(payload.requestLabel, 'Demo feedback')
  assert.equal(payload.surveyVersion, 'demo-evaluation-v4')
  assert.equal(payload.demoSlug, 'grid-at-scale')
  assert.equal(payload.demoTier, 'open-source')
  assert.deepEqual(payload.detailAnswers, ['performance_data_volume'])
  assert.equal(payload.expectedRowVolume, 'over_1m')
  assert.equal(payload.timeOnDemo, 50)
  assert.equal(payload.demoInteractions, 2)
  assert.deepEqual(payload.demosViewedInSession, ['grid-at-scale', 'pivot'])
  assert.equal('email' in payload, false)
  assert.equal('fullName' in payload, false)
  assert.equal('businessEmail' in payload, false)
  assert.equal('companyName' in payload, false)
  assert.equal('consent' in payload, false)
  assert.match(payload.applicationInfo, /RevoGrid demo evaluation feedback/)
  assert.match(payload.applicationInfo, /Demo: Grid at Scale \(grid-at-scale\)/)
  assert.match(payload.applicationInfo, /Evaluation status: I need to check a few things first \(needs_more_information\)/)
  assert.match(payload.applicationInfo, /Try it with my own data volume \(performance_data_volume\)/)
  assert.match(payload.applicationInfo, /Expected row volume: over_1m/)
  assert.match(payload.applicationInfo, /Time on selected demo: 50 seconds/)
  assert.match(payload.applicationInfo, /Demos viewed: grid-at-scale, pivot/)

  const analytics = createDemoFeedbackAnalyticsProperties(payload)
  assert.equal(analytics.primary_answer, 'needs_more_information')
  assert.deepEqual(analytics.detail_answers, ['performance_data_volume'])
  assert.equal(analytics.expected_row_volume, 'over_1m')
})

test('uses the comparison field only for the comparison branch and trims it', () => {
  const payload = createDemoFeedbackPayload({
    demo: PRODUCT_CATALOG.demos.gantt,
    state: recordDemoView(initial(), 'gantt', NOW),
    primaryAnswer: 'comparing_options',
    answers: {
      verificationAnswers: [],
      comparison: '  AG Grid  ',
      freeText: 'ignore me',
    },
  })
  assert.equal(payload.freeText, 'AG Grid')
  assert.equal('detailAnswers' in payload, false)
  assert.equal('expectedRowVolume' in payload, false)
})

test('derives the two Lite and Advanced next actions from the catalog', () => {
  const openSource = getDemoFeedbackReadyBranch(PRODUCT_CATALOG.demos['grid-at-scale'])
  assert.equal(openSource.actions.length, 2)
  assert.ok(openSource.actions.some(({ code, href }) => code === 'use_open_source' && href?.includes('npmjs.com')))
  assert.ok(openSource.actions.some(({ code, href }) => code === 'explore_pro_features' && href?.startsWith('/pro/')))

  const pro = getDemoFeedbackReadyBranch(PRODUCT_CATALOG.demos.gantt)
  assert.equal(pro.actions.length, 2)
  assert.ok(pro.actions.some(({ code, href }) => code === 'start_pro_trial'
    && href?.startsWith('/trial?')
    && href.includes('demo=gantt')))
  assert.ok(pro.actions.some(({ code, href, label }) => code === 'view_documentation'
    && label === 'View implementation guide'
    && href?.startsWith('/gantt?')))
  const lite = getDemoFeedbackReadyBranch(PRODUCT_CATALOG.demos.ecommerce)
  assert.equal(lite.actions.length, 2)
  assert.ok(lite.actions.some(({ code }) => code === 'use_open_source'))
  assert.equal(lite.actions.some(({ code }) => code === 'start_pro_trial'), false)
})

test('recognizes conversion CTAs without treating demo navigation as conversion', () => {
  assert.equal(isDemoFeedbackConversionCta('/trial', 'Start Pro Trial'), true)
  assert.equal(isDemoFeedbackConversionCta('/pricing', 'Pricing'), true)
  assert.equal(isDemoFeedbackConversionCta('https://github.com/revolist/revogrid', 'GitHub'), true)
  assert.equal(isDemoFeedbackConversionCta('/guide/', 'Documentation'), true)
  assert.equal(isDemoFeedbackConversionCta('/demo/gantt', 'Gantt'), false)
  assert.equal(isDemoFeedbackConversionCta('/demo/pivot', 'Pivot Analytics'), false)
})

test('deduplicates analytics lifecycle keys per demo', () => {
  const first = recordDemoFeedbackAnalyticsKey(initial(), 'pivot:primary:ready_to_try')
  const duplicate = recordDemoFeedbackAnalyticsKey(first.state, 'pivot:primary:ready_to_try')
  const different = recordDemoFeedbackAnalyticsKey(duplicate.state, 'gantt:primary:ready_to_try')
  assert.equal(first.shouldEmit, true)
  assert.equal(duplicate.shouldEmit, false)
  assert.equal(different.shouldEmit, true)
})
