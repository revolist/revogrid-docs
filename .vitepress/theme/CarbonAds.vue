<template>
    <VPDocAsideCarbonAds class="VPCarbonAdsWrapper"  v-if="theme.carbonAds" :carbon-ads="theme.carbonAds" />
</template>
<script lang="ts" setup>

import { useData } from 'vitepress'

const { theme } = useData()
import VPDocAsideCarbonAds from 'vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue'
</script>

<style lang="scss" scoped>
.VPCarbonAdsWrapper {
    max-width: 220px;
    margin-left: 120px;
    margin-top: 30px;
}
:deep(.VPCarbonAds) {
    display: inline-block !important;
    min-height: initial !important;
    background-color: transparent !important;
}
:deep(.carbon-img) {
    float: left;
    margin-left: -145px;
}
:deep(.carbon-wrap) {
    text-align: left;
}
:deep(.carbon-poweredby) {
    text-align: left;
}
</style>