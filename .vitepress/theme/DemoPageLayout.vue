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
        <p v-if="demoId === 'planning' && completedActionCount < config.guidedActions.length && !guideDismissed" class="demo-page-guide demo-page-guide--heading" aria-live="polite"><span>{{ completedActionCount + 1 }}</span>{{ config.guidedActions[completedActionCount] }}<button type="button" aria-label="Dismiss guide" @click="dismissGuide">×</button></p>
        <button v-else-if="demoId === 'planning' && completedActionCount < config.guidedActions.length" type="button" class="demo-page-guide-reopen" @click="showGuide">Show guide</button>
      </div>

      <div class="demo-page-header-actions" aria-label="Demo actions">
        <a
          class="demo-page-button demo-page-button--primary"
          :href="primaryCtaHref"
          @click="trackCta('header', 'try_in_project')"
        >
          Try in your app
          <span aria-hidden="true">→</span>
        </a>
        <details v-if="config.featureBadges.length" class="demo-page-features"><summary>Features used</summary><ul><li v-for="feature in config.featureBadges" :key="feature.label"><strong>{{ feature.label }}</strong><span>{{ feature.source }}</span></li></ul></details>
      </div>
    </header>

    <div v-if="demoId !== 'planning'" class="demo-page-utility"><p v-if="completedActionCount < config.guidedActions.length" class="demo-page-guide" aria-live="polite"><span>{{ completedActionCount + 1 }}</span>{{ config.guidedActions[completedActionCount] }}</p><div class="demo-page-utility-actions"><slot name="workspace-actions"/><button ref="sourceButtonRef" type="button" :aria-expanded="sourceOpen" @click="openSource"><FontAwesomeSvgIcon name="code"/> Code</button><a :href="sources.vue.documentationUrl">Docs</a></div></div>

    <div class="demo-page-stage" :class="{ 'source-open': sourceOpen }"><div
      ref="workspaceRef"
      class="demo-page-workspace"
      @click.capture="handleWorkspaceClick"
      @change.capture="handleWorkspaceChange"
      @input.capture="handleWorkspaceInput"
      @demo-open-source="openSource"
    >
      <ClientOnly>
        <slot />
      </ClientOnly>
    </div><DemoSourcePanel v-if="sourceOpen && sources" :sources="sources" :implementation-url="config.implementationUrl" :dark="isDark" @close="closeSource" @framework="trackSourceFramework" @copy="trackSourceCopy" /><template v-if="activeGuide && guideLayout"><div class="demo-page-guide-spotlight" :style="guideLayout.spotlight" aria-hidden="true"/><aside class="demo-page-guide-tooltip" :class="`demo-page-guide-tooltip--${guideLayout.placement}`" :style="guideLayout.tooltip" aria-label="Interactive guide"><div><span>Step {{ completedActionCount + 1 }} of {{ config.guidedActions.length }}</span><strong>{{ guideContent.title }}</strong></div><button type="button" aria-label="Dismiss guide" @click="dismissGuide">×</button><p>{{ guideContent.description }}</p></aside></template></div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
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
import DemoSourcePanel from './DemoSourcePanel.vue'
import { getDemoSources, type DemoSourceFramework } from './demoSources'

const props = defineProps<{ demoId: DemoId }>()
const config = computed(() => getDemoPageConfig(props.demoId))
const workspaceRef = ref<HTMLElement>()
const primaryCtaHref = ref(config.value.primaryCtaUrl)
const completedActionCount = ref(0)
const guideDismissed = ref(false)
const sourceOpen = ref(false)
const sourceButtonRef = ref<HTMLButtonElement>()
let sourceReturnFocus: HTMLElement | undefined
const { isDark } = useData()
const sources = computed(() => getDemoSources(props.demoId))
const guidedStepActions = computed(() => getDemoGuidedStepActions(props.demoId))
const activeGuide = computed(() => props.demoId === 'planning'
  && !guideDismissed.value
  && !sourceOpen.value
  && completedActionCount.value < config.value.guidedActions.length)
const guideContent = computed(() => guidedStepActions.value[completedActionCount.value] === 'switch-view'
  ? { title: 'Open Kanban', description: 'Switch to Kanban to see the same task and its updated status reflected as a card.' }
  : { title: 'Update a status', description: 'Select a Status cell and choose a different value. The change stays in sync across every view.' })
