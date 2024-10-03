<script setup lang="ts">
import { ref } from 'vue'

// Define the interface for a feature card
interface Feature {
    title: string
    description: string
    videoUrl: string
    thumbnail: string
}

defineProps<{
    features: Feature[]
}>()

// State to track which card is currently flipped
const flippedCardId = ref<string | null>(null)

const toggleFlip = (id: string) => {
    if (flippedCardId.value === id) {
        // If the clicked card is already flipped, flip it back
        flippedCardId.value = null
    } else {
        // Flip the new card and reset any previously flipped card
        flippedCardId.value = id
    }
}
</script>

<template>
    <div class="features-grid">
        <div
            v-for="feature in features"
            :key="feature.title"
            class="feature-card"
            :class="{ flipped: flippedCardId === feature.title }"
            @click="toggleFlip(feature.title)"
        >
            <div class="card-inner">
                <div class="card-front">
                    <figure>
                        <img
                        :src="feature.thumbnail"
                        :alt="feature.title"
                        class="thumbnail"
                    />
                    </figure>
                    <h3 class="title">{{ feature.title }}</h3>
                    <p class="description">{{ feature.description }}</p>
                </div>
                <div class="card-back">
                    <video class="video" src="/video/formula.mp4" loop muted playsinline autoplay></video>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.features-grid {
    display: grid;
    gap: 10px;
    /* Define the grid columns based on screen size */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}


.feature-card {
    perspective: 1000px;
    cursor: pointer;
    position: relative;
    height: 100%;

    &.flipped {
        .card-inner {
            transform: rotateY(180deg);

            .card-back {
                display: flex;
            }

            .card-front {
                display: none;
            }
        }
    }
}

.card-inner {
    transition: transform ease-in-out 0.3s;
    transform-style: preserve-3d;
    height: 100%;
}


.card-front,
.card-back {
    backface-visibility: hidden;
    border-radius: 12px;
    overflow: hidden;
    height: 100%;
}

.card-front {
    background-color: var(--vp-c-bg-soft);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.thumbnail {
    width: 100%;
    max-width: 50px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 15px;
}

.title {
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    max-width: 200px;
    margin-top: 15px;
}

.description {
    padding-top: 10px;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    max-width: 200px;
}

.card-back {
    background-color: var(--vp-c-bg-soft);
    transform: rotateY(180deg);
    display: none;
    align-items: center;
    justify-content: center;
    position: relative;
    &::before {
        position: absolute;
        box-shadow: 0 0 10px 2px var(--vp-c-bg-soft) inset;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

.video {
    margin-left: -2px;
    height: 100%;
    border: none;
    border-radius: 12px;
}
</style>
