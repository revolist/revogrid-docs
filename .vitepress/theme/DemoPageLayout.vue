<template>
  <div class="demo-page-layout" :data-demo-id="demoId">
    <header class="demo-page-header">
      <div class="demo-page-heading">
        <div class="demo-page-title-row">
          <h1>{{ config.title }}</h1>
          <span class="demo-page-plan" :class="`demo-page-plan--${config.demo.planId}`">{{
            config.planLabel
          }}</span>
        </div>
        <p>{{ config.description }}</p>
      </div>

      <div class="demo-page-header-actions" aria-label="Demo actions">
        <button
          v-if="sources"
          ref="sourceButtonRef"
          class="demo-page-header-link"
          type="button"
          :aria-expanded="sourceOpen"
          @click="openSource"
        >
          <FontAwesomeSvgIcon name="code" />Code
        </button>
        <a
          class="demo-page-github demo-page-header-link"
          :href="config.implementationUrl"
          target="_blank"
          rel="noopener noreferrer"
          ><FontAwesomeSvgIcon name="github" />GitHub</a
        >
        <a
          class="demo-page-button demo-page-button--primary"
          :href="primaryCtaHref"
          @click="trackCta('header', 'try_in_project')"
        >
          Try in your app
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>

    <div class="demo-page-stage" :class="{ 'source-open': sourceOpen }">
      <div ref="workspaceRef" class="demo-page-workspace">
        <ClientOnly>
          <slot />
        </ClientOnly>
      </div>
      <DemoSourcePanel
        v-if="sourceOpen && sources"
        :sources="sources"
        :dark="isDark"
        @close="closeSource"
        @framework="trackSourceFramework"
        @copy="trackSourceCopy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import type { DemoId } from '../../commercial/productCatalog'
import { createDemoPageAnalyticsEvent, getDemoPageConfig } from './demoPageLayout'
import { getAnalyticsExperimentVariant, trackSiteAnalytics } from './siteAnalytics'
import FontAwesomeSvgIcon from './home-v2/FontAwesomeSvgIcon.vue'
import DemoSourcePanel from './DemoSourcePanel.vue'
import { getDemoSources, type DemoSourceFramework } from './demoSources'

const props = defineProps<{ demoId: DemoId }>()
const config = computed(() => getDemoPageConfig(props.demoId))
const workspaceRef = ref<HTMLElement>()
const primaryCtaHref = ref(config.value.primaryCtaUrl)
const sourceOpen = ref(false)
const sourceButtonRef = ref<HTMLButtonElement>()
let sourceReturnFocus: HTMLElement | undefined
const { isDark } = useData()
const sources = computed(() => getDemoSources(props.demoId))

const observedGrids = new Set<HTMLElement>()
let gridObserver: MutationObserver | undefined

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
  primaryCtaHref.value =
    target.origin === window.location.origin
      ? `${target.pathname}${target.search}${target.hash}`
      : target.href
}

const pushAnalytics = (event: ReturnType<typeof createDemoPageAnalyticsEvent>, dedupeKey: string) =>
  trackSiteAnalytics(event.event, event, dedupeKey)

const trackCta = (location: 'header', action: 'try_in_project') => {
  const target = new URL(primaryCtaHref.value, window.location.origin)
  if (target.pathname === '/trial') {
    pushAnalytics(
      createDemoPageAnalyticsEvent('demo_trial_click', props.demoId, {
        action_id: action,
        placement: location,
        ...analyticsContext(),
      }),
      `demo_trial_click:${props.demoId}:${location}:${action}`,
    )
  }
}

