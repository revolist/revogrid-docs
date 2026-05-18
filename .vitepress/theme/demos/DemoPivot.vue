<script setup lang="ts">
import DirectTsDemoFrame from './DirectTsDemoFrame.vue'
import { load } from '@revolist/revogrid-examples/components/showcase-pivot/PivotShowcase.ts'
import ecommerceData from '@revolist/revogrid-examples/components/sys-data/ecommerce.data.json'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-enterprise/dist/revogrid-enterprise.css'

defineProps<{ title?: string; minHeight?: number | string; maxHeight?: number | string; fullPage?: boolean }>()

const pivotRows = (ecommerceData as Record<string, unknown>[]).map((row, index) => ({
    ...row,
    Time: `${String(index % 24).padStart(2, '0')}:00`,
}))
</script>

<template>
    <DirectTsDemoFrame :load="load" :runtime-arg="pivotRows" :title="title" :min-height="minHeight" :max-height="maxHeight" :full-page="fullPage" />
</template>
