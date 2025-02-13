<template>
    <header class="VPFeatures VPHomeFeatures">
        <div class="container">
            <h3 class="rv-overline-1">{{ value.title }}</h3>
            <div class="rv-heading-2">{{ value.details }}</div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
const { frontmatter } = useData()
const value = computed(() => {
    return frontmatter.value.featuresHeader ?? {}
})
</script>