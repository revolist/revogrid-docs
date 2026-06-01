<template>
  <div class="rg-module-preview" :class="{ 'is-flipped': flipped }" @click.stop="toggle">
    <div class="rg-module-preview-inner">
      <div class="rg-module-front">
        <img v-if="thumbnail" :src="thumbnail" :alt="title" />
        <span v-if="videoUrl" class="rg-module-play">▶</span>
      </div>
      <div v-if="videoUrl" class="rg-module-back">
        <video
          ref="videoEl"
          :src="videoUrl"
          loop
          muted
          playsinline
          autoplay
        />
        <span class="rg-module-close">✕</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const props = defineProps<{
  type: string
  title?: string
  thumbnail?: string
  videoUrl?: string
}>()

const flipped = ref(false)
const videoEl = ref<HTMLVideoElement | null>(null)

function toggle() {
  if (!props.videoUrl) return
  flipped.value = !flipped.value
}

watch(flipped, (val) => {
  if (!videoEl.value) return
  if (val) {
    videoEl.value.currentTime = 0
    videoEl.value.play()
  } else {
    videoEl.value.pause()
  }
})
</script>

<style lang="scss" scoped>
.rg-module-preview {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  cursor: pointer;

  &:not(:has(.rg-module-play)) {
    cursor: default;
  }
}

.rg-module-preview-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.rg-module-front,
.rg-module-back {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.25s ease;
}

.rg-module-front {
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    display: block;
  }
}

.rg-module-back {
  opacity: 0;
  pointer-events: none;
  background: #000;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    display: block;
  }
}

.is-flipped {
  .rg-module-front {
    opacity: 0;
    pointer-events: none;
  }

  .rg-module-back {
    opacity: 1;
    pointer-events: auto;
  }
}

.rg-module-play {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--vp-c-brand-1, #1b47c1);
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding-left: 2px;
}

.rg-module-close {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
