<template>
  <div ref="host" />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { createRoot, type Root } from 'react-dom/client'
import * as React from 'react'
import App from './App'

const host = ref<HTMLDivElement>()
let root: Root | undefined

onMounted(() => {
  if (!host.value) return

  root = createRoot(host.value)
  root.render(React.createElement(App))
})

onBeforeUnmount(() => {
  root?.unmount()
})
</script>
