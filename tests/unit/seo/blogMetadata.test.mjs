import assert from 'node:assert/strict'
import test from 'node:test'
import { createBlogPost } from '../../../blog/blog.ts'
import { prepareBlogFrontmatter } from '../../../.vitepress/configs/blogSeo.ts'

test('article image drives social previews and fills missing article schema', () => {
  const fm = {
    title: 'Filtering guide',
    description: 'Choose filters.',
    image: '/blog/filter.png',
    imageAlt: 'Order filters',
    date: '2026-09-03',
    author: 'RevoGrid Team',
  }
  prepareBlogFrontmatter(fm, 'blog/filtering.md', 'https://rv-grid.com')
  const content = property =>
    fm.head.find(
      ([tag, attrs]) => tag === 'meta' && (attrs.property === property || attrs.name === property),
    )?.[1].content
  assert.equal(content('og:image'), 'https://rv-grid.com/blog/filter.png')
  assert.equal(content('twitter:image:alt'), 'Order filters')
  const articles = fm.head.filter(([tag]) => tag === 'script').map(([, , body]) => JSON.parse(body))
  assert.equal(articles.length, 1)
  assert.equal(articles[0]['@type'], 'BlogPosting')
  assert.equal(articles[0].datePublished, '2026-09-03')
  assert.equal(articles[0].dateModified, undefined)
})

test('authored schema and social overrides are preserved without duplicate article schema', () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Full headline',
    image: 'https://rv-grid.com/custom.png',
    dateModified: '2026-09-22',
    author: { '@type': 'Organization', name: 'Engineering' },
  }
  const fm = {
    title: 'Short title',
    image: '/card.webp',
    head: [
      ['meta', { property: 'og:image', content: 'https://rv-grid.com/custom.png' }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(schema)],
    ],
  }
  prepareBlogFrontmatter(fm, 'blog/example.md', 'https://rv-grid.com')
  assert.equal(fm.head.filter(([tag]) => tag === 'script').length, 1)
  const result = JSON.parse(fm.head.find(([tag]) => tag === 'script')[2])
  assert.equal(result.headline, 'Full headline')
  assert.equal(result.dateModified, '2026-09-22')
  assert.deepEqual(result.author, schema.author)
  assert.equal(
    fm.head.find(([, a]) => a.name === 'twitter:image')[1].content,
    'https://rv-grid.com/custom.png',
  )
})

test('post summaries normalize taxonomy and keep schema update dates separate from publication', () => {
  const fm = {
    title: 'React Gantt tutorial',
    date: '2026-07-09',
    category: 'Gantt Charts',
    tags: ['React'],
    head: [
      [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({ '@type': 'Article', dateModified: '2026-09-22' }),
      ],
    ],
  }
  const post = createBlogPost('/blog/gantt', fm, '# Tutorial\n\nUseful content.')
  assert.equal(post.topic, 'Gantt')
  assert.equal(post.date, '2026-07-09')
  assert.equal(post.modified, '2026-09-22')
  assert.equal(post.dateLabel, 'Jul 9, 2026')
  assert.equal(post.author, undefined)
  assert.equal(post.readingTime, '1 min read')
})

test('non-blog pages and blog index retain their own metadata', () => {
  for (const path of ['guide/index.md', 'blog/index.md']) {
    const fm = { title: 'Overview' }
    prepareBlogFrontmatter(fm, path, 'https://rv-grid.com')
    assert.deepEqual(fm, { title: 'Overview' })
  }
})

test('authored article omissions are filled and a scalar schema image stays intact', () => {
  const fm = {
    title: 'Tutorial',
    head: [
      [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({ '@type': 'Article', image: 'https://rv-grid.com/schema-cover.png' }),
      ],
    ],
  }
  prepareBlogFrontmatter(fm, 'blog/tutorial.md', 'https://rv-grid.com')
  const image = fm.head.find(([, attrs]) => attrs.property === 'og:image')[1].content
  assert.equal(image, 'https://rv-grid.com/schema-cover.png')
  const schema = JSON.parse(fm.head.find(([tag]) => tag === 'script')[2])
  assert.equal(schema.headline, 'Tutorial')
  assert.equal(schema.author, undefined)
  assert.equal(schema.dateModified, undefined)
  const withoutImage = {
    title: 'Filters',
    image: '/filters.png',
    head: [['script', { type: 'application/ld+json' }, '{"@type":"Article"}']],
  }
  prepareBlogFrontmatter(withoutImage, 'blog/filters.md', 'https://rv-grid.com')
  assert.equal(
    JSON.parse(withoutImage.head.find(([tag]) => tag === 'script')[2]).image,
    'https://rv-grid.com/filters.png',
  )
})

test('a scheduler article remains in Scheduler even when it also discusses Gantt', () => {
  const post = createBlogPost('/blog/scheduler', {
    title: 'JavaScript schedulers',
    category: 'Scheduler',
    tags: ['Gantt'],
  })
  assert.equal(post.topic, 'Scheduler')
})
