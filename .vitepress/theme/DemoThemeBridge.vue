<script lang="ts" setup>
import { onMounted, watchEffect } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

function applyDemoThemeMarker(dark: boolean) {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    root.dataset.theme = dark ? 'dark' : 'light'
    root.classList.toggle('dark', dark)
}

onMounted(() => {
    watchEffect(() => {
        applyDemoThemeMarker(isDark.value)
    })
})
</script>

<template>
    <span hidden />
</template>
