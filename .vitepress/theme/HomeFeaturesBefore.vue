<template>
    <header class="VPFeatures VPHomeFeatures">
        <div class="container">
            <h2 class="rv-overline-1">{{ value.title }}</h2>
            <h3 class="rv-heading-2">{{ value.details }}</h3>
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