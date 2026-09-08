<template>
  <div
    class="rg-module-preview"
    :class="[`rg-module-preview--${type}`, { 'is-playing': playing }]"
  >
    <div class="rg-module-preview-inner">
      <div v-show="!playing" class="rg-module-front">
        <img v-if="thumbnail" :src="thumbnail" :alt="title" />
        <button
          v-if="videoUrl"
          class="rg-module-play"
          type="button"
          :aria-label="`Play ${title} demo`"
          @click.stop="play"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16">
            <path d="M5 3.6v8.8L12 8 5 3.6Z" />
          </svg>
        </button>
      </div>
      <div v-if="videoUrl" v-show="playing" class="rg-module-back">
        <video
          ref="videoEl"
          :src="videoUrl"
          :poster="thumbnail"
          loop
          muted
          playsinline
          preload="metadata"
        />
        <button
          class="rg-module-close"
          type="button"
          :aria-label="`Close ${title} demo`"
          @click.stop="close"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16">
            <path d="m4 4 8 8m0-8-8 8" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'

const props = defineProps<{
  type: string
  title?: string
  thumbnail?: string
  videoUrl?: string
}>()

const playing = ref(false)
const videoEl = ref<HTMLVideoElement | null>(null)

async function play() {
  if (!props.videoUrl) return
  playing.value = true
  await nextTick()
  if (!videoEl.value) return
  videoEl.value.currentTime = 0
  await videoEl.value.play().catch(() => {
    playing.value = false
  })
}

function close() {
  playing.value = false
  if (!videoEl.value) return
  videoEl.value.pause()
}

onBeforeUnmount(close)
</script>

<style lang="scss" scoped>
.rg-module-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #fff;
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
  background: #fff;

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
  background: #0c1117;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    display: block;
  }
}

.is-playing {
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
  right: 16px;
  bottom: 16px;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  background: var(--rg-green, #0aa66f);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  box-shadow: 0 7px 20px rgba(2, 122, 82, 0.24);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background: var(--rg-green-hover, #078b5d);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--rg-green, #0aa66f) 42%, white);
    outline-offset: 3px;
  }

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
}

.rg-module-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.62);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  backdrop-filter: blur(8px);

  &:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-width: 1.8;
  }
}

.rg-module-preview--audit .rg-module-front img {
  object-fit: contain;
  padding: 7%;
}

@media (prefers-reduced-motion: reduce) {
  .rg-module-front,
  .rg-module-back,
  .rg-module-play {
    transition: none;
  }
}
</style>
