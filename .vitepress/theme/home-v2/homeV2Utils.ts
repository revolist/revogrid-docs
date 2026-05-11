import { useHomeLink } from '../useHomeLink'

export type HomeV2Record = Record<string, any>

export function useHomeV2Links() {
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

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function linkProductMentions(value: string | undefined, linkOf: (href?: string) => string) {
  if (!value) return ''

  return escapeHtml(value).replace(/\b(Pivot Grid|Gantt Chart|Pivot|Gantt|pivot|gantt)\b/g, (label) => {
    const href = /pivot/i.test(label) ? '/pivot' : '/gantt'
    return `<a class="rg-product-link" href="${escapeHtml(linkOf(href))}">${label}</a>`
  })
}

export function iconText(icon: string) {
  const map: Record<string, string> = {
    pulse: 'Hz',
    grid: '[]',
    star: '*',
    plugin: '{}',
    links: '<>',
    lock: '##',
    chart: '01',
    app: '//',
    tool: 'Fn',
    money: '$',
    box: 'Bx',
    factory: 'ERP',
    trend: '/\\',
    calendar: 'Cal',
  }
  return map[icon] ?? icon
}

export function comparisonText(value: string) {
  const map: Record<string, string> = {
    yes: '✓',
    no: '×',
    partial: '±',
    yesPro: '✓ (Pro)',
    noSales: 'Sales required',
    complex: 'Complex',
    na: 'n/a',
    minutes: 'Minutes',
    days: 'Days',
    weeks: 'Weeks',
  }
  return map[value] ?? value
}

export function comparisonClass(value: string, index: number) {
  return {
    highlight: index === 2,
    check: value === 'yes' || value === 'yesPro' || value === 'minutes',
    cross: value === 'no' || value === 'noSales' || value === 'weeks' || value === 'complex',
    partial: value === 'partial' || value === 'days' || value === 'na',
  }
}
