<script setup lang="ts">
import DocsDemoShowcaseBadge from './DocsDemoShowcaseBadge.vue'
import type { ShowcaseEntry } from './DocsDemoShowcase.types'

defineProps<{
    item: ShowcaseEntry
}>()
</script>

<template>
    <header class="docs-demo-showcase__head">
        <div>
            <div class="docs-demo-showcase__page-title-row">
                <h1>{{ item.title }}</h1>
                <DocsDemoShowcaseBadge :badge="item.badge" tier />
            </div>
            <p>{{ item.subtitle }}</p>
        </div>
    </header>
</template>