type GuideLayout = { spotlight: Record<string, string>; tooltip: Record<string, string>; placement: 'above' | 'below' | 'left' | 'right' }
const guideLayout = ref<GuideLayout>()
let guideFrame = 0

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
const openSource = (event?: Event) => {
  sourceReturnFocus = event?.target instanceof HTMLElement ? event.target : sourceButtonRef.value
  sourceOpen.value = true
  guideLayout.value = undefined
  trackImplementationOpen()
}
const closeSource = () => { sourceOpen.value = false; nextTick(() => { queueGuidePosition(); (sourceReturnFocus ?? sourceButtonRef.value)?.focus() }) }
const trackSourceFramework = (framework: DemoSourceFramework) => pushAnalytics(createDemoPageAnalyticsEvent('demo_action', props.demoId, { action_id: `source_${framework}`, placement: 'source_panel', ...analyticsContext() }), `demo_source_framework:${props.demoId}:${framework}`)
const trackSourceCopy = () => pushAnalytics(createDemoPageAnalyticsEvent('demo_action', props.demoId, { action_id: 'source_copy', placement: 'source_panel', ...analyticsContext() }), `demo_source_copy:${props.demoId}`)
const dismissGuide = () => {
  guideDismissed.value = true
  guideLayout.value = undefined
  pushAnalytics(createDemoPageAnalyticsEvent('demo_action', props.demoId, { action_id: 'guide_dismiss', placement: 'guided_stepper', ...analyticsContext() }), `demo_guide_dismiss:${props.demoId}`)
}
const showGuide = () => {
  guideDismissed.value = false
  nextTick(queueGuidePosition)
}

const guideTarget = () => {
  const workspace = workspaceRef.value
  if (!workspace || props.demoId !== 'planning') return undefined
  if (guidedStepActions.value[completedActionCount.value] === 'switch-view') {
    return workspace.querySelector<HTMLElement>('.planning-demo__switch button:nth-child(2)')
  }
  const grid = workspace.querySelector<HTMLElement>('.planning-demo__grid')
  const statusHeader = [...(grid?.querySelectorAll<HTMLElement>('revogr-header .rgHeaderCell') ?? [])]
    .find(cell => cell.textContent?.trim().startsWith('Status'))
  return statusHeader ?? grid
}

const updateGuidePosition = () => {
  guideFrame = 0
  if (!activeGuide.value) return
  const target = guideTarget()
  const stage = workspaceRef.value?.parentElement
  if (!target || !stage) return
  const stageBounds = stage.getBoundingClientRect()
  const targetBounds = target.getBoundingClientRect()
  if (!stageBounds.width || !stageBounds.height || !targetBounds.width || !targetBounds.height) return
  const inset = 4
  const spotlightLeft = Math.max(0, targetBounds.left - stageBounds.left - inset)
  const spotlightTop = Math.max(0, targetBounds.top - stageBounds.top - inset)
  const spotlightWidth = Math.min(stageBounds.width - spotlightLeft, targetBounds.width + inset * 2)
  const spotlightHeight = Math.min(stageBounds.height - spotlightTop, targetBounds.height + inset * 2)
  const tooltipWidth = Math.min(286, stageBounds.width - 24)
  const tooltipHeight = 118
  const availableRight = stageBounds.right - targetBounds.right
  const availableLeft = targetBounds.left - stageBounds.left
  const horizontalPlacement = availableRight >= tooltipWidth + 14
    ? 'right'
    : availableLeft >= tooltipWidth + 14 ? 'left' : undefined
  const placeAbove = !horizontalPlacement && targetBounds.bottom - stageBounds.top + tooltipHeight + 14 > stageBounds.height
  const tooltipLeft = horizontalPlacement === 'right'
    ? targetBounds.right - stageBounds.left + 14
    : horizontalPlacement === 'left'
      ? targetBounds.left - stageBounds.left - tooltipWidth - 14
      : Math.max(12, Math.min(targetBounds.left - stageBounds.left, stageBounds.width - tooltipWidth - 12))
  const tooltipTop = horizontalPlacement
    ? Math.max(12, Math.min(targetBounds.top - stageBounds.top, stageBounds.height - tooltipHeight - 12))
    : placeAbove
      ? Math.max(12, targetBounds.top - stageBounds.top - tooltipHeight - 14)
      : Math.min(stageBounds.height - tooltipHeight - 12, targetBounds.bottom - stageBounds.top + 14)
  guideLayout.value = {
    spotlight: { left: `${spotlightLeft}px`, top: `${spotlightTop}px`, width: `${spotlightWidth}px`, height: `${spotlightHeight}px` },
    tooltip: { left: `${tooltipLeft}px`, top: `${tooltipTop}px`, width: `${tooltipWidth}px` },
    placement: horizontalPlacement ?? (placeAbove ? 'above' : 'below'),
  }
}
const queueGuidePosition = () => {
  if (guideFrame) cancelAnimationFrame(guideFrame)
  guideFrame = requestAnimationFrame(updateGuidePosition)
}

