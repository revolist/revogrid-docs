<script setup lang="ts">
import DocsDemoShowcaseNavCard from './DocsDemoShowcaseNavCard.vue'
import type { ShowcaseEntry, ShowcaseSlug } from './DocsDemoShowcase.types'

defineProps<{
    items: ShowcaseEntry[]
    activeSlug: ShowcaseSlug
}>()
</script>

<template>
    <aside class="docs-demo-showcase__sidebar" aria-label="Use case navigation">
        <div class="docs-demo-showcase__sidebar-header">
            <span class="docs-demo-showcase__eyebrow">Use cases</span>
            <span class="docs-demo-showcase__count">{{ String(items.length).padStart(2, '0') }}</span>
        </div>

        <nav class="docs-demo-showcase__nav">
            <DocsDemoShowcaseNavCard
                v-for="(item, index) in items"
                :key="item.slug"
                :item="item"
                :index="index"
                :active-slug="activeSlug"
            />
        </nav>
    </aside>
</template>
