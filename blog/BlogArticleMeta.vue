<template>
  <div v-if="post" class="blog-article-meta">
    <a class="blog-article-back" :href="withBase('/blog/')">← All articles</a>
    <div class="blog-article-byline">
      <span class="blog-article-topic">{{ post.topic }}</span
      ><span>{{ post.author || 'Published by RevoGrid' }}</span
      ><time v-if="post.date" :datetime="post.date">{{ post.dateLabel }}</time
      ><span>{{ post.readingTime }}</span
      ><span v-if="post.modifiedLabel"
        >Updated <time :datetime="post.modified">{{ post.modifiedLabel }}</time></span
      ><a
        v-if="post.demoUrl"
        :href="post.demoUrl.startsWith('#') ? post.demoUrl : withBase(post.demoUrl)"
        >Open demo ↗</a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { data as posts } from './posts.data'
const { page } = useData()
const post = computed(() =>
  posts.find(post => post.url === `/${page.value.relativePath.replace(/\.md$/, '')}`),
)
</script>
<style>
.blog-article-meta {
  margin: 0 0 24px;
  font-family: var(--vp-font-family-base);
}
.blog-article-back {
  display: inline-block;
  margin-bottom: 24px;
  color: var(--vp-c-text-2);
  font-size: 13px;
}
.blog-article-byline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  font-size: 12px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.blog-article-topic {
  color: var(--blog-accent, var(--vp-c-brand-1));
  font-weight: 650;
}
.blog-article-byline a {
  color: var(--blog-accent, var(--vp-c-brand-1));
  font-weight: 600;
}
.blog-article-page .vp-doc {
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  font-size: 17px;
  line-height: 1.75;
}
.blog-article-page .vp-doc h1 {
  font-size: clamp(30px, 3.2vw, 42px);
  line-height: 1.18;
  letter-spacing: -0.035em;
}
.blog-article-page .vp-doc p,
.blog-article-page .vp-doc li {
  line-height: 1.75;
}
.blog-article-page .VPDocAsideOutline .outline-link {
  white-space: normal;
  line-height: 1.5;
  padding-top: 5px;
  padding-bottom: 5px;
}
.blog-article-page .VPDocAsideOutline .outline-link.active {
  font-weight: 600;
}
.blog-article-page .vp-doc pre {
  font-size: 14px;
}
</style>
