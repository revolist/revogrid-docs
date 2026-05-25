<template>
  <section class="trust">
    <div class="pro-container trust-inner">
      <div v-for="item in items" :key="item.label" class="trust-item">
        <div class="num"><em>{{ item.value }}</em> {{ item.label }}</div>
        <div class="desc">{{ item.description }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    value: string
    label: string
    description: string
  }>
}>()
</script>
