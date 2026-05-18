<script setup lang="ts">
import DirectTsDemoFrame from './DirectTsDemoFrame.vue'
import { load } from '@revolist/revogrid-examples/components/showcase/ECommerce.ts'
import ecommerceData from '@revolist/revogrid-examples/components/sys-data/ecommerce.data.json'
import '@revolist/revogrid-pro/dist/revogrid-pro.css'
import '@revolist/revogrid-examples/components/showcase/ecommerce.css'

defineProps<{ title?: string; minHeight?: number | string; maxHeight?: number | string; fullPage?: boolean }>()
</script>

<template>
    <DirectTsDemoFrame :load="load" :runtime-arg="ecommerceData" :title="title" :min-height="minHeight" :max-height="maxHeight" :full-page="fullPage" />
</template>
