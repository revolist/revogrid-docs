<script setup lang="ts">
import DirectTsDemoFrame from './DirectTsDemoFrame.vue'
import { load } from '@revolist/revogrid-examples/components/showcase-color/Color.ts'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-examples/components/showcase-color/project-tracker.css'

defineProps<{ title?: string; minHeight?: number | string; maxHeight?: number | string; fullPage?: boolean }>()
</script>

<template>
    <DirectTsDemoFrame :load="load" :title="title" :min-height="minHeight" :max-height="maxHeight" :full-page="fullPage" />
</template>
