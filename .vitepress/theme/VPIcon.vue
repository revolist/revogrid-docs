<template>
    <component :is="icon" class="fill-current" />
</template>
<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue'

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
})

const modules = import.meta.glob('./images/*.svg', { query: '?component' });

// feel free to update this with an svg directory of your choice
const icon = computed(() => {
    const namme = props.src.replace('.svg', '');
    const path = `./images/${namme}.svg`;
    if (!modules[path]) {
        return;
    }
    return defineAsyncComponent(
        // @ts-ignore
    () => modules[path]()
)
})
</script>
