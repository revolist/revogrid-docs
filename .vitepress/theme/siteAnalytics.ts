type AnalyticsValue = string | number | boolean | undefined
type AnalyticsProperties = Record<string, AnalyticsValue>
type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> }

const ALLOWED_ANALYTICS_PROPERTIES = new Set([
  'action_id',
  'cta_location',
  'demo_id',
  'demo_layout_version',
  'demo_name',
  'demo_slug',
  'demo_tier',
  'experiment_variant',
  'field',
  'implementation_url',
  'placement',
  'request_type',
])

const emittedKeys = new Set<string>()

const isDebugEnabled = (location: Location): boolean =>
  new URLSearchParams(location.search).get('analytics_debug') === '1'

const safeAnalyticsProperties = (properties: AnalyticsProperties): AnalyticsProperties =>
  Object.fromEntries(
    Object.entries(properties).filter(
      ([key, value]) => ALLOWED_ANALYTICS_PROPERTIES.has(key) && value !== undefined,
    ),
  )

export const trackSiteAnalytics = (
  event: string,
  properties: AnalyticsProperties = {},
  dedupeKey?: string,
  target: Window | undefined = typeof window === 'undefined' ? undefined : window,
): boolean => {
  if (!target) return false
  const safeProperties = safeAnalyticsProperties(properties)
  const effectiveDedupeKey = dedupeKey ?? `${event}:${JSON.stringify(safeProperties)}`
  if (emittedKeys.has(effectiveDedupeKey)) return false
  emittedKeys.add(effectiveDedupeKey)

  const analyticsWindow = target as DataLayerWindow
  analyticsWindow.dataLayer ??= []
  const payload = { ...safeProperties, event }
  const debugPayload = isDebugEnabled(target.location) ? JSON.stringify(payload) : undefined
  analyticsWindow.dataLayer.push(payload)

  if (debugPayload) console.debug('[analytics]', debugPayload)
  return true
}

export const getAnalyticsExperimentVariant = (location: Location): string | undefined => {
  const value = new URLSearchParams(location.search).get('experiment_variant')?.trim()
  return value && /^[a-z0-9_-]{1,40}$/i.test(value) ? value : undefined
}

export const resetSiteAnalyticsForTests = () => emittedKeys.clear()
