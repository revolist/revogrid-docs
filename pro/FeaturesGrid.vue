<script setup lang="ts">
import { ref } from 'vue'
import VPImage from '../.vitepress/theme/VPImage.vue'

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
const flippedCardId = ref<string | null>('Smart Auto Fill')

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
            :class="{ flipped: flippedCardId === feature.title, disabled: !feature.videoUrl }"
            :id="feature.title.replace(' ', '-')"
            @click="feature.videoUrl && toggleFlip(feature.title)"
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
                <div v-if="feature.videoUrl" class="card-back">
                    <video class="video" :src="feature.videoUrl" loop muted playsinline autoplay></video>
                </div>
                <span class="plus-icon" v-if="feature.videoUrl"><VPImage :image="'plus.svg'"/></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.plus-icon {
    $s: 28px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: $s;
    height: $s;
    background-color: var(--vp-c-text-2);
    border-radius: 50%;
    color: var(--vp-c-bg);
    transition: transform ease-in-out 0.3s;

}
.features-grid {
    display: grid;
    gap: 10px;
    /* Define the grid columns based on screen size */
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}


.feature-card {
    perspective: 1000px;
    height: 100%;

    &:not(.disabled) {
        cursor: pointer;
    }

    &.flipped {
        .plus-icon {
            transform: rotate(45deg);
        }

        .card-inner {
            // transform: rotateY(180deg);

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
    pointer-events: none;
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
    background-color: white;
    // transform: rotateY(180deg);
    display: none;
    align-items: center;
    justify-content: center;
    position: relative;
    // &::before {
    //     position: absolute;
    //     content: '';
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    // }
}

.video {
    margin-left: -2px;
    // height: 100%;
    border: none;
    border-radius: 12px;
}
figure {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    flex-shrink: 0;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow: var(--vp-shadow-3);
    width: 64px;
    height: 64px;

    img {
        position: initial;
        object-fit: initial;
        max-width: 60%;
        max-height: 60%;
        border-radius: 0;
    }
}
</style>