const trackImplementationOpen = () => {
  pushAnalytics(
    createDemoPageAnalyticsEvent('demo_implementation_open', props.demoId, {
      cta_location: 'header',
      implementation_url: config.value.implementationUrl,
    }),
    `demo_implementation_open:${props.demoId}:header`,
  )
}
const openSource = (event?: Event) => {
  sourceReturnFocus = event?.target instanceof HTMLElement ? event.target : sourceButtonRef.value
  sourceOpen.value = true
  trackImplementationOpen()
}
const closeSource = () => {
  sourceOpen.value = false
  nextTick(() => {
    ;(sourceReturnFocus ?? sourceButtonRef.value)?.focus()
  })
}
const trackSourceFramework = (framework: DemoSourceFramework) =>
  pushAnalytics(
    createDemoPageAnalyticsEvent('demo_action', props.demoId, {
      action_id: `source_${framework}`,
      placement: 'source_panel',
      ...analyticsContext(),
    }),
    `demo_source_framework:${props.demoId}:${framework}`,
  )
const trackSourceCopy = () =>
  pushAnalytics(
    createDemoPageAnalyticsEvent('demo_action', props.demoId, {
      action_id: 'source_copy',
      placement: 'source_panel',
      ...analyticsContext(),
    }),
    `demo_source_copy:${props.demoId}`,
  )
const trackWorkspaceAction = (event: Event) => {
  const target =
    event.target instanceof Element ? event.target.closest<HTMLElement>('[data-demo-action]') : null
  const action = target?.dataset.demoAction
  if (!action) return
  pushAnalytics(
    createDemoPageAnalyticsEvent('demo_action', props.demoId, {
      action_id: action,
      placement: 'workspace',
      ...analyticsContext(),
    }),
    `demo_workspace_action:${props.demoId}:${action}`,
  )
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
  const readyGrid = grid as HTMLElement & { componentOnReady?: () => Promise<unknown> }
  const readiness = readyGrid.componentOnReady?.() ?? Promise.resolve()
  void readiness
    .then(() => {
      if (grid.isConnected) markDemoReady()
    })
    .catch(() => undefined)
}

const scanForGrids = () => {
  workspaceRef.value?.querySelectorAll<HTMLElement>('revo-grid').forEach(observeGrid)
  observedGrids.forEach(grid => {
    if (grid.isConnected) return
    observedGrids.delete(grid)
  })
}

