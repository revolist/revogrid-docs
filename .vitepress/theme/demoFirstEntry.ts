import { PRODUCT_CATALOG, type DemoId } from '../../commercial/productCatalog'
import { getDemoPageConfig } from './demoPageLayout'

export const ORDER_FIRST_ENTRY_VARIANT = 'order-first-entry'
export const isOrderFirstEntry = (search: string): boolean =>
  new URLSearchParams(search).get('experiment_variant') === ORDER_FIRST_ENTRY_VARIANT

export const isOrderFirstEntryLanding = (search: string): boolean => {
  const query = new URLSearchParams(search)
  return query.get('scenario') !== 'performance'
    && (!query.has('experiment_variant') || isOrderFirstEntry(search))
}

export const firstEntryScenarios = [
  { label: 'Filtering', demoId: 'filtering' },
  { label: 'Editing', demoId: 'project-tracker' },
  { label: 'Planning', demoId: 'planning' },
  { label: 'Performance', demoId: 'grid-at-scale' },
] as const satisfies readonly { label: string, demoId: DemoId }[]

export function firstEntryWorkspaceClasses(demoId: DemoId): string[] {
  return ['order-first-entry-workspace', `order-first-entry-workspace--${demoId}`]
}

export function firstEntryDemoHref(demoId: DemoId): string {
  if (demoId === 'filtering') return '/demo/'
  const path = demoId === 'filtering' ? '/demo/' : PRODUCT_CATALOG.demos[demoId].pageUrl
  const query = new URLSearchParams({ experiment_variant: ORDER_FIRST_ENTRY_VARIANT })
  if (demoId === 'grid-at-scale') query.set('scenario', 'performance')
  return `${path}?${query}`
}

export function firstEntryTrialHref(demoId: DemoId): string {
  const query = new URLSearchParams({
    source: 'demo-page', demo: demoId, demo_id: demoId, experiment_variant: ORDER_FIRST_ENTRY_VARIANT,
  })
  return `/trial?${query}`
}

export function getFirstEntryContext(demoId: string | undefined) {
  const scenario = firstEntryScenarios.find(item => item.demoId === demoId)
  if (!scenario) return undefined
  const config = getDemoPageConfig(scenario.demoId)
  return {
    ...config,
    title: scenario.demoId === 'filtering' ? 'Order Explorer' : config.title,
    description: scenario.demoId === 'filtering'
      ? 'Find Northstar orders that need review and total at least $1,000.'
      : config.description,
    guidedActions: scenario.demoId === 'filtering'
      ? ['Choose Review queue', 'Search “Northstar”', 'Filter Total ≥ $1,000']
      : config.guidedActions,
    featureBadges: scenario.demoId === 'filtering'
      ? config.featureBadges.filter(feature => ['Advanced filters', 'Quick search'].includes(feature.label))
      : config.featureBadges,
    primaryCtaUrl: firstEntryTrialHref(scenario.demoId),
    returnHref: firstEntryDemoHref(scenario.demoId),
  }
}
