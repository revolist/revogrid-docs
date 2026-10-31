<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

withDefaults(
  defineProps<{ src: string; poster: string; label: string; width?: number; height?: number }>(),
  {
    width: 1040,
    height: 904,
  },
)

const video = ref<HTMLVideoElement>()
let observer: IntersectionObserver | undefined
let motion: MediaQueryList | undefined
const respectMotion = () => {
  if (motion?.matches) video.value?.pause()
}

onMounted(() => {
  motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  motion.addEventListener('change', respectMotion)
  observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting) || motion?.matches) return
    void video.value?.play().catch(() => {})
    observer?.disconnect()
  })
  if (video.value) observer.observe(video.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  motion?.removeEventListener('change', respectMotion)
})
</script>

<template>
  <video
    ref="video"
    class="pivot-chart-video"
    :poster="poster"
    :aria-label="label"
    :width="width"
    :height="height"
    controls
    loop
    muted
    playsinline
    preload="none"
  >
    <source :src="src" type="video/mp4" />
    <a :href="src">Watch {{ label }}</a>
  </video>
</template>

<style scoped>
.pivot-chart-video {
  display: block;
  width: 100%;
  height: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: #fff;
}
</style>
