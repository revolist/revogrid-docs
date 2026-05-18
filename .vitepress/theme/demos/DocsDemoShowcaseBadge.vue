<script setup lang="ts">
import type { ShowcaseBadge } from './DocsDemoShowcase.types'

defineProps<{
    badge: ShowcaseBadge
    tier?: boolean
}>()
</script>

<template>
    <span class="docs-demo-showcase__badge" :class="[`docs-demo-showcase__badge--${badge.toLowerCase()}`, { 'docs-demo-showcase__tier-badge': tier }]">
        {{ badge }}
    </span>
</template>
