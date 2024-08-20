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
            :editors="editors"
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
    type EditorCtrConstructible,
    type Editors,
    type HyperFunc,
    TextEditor,
    type VNode,
} from '@revolist/vue3-datagrid'
// @ts-ignore
import { data } from './demoPrompts.data.ts'

const { isDark } = useData()

const gridColumns = ref<(ColumnGrouping | ColumnRegular)[]>([])
const gridData = ref<any>([])

class PromptEditor extends TextEditor {
    constructor(...args: any[]) {
        super(args[0], args[1]);
    }
    render(h: HyperFunc<VNode>) {
        return h?.('textarea', {
            style: {
                width: '100%',
                height: '100%',
                resize: 'none',
                outline: 'none',
                border: 'none',
                padding: '10px',
            },
            class: 'prompt',
            enterKeyHint: 'enter',
            // set input value from cell data
            value: this.editCell?.val ?? '',
            // save input element as ref for further usage
            ref: (el: HTMLInputElement | null) => {
                this.editInput = el;
            },
            // listen to keydown event on input element
            onKeyDown: (e: KeyboardEvent) => this.onKeyDown(e),
        })
    }
}

const editors = ref<Editors>({
    prompt: PromptEditor as EditorCtrConstructible,
})

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
            size: 650,
            editor: 'prompt',
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
