<template>
  <div class="rg-section-header">
    <div v-if="section?.label" class="rg-section-label">{{ section.label }}</div>
    <h2 v-if="section?.title" class="rg-section-title">{{ section.title }}</h2>
    <p v-if="section?.description" class="rg-section-desc" v-html="sectionDescription"></p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { linkProductMentions, type HomeV2Record, useHomeV2Links } from './homeV2Utils'

const props = defineProps<{
  section?: HomeV2Record
}>()

const { linkOf } = useHomeV2Links()
const sectionDescription = computed(() => linkProductMentions(props.section?.description, linkOf))
</script>
