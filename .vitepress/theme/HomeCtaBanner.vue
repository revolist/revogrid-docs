<template>
    <section class="cta-banner">
        <div class="glow" aria-hidden="true"></div>
        <h2 class="cta-title">Ready to ship your next<br />data-heavy app?</h2>
        <p class="cta-sub">Start free with the MIT core. Upgrade to Pro when you're ready for advanced features and commercial support.</p>
        <div class="cta-actions">
            <AppButton href="/demo/" variant="primary">
                Explore use cases
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </AppButton>
            <AppButton href="/guide/" variant="secondary">Read the docs</AppButton>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppButton from './AppButton.vue'
</script>

<style lang="scss" scoped>
.cta-banner {
    background: var(--vp-c-bg-soft);
    border-top: 1px solid var(--vp-c-divider);
    text-align: center;
    padding: 96px 48px;
    position: relative;
    overflow: hidden;
}

.glow {
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: radial-gradient(ellipse, var(--vp-c-brand-soft) 0%, transparent 70%);
    pointer-events: none;
}

.cta-title {
    font-size: clamp(28px, 3.5vw, 48px);
    font-weight: 700;
    letter-spacing: -1.5px;
    color: var(--vp-c-text-1);
    margin-bottom: 16px;
    line-height: 1.1;
    position: relative;
}

.cta-sub {
    font-size: 17px;
    color: var(--vp-c-text-2);
    margin-bottom: 36px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    position: relative;
}

.cta-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
}
</style>
