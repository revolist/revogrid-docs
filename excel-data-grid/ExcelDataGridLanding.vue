<template>
  <main class="excel-landing">
    <ExcelHeroSection :content="content.hero" />
    <ExcelWorkflowNav :content="content.workflowNav" />
    <div class="excel-story-body">
      <ExcelClipboardSection :content="content.clipboard" />
      <ExcelEditingSection :content="content.editing" />
      <ExcelFilteringSection :content="content.filtering" />
      <ExcelStructureSection :content="content.structure" />
      <ExcelGroupingSection :content="content.grouping" />
      <ExcelTreeSection :content="content.tree" />
    </div>
    <ExcelScaleSection :content="content.scale" />
    <div class="excel-story-body">
      <ExcelRemoteSection :content="content.remote" />
      <ExcelPositioningSection :content="content.positioning" />
      <ExcelDeveloperSection :content="content.developer" />
      <ExcelUseCasesSection :content="content.useCases" />
      <ExcelCapabilitySection :content="content.capability" />
      <ExcelClosingSection :content="content.closing" />
    </div>
  </main>
</template>

<script setup lang="ts">
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import ExcelCapabilitySection from './ExcelCapabilitySection.vue'
import ExcelClipboardSection from './ExcelClipboardSection.vue'
import ExcelClosingSection from './ExcelClosingSection.vue'
import ExcelDeveloperSection from './ExcelDeveloperSection.vue'
import ExcelEditingSection from './ExcelEditingSection.vue'
import ExcelFilteringSection from './ExcelFilteringSection.vue'
import ExcelGroupingSection from './ExcelGroupingSection.vue'
import ExcelHeroSection from './ExcelHeroSection.vue'
import ExcelPositioningSection from './ExcelPositioningSection.vue'
import ExcelRemoteSection from './ExcelRemoteSection.vue'
import ExcelScaleSection from './ExcelScaleSection.vue'
import ExcelStructureSection from './ExcelStructureSection.vue'
import ExcelTreeSection from './ExcelTreeSection.vue'
import ExcelUseCasesSection from './ExcelUseCasesSection.vue'
import ExcelWorkflowNav from './ExcelWorkflowNav.vue'
import type { ExcelLandingContent } from './excelLandingContent'

defineProps<{ content: ExcelLandingContent }>()
</script>

<style lang="scss">
@use './excelLanding';
</style>
