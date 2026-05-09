<template>
  <div class="rg-demo-preview" :class="`is-${type}`">
    <MiniGridPreview v-if="gridRows" :rows="gridRows" />
    <div v-else-if="type === 'tree'" class="tree-mini">
      <span class="strong">North America  $4.2M</span>
      <span>  United States  $3.1M</span>
      <span>    New York  $1.4M</span>
      <span>    California  $1.7M</span>
      <span>  Canada  $1.1M</span>
    </div>
    <div v-else-if="type === 'custom'" class="custom-mini">
      <span class="status">Active</span>
      <span class="progress"><i style="width: 65%"></i></span>
      <span class="rating">***--</span>
      <small>custom renderers</small>
    </div>
    <div v-else class="realtime-mini">
      <span v-for="(width, index) in [72, 58, 85]" :key="width">
        <i :style="{ width: `${width}%`, animationDelay: `${index * 0.2}s` }"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import MiniGridPreview from './MiniGridPreview.vue'

const props = defineProps<{
  type: string
}>()

const gridRows = computed(() => {
  if (props.type === 'dataset') return [['ID', 'Name', 'Val'], ['001', 'Alpha Corp', '149'], ['002*', 'Beta Inc*', '382*'], ['003', 'Gamma LLC', '211'], ['...', '100k rows', '...']]
  if (props.type === 'editing') return [['Product', 'Q1', 'Q2'], ['Widget A', '2,450*', '1,890'], ['Widget B', '3,100', '2,750'], ['Widget C', '980', '1,200']]
  if (props.type === 'grouping') return [['Region', 'Revenue', 'Margin'], ['EMEA', '2.1M', '34%'], ['APAC', '1.8M', '28%'], ['AMER', '3.4M', '41%']]
  return null
})
</script>
