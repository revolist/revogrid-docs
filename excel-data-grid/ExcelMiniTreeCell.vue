<template>
  <span class="excel-mini-tree-cell" :style="{ paddingLeft: `${model.depth * 12}px` }">
    <FontAwesomeSvgIcon v-if="model.hasChildren" name="arrowDown" />
    <span v-else class="excel-mini-tree-cell__spacer"></span>
    {{ model.a }}
  </span>
</template>

<script setup lang="ts">
import FontAwesomeSvgIcon from '../.vitepress/theme/home-v2/FontAwesomeSvgIcon.vue'

defineProps<{ model: { a: string; depth: number; hasChildren: boolean } }>()
</script>