const recordGuidedAction = (action: DemoGuidedStepAction) => {
  if (completedActionCount.value >= config.value.guidedActions.length) return
  const actionIndex = completedActionCount.value
  if (!matchesDemoGuidedStepAction(guidedStepActions.value[actionIndex], action)) return
  completedActionCount.value += 1
  nextTick(queueGuidePosition)
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
          && (props.demoId !== 'planning' || detail.prop === 'workflowStatus')
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
  gridObserver = new MutationObserver(() => { scanForGrids(); queueGuidePosition() })
  gridObserver.observe(workspaceRef.value, { childList: true, subtree: true })
  window.addEventListener('resize', queueGuidePosition, { passive: true })
  window.addEventListener('scroll', queueGuidePosition, { capture: true, passive: true })
  queueGuidePosition()
})

onBeforeUnmount(() => {
  if (guideFrame) cancelAnimationFrame(guideFrame)
  window.removeEventListener('resize', queueGuidePosition)
  window.removeEventListener('scroll', queueGuidePosition, true)
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

.demo-page-workspace {
  position: relative;
  width: 100%;
  min-height: 0;
  flex-grow: 1;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0;
  background: var(--vp-c-bg);
  box-shadow: none;
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

  .demo-page-workspace {
    height: 620px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .demo-page-button,
  .demo-page-progress-track > span {
    transition: none;
  }
}

/* Demo page v3 overrides. Kept last while the former v2 selectors remain for compatibility. */
.demo-page-layout{--demo-page-green:#008b55;--demo-page-green-dark:#00784a;height:100vh;padding:var(--vp-nav-height,64px) 24px 16px;font-family:Geist,Inter,system-ui,sans-serif}.demo-page-header{max-width:none;margin:0 0 8px;padding-top:18px;gap:20px}.demo-page-title-row h1{font-size:28px;line-height:34px;font-weight:600}.demo-page-heading p{margin-top:4px;font-size:14px;line-height:20px}.demo-page-plan{border-radius:5px}.demo-page-header-actions{align-items:flex-start}.demo-page-button{min-height:36px;padding:7px 14px;border-radius:6px}.demo-page-features{position:relative}.demo-page-features summary{height:36px;padding:7px 10px;border:1px solid var(--vp-c-divider);border-radius:6px;cursor:pointer;list-style:none}.demo-page-features ul{position:absolute;z-index:30;top:42px;right:0;width:310px;margin:0;padding:8px;border:1px solid var(--vp-c-divider);border-radius:8px;background:var(--vp-c-bg);box-shadow:0 12px 30px rgb(15 23 42/14%);list-style:none}.demo-page-features li{display:grid;gap:2px;margin:0;padding:7px}.demo-page-features li span{color:var(--vp-c-text-2);font-size:11px}.demo-page-utility{display:flex;min-height:36px;align-items:center;justify-content:space-between;margin-bottom:8px}.demo-page-guide{display:flex;gap:8px;margin:0;padding:0;background:transparent;color:var(--vp-c-text-2);font-size:12px}.demo-page-guide>span{display:grid;width:20px;height:20px;place-items:center;border-radius:50%;background:color-mix(in srgb,var(--demo-page-green) 12%,transparent);color:var(--demo-page-green-dark)}.demo-page-utility-actions{display:flex;align-items:center;gap:4px}.demo-page-utility-actions button,.demo-page-utility-actions a{display:inline-flex;height:34px;align-items:center;gap:6px;padding:0 10px;border:0;border-radius:6px;background:transparent;color:var(--vp-c-text-1);font:500 13px/1 inherit;text-decoration:none}.demo-page-utility-actions button:hover,.demo-page-utility-actions a:hover{background:var(--vp-c-bg-soft)}.demo-page-utility-actions :deep(.fa-svg-icon){width:14px;height:14px}.demo-page-stage{position:relative;display:flex;min-height:0;flex:1;overflow:hidden;border:1px solid var(--vp-c-divider);border-radius:6px;background:var(--vp-c-bg)}.demo-page-workspace{min-width:0;min-height:0;flex:1;overflow:hidden;border:0;border-radius:0;box-shadow:none}.demo-page-stage.source-open .demo-page-workspace{border-right:0}@media(min-width:1100px){.demo-page-layout{margin-left:196px}}@media(max-width:1099px){.demo-page-layout{padding-top:calc(var(--vp-nav-height,64px) + 54px)}.demo-page-header{padding-top:0}}@media(max-width:700px){.demo-page-layout{height:auto;min-height:100vh;padding-inline:10px}.demo-page-header{align-items:flex-start;flex-direction:column}.demo-page-header-actions{width:100%;flex-direction:row}.demo-page-button--primary{width:100%}.demo-page-features{display:none}.demo-page-utility{align-items:flex-start}.demo-page-guide{max-width:65%}.demo-page-stage{height:620px}}
@media(min-width:1100px){.demo-page-layout{width:calc(100% - 196px)}}
.demo-page-button--primary,.demo-page-button--primary:hover{background:var(--demo-page-green);transform:none}

/* Final demo-page hierarchy and surface treatment. */
.demo-page-layout{padding-bottom:18px;background:var(--vp-c-bg)}
.demo-page-header{min-height:92px;margin:0;padding:16px 0 12px;align-items:flex-start}
.demo-page-title-row{gap:9px}
.demo-page-title-row h1{margin:0;letter-spacing:-.025em}
.demo-page-heading p{margin:3px 0 0}
.demo-page-plan{align-self:center;padding:2px 6px;border:1px solid color-mix(in srgb,var(--demo-page-green) 18%,transparent);background:color-mix(in srgb,var(--demo-page-green) 7%,transparent);color:color-mix(in srgb,var(--demo-page-green) 82%,var(--vp-c-text-1));font-size:10px;font-weight:600;line-height:16px}
.demo-page-header-actions{padding-top:2px;gap:8px}
.demo-page-button{height:36px;min-height:36px;box-shadow:0 1px 2px rgb(15 23 42/8%);font-size:13px;font-weight:600}
.demo-page-button--primary{border-color:color-mix(in srgb,var(--demo-page-green) 82%,#000);background:var(--demo-page-green);color:#fff}
.demo-page-features summary{display:flex;align-items:center;background:var(--vp-c-bg);font-size:13px;font-weight:520;box-shadow:0 1px 2px rgb(15 23 42/3%)}
.demo-page-features summary:hover{border-color:var(--vp-c-border)}
.demo-page-utility{min-height:34px;margin:0 0 8px}
.demo-page-guide{align-items:center;font-size:11.5px}
.demo-page-guide>span{width:20px;height:20px;background:color-mix(in srgb,var(--demo-page-green) 9%,transparent);color:var(--demo-page-green-dark);font-size:10px;font-weight:650}
.demo-page-guide--heading{min-height:24px;margin-top:8px!important}
.demo-page-layout[data-demo-id='planning'] .demo-page-header{min-height:82px;padding-bottom:10px}
.demo-page-layout[data-demo-id='planning'] .demo-page-heading{display:grid;grid-template-columns:auto auto;align-items:center;gap:2px 18px}
.demo-page-layout[data-demo-id='planning'] .demo-page-title-row{grid-column:1/-1}
.demo-page-layout[data-demo-id='planning'] .demo-page-heading>p:not(.demo-page-guide){margin:0}
.demo-page-layout[data-demo-id='planning'] .demo-page-guide--heading{min-height:20px;margin:0!important;white-space:nowrap}
.demo-page-layout[data-demo-id='planning'] :deep(.planning-demo__hint){display:none}
.demo-page-stage{border-color:color-mix(in srgb,var(--vp-c-divider) 92%,transparent);background:var(--vp-c-bg);box-shadow:0 1px 2px rgb(15 23 42/3%)}
@media(max-width:1099px){.demo-page-layout{padding-right:16px;padding-left:16px}.demo-page-header{min-height:82px}}
@media(max-width:700px){.demo-page-layout[data-demo-id='planning'] .demo-page-heading{display:block}.demo-page-layout[data-demo-id='planning'] .demo-page-guide--heading{margin-top:8px!important}}
@media(min-width:1100px){.demo-page-layout{margin-left:var(--demo-sidebar-width,256px);width:calc(100% - var(--demo-sidebar-width,256px))}}

/* Contrast pass for the shared demo shell. */
.demo-page-layout{background:transparent}
.demo-page-plan{border-color:#a9cfbc;background:#e3f1ea;color:#075f3c}
.demo-page-features summary{border-color:#b9c3be;background:#fff;color:#3d4943;box-shadow:0 1px 2px rgb(15 23 42/7%)}
.demo-page-guide>span{border:1px solid #b7d8c8;background:#e1f1e9;color:#096942}
.demo-page-stage{border-color:#b9c3be;background:transparent;box-shadow:0 1px 4px rgb(15 23 42/9%)}
.demo-page-header-actions{align-items:center}
.demo-page-features summary{margin:0}
.demo-page-stage{border:0;border-radius:0;box-shadow:none}
.demo-page-workspace{background:transparent}
.demo-page-heading p,.demo-page-features summary,.demo-page-features li span,.demo-page-guide,.demo-page-utility-actions button,.demo-page-utility-actions a{color:inherit}
.demo-page-guide--heading button,.demo-page-guide-reopen{border:0;background:transparent;color:inherit;font:inherit;cursor:pointer}.demo-page-guide--heading button{display:grid;width:20px;height:20px;margin-left:2px;place-items:center;border-radius:50%;font-size:16px;line-height:1}.demo-page-guide--heading button:hover,.demo-page-guide-reopen:hover{background:var(--vp-c-bg-soft)}.demo-page-guide-reopen{align-self:start;margin-top:2px;padding:3px 7px;border:1px solid var(--vp-c-divider);border-radius:5px;font-size:11px;line-height:16px}.demo-page-guide-spotlight{position:absolute;z-index:3;pointer-events:none;border:2px solid var(--demo-page-green);border-radius:6px;box-shadow:0 0 0 4px color-mix(in srgb,var(--demo-page-green) 14%,transparent),0 8px 20px color-mix(in srgb,var(--demo-page-green) 20%,transparent);transition:all 180ms ease}.demo-page-guide-tooltip{position:absolute;z-index:4;display:grid;grid-template-columns:1fr auto;gap:4px 12px;box-sizing:border-box;padding:12px 13px;border:1px solid color-mix(in srgb,var(--demo-page-green) 45%,var(--vp-c-divider));border-radius:8px;background:var(--vp-c-bg);box-shadow:0 12px 28px rgb(15 23 42/16%);font:400 12px/17px Geist,Inter,system-ui,sans-serif}.demo-page-guide-tooltip::before{position:absolute;top:-6px;left:20px;width:10px;height:10px;border-top:1px solid color-mix(in srgb,var(--demo-page-green) 45%,var(--vp-c-divider));border-left:1px solid color-mix(in srgb,var(--demo-page-green) 45%,var(--vp-c-divider));background:var(--vp-c-bg);content:'';transform:rotate(45deg)}.demo-page-guide-tooltip--above::before{top:auto;bottom:-6px;border-top:0;border-right:1px solid color-mix(in srgb,var(--demo-page-green) 45%,var(--vp-c-divider));border-bottom:1px solid color-mix(in srgb,var(--demo-page-green) 45%,var(--vp-c-divider));border-left:0}.demo-page-guide-tooltip--right::before{top:20px;left:-6px;transform:rotate(-45deg)}.demo-page-guide-tooltip--left::before{top:20px;right:-6px;left:auto;transform:rotate(135deg)}.demo-page-guide-tooltip div{display:grid;gap:1px}.demo-page-guide-tooltip span{color:var(--vp-c-text-2);font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase}.demo-page-guide-tooltip strong{font-size:13px;font-weight:650}.demo-page-guide-tooltip button{z-index:1;width:24px;height:24px;padding:0;border:0;border-radius:5px;background:transparent;color:var(--vp-c-text-2);font-size:18px;line-height:1;cursor:pointer}.demo-page-guide-tooltip button:hover{background:var(--vp-c-bg-soft);color:inherit}.demo-page-guide-tooltip p{grid-column:1/-1;margin:0;color:var(--vp-c-text-2)}@media(max-width:700px){.demo-page-guide-tooltip{max-width:calc(100% - 24px)}.demo-page-guide-spotlight{box-shadow:0 0 0 3px color-mix(in srgb,var(--demo-page-green) 14%,transparent)}}@media(prefers-reduced-motion:reduce){.demo-page-guide-spotlight{transition:none}}
</style>
