import { publicScreenPath } from './interestTaxonomy'

export function captureAcquisitionContext(location: Location, referrer: string) {
  const context: Record<string, string> = { landing_page: publicScreenPath(location.href) }
  const params = new URLSearchParams(location.search)
  for (const part of ['source', 'medium', 'campaign']) {
    const value = params.get(`utm_${part}`)
    // Campaign taxonomy only; exclude arbitrary URL values and personal identifiers.
    if (value && /^[a-zA-Z0-9_-]{1,80}$/.test(value)) context[`acquisition_${part}`] = value
  }
  try {
    const url = new URL(referrer)
    if (url.protocol === 'https:' && url.hostname !== location.hostname)
      context.referrer_domain = url.hostname
  } catch {}
  return context
}
export function firstAcquisitionContext(location: Location, referrer: string) {
  try {
    const stored = sessionStorage.getItem('rg_acquisition')
    if (stored) return JSON.parse(stored) as Record<string, string>
    const context = captureAcquisitionContext(location, referrer)
    sessionStorage.setItem('rg_acquisition', JSON.stringify(context))
    return context
  } catch {
    return captureAcquisitionContext(location, referrer)
  }
}
