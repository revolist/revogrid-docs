<script setup lang="ts">
import DirectTsDemoFrame from './DirectTsDemoFrame.vue'
import { load } from '@revolist/revogrid-examples/components/core-js-examples/CoreJsExamples.ts'

defineProps<{ title?: string; minHeight?: number | string; maxHeight?: number | string }>()
</script>

<template>
    <DirectTsDemoFrame :load="load" :title="title" :min-height="minHeight" :max-height="maxHeight" />
</template>
