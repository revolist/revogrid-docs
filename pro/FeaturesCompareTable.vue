<template>
    <div class="table-container">
        <table class="pricing-table">
            <!-- Header Row -->
            <thead>
                <tr>
                    <th></th>
                    <th v-for="plan in plans" :key="plan.name">
                        <div class="plan-title">
                            {{ plan.name }}
                            <a
                                v-if="plan.ai"
                                href="/pro/ai"
                                class="VPBadge danger"
                                >AI</a
                            >
                        </div>
                        <div class="plan-price" v-if="plan.price">
                            <div>
                                <span class="price-value"
                                    >${{ plan.priceYear ?? plan.price * 12 }}</span
                                >
                                / year
                            </div>
                            <div class="summary">
                                1 developer seat · Unlimited production usage
                            </div>
                        </div>
                        <ul class="plan-details" v-if="plan.details">
                            <li v-for="detail in plan.details" :key="detail">
                                {{ detail }}
                            </li>
                        </ul>
                        <VPButton
                            v-if="plan.link"
                            size="medium"
                            :text="plan.buttonText"
                            :href="plan.link"
                            :theme="plan.buttonTheme"
                            @click="handleStripeClientReferenceClick"
                        />
                    </th>
                </tr>
            </thead>

            <!-- Body -->
            <tbody>
                <template
                    v-for="(group, groupIndex) in features"
                    :key="groupIndex"
                >
                    <tr class="group-header" @click="toggleGroup(groupIndex)">
                        <td>
                            <span
                                class="expand-icon"
                                v-if="expandedGroups[groupIndex]"
                                >▼</span
                            >
                            <span class="expand-icon" v-else>▶</span>
                            <h5>{{ group.name }}</h5>
                        </td>
                        <td v-for="plan in plans"></td>
                    </tr>
                    <template v-if="expandedGroups[groupIndex]">
                        <tr
                            v-for="feature in visibleFeatures(group)"
                            :key="`${groupIndex}-${feature.name}`"
                            :class="{
                                'nested-feature': feature.nesting > 0,
                                'collapsible-feature': feature.collapsible,
                            }"
                        >
                            <td
                                :style="{
                                    paddingLeft: `${feature.nesting ? 20 * feature.nesting : 20}px`,
                                }"
                                class="feature-card"
                                :id="feature.name.replace(' ', '-')"
                            >
                                <button
                                    v-if="feature.collapsible"
                                    class="feature-expand"
                                    type="button"
                                    :aria-expanded="isFeatureExpanded(group.name, feature.name)"
                                    @click.stop="toggleFeature(group.name, feature.name)"
                                >
                                    {{ isFeatureExpanded(group.name, feature.name) ? '▼' : '▶' }}
                                </button>
                                <span class="feature-name-text">{{ feature.name }}</span>
                                <span v-if="feature.beta" class="VPBadge warning" style="font-size:0.7em;vertical-align:middle;margin-left:4px">Beta</span>

                                <span v-if="hasFeatureActions(feature)" class="feature-actions">
                                    <a
                                        v-if="feature.link"
                                        class="rg-btn rg-btn-secondary feature-action-link docs-preview"
                                        :href="feature.link"
                                        :target="isExternalHref(feature.link) ? '_blank' : undefined"
                                        :rel="isExternalHref(feature.link) ? 'noopener' : undefined"
                                        title="Documentation"
                                    >
                                        Docs
                                    </a>
                                    <a
                                        v-if="feature.demoUrl"
                                        class="rg-btn rg-btn-secondary feature-action-link demo-preview"
                                        :href="feature.demoUrl"
                                        target="_blank"
                                        rel="noopener"
                                        title="Interactive demo"
                                    >
                                        Demo
                                    </a>
                                    <button
                                        class="video-preview"
                                        :class="{
                                            'video-placeholder': !feature.video,
                                        }"
                                        type="button"
                                        :title="feature.video ? 'Video preview' : undefined"
                                        :disabled="!feature.video"
                                        :tabindex="feature.video ? 0 : -1"
                                        @click.stop="feature.video && openPreview(feature.video)"
                                    >
                                        <VPImage
                                            v-if="feature.video"
                                            style="width: 18px"
                                            :image="{ src: 'video.svg' }"
                                        />
                                    </button>
                                </span>
                            </td>
                            <td
                                v-for="(plan, planIndex) in plans"
                                :key="planIndex"
                            >
                                <VPImage
                                    v-if="feature.supported.includes(plan.name)"
                                    :image="{ src: 'check.svg' }"
                                />
                                <span v-else>-</span>
                            </td>
                        </tr>
                    </template>
                    <!-- Add separator row after group -->
                    <tr class="separator-row">
                        <td v-for="(_, index) in [0, ...plans]" :key="index"></td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
    <ElDialog v-model="dialogVisible" width="600">
        <video
            class="video"
            :src="videoUrl"
            loop
            muted
            playsinline
            autoplay
        ></video>
    </ElDialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VPImage from '../.vitepress/theme/VPImage.vue'
import { handleStripeClientReferenceClick } from '../pricing-page/stripeClientReference'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

import { ElDialog } from 'element-plus'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'
const dialogVisible = ref(false)
const videoUrl = ref('')

// Props
interface Plan {
    name: string
    price?: number
    priceYear?: number
    details?: string[]
    buttonText?: string
    link?: string
    ai?: boolean
    buttonTheme?: 'alt'
}

interface Feature {
    name: string
    supported: string[]
    nesting: number
    parent?: string
    collapsible?: boolean
    expanded?: boolean
    children?: Feature[]
    link?: string
    demoUrl?: string
    video?: string
    beta?: boolean
}

