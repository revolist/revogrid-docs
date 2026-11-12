import { PRODUCT_CATALOG } from '../../commercial/productCatalog'
import { featuresPro } from '../../pro/features.pro'

export const publicScreenPath = (value: string) => {
  const path =
    new URL(value, 'https://rv-grid.com').pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/'
  return /^\/[a-zA-Z0-9/_.-]{0,180}$/.test(path) ? path : '/other'
}

// Explicit aliases keep existing marketing slugs from creating multiple feature IDs.
const demoFeatures: Record<string, string> = {
  'row-master': 'master-detail',
  'column-collapse': 'column-drill-down',
  'tree-data': 'hierarchical-data-view',
  'audit-history': 'audit-trail-history',
  excel: 'excel-import-export',
  filtering: 'advanced-selection-filtering',
  'infinity-scroll': 'infinite-scroll',
  'context-menu': 'context-menu',
}
export const featureInterestGroup = (id: string) => {
  const feature = PRODUCT_CATALOG.features.find(feature => feature.id === id)
  const group = featuresPro.find(marketing => marketing.title === feature?.title)?.group
  if (group)
    return group
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  if (
    [
      'column-reorder',
      'row-reorder',
      'column-pinning',
      'column-resize',
      'column-grouping',
      'row-grouping',
    ].includes(id)
  )
    return 'grid-structure'
  if (['editing', 'clipboard', 'filtering', 'sorting'].includes(id)) return 'data-management'
  return id ? 'other' : 'overview'
}
export function classifyInterestScreen(value: string) {
  const screen_id = publicScreenPath(value)
  const screen_type = screen_id.startsWith('/demo')
    ? 'demo'
    : screen_id.startsWith('/blog/')
      ? 'article'
      : screen_id.startsWith('/compare')
        ? 'comparison'
        : screen_id === '/pricing'
          ? 'pricing'
          : screen_id === '/trial'
            ? 'trial'
            : screen_id.startsWith('/guide') || screen_id.startsWith('/pro/')
              ? 'documentation'
              : 'product'
  const demoSlug = screen_id.split('/')[2] || ''
  const product_id =
    /(?:^|\/)(?:gantt)(?:[-/]|$)/.test(screen_id) || screen_id.includes('js-gantt')
      ? 'gantt'
      : screen_id.includes('pivot')
        ? 'pivot'
        : /scheduler|property-booking/.test(screen_id)
          ? 'scheduler'
          : screen_id.includes('kanban')
            ? 'kanban'
            : screen_id.includes('charts')
              ? 'charts'
              : 'revogrid'
  const feature = PRODUCT_CATALOG.features.find(feature =>
    [feature.docsUrl, feature.demoUrl].some(url => url && publicScreenPath(url) === screen_id),
  )
  const feature_id =
    feature?.id ||
    demoFeatures[demoSlug] ||
    (
      {
        '/guide/row/master.pro': 'master-detail',
        '/guide/column/order': 'column-reorder',
        '/guide/row/order': 'row-reorder',
        '/guide/row/order.pro': 'row-advanced-drag-drop',
        '/guide/column/pin': 'column-pinning',
        '/guide/column/resize': 'column-resize',
        '/guide/row/grouping': 'row-grouping',
        '/guide/filters': 'filtering',
        '/guide/editing': 'editing',
        '/guide/clipboard': 'clipboard',
        '/guide/column/grouping': 'column-grouping',
        '/guide/tree-data': 'hierarchical-data-view',
      } as Record<string, string>
    )[screen_id] ||
    ''
  const interest_category =
    product_id !== 'revogrid' ? 'product' : feature_id ? 'grid_feature' : 'grid'
  return {
    screen_id,
    screen_type,
    product_id,
    feature_id,
    interest_category,
    feature_group: featureInterestGroup(feature_id),
  }
}
