import { PRICES } from '../pricing-page/prices'
import { featuresPro } from './features.pro'

export interface FeatureTablePlan {
  name: string
  price?: number
  priceYear?: number
  pricePeriod?: string
  buttonText?: string
  link?: string
  buttonTheme?: 'alt'
  ai?: boolean
}

export interface FeatureTableItem {
  name: string
  supported: string[]
  nesting: number
  parent?: string
  collapsible?: boolean
  expanded?: boolean
  link?: string
  demoUrl?: string
  video?: string
  beta?: boolean
}

export interface FeatureTableGroup {
  name: string
  expanded: boolean
  features: FeatureTableItem[]
}

export const featureTablePlans: FeatureTablePlan[] = [
  {
    name: 'Basic',
  },
  {
    name: 'Pro Lite',
    price: PRICES.light.month.USD,
    priceYear: PRICES.light.year.USD,
    pricePeriod: 'month',
    buttonText: 'Buy Now',
    link: PRICES.light.link,
  },
  {
    name: 'Pro Advanced',
    link: PRICES.advanced.link,
    price: PRICES.advanced.month.USD,
    priceYear: PRICES.advanced.year.USD,
    pricePeriod: 'month',
    buttonText: 'Buy Now',
    buttonTheme: 'alt',
    ai: true,
  },
]

const featuresByGroup = featuresPro.reduce<Record<string, FeatureTableGroup>>((acc, feature) => {
  if (!acc[feature.group]) {
    acc[feature.group] = {
      name: feature.group,
      expanded: true,
      features: [],
    }
  }

  const isEnterpriseTools = feature.group === 'Enterprise Tools'
  const supported = isEnterpriseTools ? ['Pro Advanced'] : ['Pro Lite', 'Pro Advanced']

  acc[feature.group].features.push({
    name: feature.title,
    supported,
    nesting: 1,
    collapsible: Boolean(feature.subFeatures?.length),
    expanded: false,
    link: feature.link,
    demoUrl: feature.demoUrl,
    video: feature.videoUrl,
    beta: feature.beta,
  })

  feature.subFeatures?.forEach((subFeature) => {
    acc[feature.group].features.push({
      name: subFeature.title,
      supported,
      nesting: 2,
      parent: feature.title,
      link: subFeature.link,
    })
  })

  return acc
}, {})

export const featureTableGroups: FeatureTableGroup[] = Object.values(featuresByGroup)

const dataVisualizationGroup = featureTableGroups.find((group) => group.name === 'Data Visualization')
if (dataVisualizationGroup) {
  dataVisualizationGroup.features.push(
    { name: 'Charts', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, collapsible: true, expanded: false },
    { name: 'Progress Line', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Progress Line with Value', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Sparkline', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Bar Chart', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Timeline', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Rating Star', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Badge', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Change', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Thumbs', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
    { name: 'Pie Chart', supported: ['Pro Lite', 'Pro Advanced'], nesting: 2, parent: 'Charts' },
  )
}

featureTableGroups.push({
  name: 'Core Features',
  expanded: true,
  features: [
    { name: 'Basic Cell Formats', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Text Format', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/types#String' },
    { name: 'Number Format', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/types#Number' },
    { name: 'Date Format', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/types#Date' },
    { name: 'Selection Format', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/types#Select-Dropdown' },
    { name: 'Column Features', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Last Column Stretch', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/stretch' },
    { name: 'Column Groups', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/grouping' },
    { name: 'Column Resizing', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/resize' },
    { name: 'Column Autosizing', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/autosize' },
    { name: 'Column Ordering', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/order' },
    { name: 'Column Pinning', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/pin' },
    { name: 'Selection Features', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Cell Range Selection', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Fill Handle', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Core Features', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 1 },
    { name: 'Column Virtualization', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/viewports' },
    { name: 'Row Virtualization', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/viewports' },
    { name: 'Keyboard Support', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/defs#Keyboard' },
    { name: 'Intelligent Virtual DOM', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/overview#VNode-Reactive-DOM' },
    { name: 'Basic Sorting', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/sorting' },
    { name: 'Theme Support', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/theme' },
    { name: 'Plugin System', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/plugin/' },
    { name: 'Trimmed Rows', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/row/#Trimmed-Rows' },
    { name: 'Custom Header Templates', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/column/header.template' },
    { name: 'Custom Cell Properties', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2, link: 'https://rv-grid.com/guide/cell/' },
    { name: 'Accessibility', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2 },
    { name: 'Localization', supported: ['Basic', 'Pro Lite', 'Pro Advanced'], nesting: 2 },
  ],
})

featureTableGroups.push({
  name: 'Advanced Support',
  expanded: true,
  features: [
    { name: 'AI Agent Support', supported: ['Pro Advanced'], nesting: 1, link: 'https://rv-grid.com/pro/ai' },
    { name: 'RevoGrid MCP - AI-Native Grid Intelligence', supported: ['Pro Lite', 'Pro Advanced'], nesting: 1, beta: true },
    { name: 'Support via GitHub', supported: ['Pro Advanced'], nesting: 1 },
    { name: 'Support via Email', supported: ['Pro Advanced'], nesting: 1 },
  ],
})

const enterpriseIdx = featureTableGroups.findIndex((group) => group.name === 'Enterprise Tools')
if (enterpriseIdx >= 0) featureTableGroups.push(featureTableGroups.splice(enterpriseIdx, 1)[0])
