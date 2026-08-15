<template>
  <div class="rg-showcase-features" role="tablist" aria-label="RevoGrid capabilities">
    <div
      v-for="feature in features"
      :key="feature.id"
      class="rg-showcase-feature"
      :class="{ active: feature.id === activeId }"
    >
      <button
        :id="`rg-showcase-tab-${feature.id}`"
        type="button"
        role="tab"
        :aria-selected="feature.id === activeId"
        :aria-controls="`rg-showcase-panel-${feature.id}`"
        @click="$emit('select', feature.id)"
      >
        <span class="rg-showcase-feature-icon">
          <FontAwesomeSvgIcon :name="feature.icon" />
        </span>
          <span class="rg-showcase-feature-copy">
            <span class="rg-showcase-feature-heading">
              <strong>{{ feature.title }}</strong>
            </span>
          <span class="rg-showcase-feature-description">
            {{ feature.description }}
          </span>
        </span>
      </button>
      <a
        class="rg-showcase-doc-link"
        :href="linkOf(feature.link)"
        :aria-label="`${feature.title} documentation`"
      >
        View docs
        <HomeChevron />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FontAwesomeSvgIcon from '../../FontAwesomeSvgIcon.vue'
import HomeChevron from '../../HomeChevron.vue'
import { useHomeV2Links } from '../../homeV2Utils'
import type { FeatureId, ShowcaseFeature } from '../types'

defineProps<{
  features: ShowcaseFeature[]
  activeId: FeatureId
}>()

defineEmits<{
  select: [id: FeatureId]
}>()

const { linkOf } = useHomeV2Links()
</script>

<style lang="scss" scoped>
@use '../styles/feature-list';
</style>
