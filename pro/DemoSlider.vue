<template>
  <div class="demo-slider">
    <div class="demo-slider-frame">
      <video
        ref="videoRef"
        class="demo-slider-video"
        loop
        muted
        playsinline
        autoplay
        :poster="currentVideo.poster"
      >
        <source :src="currentVideo.src" type="video/mp4" />
      </video>
    </div>

    <div class="demo-slider-dots" aria-label="Demo preview selector">
      <button
        v-for="(video, index) in videos"
        :key="video.src"
        type="button"
        class="demo-slider-dot"
        :class="{ active: currentIndex === index }"
        :aria-label="`Show ${video.label} preview`"
        :aria-pressed="currentIndex === index"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const currentIndex = ref(0)
const videoRef = ref<HTMLVideoElement | null>(null)
let timer: number | undefined

const videos = [
  {
    label: 'Pivot analytics',
    src: '/video/pivot.mp4',
    poster: '/img/pivot-preview.jpg',
  },
  {
    label: 'Project tracker',
    src: '/video/demo-color.mp4',
    poster: '/img/demo-color-preview.jpg',
  },
]

const currentVideo = computed(() => videos[currentIndex.value])

const playCurrentVideo = async () => {
  if (!videoRef.value) return

  videoRef.value.load()
  videoRef.value.currentTime = 0

  try {
    await videoRef.value.play()
  } catch {
    // Browser autoplay policy can still block playback in some contexts.
  }
}

const goToSlide = async (index: number) => {
  if (index === currentIndex.value) return

  videoRef.value?.pause()
  currentIndex.value = index
  await playCurrentVideo()
}

const startTimer = () => {
  window.clearInterval(timer)
  timer = window.setInterval(() => {
    void goToSlide((currentIndex.value + 1) % videos.length)
  }, 15000)
}

onMounted(startTimer)

onUnmounted(() => {
  window.clearInterval(timer)
})
</script>

<style scoped>
.demo-slider {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 56px -80px 0;
}

.demo-slider-frame {
  border: 1px solid transparent;
  border-radius: 18px;
  box-shadow:
    0 24px 80px rgba(15, 23, 42, 0.18),
    0 8px 24px rgba(15, 23, 42, 0.1);
  overflow: hidden;
  position: relative;
}

.demo-slider-video {
  display: block;
  height: auto;
  margin: 0;
  object-fit: cover;
  object-position: left;
  width: 100%;
}

.demo-slider-dots {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.demo-slider-dot {
  background: var(--vp-c-divider);
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  height: 10px;
  padding: 0;
  transition: background 0.2s ease, transform 0.2s ease, width 0.2s ease;
  width: 10px;
}

.demo-slider-dot.active {
  background: var(--vp-c-brand-1);
  transform: translateY(-1px);
  width: 28px;
}

.demo-slider-dot:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}
</style>
