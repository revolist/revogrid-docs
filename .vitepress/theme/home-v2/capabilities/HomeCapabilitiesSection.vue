<template>
  <section id="capabilities" class="rg-section rg-section-soft rg-showcase-section">
    <div class="rg-container rg-showcase-layout">
      <div class="rg-showcase-copy">
        <div v-if="section?.label" class="rg-section-label rg-left">
          {{ section.label }}
        </div>
        <h2 class="rg-showcase-title" v-html="sectionTitle"></h2>
        <p class="rg-showcase-description">{{ section?.description }}</p>

        <CapabilityFeatureList
          :features="features"
          :active-id="activeId"
          @select="selectFeature"
        />
      </div>

      <CapabilityPreview
        :feature="activeFeature"
        :example="activeExample"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { emphasizeText, type HomeV2Record } from '../homeV2Utils'
import CapabilityFeatureList from './components/CapabilityFeatureList.vue'
import CapabilityPreview from './components/CapabilityPreview.vue'
import { capabilityExamples } from './examples'
import type { FeatureId, ShowcaseFeature } from './types'

const props = defineProps<{
  section?: HomeV2Record
}>()

const sectionTitle = computed(() => emphasizeText(props.section?.title ?? '', props.section?.emphasis))
const activeId = ref<FeatureId>('formatting')

const fallbackFeature: ShowcaseFeature = {
  id: 'editing',
  icon: 'edit',
  title: 'Spreadsheet-grade editing',
  description: 'Edit formulas, undo changes, format cells, and work across multiple ranges.',
  link: '/guide/editing',
}

const features = computed<ShowcaseFeature[]>(() =>
  Array.isArray(props.section?.items)
    ? (props.section.items as ShowcaseFeature[])
    : [fallbackFeature]
)

const activeFeature = computed<ShowcaseFeature>(() =>
  features.value.find((feature) => feature.id === activeId.value)
    ?? features.value[0]
    ?? fallbackFeature
)

const activeExample = computed(() => capabilityExamples[activeFeature.value.id] ?? capabilityExamples.editing)

function selectFeature(id: FeatureId) {
  activeId.value = id
}
</script>

<style lang="scss" scoped>
@use './styles/section';
</style>
