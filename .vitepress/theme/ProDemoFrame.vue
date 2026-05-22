<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const props = withDefaults(
    defineProps<{
        fallbackDemo?: string
        title?: string
    }>(),
    {
        fallbackDemo: 'hr',
    },
)

const demoOrigin = 'https://pro.rv-grid.com'
const route = useRoute()
const { frontmatter, isDark } = useData()

function demoPathFromRoute(path: string) {
    const cleanPath = path
        .split('?')[0]
        .split('#')[0]
        .replace(/\.html$/, '')
        .replace(/\/$/, '')

    if (!cleanPath || cleanPath === '/demo') {
        return `/demo/${props.fallbackDemo}`
    }

    if (!cleanPath.startsWith('/demo/')) {
        return `/demo/${props.fallbackDemo}`
    }

    return cleanPath
}

const iframeSrc = computed(() => {
    const url = new URL(demoPathFromRoute(route.path), demoOrigin)
    url.searchParams.set('view', 'headless')
    url.searchParams.set('theme', isDark.value ? 'dark' : 'light')
    return url.toString()
})

const frameTitle = computed(
    () => props.title || frontmatter.value.title || 'RevoGrid Pro Demo',
)
</script>

<template>
    <ClientOnly>
        <iframe
            :src="iframeSrc"
            class="pro-demo-frame"
            :title="frameTitle"
        ></iframe>
    </ClientOnly>
</template>

<style scoped>
:global(.demo-page-class .VPDoc),
:global(.demo-page-class .VPDoc .container),
:global(.demo-page-class .VPDoc .content),
:global(.demo-page-class .VPDoc .content-container),
:global(.demo-page-class .VPDoc main) {
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
}

:global(.demo-page-class .vp-doc) {
    width: 100%;
    max-width: none;
}

.pro-demo-frame {
    display: block;
    width: 100%;
    height: calc(100vh - var(--vp-nav-height, 64px));
    border: 0;
    margin-top: 45px;
}
</style>
