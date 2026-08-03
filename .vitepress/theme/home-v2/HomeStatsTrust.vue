<template>
  <TrustedLogoStrip title-id="rg-proof-title" variant="home" />
</template>

<script lang="ts" setup>
import TrustedLogoStrip from '../TrustedLogoStrip.vue'

defineProps<{
  section?: Record<string, any>
}>()
</script>
