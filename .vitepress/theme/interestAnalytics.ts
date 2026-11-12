import { PRODUCT_CATALOG } from '../../commercial/productCatalog'
import { classifyInterestScreen, publicScreenPath, featureInterestGroup } from './interestTaxonomy'
import { hasAnalyticsConsent } from './analyticsConsent'

let recentInterest: ReturnType<typeof classifyInterestScreen> | undefined
export const getRecentInterest = () => recentInterest
const rememberInterest = (context: ReturnType<typeof classifyInterestScreen>) => {
  recentInterest = context
  try {
    sessionStorage.setItem('rg_interest_screen', context.screen_id)
  } catch {}
}
const slug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
export function featureFromPreviewId(id: string) {
  return PRODUCT_CATALOG.features.find(feature =>
    [feature.id, slug(feature.title)].some(key => id === key || id.endsWith(`-${key}`)),
  )
}
export function installInterestAnalytics() {
  let visit = 0
  let current = ''
  let lastInput = 0
  let lastInputGrid: Element | null = null
  const seen = new Set<string>()
  const emit = (event: string, context: Record<string, unknown>, action: string) => {
    if (!hasAnalyticsConsent(document.cookie)) return
    const key = `${visit}:${event}:${context.feature_id || context.product_id}:${action}`
    if (seen.has(key)) return
    seen.add(key)
    const target = window as Window & { dataLayer?: Record<string, unknown>[] }
    target.dataLayer ??= []
    target.dataLayer.push({
      event,
      action_status: 'not_applicable',
      ...context,
      action_id: action,
      source_page: current,
    })
  }
  const view = () => {
    const path = publicScreenPath(location.href)
    if (path !== current) {
      current = path
      visit++
      seen.clear()
    }
    const context = classifyInterestScreen(path)
    if (hasAnalyticsConsent(document.cookie)) {
      if (context.feature_id || context.product_id !== 'revogrid') rememberInterest(context)
      else if (!recentInterest) {
        try {
          const saved = sessionStorage.getItem('rg_interest_screen')
          if (saved) recentInterest = classifyInterestScreen(saved)
        } catch {}
      }
    } else {
      recentInterest = undefined
      try {
        sessionStorage.removeItem('rg_interest_screen')
      } catch {}
    }
    emit('interest_screen_view', { ...context, interest_stage: 'view' }, 'screen_view')
  }
  const input = (event: Event) => {
    if (!event.isTrusted) return
    lastInputGrid = event.target instanceof Element ? event.target.closest('revo-grid') : null
    lastInput = lastInputGrid ? Date.now() : 0
  }
  const click = (event: MouseEvent) => {
    if (!event.isTrusted || !(event.target instanceof Element)) return
    const demoAction = event.target.closest<HTMLElement>('[data-demo-action]')?.dataset.demoAction
    if (demoAction && /^[a-z0-9_-]{1,60}$/.test(demoAction)) {
      const context = classifyInterestScreen(location.href)
      if (hasAnalyticsConsent(document.cookie)) rememberInterest(context)
      emit(
        'feature_interest',
        { ...context, interest_stage: 'interact', action_status: 'requested' },
        demoAction,
      )
    }
    const preview = event.target.closest<HTMLElement>('.fc-feat-title-link')
    const feature = preview ? featureFromPreviewId(preview.id) : undefined
    const anchor = event.target.closest<HTMLAnchorElement>('a[href]')
    const next =
      anchor && new URL(anchor.href).origin === location.origin
        ? classifyInterestScreen(anchor.href)
        : undefined
    let context = feature
      ? {
          ...classifyInterestScreen(location.href),
          feature_id: feature.id,
          feature_group: featureInterestGroup(feature.id),
          product_id: ['gantt', 'pivot', 'kanban', 'event-scheduler', 'charts'].includes(feature.id)
            ? feature.id.replace('event-scheduler', 'scheduler')
            : 'revogrid',
          interest_category: ['gantt', 'pivot', 'kanban', 'event-scheduler', 'charts'].includes(
            feature.id,
          )
            ? 'product'
            : 'grid_feature',
        }
      : next && (next.feature_id || next.product_id !== 'revogrid')
        ? next
        : undefined
    const isTrial = next?.screen_type === 'trial'
    if (isTrial) context = recentInterest || classifyInterestScreen(location.href)
    if (!context && preview)
      context = {
        ...classifyInterestScreen(location.href),
        feature_id: 'unmapped',
        interest_category: 'unmapped',
      }
    if (!context) return
    if (hasAnalyticsConsent(document.cookie)) rememberInterest(context)
    emit(
      'feature_interest',
      {
        ...context,
        screen_id: current,
        screen_type: classifyInterestScreen(current).screen_type,
        interest_stage: isTrial ? 'trial' : preview ? 'preview' : 'explore',
      },
      isTrial ? 'trial_click' : preview ? 'preview_open' : 'open_screen',
    )
  }
  const gridEvents: Record<string, [string, string, string]> = {
    'column-expand': ['column-drill-down', 'expand_columns', 'completed'],
    'column-collapse': ['column-drill-down', 'collapse_columns', 'completed'],
    columndragend: ['column-reorder', 'reorder_columns', 'completed'],
    roworderchanged: ['row-reorder', 'reorder_rows', 'requested'],
    roworderapplied: ['row-advanced-drag-drop', 'reorder_rows', 'completed'],
    afteredit: ['editing', 'edit_cells', 'completed'],
    afterfilterapply: ['filtering', 'apply_filter', 'completed'],
    aftersortingapply: ['sorting', 'apply_sort', 'completed'],
    'row-master': ['master-detail', 'toggle_master_detail', 'requested'],
  }
  const gridAction = (event: Event) => {
    if (
      Date.now() - lastInput > 2000 ||
      !(event.target instanceof Element) ||
      event.target.closest('revo-grid') !== lastInputGrid
    )
      return
    const [feature_id, action_id, action_status] = gridEvents[event.type]
    // Requests and completed transitions are explicit; no row/cell details are collected.
    queueMicrotask(() => {
      if (event.defaultPrevented) return
      const context = {
        ...classifyInterestScreen(location.href),
        feature_id,
        feature_group: featureInterestGroup(feature_id),
        interest_category: 'grid_feature',
      }
      if (hasAnalyticsConsent(document.cookie)) rememberInterest(context)
      emit('feature_interest', { ...context, interest_stage: 'interact', action_status }, action_id)
    })
  }
  document.addEventListener('click', click)
  document.addEventListener('pointerdown', input, true)
  document.addEventListener('pointerup', input, true)
  document.addEventListener('keydown', input, true)
  document.addEventListener('cookieyes_consent_update', view)
  for (const name of Object.keys(gridEvents)) document.addEventListener(name, gridAction, true)
  view()
  return {
    view,
    stop() {
      document.removeEventListener('click', click)
      document.removeEventListener('pointerdown', input, true)
      document.removeEventListener('pointerup', input, true)
      document.removeEventListener('keydown', input, true)
      document.removeEventListener('cookieyes_consent_update', view)
      for (const name of Object.keys(gridEvents))
        document.removeEventListener(name, gridAction, true)
      recentInterest = undefined
    },
  }
}
