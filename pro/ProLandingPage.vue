<template>
  <main ref="rootEl" class="pro-landing">
    <ProHeroSection :page="page" />
    <ProTrustSection :items="trustItems" />
    <ProAiSection :page="page" />
    <ProFeatureHighlights :page="page" />
    <ProServerSideSection :page="page" />
    <ProUseCasesSection :page="page" />
    <ProCatalogSection
      :page="page"
      :feature-count="PRO_FEATURE_COUNT"
      :category-count="PRO_CATEGORY_COUNT"
      :groups="catalogGroups"
    />
    <ProFinalCta :page="page" />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import ProAiSection from './landing/ProAiSection.vue'
import ProCatalogSection from './landing/ProCatalogSection.vue'
import ProFeatureHighlights from './landing/ProFeatureHighlights.vue'
import ProFinalCta from './landing/ProFinalCta.vue'
import ProHeroSection from './landing/ProHeroSection.vue'
import ProServerSideSection from './landing/ProServerSideSection.vue'
import ProTrustSection from './landing/ProTrustSection.vue'
import ProUseCasesSection from './landing/ProUseCasesSection.vue'
import { featuresPro } from './features.pro'

type ProPage = Record<string, any>
type ProFeature = (typeof featuresPro)[number]
type CatalogGroup = {
  rawLabel: string
  label: string
  icon: string
  features: Array<{
    title: string
    description?: string
  }>
}

const { frontmatter } = useData()
const page = computed(() => frontmatter.value.proPage as ProPage)
const rootEl = ref<HTMLElement | null>(null)
const PRO_FEATURE_COUNT = featuresPro.length
const PRO_CATEGORY_COUNT = new Set(featuresPro.map((feature) => feature.group || 'Other')).size

const trustItems = computed(() => {
  const sourceValues: Record<string, string> = {
    featureCount: String(PRO_FEATURE_COUNT),
    categoryCount: String(PRO_CATEGORY_COUNT),
  }

  return (page.value.trust || []).map((item: Record<string, any>) => {
    const value = item.valueSource ? sourceValues[item.valueSource] : item.value
    const description = String(item.description || '').replace(/\{(featureCount|categoryCount)\}/g, (_, key) => sourceValues[key])

    return {
      ...item,
      value,
      description,
    }
  })
})

const featureDescription = (description?: string) =>
  description?.replace(/<[^>]+>/g, ' ').replace(/`/g, '').replace(/\s+/g, ' ').trim()

const catalogGroups = computed(() => {
  const config = page.value.catalog
  const groups = featuresPro.reduce((acc, feature: ProFeature) => {
    const rawLabel = feature.group || 'Other'

    if (!acc[rawLabel]) {
      acc[rawLabel] = {
        rawLabel,
        label: config.groupLabels?.[rawLabel] || rawLabel,
        icon: config.groupIcons?.[rawLabel] || config.defaultIcon,
        features: [],
      }
    }

    acc[rawLabel].features.push({
      title: feature.title,
      description: featureDescription(feature.description),
    })

    return acc
  }, {} as Record<string, CatalogGroup>)

  const groupOrder = Object.keys(config.groupIcons || {})
  const orderByLabel = new Map(groupOrder.map((label, index) => [label, index]))

  return Object.values(groups).sort((a, b) => {
    const aOrder = orderByLabel.get(a.rawLabel) ?? Number.MAX_SAFE_INTEGER
    const bOrder = orderByLabel.get(b.rawLabel) ?? Number.MAX_SAFE_INTEGER

    return aOrder - bOrder
  })
})

onMounted(() => {
  const root = rootEl.value
  if (!root) return

  const revealEls = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('in'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      entry.target.classList.add('in')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12 })

  revealEls.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.06}s`
    observer.observe(el)
  })
})
</script>

<style lang="scss">
@use './landing/proLanding.scss';
</style>
