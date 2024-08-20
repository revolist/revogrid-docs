<template>
    <ClientOnly>
        <div class="search-wrapper">
            <input
                class="search"
                type="text"
                placeholder="Search"
                autocomplete="off"
                tabindex="0"
                @input="search"
            />
            <span class="vp-icon DocSearch-Search-Icon"></span>
        </div>
        <br />
        <VGrid
            tabindex="0"
            class="grid"
            ref="grid"
            :theme="isDark ? 'darkMaterial' : 'compact'"
            :source="gridData"
            :columns="gridColumns"
            :filter="true"
            range
            resize
            row-headers
            :row-size="215"
        />
    </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import VGrid, {
    type ColumnGrouping,
    type ColumnRegular,
} from '@revolist/vue3-datagrid'
// @ts-ignore
import { data } from './demoPrompts.data.ts'

const { isDark } = useData()

const gridColumns = ref<(ColumnGrouping | ColumnRegular)[]>([])
const gridData = ref<any>([])

onMounted(async () => {
    gridData.value = [...data]
    const columns: (ColumnGrouping | ColumnRegular)[] = [
        {
            name: 'Actor',
            prop: 'act',
            size: 320,
        },
        {
            name: 'AI Prompt',
            prop: 'prompt',
            size: 610,
        },
    ]

    gridColumns.value = columns
})

const search = async (e: Event) => {
    const value = (e.target as HTMLInputElement).value
        ?.trim()
        .toLocaleLowerCase()
    if (value) {
        gridData.value = data.filter(
            (d: { prompt?: string; act?: string }) =>
                d.prompt?.toLocaleLowerCase().includes(value) ||
                d.act?.toLocaleLowerCase().includes(value)
        )
    } else {
        gridData.value = [...data]
    }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
    position: relative;

    .vp-icon {
        position: absolute;
        top: 10px;
        left: 15px;
        pointer-events: none;
    }
}
.search {
    justify-content: flex-start;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0 10px 0 52px;
    width: 100%;
    height: 40px;
    background-color: var(--vp-c-bg-alt);
}
.grid {
    min-height: 800px;
    height: calc(100vh - 200px);
}
:deep() {
    revogr-data .rgCell {
        white-space: normal;
        line-height: 21px;
        padding-top: 10px !important;
    }
}
</style>
