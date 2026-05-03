<template>
    <section class="feature-stats">
        <div class="container">
            <p class="eyebrow">Why RevoGrid</p>
            <h2 class="section-title">Everything a production<br />data grid needs.</h2>
            <div class="cols">
                <a class="col" v-for="f in FEATURES" :key="f.title" :href="f.href">
                    <div class="col-icon">{{ f.icon }}</div>
                    <div class="stat-row">
                        <span class="stat-num">{{ f.stat }}</span>
                        <span class="stat-label">{{ f.statLabel }}</span>
                    </div>
                    <div class="col-title">{{ f.title }}</div>
                    <div class="col-desc">{{ f.desc }}</div>
                    <div class="tags">
                        <span class="tag" v-for="t in f.tags" :key="t">{{ t }}</span>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const FEATURES = [
    {
        icon: '⚡',
        title: 'Performance at Scale',
        href: '/guide/performance',
        desc: 'Virtual DOM rendering, row virtualization, and lazy column loading keep the UI fluid — even with half a million rows.',
        stat: '500K',
        statLabel: 'rows at 60fps',
        tags: ['Virtual scroll', 'Lazy load', 'Column virtualization', 'Batch render'],
    },
    {
        icon: '🧩',
        title: 'Plugin Ecosystem',
        href: '/pro/',
        desc: 'Add ready-made plugins, column types, editors, and renderers to shape complex data workflows without rebuilding grid behavior.',
        stat: '50+',
        statLabel: 'extensions',
        tags: ['Plugin API', 'Custom editors', 'Cell renderers', 'Hooks'],
    },
    {
        icon: '🔌',
        title: 'Framework Flexibility',
        href: '/guide/installation',
        desc: 'One grid component. Native bindings for React, Vue, Angular, Svelte, and vanilla JS — with identical APIs across all.',
        stat: '5',
        statLabel: 'framework targets',
        tags: ['React', 'Vue', 'Angular', 'Svelte', 'Vanilla JS'],
    },
]
</script>

<style lang="scss" scoped>
.feature-stats {
    background: var(--vp-c-bg-soft);
    padding: 96px 0;
}

.container {
    max-width: 1152px;
    margin: 0 auto;
    padding: 0 48px;
}

.eyebrow {
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 14px;
}

.section-title {
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1.1;
    color: var(--vp-c-text-1);
    margin-bottom: 56px;
}

.cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}

.col {
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    color: inherit;
    display: block;
    padding: 36px 28px;
    text-decoration: none;
    transition: border-color 0.25s, transform 0.25s;

    &:hover {
        border-color: var(--vp-c-brand-2);
        transform: translateY(-4px);
    }

    &:focus-visible {
        outline: 2px solid var(--vp-c-brand-1);
        outline-offset: 3px;
    }
}

.col-icon {
    width: 44px;
    height: 44px;
    background: var(--vp-c-brand-soft);
    border: 1px solid var(--vp-c-brand-2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 24px;
}

.stat-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 8px;
}

.stat-num {
    font-size: 32px;
    font-weight: 700;
    color: var(--vp-c-brand-1);
    letter-spacing: -1px;
    line-height: 1;
}

.stat-label {
    font-size: 13px;
    color: var(--vp-c-text-3);
    font-weight: 500;
}

.col-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin-bottom: 12px;
    letter-spacing: -0.3px;
}

.col-desc {
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.7;
    margin-bottom: 24px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    padding: 3px 9px;
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    color: var(--vp-c-text-3);
}
</style>
