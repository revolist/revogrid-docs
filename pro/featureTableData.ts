import {
  PRODUCT_CATALOG,
  chartFeatureTableItems,
  featureTableSupplementalGroups,
  getCatalogProFeatures,
  getPlan,
  planIncludesFeature,
  resolvePlanPrice,
  type PlanId,
} from '../commercial/productCatalog'

const lightPrice = resolvePlanPrice('pro-lite')
const advancedPrice = resolvePlanPrice('pro-advanced')
const publishedPlanIds: PlanId[] = ['open-source', 'pro-lite', 'pro-advanced']

export interface FeatureTablePlan {
  id: PlanId
  name: string
  price?: number
  priceYear?: number
  compareAtPriceYear?: number
  pricePeriod?: string
  billingSummary?: string
  buttonText?: string
  link?: string
  buttonTheme?: 'alt'
  ai?: boolean
}

export interface FeatureTableItem {
  id?: string
  name: string
  supported: string[]
  nesting: number
  parent?: string
  collapsible?: boolean
  expanded?: boolean
  link?: string
  demoUrl?: string
  video?: string
  status?: 'stable' | 'beta' | 'preview'
}

export interface FeatureTableGroup {
  name: string
  expanded: boolean
  features: FeatureTableItem[]
}

export const featureTablePlans: FeatureTablePlan[] = [
  {
    id: 'open-source',
    name: getPlan('open-source').name,
  },
  {
    id: 'pro-lite',
    name: getPlan('pro-lite').name,
    price: lightPrice.month.USD,
    priceYear: lightPrice.year.USD,
    compareAtPriceYear: lightPrice.compareAtYear?.USD,
    pricePeriod: 'month',
    billingSummary: getPlan('pro-lite').billingSummary,
    buttonText: 'Buy Now',
    link: lightPrice.link,
  },
  {
    id: 'pro-advanced',
    name: getPlan('pro-advanced').name,
    link: advancedPrice.link,
    price: advancedPrice.month.USD,
    priceYear: advancedPrice.year.USD,
    pricePeriod: 'month',
    billingSummary: getPlan('pro-advanced').billingSummary,
    buttonText: 'Buy Now',
    buttonTheme: 'alt',
    ai: true,
  },
]

const planNamesForFeature = (featureId: string) =>
  publishedPlanIds
    .filter((planId) => planIncludesFeature(planId, featureId))
    .map((planId) => getPlan(planId).name)

const featuresByGroup = getCatalogProFeatures().reduce<Record<string, FeatureTableGroup>>((acc, feature) => {
  if (!acc[feature.group]) {
    acc[feature.group] = {
      name: feature.group,
      expanded: true,
      features: [],
    }
  }

  const supported = planNamesForFeature(feature.id)
  acc[feature.group].features.push({
    id: feature.id,
    name: feature.title,
    supported,
    nesting: 1,
    collapsible: Boolean(feature.subFeatures?.length),
    expanded: false,
    link: feature.link,
    demoUrl: feature.demoUrl,
    video: feature.videoUrl,
    status: feature.status,
  })

  feature.subFeatures?.forEach((subFeature) => {
    acc[feature.group].features.push({
      id: `${feature.id}:${subFeature.title}`,
      name: subFeature.title,
      supported,
      nesting: 2,
      parent: feature.title,
      link: subFeature.link,
      status: feature.status,
    })
  })

  return acc
}, {})

export const featureTableGroups: FeatureTableGroup[] = Object.values(featuresByGroup)

const dataVisualizationGroup = featureTableGroups.find((group) => group.name === 'Data Visualization')
if (dataVisualizationGroup) {
  dataVisualizationGroup.features.push(...chartFeatureTableItems.map((feature) => ({
    id: feature.featureId,
    name: feature.name,
    supported: feature.planIds.map((planId) => getPlan(planId).name),
    nesting: feature.nesting,
    parent: feature.parent,
    collapsible: feature.collapsible,
    expanded: feature.expanded,
    status: feature.featureId ? PRODUCT_CATALOG.features.find(({ id }) => id === feature.featureId)?.status : 'stable',
  })))
}

featureTableGroups.push(...featureTableSupplementalGroups.map((group) => ({
  name: group.name,
  expanded: group.expanded,
  features: group.features.map((feature) => ({
    id: feature.featureId,
    name: feature.name,
    supported: feature.planIds.map((planId) => getPlan(planId).name),
    nesting: feature.nesting,
    parent: feature.parent,
    collapsible: feature.collapsible,
    expanded: feature.expanded,
    link: feature.link,
    status: feature.featureId ? PRODUCT_CATALOG.features.find(({ id }) => id === feature.featureId)?.status : 'stable',
  })),
})))

const advancedModulesIndex = featureTableGroups.findIndex((group) => group.name === 'Pro Advanced Modules')
if (advancedModulesIndex >= 0) {
  featureTableGroups.push(featureTableGroups.splice(advancedModulesIndex, 1)[0])
}
