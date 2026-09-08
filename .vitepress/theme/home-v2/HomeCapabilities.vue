<template>
  <HomeCapabilitiesSection :section="section" />
</template>

<script lang="ts" setup>
import HomeCapabilitiesSection from './capabilities/HomeCapabilitiesSection.vue'
import type { HomeV2Record } from './homeV2Utils'

defineProps<{
  section?: HomeV2Record
}>()
</script>
