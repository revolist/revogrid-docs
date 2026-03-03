<template>
    <div class="plan">
        <div class="header">
            <div class="plan-name">{{ props.title }}
              </div>
            <p>{{ props.description }}</p>
        </div>

        <div class="plan-price" v-if="props.monthlyPrice">
            <VPButton
                size="medium"
                :text="props.buttonText"
                :theme="props.buttonTheme"
                :href="props.href"
            />
            <span class="plan-price-box">
                <span>
                    <span class="plan-price-value">
                        <span class="line-through" v-if="props.monthlyPriceOriginal">{{ props.monthlyPriceOriginal }}</span>
                        {{ props.monthlyPrice }}
                    </span>
                    /
                    month / dev
                </span>
                <span class="plan-price-period" v-if="props.yearlyPrice">
                    Billed annually at
                    <span class="line-through" v-if="props.yearlyPriceOriginal">{{ props.yearlyPriceOriginal }}</span>
                    {{ props.yearlyPrice }}
                    / dev
                </span>
            </span>
        </div>
        <div class="body">
            <hr />
            <ul class="plan-features">
                <li v-for="feature in props.features" :key="feature">
                    <span class="icon"><VPImage :image="{ src: 'check.svg' }" /></span>
                    <span v-html="feature"></span>
                </li>
            </ul>
            <br />

            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
// @ts-ignore
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

import VPImage from '../.vitepress/theme/VPImage.vue'

interface PlanProps {
    title: string
    description: string
    monthlyPrice?: string
    yearlyPrice?: string
    monthlyPriceOriginal?: string
    yearlyPriceOriginal?: string
    buttonText: string
    href?: string
    features: string[]
    icon?: string
    buttonTheme?: 'brand' | 'alt' | 'sponsor'
}

const props = defineProps<PlanProps>()
</script>

<style scoped lang="scss">
.plans-container {
    display: flex;
    gap: 1.5em;
    justify-content: center;
}
.VPButton {
    text-decoration: none;
}
.header {
    margin-bottom: 1em;
    padding-top: 20px;

    .plan-name {
        margin: 0;
        font-size: 1.2em;
        font-weight: 600;
        color: var(--vp-c-text-1);
    }

    p {
        font-size: 1.1em;
        color: var(--vp-c-text);
        text-wrap: pretty;
    }
}

.plan-price {
    display: flex;
    align-items: start;
    align-items: start;
    gap: 0.8em;
    text-align: left;
}

.plan-price-box {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
}

.plan-price-value {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--vp-c-brand-dark);
}

.line-through {
    text-decoration: line-through;
    opacity: 0.5;
}

.plan-price-period {
    font-size: 0.8em;
    color: var(--vp-c-text);
}

:deep(.icon) {
    vertical-align: middle;
    > svg {
        width: 14px;
    }
}

.plan-features {
    list-style: none;
    padding: 0;
    text-align: left;
    margin: 0 auto;

    li {
        display: flex;
        margin: 0.5em 0;
        font-size: 0.95em;
        gap: 10px;
    }
}
</style>
