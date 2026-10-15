<template>
  <section class="blog-index" aria-labelledby="blog-title">
    <header class="blog-header">
      <p class="blog-eyebrow">The RevoGrid Blog</p>
      <h1 id="blog-title">Build better<br />data-heavy applications.</h1>
      <p class="blog-intro">
        Practical tutorials, thoughtful comparisons, and engineering guides<br
          class="blog-desktop-break"
        />
        for data grids, analytics, and planning.
      </p>
    </header>

    <BlogCard v-if="featured && !isFiltering" :post="featured" featured />

    <section class="blog-library" aria-labelledby="latest-posts">
      <div class="blog-library__heading">
        <div>
          <p class="blog-eyebrow">Explore the library</p>
          <h2 id="latest-posts">{{ isFiltering ? 'Find your next read' : 'Latest articles' }}</h2>
        </div>
        <label class="blog-search"
          ><span class="blog-sr-only">Search blog articles</span><span aria-hidden="true">⌕</span
          ><input v-model="query" type="search" placeholder="Search articles…"
        /></label>
      </div>
      <div class="blog-topics" role="group" aria-label="Filter articles by topic">
        <button
          v-for="topic in topics"
          :key="topic"
          type="button"
          :aria-pressed="selectedTopic === topic"
          @click="selectedTopic = topic"
        >
          {{ topic }}
        </button>
      </div>
      <p class="blog-result-count" role="status" aria-live="polite" aria-atomic="true">
        {{ visiblePosts.length }} {{ visiblePosts.length === 1 ? 'article' : 'articles'
        }}{{ selectedTopic !== 'All' ? ` in ${selectedTopic}` : ''
        }}{{ query.trim() ? ` matching “${query.trim()}”` : '' }}
      </p>
      <div v-if="visiblePosts.length" class="blog-grid">
        <BlogCard v-for="post in visiblePosts" :key="post.url" :post="post" />
      </div>
      <div v-else class="blog-empty">
        <h3>No articles found</h3>
        <p>Try another topic or search for a framework, feature, or workflow.</p>
        <button type="button" @click="reset">Clear filters</button>
      </div>
    </section>

    <section class="blog-start" aria-labelledby="blog-start-heading">
      <div>
        <p class="blog-eyebrow">A good place to start</p>
        <h2 id="blog-start-heading">From first question to working app.</h2>
      </div>
      <div class="blog-start__links">
        <a :href="withBase('/blog/datagrid')"
          ><span>01 / Understand the basics</span>Data grid or HTML table?
          <span aria-hidden="true">↗</span></a
        ><a :href="withBase('/guide/')"
          ><span>02 / Build with your framework</span>Start integrating RevoGrid
          <span aria-hidden="true">↗</span></a
        ><a :href="withBase('/demo/')"
          ><span>03 / See it in action</span>Explore working demos
          <span aria-hidden="true">↗</span></a
        >
      </div>
    </section>
  </section>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { data as posts } from './posts.data'
