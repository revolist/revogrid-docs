<template>
    <div v-html="svg" class="mermaid"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRaw } from 'vue'
import { useData } from 'vitepress'
import mermaid, { type MermaidConfig } from 'mermaid'

const props = defineProps<{
    graph: string
    id: string
}>()

const { page } = useData()
const { frontmatter } = toRaw(page.value)
const mermaidPageTheme = frontmatter.mermaidTheme || ''
const svg = ref('')
let observer: MutationObserver | undefined

const renderChart = async () => {
    const hasDarkClass = document.documentElement.classList.contains('dark')
    const config: MermaidConfig = {
        securityLevel: 'loose',
        startOnLoad: false,
    }

    if (mermaidPageTheme) {
        config.theme = mermaidPageTheme
    }
    if (hasDarkClass) {
        config.theme = 'dark'
    }

    mermaid.initialize(config)
    const result = await mermaid.render(props.id, decodeURIComponent(props.graph))
    const salt = Math.random().toString(36).slice(2)
    svg.value = `${result.svg}<span style="display:none">${salt}</span>`
}

onMounted(async () => {
    observer = new MutationObserver(renderChart)
    observer.observe(document.documentElement, { attributes: true })
    await renderChart()
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>
