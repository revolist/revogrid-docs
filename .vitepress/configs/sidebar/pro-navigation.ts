import type { DefaultTheme } from 'vitepress'
import manifest from './pro-navigation.json' with { type: 'json' }

export interface ProNavigationItem {
  label: string
  href?: string
  items?: ProNavigationItem[]
}

const PRO_ORIGIN = 'https://pro.rv-grid.com'

// The supplied tree owns its labels, so another docs locale can supply a translated manifest.
export function createProSidebar(
  items: ProNavigationItem[],
  overviewLabel = 'Overview',
): DefaultTheme.SidebarItem[] {
  return items.flatMap(item => {
    const children = item.items ? createProSidebar(item.items, overviewLabel) : []
    // Skip imported overview pages and promote useful guides inside overview groups.
    if (item.label.trim().toLowerCase() === overviewLabel.toLowerCase()) return children
    if (!item.href && !children.length) return []
    return [
      {
        text: item.label,
        ...(item.href
          ? {
              link: new URL(item.href, PRO_ORIGIN).href,
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {}),
        ...(children.length ? { collapsed: true, items: children } : {}),
      },
    ]
  })
}

export const sidebarProEn: DefaultTheme.SidebarItem[] = createProSidebar(manifest.items)

/** Mark Pro destinations after local and remote categories have been merged. */
export function withProBadges(
  items: DefaultTheme.SidebarItem[],
  badgeLabel = 'Pro',
): DefaultTheme.SidebarItem[] {
  const escape = (value: string) =>
    value.replace(
      /[&<>"']/g,
      character =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!,
    )
  function decorate(item: DefaultTheme.SidebarItem): {
    item: DefaultTheme.SidebarItem
    pro: boolean
  } {
    const children = item.items?.map(decorate)
    const pro = item.link
      ? new URL(item.link, 'https://rv-grid.com').origin === PRO_ORIGIN
      : Boolean(children?.length && children.every(child => child.pro))
    return {
      pro,
      item: {
        ...item,
        ...(children ? { items: children.map(child => child.item) } : {}),
        ...(pro && item.text
          ? {
              text: `<span>${escape(item.text)}</span> <span class="VPBadge tip pro-sidebar-badge">${escape(badgeLabel)}</span>`,
            }
          : {}),
      },
    }
  }
  return items.map(item => decorate(item).item)
}
