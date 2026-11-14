import type { DefaultTheme } from 'vitepress'

/** Compose local guides with remote categories without changing either source tree. */
export function mergeGridSidebar(
  local: DefaultTheme.SidebarItem[],
  remote: DefaultTheme.SidebarItem[],
  aliases: Record<string, string> = {},
): DefaultTheme.SidebarItem[] {
  const clone = (items: DefaultTheme.SidebarItem[]): DefaultTheme.SidebarItem[] =>
    items.map(item => ({ ...item, ...(item.items ? { items: clone(item.items) } : {}) }))
  const sections = clone(local)
  function find(
    items: DefaultTheme.SidebarItem[],
    label: string,
  ): DefaultTheme.SidebarItem | undefined {
    for (const item of items) {
      if (item.text === label) return item
      const nested = item.items && find(item.items, label)
      if (nested) return nested
    }
  }
  for (const category of clone(remote)) {
    const label = aliases[category.text ?? ''] ?? category.text
    const existing = category.items && label ? find(sections, label) : undefined
    if (existing) {
      existing.items = [...(existing.items ?? []), ...category.items!]
      existing.collapsed ??= true
    } else {
      sections.push(category)
    }
  }
  return sections
}
