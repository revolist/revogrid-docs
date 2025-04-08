<template>
    <div class="slider-container">
        <div
            style="
                border-radius: 12px;
                overflow: hidden;
                text-align: center;
                border: 2px solid black;
                box-shadow: 10px 8px 0 rgba(0, 0, 0, 0.8);
            "
        >
            <video
                ref="videoRef"
                class="video"
                loop
                playsinline
                autoplay
                :poster="currentVideo.poster"
                style="width: 100%; height: 100%; object-fit: cover; margin: 0;"
            >
                <source :src="currentVideo.src" type="video/mp4" />
            </video>
        </div>
        <div class="dots-container">
            <div
                v-for="(_, index) in videos"
                :key="index"
                class="dot"
                :class="{ active: currentIndex === index }"
                @click="goToSlide(index)"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const currentIndex = ref(0)
const videoRef = ref<HTMLVideoElement | null>(null)
let timer: number | null = null

const videos = ref([
    {
        src: '/video/pivot.mp4',
        poster: '/img/pivot-preview.jpg',
    },
    {
        src: '/video/demo-color.mp4',
        poster: '/img/demo-color-preview.jpg',
    },
])

const currentVideo = computed(() => videos.value[currentIndex.value])
const goToSlide = async (index: number) => {
    videoRef.value?.pause()
    currentIndex.value = index
    if (videoRef.value) {
        videoRef.value?.load()
        videoRef.value.currentTime = 0
        await videoRef.value.play()
    }
}

const startTimer = () => {
    if (timer) clearInterval(timer)
    timer = window.setInterval(() => {
        goToSlide((currentIndex.value + 1) % videos.value.length)
    }, 15000)
}

onMounted(() => {
    startTimer()
})

onUnmounted(() => {
    if (timer) clearInterval(timer)
})
</script>

<style scoped>
.slider-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
}

.video {
    width: 100%;
}

.dots-container {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.dot.active {
    background-color: #000;
}
</style>
