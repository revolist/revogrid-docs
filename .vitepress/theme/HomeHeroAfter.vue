<template>
    <div class="VPFeatures VPHomeFeatures">
        <div class="container">
            <hr />
            <h2 class="rv-overline-1">{{ value.title }}</h2>
            <div class="rv-heading-2">{{ value.details }}</div>
        </div>
    </div>

    <VPFeatures :features="features" />
    <br />
    <br />
</template>

<script lang="ts" setup>
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'
import { useData } from 'vitepress'
import { computed } from 'vue'
const { frontmatter } = useData()
const value = computed(() => {
    return frontmatter.value.recommended ?? {}
})
const features = computed(() => {
    return frontmatter.value.recommended.features ?? []
})
</script>

<style lang="scss" scoped>
.VPFeatures {
    background-color: transparent;
    padding-bottom: 5px;
    hr {
        margin: 16px 0;
        border: none;
        border-top: 1px solid var(--vp-c-divider);
    }
}

:deep(.VPFeature) {
    background-color: transparent;
    border: 0;
    padding: 0;
}
</style>