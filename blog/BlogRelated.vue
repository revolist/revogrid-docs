<template>
  <section v-if="related.length" class="blog-related" aria-labelledby="related-articles">
    <p class="blog-related__label">Keep exploring</p>
    <h2 id="related-articles" class="ignore-header">Continue reading</h2>
    <div class="blog-related__grid">
      <BlogCard v-for="post in related" :key="post.url" :post="post" />
    </div>
    <a class="blog-related__all" :href="withBase('/blog/')">Browse all articles →</a>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { data as posts } from './posts.data'
import BlogCard from './BlogCard.vue'
import type { BlogPost } from './blog'
const props = defineProps<{ articleUrls?: string[] }>()
const { page } = useData()
const current = computed(() =>
  posts.find(post => post.url === `/${page.value.relativePath.replace(/\.md$/, '')}`),
)
const related = computed(() => {
  if (props.articleUrls) {
    return props.articleUrls
      .map(url => posts.find(post => post.url === url))
      .filter((post): post is BlogPost => Boolean(post))
  }
  if (!current.value) return []
  return posts
    .filter(post => post.url !== current.value?.url)
    .map(post => ({
      post,
      score:
        (post.topic === current.value?.topic ? 10 : 0) +
        post.tags.filter(tag => current.value?.tags.includes(tag)).length,
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(item => item.post)
})
</script>
<style>
.blog-related {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider);
}
.blog-related__label {
  color: var(--blog-accent, var(--vp-c-brand-1));
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 650;
}
.blog-related > h2 {
  font-size: 26px;
  font-weight: 650;
  letter-spacing: -0.03em;
  margin: 8px 0 24px;
}
.blog-related__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.blog-related__grid .blog-card__content {
  padding: 18px;
}
.blog-related__grid .blog-card__content h3 {
  font-size: 18px;
}
.blog-related__all {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin-top: 24px;
  color: var(--blog-accent, var(--vp-c-brand-1));
}
@media (max-width: 600px) {
  .blog-related__grid {
    grid-template-columns: 1fr;
  }
}
</style>
