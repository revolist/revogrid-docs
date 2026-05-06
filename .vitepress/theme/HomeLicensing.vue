<template>
    <section class="licensing">
        <div class="container">
            <div class="licensing-inner">
                <div class="licensing-left">
                    <p class="eyebrow">Licensing</p>
                    <h2 class="section-title">The fair pricing<br />your team deserves.</h2>
                    <p class="section-sub">Simple developer-based licensing for teams building serious data apps. Start with the plan you need today and scale usage without renegotiating every deployment.</p>
                    <div class="left-cta">
                        <AppButton :href="homeLink('/pro/prices')" variant="primary">See full pricing</AppButton>
                    </div>
                </div>
                <div class="licensing-right">
                    <ul class="advantage-list">
                        <li class="advantage-item" v-for="a in ADVANTAGES" :key="a.text">
                            <div class="advantage-icon">✓</div>
                            <div class="advantage-text" v-html="a.text"></div>
                        </li>
                    </ul>
                    <div class="pricing-cards">
                        <div class="pricing-card" v-for="card in PRICING_CARDS" :key="card.name" :class="{ featured: card.featured }">
                            <div>
                                <div class="card-name">{{ card.name }}</div>
                                <div class="card-desc">{{ card.desc }}</div>
                            </div>
                            <div class="card-price">{{ card.price }}<span>{{ card.period }}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppButton from './AppButton.vue'
import { PRICES } from '../../pro/prices'
import { useHomeLink } from './useHomeLink'

const { homeLink } = useHomeLink()

const ADVANTAGES = [
    { text: '<strong>Royalty-free commercial use</strong> — ship to any number of end users, hosted or on-prem.' },
    { text: '<strong>No deployment fee</strong> — you\'re not charged per production instance.' },
    { text: '<strong>MIT open-source core</strong> — free forever for individuals and open-source projects.' },
]

const PRICING_CARDS = [
    { name: 'Pro Light', desc: 'For individual developers and small teams', price: `$${PRICES.light.year.USD}`, period: '/dev/yr', featured: false },
    { name: 'Pro Advanced', desc: 'Plugins, priority support, and advanced features', price: `$${PRICES.advanced.year.USD}`, period: '/dev/yr', featured: true },
]
</script>

<style lang="scss" scoped>
.licensing {
    padding: 96px 0;
    overflow: hidden;
}

.container {
    max-width: 1152px;
    margin: 0 auto;
    padding: 0 48px;
}

.licensing-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 48px;
    }
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
    margin-bottom: 16px;
}

.section-sub {
    color: var(--vp-c-text-2);
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 32px;
}

.left-cta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.advantage-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 28px;
    padding: 0;
}

.advantage-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.advantage-icon {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: var(--vp-c-brand-soft);
    border: 1px solid var(--vp-c-brand-2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    flex-shrink: 0;
    margin-top: 1px;
    color: var(--vp-c-brand-1);
    font-weight: 700;
}

.advantage-text {
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.6;

    :deep(strong) {
        color: var(--vp-c-text-1);
        font-weight: 600;
    }
}

.pricing-cards {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.pricing-card {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: border-color 0.2s;

    &:hover {
        border-color: var(--vp-c-brand-2);
    }

    &.featured {
        border-color: var(--vp-c-brand-2);
        background: var(--vp-c-brand-soft);
    }
}

.card-name {
    font-size: 15px;
    font-weight: 600;
    color: var(--vp-c-text-1);
    margin-bottom: 4px;
}

.card-desc {
    font-size: 13px;
    color: var(--vp-c-text-2);
}

.card-price {
    font-family: var(--vp-font-family-mono);
    font-size: 22px;
    font-weight: 600;
    color: var(--vp-c-brand-1);
    white-space: nowrap;

    span {
        font-size: 12px;
        color: var(--vp-c-text-3);
        font-weight: 400;
    }
}
</style>
