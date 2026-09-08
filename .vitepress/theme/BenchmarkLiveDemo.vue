<template>
  <div class="benchmark-live-demo">
    <HRDemo v-if="shouldRender" />
    <div v-else-if="!isAutomated" class="benchmark-live-demo__loading" role="status">
      Loading the interactive benchmark…
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'

const HRDemo = defineAsyncComponent(() => import('@revogrid-demos/core-free/src/hr.vue'))
const shouldRender = ref(false)
const isAutomated = ref(false)

onMounted(() => {
  const searchParams = new URLSearchParams(window.location.search)
  isAutomated.value = searchParams.has('automated')
  shouldRender.value = !isAutomated.value
})
</script>

<style scoped>
.benchmark-live-demo {
  position: relative;
  left: 50%;
  box-sizing: border-box;
  width: min(1024px, calc(100vw - 48px));
  height: clamp(640px, 75vh, 760px);
  margin: 24px 0 40px;
  padding: 16px;
  transform: translateX(-50%);
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  box-shadow: 0 12px 36px color-mix(in srgb, var(--vp-c-text-1) 7%, transparent);
}

.benchmark-live-demo :deep(.hr-demo) {
  padding-top: 0;
}

.benchmark-live-demo__loading {
  display: grid;
  height: 100%;
  place-items: center;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

@media (max-width: 700px) {
  .benchmark-live-demo {
    width: calc(100vw - 20px);
    height: 760px;
    padding: 8px;
    border-radius: 10px;
  }
}
</style>
