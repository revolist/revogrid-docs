<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const framework = computed(() => {
    const path = route.path

    if (path.includes('/guide/react/') || path.includes('/demo/react/')) {
        return 'react'
    }

    if (path.includes('/guide/vue') || path.includes('/demo/vue/')) {
        return 'vue'
    }

    if (path.includes('/guide/angular/') || path.includes('/demo/angular/')) {
        return 'angular'
    }

    return 'ts'
})
</script>

<template>
    <DemoWidgetFrame
        demo="tree"
        :framework="framework"
        title="RevoGrid Pro Tree Data demo"
        :min-height="620"
    />
</template>
