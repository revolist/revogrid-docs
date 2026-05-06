<template>
    <div class="home-hero-actions">
        <AppButton
            v-for="action in resolvedActions"
            :key="action.link"
            :href="action.link"
            :variant="action.theme === 'brand' ? 'primary' : 'secondary'"
            :target="action.target"
            :rel="action.rel"
        >
            {{ action.text }}
        </AppButton>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import AppButton from './AppButton.vue'
import { useHomeLink } from './useHomeLink'

type HeroAction = {
    theme?: 'brand' | 'alt'
    text: string
    link: string
    target?: string
    rel?: string
}

const { frontmatter } = useData()
const { homeLink } = useHomeLink()
const actions = computed<HeroAction[]>(() => frontmatter.value.hero?.actions ?? [])
const resolvedActions = computed<HeroAction[]>(() =>
    actions.value.map((action) => ({
        ...action,
        link: homeLink(action.link),
    }))
)
</script>

<style lang="scss" scoped>
.home-hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}

@media (min-width: 960px) {
    .home-hero-actions {
        justify-content: flex-start;
    }
}
</style>
