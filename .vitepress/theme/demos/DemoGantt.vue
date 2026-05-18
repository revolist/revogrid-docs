<script setup lang="ts">
import DirectTsDemoFrame from './DirectTsDemoFrame.vue'
import { load } from '@revolist/revogrid-examples/components/gantt/GanttShowcase.ts'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'
import '@revolist/revogrid-examples/components/gantt/gantt-showcase.css'

defineProps<{ title?: string; minHeight?: number | string; maxHeight?: number | string; fullPage?: boolean }>()
</script>

<template>
    <DirectTsDemoFrame :load="load" :title="title" :min-height="minHeight" :max-height="maxHeight" :full-page="fullPage" />
</template>
