<template>
  <div class="demo-page-layout" :data-demo-id="demoId">
    <header class="demo-page-header">
      <div class="demo-page-heading">
        <div class="demo-page-title-row">
          <h1>{{ config.title }}</h1>
          <span
            class="demo-page-plan"
            :class="`demo-page-plan--${config.demo.planId}`"
          >{{ config.planLabel }}</span>
        </div>
        <p>{{ config.description }}</p>
        <ul
          v-if="config.featureBadges.length"
          class="demo-page-feature-badges"
          :class="`demo-page-feature-badges--${config.demo.planId}`"
          aria-label="Pro features used in this demo"
        >
          <li
            v-for="feature in config.featureBadges"
            :key="feature.label"
            :title="feature.source"
          >{{ feature.label }}</li>
        </ul>
      </div>

      <div class="demo-page-header-actions" aria-label="Demo actions">
        <a
          class="demo-page-button demo-page-button--primary"
          :href="primaryCtaHref"
          @click="trackCta('header', 'try_in_project')"
        >
          Try in your project
          <span aria-hidden="true">→</span>
        </a>
        <a
          class="demo-page-button demo-page-button--secondary"
          :href="config.implementationUrl"
          @click="trackImplementationOpen"
        >
          <FontAwesomeSvgIcon name="github" />
          View implementation
        </a>
      </div>
    </header>

    <section class="demo-page-guide" aria-labelledby="demo-page-guide-title">
      <div class="demo-page-guide-intro">
        <span class="demo-page-guide-target" aria-hidden="true">◎</span>
        <span>
          <strong id="demo-page-guide-title">Try {{ config.demo.title }}</strong>
        </span>
      </div>

      <ol class="demo-page-guide-actions">
        <li
          v-for="(action, index) in config.guidedActions"
          :key="action"
          :class="{ 'is-complete': index < completedActionCount }"
        >
          <span class="demo-page-guide-number" aria-hidden="true">
            {{ index < completedActionCount ? '✓' : index + 1 }}
          </span>
          <span>{{ action }}</span>
        </li>
      </ol>

      <div class="demo-page-progress" aria-live="polite">
        <span>Progress</span>
        <span class="demo-page-progress-track" aria-hidden="true">
          <span :style="{ width: `${progressPercent}%` }"></span>
        </span>
        <span>{{ completedActionCount }} of {{ config.guidedActions.length }}</span>
      </div>
    </section>

    <div
      ref="workspaceRef"
      class="demo-page-workspace"
      @click.capture="handleWorkspaceClick"
      @change.capture="handleWorkspaceChange"
      @input.capture="handleWorkspaceInput"
    >
      <ClientOnly>
        <slot />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type { DemoId } from '../../commercial/productCatalog'
import {
  createDemoPageAnalyticsEvent,
  getDemoGuidedStepActions,
  getDemoPageConfig,
  isConfirmedGanttMove,
  isConfirmedGridEdit,
  matchesDemoGuidedStepAction,
  type DemoGuidedStepAction,
} from './demoPageLayout'
import { getAnalyticsExperimentVariant, trackSiteAnalytics } from './siteAnalytics'
import FontAwesomeSvgIcon from './home-v2/FontAwesomeSvgIcon.vue'

const props = defineProps<{ demoId: DemoId }>()
const config = computed(() => getDemoPageConfig(props.demoId))
const workspaceRef = ref<HTMLElement>()
const primaryCtaHref = ref(config.value.primaryCtaUrl)
const completedActionCount = ref(0)
const progressPercent = computed(() =>
  (completedActionCount.value / config.value.guidedActions.length) * 100,
)
const guidedStepActions = computed(() => getDemoGuidedStepActions(props.demoId))

const observedGrids = new Set<HTMLElement>()
const gridHandlers = new Map<HTMLElement, Map<string, EventListener>>()
const pendingGridEdits = new WeakMap<HTMLElement, { prop: string, val: unknown, oldVal: unknown }>()
let gridObserver: MutationObserver | undefined
let headerFilterGestureUntil = 0

const analyticsContext = () => {
  const experimentVariant = getAnalyticsExperimentVariant(window.location)
  return experimentVariant ? { experiment_variant: experimentVariant } : {}
}

