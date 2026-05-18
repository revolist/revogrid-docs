<script setup lang="ts">
import HRDemo from '@revolist/revogrid-examples/components/hr/HRDemo.vue'

defineProps<{ title?: string; minHeight?: number | string; maxHeight?: number | string }>()
</script>

<template>
    <HRDemo />
</template>