onMounted(async () => {
  await nextTick()
  hydratePrimaryCtaHref()
  pushAnalytics(
    createDemoPageAnalyticsEvent('demo_view', props.demoId, analyticsContext()),
    `demo_view:${props.demoId}`,
  )
  scanForGrids()
  if (!workspaceRef.value) return
  workspaceRef.value.addEventListener('click', trackWorkspaceAction)
  gridObserver = new MutationObserver(scanForGrids)
  gridObserver.observe(workspaceRef.value, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  workspaceRef.value?.removeEventListener('click', trackWorkspaceAction)
  gridObserver?.disconnect()
  observedGrids.clear()
})
</script>

<style lang="scss" scoped>
$max-content-width: 1240px;

.demo-page-layout {
  --demo-page-green: var(--vp-c-brand-1);
  --demo-page-green-dark: var(--vp-c-brand-1);
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
  border-color: color-mix(in srgb, var(--vp-c-brand-1) 24%, var(--vp-c-divider));
  background: color-mix(in srgb, var(--vp-c-brand-1) 7%, var(--vp-c-bg));
  color: var(--vp-c-brand-1);
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
  background: color-mix(in srgb, var(--vp-c-brand-1) 14%, transparent);
  color: var(--vp-c-brand-1);
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
  transition:
    border-color 140ms ease,
    background 140ms ease,
    transform 140ms ease;
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
  background: linear-gradient(135deg, var(--demo-page-green), var(--vp-c-brand-2));
  color: var(--vp-button-brand-text);
}

.demo-page-button--primary:hover {
  background: linear-gradient(135deg, var(--demo-page-green-dark), var(--demo-page-green));
  color: var(--vp-button-brand-text);
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
.demo-page-layout {
  --demo-page-green: var(--vp-c-brand-1);
  --demo-page-green-dark: var(--vp-c-brand-1);
  height: 100vh;
  padding: var(--vp-nav-height, 64px) 24px 16px;
}
.demo-page-header {
  max-width: none;
  margin: 0 0 8px;
  padding-top: 18px;
  gap: 20px;
}
.demo-page-title-row h1 {
  font-size: 28px;
  line-height: 34px;
  font-weight: 600;
}
.demo-page-heading p {
  margin-top: 4px;
  font-size: 14px;
  line-height: 20px;
}
.demo-page-plan {
  border-radius: 5px;
}
.demo-page-header-actions {
  align-items: flex-start;
}
.demo-page-button {
  min-height: 36px;
  padding: 7px 14px;
  border-radius: 6px;
}
.demo-page-features {
  position: relative;
}
.demo-page-features summary {
  height: 36px;
  padding: 7px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  list-style: none;
}
.demo-page-features ul {
  position: absolute;
  z-index: 30;
  top: 42px;
  right: 0;
  width: 310px;
  margin: 0;
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  box-shadow: 0 12px 30px rgb(15 23 42/14%);
  list-style: none;
}
.demo-page-features li {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 7px;
}
.demo-page-features li span {
  color: var(--vp-c-text-2);
  font-size: 11px;
}
.demo-page-utility {
  display: flex;
  min-height: 36px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.demo-page-utility-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}
.demo-page-utility-actions button,
.demo-page-utility-actions a {
  display: inline-flex;
  height: 34px;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-1);
  font: 500 13px/1 inherit;
  text-decoration: none;
}
.demo-page-utility-actions button:hover,
.demo-page-utility-actions a:hover {
  background: var(--vp-c-bg-soft);
}
.demo-page-utility-actions :deep(.fa-svg-icon) {
  width: 14px;
  height: 14px;
}
.demo-page-stage {
  position: relative;
  display: flex;
  min-height: 0;
  flex: 1;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
}
.demo-page-workspace {
  min-width: 0;
  min-height: 0;
  flex: 1;
  overflow: hidden;
  border: 0;
  border-radius: 0;
  box-shadow: none;
}
.demo-page-stage.source-open .demo-page-workspace {
  border-right: 0;
}
@media (min-width: 1100px) {
  .demo-page-layout {
    margin-left: 196px;
  }
}
@media (max-width: 1099px) {
  .demo-page-layout {
    padding-top: calc(var(--vp-nav-height, 64px) + 54px);
  }
  .demo-page-header {
    padding-top: 0;
  }
}
@media (max-width: 700px) {
  .demo-page-layout {
    height: auto;
    min-height: 100vh;
    padding-inline: 10px;
  }
  .demo-page-header {
    align-items: flex-start;
    flex-direction: column;
  }
  .demo-page-header-actions {
    width: 100%;
    flex-direction: row;
  }
  .demo-page-button--primary {
    width: 100%;
  }
  .demo-page-features {
    display: none;
  }
  .demo-page-utility {
    align-items: flex-start;
  }
  .demo-page-stage {
    height: 620px;
  }
}
@media (min-width: 1100px) {
  .demo-page-layout {
    width: calc(100% - 196px);
  }
}
.demo-page-button--primary,
.demo-page-button--primary:hover {
  background: var(--demo-page-green);
  transform: none;
}

/* Final demo-page hierarchy and surface treatment. */
.demo-page-layout {
  padding-bottom: 18px;
  background: var(--vp-c-bg);
}
.demo-page-header {
  min-height: 92px;
  margin: 0;
  padding: 16px 0 12px;
  align-items: flex-start;
}
.demo-page-title-row {
  gap: 9px;
}
.demo-page-title-row h1 {
  margin: 0;
  letter-spacing: -0.025em;
}
.demo-page-heading p {
  margin: 3px 0 0;
}
.demo-page-plan {
  align-self: center;
  padding: 2px 6px;
  border: 1px solid color-mix(in srgb, var(--demo-page-green) 18%, transparent);
  background: color-mix(in srgb, var(--demo-page-green) 7%, transparent);
  color: color-mix(in srgb, var(--demo-page-green) 82%, var(--vp-c-text-1));
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
}
.demo-page-header-actions {
  padding-top: 2px;
  gap: 8px;
}
.demo-page-button {
  height: 36px;
  min-height: 36px;
  box-shadow: 0 1px 2px rgb(15 23 42/8%);
  font-size: 13px;
  font-weight: 600;
}
.demo-page-button--primary {
  border-color: color-mix(in srgb, var(--demo-page-green) 82%, var(--vp-c-text-1));
  background: var(--demo-page-green);
  color: #fff;
}
.demo-page-features summary {
  display: flex;
  align-items: center;
  background: var(--vp-c-bg);
  font-size: 13px;
  font-weight: 520;
  box-shadow: 0 1px 2px rgb(15 23 42/3%);
}
.demo-page-features summary:hover {
  border-color: var(--vp-c-border);
}
.demo-page-utility {
  min-height: 34px;
  margin: 0 0 8px;
}

.demo-page-layout[data-demo-id='planning'] .demo-page-header {
  min-height: 82px;
  padding-bottom: 10px;
}
.demo-page-layout[data-demo-id='planning'] .demo-page-heading {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 2px 18px;
}
.demo-page-layout[data-demo-id='planning'] .demo-page-title-row {
  grid-column: 1/-1;
}
.demo-page-layout[data-demo-id='planning'] .demo-page-heading > p {
  margin: 0;
}
.demo-page-stage {
  border-color: color-mix(in srgb, var(--vp-c-divider) 92%, transparent);
  background: var(--vp-c-bg);
  box-shadow: 0 1px 2px rgb(15 23 42/3%);
}
@media (max-width: 1099px) {
  .demo-page-layout {
    padding-right: 16px;
    padding-left: 16px;
  }
  .demo-page-header {
    min-height: 82px;
  }
}
@media (max-width: 700px) {
  .demo-page-layout {
    padding-top: 16px;
  }
  .demo-page-layout[data-demo-id='planning'] .demo-page-heading {
    display: block;
  }
}
@media (min-width: 1100px) {
  .demo-page-layout {
    margin-left: var(--demo-sidebar-width, 256px);
    width: calc(100% - var(--demo-sidebar-width, 256px));
  }
}

/* Contrast pass for the shared demo shell. */
.demo-page-layout {
  background: transparent;
}
.demo-page-plan {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
}
.demo-page-features summary {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-shadow: 0 1px 2px rgb(15 23 42/7%);
}

.demo-page-stage {
  border-color: var(--vp-c-divider);
  background: transparent;
  box-shadow: 0 1px 4px rgb(15 23 42/9%);
}
.demo-page-header-actions {
  align-items: center;
}
.demo-page-features summary {
  margin: 0;
}
.demo-page-stage {
  border: 0;
  border-radius: 0;
  box-shadow: none;
}
.demo-page-workspace {
  background: transparent;
}
.demo-page-heading p,
.demo-page-features summary,
.demo-page-features li span,
.demo-page-utility-actions button,
.demo-page-utility-actions a {
  color: inherit;
}
.demo-page-header-actions {
  flex-wrap: wrap;
  justify-content: flex-end;
}
.demo-page-header-link {
  display: inline-flex;
  width: 96px;
  height: 36px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: inherit;
  font-family: var(--vp-font-family-base);
  font-size: 13px;
  font-style: normal;
  font-variant: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
}
.demo-page-header-link:hover {
  border-color: var(--vp-c-border);
  background: var(--vp-c-bg-soft);
}
.demo-page-github:hover {
  color: var(--vp-c-text-1);
}
.demo-page-header-link :deep(.fa-svg-icon) {
  width: 14px;
  height: 14px;
}
</style>