const hydratePrimaryCtaHref = () => {
  const target = new URL(config.value.primaryCtaUrl, window.location.origin)
  const experimentVariant = getAnalyticsExperimentVariant(window.location)
  if (target.pathname === '/trial' && experimentVariant) {
    target.searchParams.set('experiment_variant', experimentVariant)
  }
  primaryCtaHref.value = target.origin === window.location.origin
    ? `${target.pathname}${target.search}${target.hash}`
    : target.href
}

const pushAnalytics = (event: ReturnType<typeof createDemoPageAnalyticsEvent>, dedupeKey: string) =>
  trackSiteAnalytics(event.event, event, dedupeKey)

const trackCta = (location: 'header', action: 'try_in_project') => {
  const target = new URL(primaryCtaHref.value, window.location.origin)
  if (target.pathname === '/trial') {
    pushAnalytics(createDemoPageAnalyticsEvent('demo_trial_click', props.demoId, {
      action_id: action,
      placement: location,
      ...analyticsContext(),
    }), `demo_trial_click:${props.demoId}:${location}:${action}`)
  }
}

const trackImplementationOpen = () => {
  pushAnalytics(createDemoPageAnalyticsEvent('demo_implementation_open', props.demoId, {
    cta_location: 'header',
    implementation_url: config.value.implementationUrl,
  }), `demo_implementation_open:${props.demoId}:header`)
}

const recordGuidedAction = (action: DemoGuidedStepAction) => {
  if (completedActionCount.value >= config.value.guidedActions.length) return
  const actionIndex = completedActionCount.value
  if (!matchesDemoGuidedStepAction(guidedStepActions.value[actionIndex], action)) return
  completedActionCount.value += 1
  pushAnalytics(createDemoPageAnalyticsEvent('demo_action', props.demoId, {
    action_id: action,
    placement: 'guided_stepper',
    ...analyticsContext(),
  }), `demo_action:${props.demoId}:${action}`)
}

const closestElement = (event: Event): Element | null =>
  event.target instanceof Element ? event.target : null

const handleWorkspaceClick = (event: MouseEvent) => {
  const target = closestElement(event)
  if (!target) return
  if (target.closest('.order-explorer__presets button')) recordGuidedAction('preset')
  if (target.closest('.planning-demo__switch button:not([aria-selected="true"])')) {
    recordGuidedAction('switch-view')
  }
  if (target.closest('revo-grid')) headerFilterGestureUntil = Date.now() + 2_000
}

const handleWorkspaceChange = (event: Event) => {
  const target = closestElement(event)
  if (target?.closest('revo-grid')) headerFilterGestureUntil = Date.now() + 2_000
}

const handleWorkspaceInput = (event: Event) => {
  const target = closestElement(event)
  if (target instanceof HTMLInputElement
    && target.matches('.order-explorer__search-input')
    && target.value.trim()) {
    recordGuidedAction('search')
  }
  if (target?.closest('revo-grid')) headerFilterGestureUntil = Date.now() + 2_000
}

const markDemoReady = () => {
  pushAnalytics(
    createDemoPageAnalyticsEvent('demo_ready', props.demoId, analyticsContext()),
    `demo_ready:${props.demoId}`,
  )
}

