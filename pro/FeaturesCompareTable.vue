<template>
    <div class="table-container">
        <table class="pricing-table">
            <!-- Header Row -->
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <div class="plan-title">
                            <a v-if="plans[0].link" :href="plans[0].link">{{ plans[0].name }}</a>
                            <template v-else>{{ plans[0].name }}</template>
                        </div>
                        <!-- <div class="plan-price">{{ plans[0].price }}</div> -->
                        <!-- <ul class="plan-details">
                            <li
                                v-for="detail in plans[0].details"
                                :key="detail"
                            >
                                {{ detail }}
                            </li>
                        </ul> -->
                        <!-- <button>Get Started</button> -->
                    </th>
                    <th>
                        <div class="plan-title">
                            <a v-if="plans[1].link" :href="plans[1].link">{{ plans[1].name }}</a>
                            <template v-else>{{ plans[1].name }}</template>
                        </div>
                        <!-- <div class="plan-price">{{ plans[1].price }}</div> -->
                        <!-- <ul class="plan-details">
                            <li
                                v-for="detail in plans[1].details"
                                :key="detail"
                            >
                                {{ detail }}
                            </li>
                        </ul> -->
                        <!-- <button>Get Started</button> -->
                    </th>
                    <th>
                        <div class="plan-title">
                            <a v-if="plans[2].link" :href="plans[2].link">{{ plans[2].name }}</a>
                            <template v-else>{{ plans[2].name }}</template>
                        </div>
                        <!-- <div class="plan-price">{{ plans[2].price }}</div> -->
                        <!-- <ul class="plan-details">
                            <li
                                v-for="detail in plans[2].details"
                                :key="detail"
                            >
                                {{ detail }}
                            </li>
                        </ul> -->
                        <!-- <button>Get Started</button> -->
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
                            <span class="expand-icon" v-if="expandedGroups[groupIndex]">▼</span>
                            <span class="expand-icon" v-else>▶</span> {{ group.name }}
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
                            >
                                <template v-if="feature.link">
                                    <a :href="feature.link" target="_blank">{{ feature.name }}</a>
                                </template>
                                <template v-else>
                                    {{ feature.name }}
                                </template>
                            </td>
                            <td
                                v-for="(plan, planIndex) in plans"
                                :key="planIndex"
                            >
                            <VPImage v-if="feature.supported.includes(plan.name)" :image="{ src: 'check.svg' }" />
                            </td>
                        </tr>
                    </template>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VPImage from '../.vitepress/theme/VPImage.vue'

// Props
interface Plan {
    name: string
    price: string
    details: string[]
    link?: string
}

interface Feature {
    name: string
    supported: string[]
    nesting: number
    children?: Feature[]
    link?: string
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
</script>

<style lang="scss" scoped>
.table-container {
    overflow-x: auto;
    margin-top: 20px;
}

.pricing-table {
    width: 100%;
    border-collapse:collapse;
    border: none;

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
                border-top-color: transparent;
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

        &:not(:first-child) {
            text-align: center;
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
            width: 100%;
        }
        &:last-child {
            border-right-width: 0;
        }
        &:not(:first-child) {
            min-width: 150px;
        }

        &:nth-of-type(3) {
            background-color: var(--vp-c-success-soft);
            border-color: var(--vp-c-success-soft);
        }
    }

    td:not(:first-child) {
        text-align: center;

        :deep(svg)  {
            margin: 0 auto;
            width: 15px;
        }
    }

    .expand-icon {
        font-size: 11px;
    }

    .group-header {
        font-weight: bold;
        text-align: left;
        cursor: pointer;
        color: var(--vp-c-text-1);
        border: 1px solid transparent;

        > td {
            background-color: var(--vp-c-bg-alt);
            &:first-child {
                border-radius: 8px 0 0 8px;
            }
            &:last-child {
                border-radius: 0 8px 8px 0;
            }
            box-shadow: 0 0 0 1px var(--vp-c-gray-3) inset;
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
    }

    .plan-price {
        font-size: 14px;
        color: #555;
        margin-bottom: 10px;
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