interface FeatureGroup {
    name: string
    expanded: boolean
    features: Feature[]
}

const props = defineProps<{
    plans: Plan[]
    features: FeatureGroup[]
}>()

// State
const expandedGroups = ref<{ [key: number]: boolean }>({})
const expandedFeatures = ref<Record<string, boolean>>({})

const getFeatureKey = (groupName: string, featureName: string) => `${groupName}::${featureName}`

// Initialize expanded state based on props
props.features.forEach((group, index) => {
    expandedGroups.value[index] = group.expanded
    group.features.forEach((feature) => {
        if (feature.collapsible) {
            expandedFeatures.value[getFeatureKey(group.name, feature.name)] = Boolean(feature.expanded)
        }
    })
})

// Methods
const toggleGroup = (index: number) => {
    expandedGroups.value[index] = !expandedGroups.value[index]
}

const isFeatureExpanded = (groupName: string, featureName: string) => {
    return expandedFeatures.value[getFeatureKey(groupName, featureName)] ?? true
}

const toggleFeature = (groupName: string, featureName: string) => {
    const key = getFeatureKey(groupName, featureName)
    expandedFeatures.value[key] = !isFeatureExpanded(groupName, featureName)
}

const visibleFeatures = (group: FeatureGroup) => {
    return group.features.filter((feature) => {
        if (!feature.parent) return true
        return isFeatureExpanded(group.name, feature.parent)
    })
}

const hasFeatureActions = (feature: Feature) => Boolean(feature.link || feature.demoUrl || feature.video)

const isExternalHref = (href: string) => /^https?:\/\//.test(href)

const openPreview = (video: string) => {
    videoUrl.value = video
    dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.table-container {
    overflow-x: auto;
    margin-top: 20px;
}

.feature-actions {
    float: right;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.feature-action-link {
    height: 24px;
    min-width: 24px;
    padding: 0 8px;
    border-radius: 6px;
    font-size: 11px;
    line-height: 1;
}

.video-preview {
    width: 32px;
    border: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
        outline: none;
        box-shadow: none;
    }

    &:disabled {
        cursor: default;
    }
}

.video-placeholder {
    opacity: 0;
    pointer-events: none;
}

.docs-preview,
.demo-preview {
    text-decoration: none;
}

.feature-link {
    color: inherit;
    font-weight: inherit;
}

.feature-expand {
    width: 16px;
    border: 0;
    padding: 0;
    margin-right: 4px;
    background: transparent;
    color: var(--vp-c-text-3);
    cursor: pointer;
    font-size: 10px;
    line-height: 1;
}

.pricing-table {
    width: 100%;
    border-collapse: collapse;
    border: none;
    display: table;

    .separator-row {
        height: 20px;
        border: none;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.02) inset, 0 5px 1px rgba(0, 0, 0, 0.01) inset,
            0 1px 0 rgba(0, 0, 0, 0.02) inset;
        td {
            border: none;
            background: transparent !important;
        }
        &:hover {
            background-color: transparent !important;
        }
    }

    a {
        text-decoration: none;
    }

    thead {
        a {
            font-weight: 600;
        }
        tr {
            border: 0;

            th {
                border-color: transparent;
            }
        }
    }

    tr {
        &:nth-child(2n) {
            background-color: transparent;
        }
        &:hover {
            background-color: var(--vp-c-bg-soft);
        }
    }

    th {
        background-color: transparent;
        color: inherit;
        text-align: left;

        &:not(:first-child) {
            padding: 20px;
            text-align: left;
        }
    }

    th,
    td {
        padding: 6px 10px;
        box-sizing: border-box;
        text-align: left;
        border-bottom: 0;
        &:first-child {
            border-left-width: 0;
            width: 40%;
            min-width: 250px;
        }
        &:last-child {
            border-right-width: 0;
        }
        &:not(:first-child) {
            min-width: 220px;
            max-width: 220px;
        }

        &:nth-of-type(3) {
            background-color: var(--vp-c-success-soft);
            border-color: var(--vp-c-success-soft);
        }
    }

    td:not(:first-child) {
        text-align: center;

        :deep(svg) {
            margin: 0 auto;
            width: 15px;
        }
    }

    .expand-icon {
        font-size: 10px;
        opacity: 0.8;
    }

    .group-header {
        font-weight: bold;
        text-align: left;
        cursor: pointer;
        color: var(--vp-c-text-1);
        border: 1px solid transparent;

        h5 {
            font-size: inherit;
            font-weight: inherit;
            margin: 0;
            padding: 0;
            padding-left: 5px;
            display: inline-block;
        }

        > td {
            background-color: var(--vp-c-bg-alt);
            &:first-child {
                border-radius: 8px 0 0 0;
            }
            &:last-child {
                border-radius: 0 8px 0 0;
            }
            border: 0;

            &:nth-of-type(3) {
                background-color: var(--vp-c-success-soft);
                position: relative;
                &::before {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-color: var(--vp-c-success-soft);
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }

        + tr {
            border-top: none;

            td {
                border-top-width: 0;
            }
        }
    }

    .plan-title {
        font-weight: bold;
        font-size: 21px;
        margin-bottom: 10px;
    }

    .plan-price {
        font-weight: normal;
        font-size: 14px;
        margin-bottom: 10px;
        min-height: 18px;
        line-height: 21px;

        .price-value {
            font-size: 18px;
            font-weight: bold;
        }

        .summary {
            font-size: 12px;
            font-weight: normal;
        }
    }

    .plan-details {
        list-style: none;
        padding: 0;
        text-align: left;

        li {
            font-size: 14px;
            color: #555;
            margin: 5px 0;
        }

        button {
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: #0056b3;
            }
        }
    }
}
</style>