const observeGrid = (grid: HTMLElement) => {
  if (observedGrids.has(grid)) return
  observedGrids.add(grid)
  const handlers = new Map<string, EventListener>()
  ;(['beforeedit', 'afteredit', 'afterfilterapply', 'gantt-before-task-change'] as const).forEach((eventName) => {
    const handler = (event: Event) => {
      const detail = event instanceof CustomEvent && event.detail && typeof event.detail === 'object'
        ? event.detail as Record<string, unknown>
        : {}
      if (eventName === 'beforeedit') {
        const model = detail.model
        const prop = detail.prop
        if (Object.hasOwn(detail, 'val') && model && typeof model === 'object' && typeof prop === 'string') {
          pendingGridEdits.set(grid, {
            prop,
            val: detail.val,
            oldVal: (model as Record<string, unknown>)[prop],
          })
        }
      }
      if (eventName === 'afteredit') {
        const pending = pendingGridEdits.get(grid)
        pendingGridEdits.delete(grid)
        if (pending
          && pending.prop === detail.prop
          && Object.is(pending.val, detail.val)
          && isConfirmedGridEdit({ ...detail, oldVal: pending.oldVal })) {
          recordGuidedAction('edit')
        }
      }
      if (eventName === 'afterfilterapply' && Date.now() <= headerFilterGestureUntil) recordGuidedAction('filter')
      const gridSource = (grid as HTMLElement & { source?: unknown }).source
      const source = Array.isArray(gridSource) ? gridSource : []
      if (eventName === 'gantt-before-task-change' && isConfirmedGanttMove(detail, source)) {
        recordGuidedAction('gantt-move')
      }
    }
    grid.addEventListener(eventName, handler)
    handlers.set(eventName, handler)
  })
  gridHandlers.set(grid, handlers)

  const readyGrid = grid as HTMLElement & { componentOnReady?: () => Promise<unknown> }
  const readiness = readyGrid.componentOnReady?.() ?? Promise.resolve()
  void readiness.then(() => {
    if (grid.isConnected) markDemoReady()
  }).catch(() => undefined)
}

const scanForGrids = () => {
  workspaceRef.value?.querySelectorAll<HTMLElement>('revo-grid').forEach(observeGrid)
  observedGrids.forEach((grid) => {
    if (grid.isConnected) return
    gridHandlers.get(grid)?.forEach((handler, eventName) => grid.removeEventListener(eventName, handler))
    gridHandlers.delete(grid)
    observedGrids.delete(grid)
  })
}

onMounted(async () => {
  await nextTick()
  hydratePrimaryCtaHref()
  pushAnalytics(createDemoPageAnalyticsEvent('demo_view', props.demoId, analyticsContext()), `demo_view:${props.demoId}`)
  scanForGrids()
  if (!workspaceRef.value) return
  gridObserver = new MutationObserver(scanForGrids)
  gridObserver.observe(workspaceRef.value, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  gridObserver?.disconnect()
  gridHandlers.forEach((handlers, grid) => {
    handlers.forEach((handler, eventName) => grid.removeEventListener(eventName, handler))
  })
  gridHandlers.clear()
  observedGrids.clear()
})
</script>

<style lang="scss" scoped>
$max-content-width: 1240px;

.demo-page-layout {
  --demo-page-green: #00ad68;
  --demo-page-green-dark: #008b55;
  box-sizing: border-box;
  width: 100%;
  padding: var(--vp-nav-height, 64px) clamp(14px, 2vw, 28px) 28px;
  color: var(--vp-c-text-1);
  height: calc(100vh);
  display: flex;
  flex-direction: column;
}


.demo-page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  max-width: $max-content-width;
  width: 100%;
  padding-top: 20px;
  margin: 0 auto 18px;
}

.demo-page-heading {
  min-width: 0;
  max-width: 720px;
}

.demo-page-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.demo-page-title-row h1 {
  margin: 0;
  border: 0;
  font-size: 28px;
  line-height: 1.15;
  font-weight: 500;
}

.demo-page-heading p {
  margin: 8px 0 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.55;
}

.demo-page-feature-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}

.demo-page-feature-badges li {
  margin-top: 0;
  padding: 4px 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--demo-page-green) 7%, var(--vp-c-bg));
  color: var(--demo-page-green-dark);
  font-size: 0.68rem;
  font-weight: 500;
  line-height: 1.15;
  white-space: nowrap;
}

.demo-page-feature-badges--pro-advanced li {
  border-color: color-mix(in srgb, #8b5cf6 24%, var(--vp-c-divider));
  background: color-mix(in srgb, #8b5cf6 7%, var(--vp-c-bg));
  color: #7c3aed;
}

.demo-page-plan {
  flex: 0 0 auto;
  padding: 4px 9px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1;
}

.demo-page-plan--open-source {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}

.demo-page-plan--pro-lite {
  background: color-mix(in srgb, var(--demo-page-green) 14%, transparent);
  color: var(--demo-page-green-dark);
}

.demo-page-plan--pro-advanced {
  background: color-mix(in srgb, #8b5cf6 14%, transparent);
  color: #7c3aed;
}

.demo-page-header-actions {
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
}

.demo-page-button {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  padding: 9px 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 0.86rem;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
  transition: border-color 140ms ease, background 140ms ease, transform 140ms ease;
}

.demo-page-button:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

.demo-page-button:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--demo-page-green) 28%, transparent);
  outline-offset: 2px;
}

