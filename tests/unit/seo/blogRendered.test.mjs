import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import test from 'node:test'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
const dist = process.env.DOCS_DIST_DIR
  ? pathToFileURL(resolve(process.env.DOCS_DIST_DIR, 'blog') + '/')
  : new URL('../../../.vitepress/dist/blog/', import.meta.url)
const read = name => readFileSync(new URL(name, dist), 'utf8')
const meta = (html, key) =>
  [...html.matchAll(/<meta\b[^>]*>/g)]
    .find(([tag]) => tag.includes(`property="${key}"`) || tag.includes(`name="${key}"`))?.[0]
    .match(/content="([^"]*)"/)?.[1]
test('filtering article shares its own image instead of the site fallback', () => {
  assert.equal(
    meta(read('advanced-data-grid-filtering-ecommerce-project-management.html'), 'og:image'),
    'https://rv-grid.com/blog/advanced-data-grid-filtering-ecommerce-project-management.png',
  )
})
test('all built articles have one canonical, H1, article schema and visible metadata', () => {
  for (const file of readdirSync(dist).filter(x => x.endsWith('.html') && x !== 'index.html')) {
    const html = read(file)
    assert.equal([...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)].length, 1, file)
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, file)
    assert.ok(html.includes(`href="https://rv-grid.com/blog/${file.replace(/\.html$/, '')}"`), file)
    assert.equal([...html.matchAll(/<meta\b[^>]*name="description"[^>]*>/g)].length, 1, file)
    assert.doesNotMatch(html, /<meta[^>]+(?:robots|googlebot)[^>]+noindex/i, file)
    assert.ok(meta(html, 'twitter:image:alt'), file)
    const schemas = [
      ...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
    ].map(([, body]) => JSON.parse(body))
    const articles = schemas
      .flatMap(x => x['@graph'] || [x])
      .filter(x => ['Article', 'BlogPosting', 'TechArticle'].includes(x['@type']))
    assert.equal(articles.length, 1, file)
    assert.match(html, /class="blog-article-meta"/, file)
    assert.equal(meta(html, 'og:type'), 'article', file)
  }
})
