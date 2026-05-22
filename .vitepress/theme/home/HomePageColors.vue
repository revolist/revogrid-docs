<script lang="ts" setup>
import { nextTick, onBeforeUnmount, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

type HomeColorSet = {
    brand1?: string
    brand2?: string
    brand3?: string
    brandSoft?: string
    heroGradient?: string
    heroNameColor?: string
}

type HomeColors = HomeColorSet & {
    light?: HomeColorSet
    dark?: HomeColorSet
}

const CSS_VAR_MAP: Record<keyof HomeColorSet, string[]> = {
    brand1: ['--vp-c-brand-1', '--vp-c-tip-1', '--vp-button-brand-active-bg'],
    brand2: ['--vp-c-brand-2', '--vp-c-tip-2', '--vp-button-brand-hover-bg'],
    brand3: ['--vp-c-brand-3', '--vp-c-tip-3', '--vp-button-brand-bg'],
    brandSoft: ['--vp-c-brand-soft', '--vp-c-tip-soft'],
    heroGradient: ['--vp-home-hero-name-background'],
    heroNameColor: ['--vp-home-hero-name-color'],
}

const { frontmatter, isDark } = useData()
const route = useRoute()
const originalVars = new Map<string, string>()

function rememberVar(name: string) {
    if (!originalVars.has(name)) {
        originalVars.set(name, document.documentElement.style.getPropertyValue(name))
    }
}

function restoreVars() {
    if (typeof document === 'undefined') return

    for (const [name, value] of originalVars) {
        if (value) {
            document.documentElement.style.setProperty(name, value)
        } else {
            document.documentElement.style.removeProperty(name)
        }
    }

    originalVars.clear()
}

function currentColorSet(config: HomeColors): HomeColorSet {
    return {
        ...config,
        ...(isDark.value ? config.dark : config.light),
    }
}

function applyHomeColors() {
    if (typeof document === 'undefined') return

    restoreVars()

    const config = frontmatter.value.homeColors as HomeColors | undefined
    if (!config) return

    const colors = currentColorSet(config)

    for (const key of Object.keys(CSS_VAR_MAP) as (keyof HomeColorSet)[]) {
        const value = colors[key]
        if (!value) continue

        for (const cssVar of CSS_VAR_MAP[key]) {
            rememberVar(cssVar)
            document.documentElement.style.setProperty(cssVar, value)
        }
    }

    if (colors.heroGradient && !colors.heroNameColor) {
        rememberVar('--vp-home-hero-name-color')
        document.documentElement.style.setProperty('--vp-home-hero-name-color', 'transparent')
    }
}

async function scheduleHomeColors() {
    await nextTick()
    applyHomeColors()
}

watch(
    () => [route.path, isDark.value, JSON.stringify(frontmatter.value.homeColors ?? {})],
    () => scheduleHomeColors(),
    { immediate: true },
)

onBeforeUnmount(() => {
    restoreVars()
})
</script>

<template>
    <span hidden />
</template>
