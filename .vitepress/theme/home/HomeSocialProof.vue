<template>
    <section class="social-proof">
        <div class="container">
            <div class="stats-row">
                <div class="stat" v-for="s in STATS" :key="s.label">
                    <a v-if="s.link" :href="s.link" :title="s.title" class="stat-link">
                        <span class="stat-num">{{ s.num }}</span>
                        <span class="stat-label">{{ s.label }}</span>
                    </a>
                    <template v-else>
                        <span class="stat-num">{{ s.num }}</span>
                        <span class="stat-label">{{ s.label }}</span>
                    </template>
                </div>
            </div>
            <p class="trust-text">
                Used by engineering teams at Fortune 500 companies in automotive, pharma, finance, and enterprise software
            </p>
        </div>
    </section>
</template>

<script lang="ts" setup>
const STATS = [
    { num: '900K+', label: 'jsDelivr downloads / mo', link: 'https://www.jsdelivr.com/package/npm/@revolist/revogrid', title: 'jsDelivr monthly hits' },
    { num: '3.4K+', label: 'GitHub stars', link: 'https://github.com/revolist/revogrid', title: 'RevoGrid on GitHub' },
    { num: '8K+', label: 'Developers using RevoGrid' },
    { num: 'v4.x', label: 'Latest stable release', link: 'https://github.com/revolist/revogrid/releases', title: 'RevoGrid releases on GitHub' },
]
</script>

<style lang="scss" scoped>
.social-proof {
    border-top: 1px solid var(--vp-c-divider);
    border-bottom: 1px solid var(--vp-c-divider);
    padding: 48px 0;
}

.container {
    max-width: 1152px;
    margin: 0 auto;
    padding: 0 48px;
}

.stats-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
    border-right: 1px solid var(--vp-c-divider);
    text-align: center;

    &:last-child {
        border-right: none;
    }

    @media (max-width: 640px) {
        padding: 12px 16px;
        border-right: none;
    }
}

.stat-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }
}

.stat-num {
    font-family: var(--vp-font-family-base);
    font-size: 36px;
    font-weight: 700;
    color: var(--vp-c-text-1);
    letter-spacing: -1px;
    line-height: 1.1;
}

.stat-label {
    font-size: 12px;
    color: var(--vp-c-text-3);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-top: 4px;
}

.trust-text {
    text-align: center;
    margin-top: 32px;
    font-size: 13px;
    color: var(--vp-c-text-2);
    font-family: var(--vp-font-family-mono);
    letter-spacing: 0.04em;
}
</style>
