<template>
  <div class="feature-grid" :class="{ 'feature-grid--visual': hasVisualFeatures }">
    <article
      v-for="feature in features"
      :key="feature.title"
      class="feature-card"
      :class="{
        'feature-card--media': feature.media,
        'feature-card--featured': feature.featured,
      }"
    >
      <div v-if="feature.media" class="feature-media">
        <video
          v-if="feature.mediaKind === 'video'"
          :src="feature.media"
          :poster="feature.poster"
          :aria-label="feature.mediaAlt || feature.title"
          muted
          autoplay
          loop
          playsinline
          preload="metadata"
        ></video>
        <img
          v-else
          :src="feature.media"
          :alt="feature.mediaAlt || feature.title"
          :width="feature.mediaWidth"
          :height="feature.mediaHeight"
          :style="feature.mediaPosition ? { objectPosition: feature.mediaPosition } : undefined"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="feature-copy">
        <div class="feature-meta">
          <div v-if="showIcons" class="feature-icon">{{ feature.icon }}</div>
          <span v-if="feature.href" class="feature-demo-label">Live example</span>
        </div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <ProFeatureCodeExample v-if="feature.codeExample" :example="feature.codeExample" />
        <div class="feature-tags">
          <span v-for="tag in feature.tags" :key="tag">{{ tag }}</span>
        </div>
        <a v-if="feature.href" class="feature-link" :href="feature.href">
          {{ feature.cta || 'Explore the feature' }} <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ProFeatureCodeExample from './ProFeatureCodeExample.vue'

interface ProFeatureItem {
  icon: string
  title: string
  description: string
  tags: readonly string[]
  codeExample?: 'pivot'
  media?: string
  mediaKind?: 'image' | 'video'
  mediaAlt?: string
  mediaWidth?: number
  mediaHeight?: number
  mediaFit?: 'cover' | 'contain'
  mediaPosition?: string
  poster?: string
  href?: string
  cta?: string
  featured?: boolean
}

const props = withDefaults(defineProps<{
  features: readonly ProFeatureItem[]
  showIcons?: boolean
}>(), {
  showIcons: true,
})

const hasVisualFeatures = computed(() => props.features.some(feature => feature.media))
</script>

<style lang="scss" scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-divider);

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
}

.feature-grid--visual {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  overflow: visible;
  border: 0;
  background: transparent;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  padding: 30px 26px;
  background: var(--vp-c-bg);
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: var(--vp-c-bg-soft);
  }

  h3 {
    margin: 0 0 9px;
    color: var(--vp-c-text-1);
    font-size: 17px;
    line-height: 1.25;
  }

  p {
    margin: 0 0 16px;
    color: var(--vp-c-text-2);
    font-size: 14px;
    line-height: 1.65;
  }
}

.feature-card--media {
  overflow: hidden;
  padding: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;

  &:hover {
    border-color: color-mix(in srgb, var(--pro-doc-accent, var(--gantt-accent, #1d4ed8)) 35%, var(--vp-c-divider));
    transform: translateY(-3px);
    box-shadow: 0 18px 46px rgba(0, 0, 0, 0.12);
  }

  .feature-meta {
    margin-bottom: 18px;
  }

  .feature-icon {
    margin-bottom: 0;
  }

  .feature-copy {
    padding: 26px;
  }
}

.feature-card--featured {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.6fr);

  .feature-media {
    aspect-ratio: 16 / 9;
    border-right: 1px solid var(--vp-c-divider);
    border-bottom: 0;
  }

  @media (max-width: 840px) {
    grid-template-columns: 1fr;

    .feature-media {
      border-right: 0;
      border-bottom: 1px solid var(--vp-c-divider);
    }
  }
}

.feature-media {
  position: relative;
  aspect-ratio: 16 / 7;
  overflow: hidden;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);

  img,
  video {
    display: block;
    width: 100%;
    margin: 0;
  }

  img {
    height: auto;
  }

  video {
    height: 100%;
    object-fit: cover;
  }
}

.feature-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.feature-demo-label {
  color: var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
  font-family: var(--vp-font-family-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin-bottom: 18px;
  border: 1px solid color-mix(in srgb, var(--pro-doc-accent, var(--gantt-accent, #1d4ed8)) 20%, transparent);
  border-radius: 10px;
  color: var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
  background: var(--pro-doc-soft, var(--gantt-soft, rgba(29, 78, 216, 0.09)));
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 600;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    padding: 2px 7px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 5px;
    color: var(--vp-c-text-3);
    background: var(--vp-c-bg-soft);
    font-family: var(--vp-font-family-mono);
    font-size: 10px;
  }
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  color: var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &:focus-visible {
    border-radius: 4px;
    outline: 2px solid var(--pro-doc-accent, var(--gantt-accent, #1d4ed8));
    outline-offset: 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .feature-card--media {
    transition: none;

    &:hover {
      transform: none;
    }
  }
}

</style>
