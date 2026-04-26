<template>
    <a :href="href" class="app-btn" :class="variant">
        <slot />
    </a>
</template>

<script lang="ts" setup>
defineProps<{
    href: string
    variant?: 'primary' | 'secondary'
}>()
</script>

<style lang="scss" scoped>
.app-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: filter 0.25s, transform 0.25s, background 0.2s, border-color 0.2s;

    &:hover {
        transform: translateY(-2px);
    }

    &.primary {
        background: var(--vp-c-brand-3);
        color: var(--vp-c-white);
        border: 1px solid transparent;

        &:hover {
            filter: brightness(1.1);
        }
    }

    &.secondary {
        background: var(--vp-c-bg-elv);
        border: 1px solid var(--vp-c-divider);
        color: var(--vp-c-text-1);
        font-weight: 500;

        &:hover {
            background: var(--vp-c-bg-soft);
            border-color: var(--vp-c-brand-2);
        }
    }
}
</style>
