<template>
    <a :href="href" class="rg-btn" :class="{ 'rg-btn-secondary': variant === 'secondary' }">
        <slot />
    </a>
</template>

<script lang="ts" setup>
defineProps<{
    href: string
    variant?: 'primary' | 'secondary'
}>()
</script>
