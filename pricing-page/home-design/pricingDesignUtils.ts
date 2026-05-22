import { useHomeLink } from '../../.vitepress/theme/useHomeLink'

export type PricingRecord = Record<string, any>

export function usePricingLinks() {
  const { homeLink } = useHomeLink()

  const linkOf = (href?: string) => {
    if (!href) return '#'
    if (/^(https?:|mailto:|#)/.test(href)) return href
    return homeLink(href)
  }

  const targetOf = (href?: string) => href && /^https?:/.test(href) ? '_blank' : undefined
  const relOf = (href?: string) => href && /^https?:/.test(href) ? 'noopener' : undefined

  return { linkOf, targetOf, relOf }
}
