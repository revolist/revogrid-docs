<script setup>
import VPTeamMembers from 'vitepress/dist/client/theme-default/components/VPTeamMembers.vue'
import { features } from './showoff-banner.features'
</script>

<template>
    <VPTeamMembers :members="features" size="small" />
</template>
<style lang="scss" scoped>
:deep() {
    .avatar {
        display: none;
    }
}
</style>