.demo-page-button--primary {
  background: linear-gradient(135deg, var(--demo-page-green), #00bf75);
  color: #fff;
}

.demo-page-button--primary:hover {
  background: linear-gradient(135deg, var(--demo-page-green-dark), var(--demo-page-green));
  color: #fff;
}

.demo-page-button--secondary {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.demo-page-button--secondary:hover {
  border-color: color-mix(in srgb, var(--demo-page-green) 54%, var(--vp-c-divider));
  color: var(--vp-c-text-1);
}

.demo-page-guide {
  display: grid;
  grid-template-columns: minmax(190px, 0.85fr) minmax(420px, 2fr) auto;
  align-items: center;
  gap: 18px;
  max-width: $max-content-width;
  width: 100%;
  margin: 0 auto 14px;
  padding: 6px 14px;
  border-radius: 9px;
  background: color-mix(in srgb, var(--demo-page-green) 10%, var(--vp-c-bg));
}

.demo-page-guide-intro,
.demo-page-guide-intro > span:last-child {
  display: flex;
  min-width: 0;
}

.demo-page-guide-intro {
  align-items: center;
  gap: 10px;
}

.demo-page-guide-intro > span:last-child {
  flex-direction: column;
}

.demo-page-guide-intro strong {
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 1.25;
}

.demo-page-guide-target {
  display: inline-grid;
  flex: 0 0 30px;
  width: 30px;
  height: 30px;
  place-items: center;
  border-radius: 50%;
  background: color-mix(in srgb, var(--demo-page-green) 13%, transparent);
  color: var(--demo-page-green-dark);
  font-weight: 500;
}

.demo-page-guide-target {
  animation: demo-page-guide-pulse 2s ease-out infinite;
}

@keyframes demo-page-guide-pulse {
  0% {
    box-shadow: 0 0 0 0 rgb(0 173 104 / 30%);
  }

  70%,
  100% {
    box-shadow: 0 0 0 10px rgb(0 173 104 / 0%);
  }
}

.demo-page-guide-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.demo-page-guide-actions li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0;
  min-width: 0;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  line-height: 1.25;
}

.demo-page-guide-actions li.is-complete {
  color: var(--vp-c-text-1);
}

.demo-page-guide-number {
  display: inline-grid;
  flex: 0 0 26px;
  width: 26px;
  height: 26px;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--demo-page-green) 35%, var(--vp-c-divider));
  border-radius: 50%;
  color: var(--demo-page-green-dark);
  font-weight: 500;
}

.is-complete .demo-page-guide-number {
  border-color: var(--demo-page-green);
  background: var(--demo-page-green);
  color: #fff;
}

.demo-page-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  color: var(--vp-c-text-2);
  font-size: 0.69rem;
}

.demo-page-progress-track {
  display: block;
  width: 48px;
  height: 12px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--demo-page-green) 16%, var(--vp-c-bg-soft));
}

.demo-page-progress-track > span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--demo-page-green);
  transition: width 180ms ease;
}

.demo-page-workspace {
  position: relative;
  width: 100%;
  min-height: 560px;
  flex-grow: 1;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  box-shadow: 0 8px 30px color-mix(in srgb, var(--vp-c-text-1) 6%, transparent);
}

@media (max-width: 1100px) {
  .demo-page-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .demo-page-guide {
    grid-template-columns: 1fr auto;
  }

  .demo-page-guide-actions {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}

@media (max-width: 700px) {
  .demo-page-layout {
    padding-inline: 10px;
  }

  .demo-page-title-row,
  .demo-page-header-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .demo-page-title-row {
    align-items: flex-start;
  }

  .demo-page-header-actions {
    width: 100%;
  }

  .demo-page-guide {
    display: none;
  }

  .demo-page-workspace {
    height: 620px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .demo-page-guide-target {
    animation: none;
  }

  .demo-page-button,
  .demo-page-progress-track > span {
    transition: none;
  }
}
</style>
