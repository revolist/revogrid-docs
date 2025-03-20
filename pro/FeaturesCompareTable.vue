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
                                    >{{ plan.price }} $</span
                                >
                                / month / dev
                            </div>
                            <div class="summary">
                                Billed annually at {{ plan.price * 12 }}$ / dev
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
                            v-for="(feature, featureIndex) in group.features"
                            :key="`${groupIndex}-${featureIndex}`"
                            :class="{ 'nested-feature': feature.nesting > 0 }"
                        >
                            <td
                                :style="{
                                    paddingLeft: `${feature.nesting ? 20 * feature.nesting : 20}px`,
                                }"
                                class="feature-card"
                                :id="feature.name.replace(' ', '-')"
                            >
                                {{ feature.name }}

                                <button
                                    class="video-preview"
                                    v-if="feature.video"
                                    @click="openPreview(feature.video)"
                                >
                                    <VPImage
                                        style="width: 18px"
                                        :image="{ src: 'video.svg' }"
                                    />
                                </button>
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
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

import { ElDialog } from 'element-plus'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/theme-chalk/dark/css-vars.css'
const dialogVisible = ref(false)
const videoUrl = ref('')

// Props
interface Plan {
    name: string
    price: number
    details: string[]
    buttonText: string
    link?: string
    ai?: boolean
    buttonTheme?: 'alt'
}

interface Feature {
    name: string
    supported: string[]
    nesting: number
    children?: Feature[]
    link?: string
    video?: string
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

// Initialize expanded state based on props
props.features.forEach((group, index) => {
    expandedGroups.value[index] = group.expanded
})

// Methods
const toggleGroup = (index: number) => {
    expandedGroups.value[index] = !expandedGroups.value[index]
}

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

.video-preview {
    float: right;
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
            min-width: 200px;
            max-width: 200px;
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
