<script setup lang="ts">
import { computed } from 'vue'
import DocsDemoShowcaseBadge from './DocsDemoShowcaseBadge.vue'
import DocsDemoShowcaseIcon from './DocsDemoShowcaseIcon.vue'
import DocsDemoShowcasePreview from './DocsDemoShowcasePreview.vue'
import type { ShowcaseEntry, ShowcaseSlug } from './DocsDemoShowcase.types'

const props = defineProps<{
    item: ShowcaseEntry
    index: number
    activeSlug: ShowcaseSlug
}>()

const isActive = computed(() => props.item.slug === props.activeSlug)
const href = computed(() => props.item.slug === 'hr' ? '/demo/hr' : `/demo/${props.item.slug}`)
</script>

<template>
    <a
        class="docs-demo-showcase__nav-card"
        :class="{ 'is-active': isActive }"
        :href="href"
        :aria-current="isActive ? 'page' : undefined"
    >
        <span class="docs-demo-showcase__thumb" aria-hidden="true">
            <span class="docs-demo-showcase__num">{{ String(index + 1).padStart(2, '0') }}</span>
            <DocsDemoShowcaseIcon :icon="item.icon" />
            <DocsDemoShowcasePreview :preview="item.preview" />
        </span>
        <span class="docs-demo-showcase__nav-card-body">
            <span class="docs-demo-showcase__title-row">
                <span class="docs-demo-showcase__nav-title">{{ item.label }}</span>
                <DocsDemoShowcaseBadge :badge="item.badge" />
            </span>
        </span>
    </a>
</template>