import { blogTopics } from './blog'
import BlogCard from './BlogCard.vue'
const query = ref('')
const selectedTopic = ref('All')
const topics = computed(() => [
  'All',
  ...blogTopics.filter(topic => posts.some(post => post.topic === topic)),
])
const featured = computed(() => posts.find(post => post.featured) || posts[0])
const isFiltering = computed(() => selectedTopic.value !== 'All' || Boolean(query.value.trim()))
const visiblePosts = computed(() =>
  posts.filter(post => {
    if (!isFiltering.value && post.url === featured.value?.url) return false
    const matchesTopic = selectedTopic.value === 'All' || selectedTopic.value === post.topic
    const terms = query.value.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean)
    const haystack =
      `${post.title} ${post.description} ${post.topic} ${post.tags.join(' ')}`.toLocaleLowerCase()
    return matchesTopic && terms.every(term => haystack.includes(term))
  }),
)
const reset = () => {
  query.value = ''
  selectedTopic.value = 'All'
}
</script>
<style>
.blog-page .VPDoc:not(.has-sidebar) .container {
  max-width: 1180px;
}
.blog-page .VPDoc:not(.has-sidebar) .content,
.blog-page .VPDoc:not(.has-sidebar) .content-container {
  max-width: none;
  min-width: 0;
  padding-left: 0;
  padding-right: 0;
}
.blog-page .VPDoc {
  padding-bottom: 0;
}
.blog-page .VPLocalNav {
  display: none;
}
.blog-index {
  box-sizing: border-box;
  color: var(--vp-c-text-1);
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 16px 0 72px;
}
.blog-index * {
  box-sizing: border-box;
}
.blog-header {
  padding: 16px 0 40px;
}
.blog-index .blog-eyebrow {
  color: var(--blog-accent, var(--vp-c-brand-1));
  font-size: 12px;
  line-height: 1.5;
  font-weight: 650;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  margin: 0 0 14px;
}
.blog-header h1 {
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.08;
  font-weight: 650;
  letter-spacing: -0.045em;
  margin: 0 0 22px;
}
.blog-header .blog-intro {
  color: var(--vp-c-text-2);
  font-size: 17px;
  line-height: 1.7;
  margin: 0;
}
.blog-library {
  margin-top: 64px;
  scroll-margin-top: 100px;
}
.blog-library__heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
}
.blog-index h2 {
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 29px;
  line-height: 1.25;
  letter-spacing: -0.035em;
}
.blog-search {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 280px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 10px 14px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
}
.blog-search input {
  width: 100%;
  min-width: 0;
  font: inherit;
  font-size: 14px;
  color: var(--vp-c-text-1);
  background: transparent;
  border: 0;
  outline: 0;
}
.blog-search:focus-within {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}
.blog-topics {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 26px 0 16px;
}
.blog-topics button,
.blog-empty button {
  min-height: 40px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 8px 14px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.blog-topics button[aria-pressed='true'] {
  background: var(--vp-c-brand-soft);
  border-color: var(--blog-accent, var(--vp-c-brand-1));
  color: var(--blog-accent, var(--vp-c-brand-1));
  font-weight: 650;
}
.blog-topics button:focus-visible,
.blog-empty button:focus-visible,
.blog-start a:focus-visible {
  outline: 3px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}
.blog-result-count {
  color: var(--vp-c-text-2);
  font-size: 13px;
  margin: 0 0 22px;
}
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.blog-empty {
  padding: 48px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  text-align: center;
}
.blog-empty h3 {
  margin: 0;
}
.blog-start {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 48px;
  margin-top: 72px;
  padding-top: 40px;
  border-top: 1px solid var(--vp-c-divider);
}
.blog-start__links {
  display: grid;
  gap: 0;
}
.blog-start a {
  display: block;
  color: var(--vp-c-text-1);
  font-size: 16px;
  text-decoration: none;
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.blog-start a > span:first-child {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 12px;
  margin-bottom: 5px;
}
.blog-start a > span:last-child {
  float: right;
  color: var(--blog-accent, var(--vp-c-brand-1));
}
.blog-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
@media (max-width: 960px) {
  .blog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 700px) {
  .blog-index {
    padding: 8px 0 48px;
  }
  .blog-header {
    padding: 0 0 28px;
  }
  .blog-header .blog-intro {
    font-size: 16px;
  }
  .blog-desktop-break {
    display: none;
  }
  .blog-library {
    margin-top: 40px;
  }
  .blog-library__heading {
    align-items: stretch;
    flex-direction: column;
    gap: 20px;
  }
  .blog-search {
    width: 100%;
  }
  .blog-topics {
    gap: 8px;
    margin-top: 20px;
  }
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .blog-start {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 48px;
  }
  .blog-index h2 {
    font-size: 26px;
  }
}
</style>
