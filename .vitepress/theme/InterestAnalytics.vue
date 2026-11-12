<template><span hidden aria-hidden="true" /></template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vitepress'
import { installCheckoutAnalytics } from './checkoutAnalytics'
import { installInterestAnalytics } from './interestAnalytics'
const route = useRoute()
let checkout: ReturnType<typeof installCheckoutAnalytics> | undefined
let interest: ReturnType<typeof installInterestAnalytics> | undefined
onMounted(() => {
  interest = installInterestAnalytics()
  checkout = installCheckoutAnalytics()
})
watch(
  () => route.path,
  () => {
    interest?.view()
    void checkout?.refresh()
  },
  { flush: 'post' },
)
onBeforeUnmount(() => {
  checkout?.stop()
  interest?.stop()
})
</script>
