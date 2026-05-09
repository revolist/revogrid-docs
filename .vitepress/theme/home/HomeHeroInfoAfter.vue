<template>
    <div v-if="showFrameworkBadges" class="framework-badges">
        <span class="framework-label">Works with</span>
        <div class="fw-badges">
            <a
                v-for="(item, i) in integrations"
                :key="i"
                :href="item.path"
                :title="item.details"
                class="fw-badge"
            >
                <span class="fw-dot" :style="{ background: item.color }"></span>
                {{ item.title }}
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import { useHomeLink } from '../useHomeLink'

const FW_COLORS: Record<string, string> = {
    Vue: '#4fc08d',
    React: '#61dafb',
    Angular: '#dd1b16',
    Svelte: '#ff3e00',
    JavaScript: '#f7df1e',
}

const { frontmatter } = useData()
const { homeLink } = useHomeLink()
const showFrameworkBadges = computed(() => frontmatter.value.hero?.showFrameworkBadges !== false)
const integrations = computed(() =>
    (frontmatter.value.integrations ?? []).map((item: any) => ({
        ...item,
        path: homeLink(item.path),
        color: FW_COLORS[item.title] ?? 'var(--vp-c-brand-1)',
    }))
)
</script>

<style lang="scss" scoped>
.framework-badges {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding-top: 20px;
    justify-content: center;
}

.framework-label {
    font-size: 12px;
    color: var(--vp-c-text-3);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    white-space: nowrap;
}

.fw-badges {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
}

.fw-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 5px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-text-2);
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s, background 0.2s;

    &:hover {
        border-color: var(--vp-c-brand-2);
        color: var(--vp-c-text-1);
        background: var(--vp-c-bg-elv);
    }
}

.fw-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
}
</style>
