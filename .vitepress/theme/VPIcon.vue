<template>
    <component :is="icon" class="fill-current" />
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
})

// feel free to update this with an svg directory of your choice
const icon = defineAsyncComponent(
    // @ts-ignore
    () => import(`/public/${props.src}`)
)
</script>
