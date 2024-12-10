<template>
    <div class="table-container">
        <table class="pricing-table">
            <!-- Header Row -->
            <thead>
                <tr>
                    <th></th>
                    <th>
                        <div class="plan-title">{{ plans[0].name }}</div>
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
                        <div class="plan-title">{{ plans[1].name }}</div>
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
                        <div class="plan-title">{{ plans[2].name }}</div>
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
                        <td :colspan="plans.length + 1">
                            <span v-if="expandedGroups[groupIndex]">▼</span>
                            <span v-else>▶</span> {{ group.name }}
                        </td>
                    </tr>
                    <template v-if="expandedGroups[groupIndex]">
                        <tr
                            v-for="(feature, featureIndex) in group.features"
                            :key="`${groupIndex}-${featureIndex}`"
                            :class="{ 'nested-feature': feature.nesting > 0 }"
                        >
                            <td
                                :style="{
                                    paddingLeft: `${20 * feature.nesting}px`,
                                }"
                            >
                                {{ feature.name }}
                            </td>
                            <td
                                v-for="(plan, planIndex) in plans"
                                :key="planIndex"
                            >
                                {{
                                    feature.supported.includes(plan.name)
                                        ? '✔'
                                        : ''
                                }}
                            </td>
                        </tr>
                    </template>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// Props
interface Plan {
    name: string
    price: string
    details: string[]
}

interface Feature {
    name: string
    supported: string[]
    nesting: number
    children?: Feature[]
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
    border-collapse: separate;
    border: none;
    border-spacing: 2px;

    tr {
        &:nth-child(2n) {
         background-color: transparent;   
        }
    }

    th {
        background-color: transparent;
        color: inherit;
    }

    th,
    td {
        border: 0;
        padding: 10px;
        box-sizing: border-box;
        text-align: left;
        &:first-child {
            width: 100%;
        }
        &:not(:first-child) {
            min-width: 150px;
        }
    }

    td:not(:first-child) {
        text-align: center;
    }

    .group-header {
        font-weight: bold;
        text-align: left;
        cursor: pointer;
        color: #333;
        border: 1px solid transparent;

        > td {
            background-color: var(--vp-c-bg-alt);
            border-radius: 8px;
            box-shadow: 0 0 0 1px var(--vp-c-gray-3) inset;
        }

        + tr {
            border-top: none;
        }
    }

    .nested-feature {
        background-color: #f9f9f9;
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
