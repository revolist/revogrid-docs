<template>
  <main class="blog-index">
    <header class="blog-header">
      <div>
        <h1>Blog</h1>
        <p>Guides and engineering notes for data-heavy web applications.</p>
      </div>
      <span class="blog-count">{{ posts.length }} {{ posts.length === 1 ? 'post' : 'posts' }}</span>
    </header>

    <section class="blog-library" aria-labelledby="latest-posts">
      <h2 id="latest-posts" class="sr-only">All articles</h2>

      <div v-if="posts.length" class="blog-grid">
        <article v-for="post in posts" :key="post.url" class="blog-card">
          <a class="blog-card__media" :href="post.url" :aria-label="post.title">
            <img :src="post.image" :alt="post.imageAlt" loading="lazy" decoding="async">
          </a>
          <div class="blog-card__topline">
            <span class="blog-badge">{{ post.category }}</span>
            <span>{{ post.dateLabel }}</span>
          </div>
          <h3>
            <a :href="post.url">{{ post.title }}</a>
          </h3>
          <p>{{ post.description }}</p>
          <div class="blog-card__footer">
            <span>{{ post.readingTime }}</span>
            <div v-if="post.tags.length" class="blog-tags" aria-label="Tags">
              <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>

      <p v-else class="blog-empty">New articles will appear here when Markdown files are added to the blog directory.</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type BlogFrontmatter = {
  title?: string
  description?: string
  date?: string | Date
  author?: string
  category?: string
  tags?: string[]
  image?: string
  imageAlt?: string
  featured?: boolean
}

type BlogPageModule = {
  __pageData?: {
    title?: string
    description?: string
    frontmatter?: BlogFrontmatter
  }
}

type BlogPost = {
  title: string
  description: string
  dateValue: number
  dateLabel: string
  readingTime: string
  category: string
  tags: string[]
  image: string
  imageAlt: string
  url: string
  featured: boolean
}

const pageModules = import.meta.glob('./*.md', { eager: true }) as Record<string, BlogPageModule>
const rawModules = import.meta.glob('./*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const stripFrontmatter = (content: string) => content.replace(/^---[\s\S]*?---/, '')

const titleFromPath = (path: string) => {
  const slug = path.split('/').pop()?.replace(/\.md$/, '') || 'Article'

  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const toDate = (date?: string | Date) => {
  if (!date) return undefined

  if (date instanceof Date) {
    return Number.isNaN(date.getTime()) ? undefined : date
  }

  const parsed = new Date(date.includes('T') ? date : `${date}T00:00:00`)

  return Number.isNaN(parsed.getTime()) ? undefined : parsed
}

const formatDate = (date?: string | Date) => {
  const parsed = toDate(date)
  if (!parsed) return typeof date === 'string' ? date : 'Recently published'

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(parsed)
}

const estimateReadingTime = (content: string) => {
  const words = stripFrontmatter(content).trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 220))

  return `${minutes} min read`
}

const postUrl = (path: string) => {
  const slug = path.split('/').pop()?.replace(/\.md$/, '')

  return slug === 'index' ? '/blog/' : `/blog/${slug}`
}

const posts = computed<BlogPost[]>(() =>
  Object.entries(pageModules)
    .filter(([path]) => !path.endsWith('/index.md'))
    .map(([path, module]) => {
      const frontmatter = module.__pageData?.frontmatter || {}
      const rawContent = rawModules[path] || ''
      const title = frontmatter.title || module.__pageData?.title || titleFromPath(path)
      const description = frontmatter.description || module.__pageData?.description || 'Read the latest RevoGrid engineering article.'
      const image = frontmatter.image || '/og-image.jpg'
      const parsedDate = toDate(frontmatter.date)

      return {
        title,
        description,
        dateValue: parsedDate?.getTime() || 0,
        dateLabel: formatDate(frontmatter.date),
        readingTime: estimateReadingTime(rawContent),
        category: frontmatter.category || 'Engineering',
        tags: frontmatter.tags || [],
        image,
        imageAlt: frontmatter.imageAlt || `${title} preview`,
        url: postUrl(path),
        featured: Boolean(frontmatter.featured),
      }
    })
    .sort((a, b) => b.dateValue - a.dateValue || a.title.localeCompare(b.title))
)
</script>

<style lang="scss">
.blog-page {
  .VPDoc:not(.has-sidebar) .content,
  .VPDoc:not(.has-sidebar) .content-container,
  .vp-doc {
    max-width: none;
  }
}

.blog-index {
  box-sizing: border-box;
  color: var(--vp-c-text-1);
  margin: 0 auto;
  max-width: 1040px;
  overflow-x: hidden;
  padding: 24px 0 72px;
  width: min(1040px, calc(100vw - 48px));
}

.blog-index,
.blog-index * {
  box-sizing: border-box;
  max-width: 100%;
}

.blog-header {
  align-items: center;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  margin-bottom: 28px;

  h1 {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.1;
    margin: 0;
  }

  p {
    color: var(--vp-c-text-2);
    font-size: 15px;
    line-height: 1.6;
    margin: 8px 0 0;
  }
}

.blog-count {
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-2);
  flex: none;
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  padding: 8px 12px;
}

.blog-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.blog-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
  padding: 24px;
  transition: border-color 0.18s, transform 0.18s, background-color 0.18s;

  &:hover {
    background: var(--vp-c-bg-soft);
    border-color: var(--vp-c-brand-2);
    transform: translateY(-2px);
  }

  h3 {
    font-size: 21px;
    letter-spacing: 0;
    line-height: 1.25;
    margin: 0;
    max-width: 100%;
    white-space: normal;
    word-break: normal;
  }

  a {
    color: var(--vp-c-text-1);
    text-decoration: none;

    &:hover {
      color: var(--vp-c-brand-1);
    }
  }

  p {
    color: var(--vp-c-text-2);
    line-height: 1.6;
    margin: 0;
    overflow-wrap: anywhere;
    white-space: normal;
  }

  h3 a {
    overflow-wrap: anywhere;
    white-space: normal;
  word-break: normal;
  }
}

.blog-card__media {
  aspect-ratio: 16 / 9;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  display: block;
  margin: -8px -8px 2px;
  overflow: hidden;

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}

.blog-card__topline {
  align-items: center;
  color: var(--vp-c-text-3);
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 500;
  gap: 10px;
  justify-content: space-between;
  text-transform: uppercase;
}

.blog-badge {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-1);
  line-height: 1;
  padding: 5px 8px;
}

.blog-card__footer {
  align-items: center;
  color: var(--vp-c-text-3);
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  gap: 12px;
  margin-top: auto;
  padding-top: 6px;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    border: 1px solid var(--vp-c-divider);
    border-radius: 999px;
    color: var(--vp-c-text-2);
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    padding: 5px 8px;
  }
}

.blog-empty {
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  margin: 0;
  padding: 28px;
}

.blog-index .sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

@media (max-width: 960px) {
  .blog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .blog-index {
    margin-left: 24px;
    margin-right: auto;
    padding: 8px 0 56px;
    width: min(342px, calc(100vw - 48px));
  }

  .blog-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-size: 34px;
    }
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-card {
    padding: 20px;

    h3 {
      font-size: 20px;
    }
  }

  .blog-card__topline,
  .blog-card__footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
