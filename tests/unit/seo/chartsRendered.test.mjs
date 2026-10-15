import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const dist = resolve(process.env.DOCS_DIST_DIR || '.vitepress/dist')
const html = readFileSync(resolve(dist, 'charts/index.html'), 'utf8')
const meta = key =>
  [...html.matchAll(/<meta\b[^>]*>/g)]
    .map(([tag]) => tag)
    .filter(tag => tag.includes(`name="${key}"`) || tag.includes(`property="${key}"`))
const content = tag => tag?.match(/content="([^"]*)"/)?.[1]

test('prerendered Charts page has one descriptive title, H1, description and canonical', () => {
  assert.equal([...html.matchAll(/<title>/g)].length, 1)
  assert.match(html, /<title>JavaScript Charts Library &amp; Live Demos \| RevoGrid<\/title>/)
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1)
  assert.match(html, /<h1[^>]*>JavaScript charts\./)
  assert.equal(meta('description').length, 1)
  assert.match(content(meta('description')[0]), /JavaScript and TypeScript chart library/)
  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)]
  assert.equal(canonicals.length, 1)
  assert.match(canonicals[0][0], /href="https:\/\/rv-grid.com\/charts\/"/)
  assert.doesNotMatch(html, /<meta[^>]+(?:robots|googlebot)[^>]+noindex/i)
})

test('social metadata uses the Charts image instead of the data-grid fallback', () => {
  for (const key of ['og:image', 'twitter:image']) {
    assert.equal(meta(key).length, 1)
    assert.equal(content(meta(key)[0]), 'https://rv-grid.com/img/charts/overview.png')
  }
  assert.ok(content(meta('og:image:alt')[0]))
  assert.ok(existsSync(resolve('public/img/charts/overview.png')))
})

test('use cases, chart descriptions, FAQ answers and links exist before JavaScript runs', () => {
  assert.match(html, /Which option performs best\?/)
  assert.match(html, /Are we on track to hit our targets\?/)
  assert.match(html, /Group.*column|Grouped column/)
  assert.match(html, /standalone JavaScript and TypeScript chart library/)
  assert.match(html, /href="\/pivot\/"/)
  assert.match(html, /href="\/demo\/pivot-charts"/)
  assert.match(html, /href="\/charts\/"[^>]*>JavaScript Charts<\/a>/)
  assert.match(html, /class="commercial-faq__answer"/)
})

test('product and FAQ structured data describe the visible Charts page', () => {
  const schemas = [
    ...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ].map(([, body]) => JSON.parse(body))
  const products = schemas.filter(item => item['@type'] === 'SoftwareApplication')
  assert.equal(products.length, 1)
  assert.equal(products[0].name, 'RevoGrid Charts')
  assert.equal(products[0]['@id'], 'https://rv-grid.com/charts/#software')
  const faq = schemas.find(item => item['@type'] === 'FAQPage')
  assert.equal(faq.mainEntity.length, 5)
  for (const question of faq.mainEntity) assert.ok(html.includes(question.name))
})

test('sitemap includes the canonical Charts route', () => {
  assert.match(
    readFileSync(resolve(dist, 'sitemap.xml'), 'utf8'),
    /<loc>https:\/\/rv-grid.com\/charts\/<\/loc>/,
  )
})
