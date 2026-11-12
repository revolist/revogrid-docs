import { PRODUCT_CATALOG } from '../../commercial/productCatalog'
import { classifyInterestScreen, publicScreenPath } from './interestTaxonomy'
import { getRecentInterest } from './interestAnalytics'
import { hasAnalyticsConsent } from './analyticsConsent'
import { firstAcquisitionContext } from './acquisitionContext'

export function readGaIdentity(cookies: string) {
  const cookie = (name: string) =>
    cookies
      .split(';')
      .map(c => c.trim())
      .find(c => c.startsWith(`${name}=`))
      ?.slice(name.length + 1) || ''
  const client = cookie('_ga').match(/^GA\d+\.\d+\.(\d+\.\d+)$/)?.[1]
  const sessionCookie = cookie('_ga_894M8FYLZF')
  const session =
    sessionCookie.match(/^GS1\.\d+\.(\d+)\./)?.[1] ||
    sessionCookie.match(/^GS2\.\d+\.s(\d+)(?:\$|$)/)?.[1]
  return { client_id: client || '', session_id: session || '' }
}
const knownCheckout = (href: string) => {
  if (!href.startsWith('https://buy.stripe.com/')) return undefined
  const url = new URL(href)
  const plan = Object.values(PRODUCT_CATALOG.plans).find(
    plan => plan.buyUrl && new URL(plan.buyUrl).pathname === url.pathname,
  )
  const promotion = PRODUCT_CATALOG.promotions.find(
    promo => promo.buyUrl && new URL(promo.buyUrl).pathname === url.pathname,
  )
  return plan || (promotion && PRODUCT_CATALOG.plans[promotion.planId])
}
export function installCheckoutAnalytics() {
  let generation = 0
  let reference = ''
  let source = ''
  let lastIdentity = ''
  let retryAt = 0
  let stopped = false
  let requesting = false
  const originals = new Map<HTMLAnchorElement, string>()
  const decorate = () => {
    const consent = hasAnalyticsConsent(document.cookie)
    document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(link => {
      if (!knownCheckout(link.href)) return
      if (!originals.has(link)) originals.set(link, link.href)
      const url = new URL(originals.get(link)!)
      url.searchParams.delete('client_reference_id')
      if (consent && reference) url.searchParams.set('client_reference_id', reference)
      else if (consent) {
        const identity = readGaIdentity(document.cookie)
        if (identity.client_id)
          url.searchParams.set(
            'client_reference_id',
            `rg2_${identity.client_id.replace('.', '_')}${identity.session_id ? `_${identity.session_id}` : ''}`,
          )
      }
      if (link.href !== url.href) link.href = url.href
    })
    for (const link of originals.keys()) if (!link.isConnected) originals.delete(link)
  }
  const refresh = async () => {
    const next = publicScreenPath(location.href)
    const identity = readGaIdentity(document.cookie)
    const key = `${identity.client_id}:${identity.session_id}:${getRecentInterest()?.feature_id || getRecentInterest()?.product_id || ''}`
    if (next !== source || key !== lastIdentity || !hasAnalyticsConsent(document.cookie)) {
      generation++
      reference = ''
      source = next
      lastIdentity = key
      retryAt = 0
    }
    decorate()
    if (!hasAnalyticsConsent(document.cookie)) {
      try {
        sessionStorage.removeItem('rg_acquisition')
      } catch {}
      return
    }
    const acquisition = firstAcquisitionContext(window.location, document.referrer)
    if (!identity.client_id || reference || requesting || Date.now() < retryAt) return
    const current = generation
    requesting = true
    retryAt = Date.now() + 30_000
    try {
      const response = await fetch('https://pro.rv-grid.com/account/analytics/checkout', {
        method: 'POST',
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          analytics_consent: true,
          ...identity,
          ...acquisition,
          source_page: source,
          ...classifyInterestScreen(source),
          ...getRecentInterest(),
        }),
        signal: AbortSignal.timeout(2500),
      })
      const result = response.ok ? await response.json() : null
      if (
        !stopped &&
        generation === current &&
        /^rg_[a-f0-9-]{36}$/.test(result?.reference || '')
      ) {
        reference = result.reference
        decorate()
      }
    } catch {
      /* Checkout never waits on the analytics service. */
    } finally {
      requesting = false
    }
  }
  const activate = (event: MouseEvent) => {
    const link =
      event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null
    if (!link || !knownCheckout(link.href)) return
    void refresh()
    decorate()
    if (
      (event.type === 'click' && event.button !== 0) ||
      (event.type === 'auxclick' && event.button !== 1)
    )
      return
    if (!hasAnalyticsConsent(document.cookie)) return
    const plan = knownCheckout(link.href)!
    // This event is the single source for the GTM begin_checkout tag.
    const target = window as Window & { dataLayer?: Record<string, unknown>[] }
    target.dataLayer ??= []
    target.dataLayer.push({
      event: 'checkout_start',
      ...classifyInterestScreen(source),
      ...getRecentInterest(),
      screen_id: source,
      screen_type: classifyInterestScreen(source).screen_type,
      source_page: source,
      interest_stage: 'checkout',
      action_id: 'buy_click',
      action_status: 'requested',
      landing_page: firstAcquisitionContext(window.location, document.referrer).landing_page,
      plan: plan.id,
      billing_period: 'year',
      checkout_type: 'payment_link',
      attribution_status: reference ? 'context_linked' : 'client_only',
      // Stripe determines the actual currency/amount; do not invent revenue at click time.
    })
  }
  const observer = new MutationObserver(records => {
    if (
      records.some(record =>
        [...record.addedNodes].some(
          node =>
            node instanceof Element && (node.matches('a[href]') || node.querySelector('a[href]')),
        ),
      )
    )
      decorate()
  })
  observer.observe(document.body, { childList: true, subtree: true })
  document.addEventListener('click', activate, true)
  document.addEventListener('auxclick', activate, true)
  document.addEventListener('cookieyes_consent_update', refresh)
  const timer = setInterval(() => void refresh(), 5000)
  void refresh()
  return {
    refresh,
    stop() {
      stopped = true
      generation++
      observer.disconnect()
      clearInterval(timer)
      document.removeEventListener('click', activate, true)
      document.removeEventListener('auxclick', activate, true)
      document.removeEventListener('cookieyes_consent_update', refresh)
    },
  }
}
