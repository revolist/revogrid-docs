<template>
  <div class="pivot-page" :style="pageStyle">
    <PivotHeroSection
      :hero="page.hero"
      :preview-enabled="page.preview.enabled"
      :resolve-link="resolvePivotLink"
    />

    <ProStatsBar v-if="page.stats.length" :items="page.stats" :aria-label="page.statsAriaLabel" />

    <PivotFeaturesSection :features="page.features" />

    <PivotUseCases v-if="page.useCases.enabled" />

    <ProAdvancedCallout
      v-if="page.advancedCallout"
      :title="page.advancedCallout.title"
      :section-id="page.advancedCallout.sectionId"
    />

    <ProCtaBanner
      v-if="page.cta"
      :title="page.cta.title"
      :description="page.cta.description"
      :primary-href="resolvePivotLink(page.cta.primaryHref)"
      :primary-label="page.cta.primaryLabel"
      :secondary-href="resolvePivotLink(page.cta.secondaryHref)"
      :secondary-label="page.cta.secondaryLabel"
    />
  </div>
</template>

<script lang="ts" setup>
import ProAdvancedCallout from '../pro/ProAdvancedCallout.vue'
import ProCtaBanner from '../pro/ProCtaBanner.vue'
import ProStatsBar from '../pro/ProStatsBar.vue'
import PivotUseCases from '../pro/PivotUseCases.vue'
import PivotFeaturesSection from './page-layout/PivotFeaturesSection.vue'
import PivotHeroSection from './page-layout/PivotHeroSection.vue'
import { usePivotPage } from './page-layout/usePivotPage'

const { page, pageStyle, resolvePivotLink } = usePivotPage()
</script>

<style lang="scss" src="./page-layout/pivot-page-layout.scss"></style>
