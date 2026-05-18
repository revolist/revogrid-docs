<script setup lang="ts">
import type { ShowcaseIcon } from './DocsDemoShowcase.types'

defineProps<{
    icon: ShowcaseIcon
}>()
</script>

<template>
    <span class="docs-demo-showcase__icon">
        <svg v-if="icon === 'table'" viewBox="0 0 24 24"><path d="M4 5h16v14H4z" /><path d="M4 10h16M9 5v14M15 5v14" /></svg>
        <svg v-else-if="icon === 'gantt'" viewBox="0 0 24 24"><path d="M4 7h4M4 12h8M4 17h12M16 12h4" /></svg>
        <svg v-else-if="icon === 'users'" viewBox="0 0 24 24"><path d="M16 20v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="8" r="4" /><path d="M22 20v-2a4 4 0 0 0-3-3.87M16 4.13a4 4 0 0 1 0 7.75" /></svg>
        <svg v-else-if="icon === 'kanban'" viewBox="0 0 24 24"><path d="M6 5v14M12 5v9M18 5v6" /></svg>
        <svg v-else viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /><path d="M8 5v14M16 5v14" /></svg>
    </span>
</template>
