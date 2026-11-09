<template>
  <article class="blog-card" :class="{ 'blog-card--featured': featured }">
    <a class="blog-card__link" :href="withBase(post.url)" :aria-labelledby="`post-${id}`">
      <div class="blog-card__media" :data-topic="post.topic">
        <img
          :src="withBase(post.image)"
          :alt="post.imageAlt"
          :loading="featured ? 'eager' : 'lazy'"
          :fetchpriority="featured ? 'high' : 'auto'"
          decoding="async"
          width="960"
          height="540"
        />
      </div>
      <div class="blog-card__content">
        <div class="blog-card__eyebrow">
          <span>{{ featured ? 'Featured article' : post.topic }}</span
          ><span v-if="featured" class="blog-card__featured-mark" aria-hidden="true">↗</span>
        </div>
        <component :is="featured ? 'h2' : 'h3'" :id="`post-${id}`" class="ignore-header">{{
          post.cardTitle
        }}</component>
        <p>{{ post.excerpt }}</p>
        <div class="blog-card__footer">
          <span>{{ post.readingTime }}</span
          ><span aria-hidden="true">·</span>
          <time v-if="post.date" :datetime="post.date">{{ post.dateLabel }}</time>
          <span v-else>Engineering guide</span>
          <span class="blog-card__arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </a>
  </article>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import type { BlogPost } from './blog'
const props = defineProps<{ post: BlogPost; featured?: boolean }>()
const id = computed(() => `${props.featured ? 'featured-' : ''}${props.post.url.split('/').pop()}`)
</script>
<style>
.blog-page,
.blog-article-page {
  --blog-accent: #087757;
}
.dark .blog-page,
.dark .blog-article-page {
  --blog-accent: #4bddaf;
}

.blog-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg);
  overflow: hidden;
  min-width: 0;
  transition:
    border-color 0.18s,
    box-shadow 0.18s;
}
.blog-card:hover {
  border-color: var(--blog-accent, var(--vp-c-brand-1));
  box-shadow: 0 8px 24px rgb(0 0 0 / 5%);
}
.blog-card__link {
  display: flex;
  height: 100%;
  flex-direction: column;
  color: var(--vp-c-text-1) !important;
  text-decoration: none !important;
}
.blog-card__link:focus-visible {
  outline: 3px solid var(--vp-c-brand-1);
  outline-offset: -4px;
  border-radius: 15px;
}
.blog-card__media {
  display: flex;
  align-items: center;
  aspect-ratio: 16 / 9;
  background: var(--vp-c-bg-soft);
  padding: 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  overflow: hidden;
}
.blog-card__media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 7px;
  margin: 0;
}
.blog-card__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  min-width: 0;
}
.blog-card__eyebrow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.055em;
  text-transform: uppercase;
  color: var(--blog-accent, var(--vp-c-brand-1));
}
.blog-card__content h2,
.blog-card__content h3 {
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 21px;
  line-height: 1.35;
  font-weight: 650;
  letter-spacing: -0.025em;
  overflow-wrap: break-word;
}
.blog-card__content p {
  color: var(--vp-c-text-2);
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-card__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  color: var(--vp-c-text-2);
  font-size: 12px;
  margin-top: auto;
  padding-top: 12px;
}
.blog-card__arrow {
  margin-left: auto;
  color: var(--blog-accent, var(--vp-c-brand-1));
  font-size: 18px;
}
.blog-card--featured {
  background: var(--vp-c-bg-soft);
}
.blog-card--featured .blog-card__link {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
}
.blog-card--featured .blog-card__media {
  padding: 32px;
  border: 0;
  border-right: 1px solid var(--vp-c-divider);
  aspect-ratio: auto;
  min-height: 330px;
}
.blog-card--featured .blog-card__content {
  padding: 36px;
  justify-content: center;
  gap: 18px;
}
.blog-card--featured .blog-card__content h2 {
  font-size: clamp(25px, 3vw, 34px);
  line-height: 1.2;
}
.blog-card--featured .blog-card__content p {
  font-size: 16px;
}
.blog-card--featured .blog-card__footer {
  margin-top: 0;
}
@media (max-width: 700px) {
  .blog-card--featured .blog-card__link {
    grid-template-columns: 1fr;
  }
  .blog-card--featured .blog-card__media {
    min-height: 0;
    aspect-ratio: 16 / 9;
    padding: 20px;
    border: 0;
    border-bottom: 1px solid var(--vp-c-divider);
  }
  .blog-card--featured .blog-card__content {
    padding: 24px;
  }
  .blog-card__content {
    padding: 22px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .blog-card {
    transition: none;
  }
}
</style>
