import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const dist =
  process.env.DOCS_DIST_DIR || new URL('../../../.vitepress/dist/', import.meta.url).pathname
const frameworks = [
  {
    name: 'React',
    landing: 'react-data-grid',
    article: 'blog/top-5-react-datagrid-libraries-2026',
    guide: 'guide/react',
    demo: 'guide/demos/react/react-datagrid',
    articleTitle: 'Best React Data Grids in 2026: AG Grid vs RevoGrid vs Handsontable',
  },
  {
    name: 'Angular',
    landing: 'angular-data-grid',
    article: 'blog/top-5-angular-data-grid-libraries-2026',
    guide: 'guide/angular',
    demo: 'guide/demos/angular/angular-datagrid',
    articleTitle: 'Best Angular Data Grids in 2026: AG Grid vs RevoGrid vs Kendo vs Syncfusion',
  },
  {
    name: 'Vue',
    landing: 'vue-data-grid',
    article: 'blog/top-5-vue-data-grid-libraries-2026',
    guide: 'guide/vue3',
    demo: 'guide/demos/vue/vue3-datagrid',
    articleTitle: 'Best Vue Data Grids in 2026: AG Grid vs RevoGrid vs PrimeVue vs Syncfusion',
  },
]

function html(path) {
  const file = join(dist, `${path}.html`)
  return readFileSync(existsSync(file) ? file : join(dist, path, 'index.html'), 'utf8')
}

function tags(source, name) {
  return [...source.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(([tag]) => tag)
}

function attr(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1]
}

function heading(source, level) {
  return [
    ...source.matchAll(new RegExp(`<h${level}\\b[^>]*>([\\s\\S]*?)<\\/h${level}>`, 'gi')),
  ].map(([, content]) =>
    content
      .replace(/<[^>]+>/g, '')
      .replace(/[\u200b\u200c\u200d]/g, '')
      .replace(/\s+/g, ' ')
      .trim(),
  )
}

function validateDestination(url) {
  const path = url.split('#')[0].replace(/^\//, '').replace(/\/$/, '')
  const target = path ? `${path}.html` : 'index.html'
  assert.ok(
    existsSync(join(dist, target)) || existsSync(join(dist, path, 'index.html')),
    `Missing internal destination: ${url}`,
  )
}

test('framework pages have distinct rendered search intent and valid SEO metadata', () => {
  const titles = new Set()
  const descriptions = new Set()
  for (const framework of frameworks) {
    for (const [kind, path] of [
      ['landing', framework.landing],
      ['article', framework.article],
    ]) {
      const source = html(path)
      const title = source.match(/<title>(.*?)<\/title>/)?.[1]
      const description = tags(source, 'meta').filter(tag => attr(tag, 'name') === 'description')
      const canonical = tags(source, 'link').filter(tag => attr(tag, 'rel') === 'canonical')
      assert.equal(heading(source, 1).length, 1, `${path} needs one H1`)
      assert.equal(canonical.length, 1, `${path} needs one canonical`)
      assert.equal(attr(canonical[0], 'href'), `https://rv-grid.com/${path}`)
      assert.equal(description.length, 1, `${path} needs one description`)
      assert.ok(!titles.has(title), `Duplicate title: ${title}`)
      assert.ok(
        !descriptions.has(attr(description[0], 'content')),
        `Duplicate description: ${path}`,
      )
      assert.doesNotMatch(source, /<meta[^>]+(?:robots|googlebot)[^>]+noindex/i)
      titles.add(title)
      descriptions.add(attr(description[0], 'content'))
      if (kind === 'landing') {
        assert.match(title, new RegExp(`^${framework.name} Data Grid`))
        assert.match(heading(source, 1)[0], new RegExp(`${framework.name} Data Grid`))
      } else {
        assert.equal(title, framework.articleTitle)
        assert.equal(heading(source, 1)[0], framework.articleTitle)
        assert.match(heading(source, 2)[0], /comparison/i)
      }
      const jsonLd = [
        ...source.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
      ]
      assert.ok(jsonLd.length, `${path} lost structured data`)
      for (const [, body] of jsonLd) {
        const schema = JSON.parse(body)
        if (schema['@type'] === 'Article') {
          assert.equal(schema.headline, framework.articleTitle)
          assert.equal(schema.description, attr(description[0], 'content'))
        }
      }
    }
  }
})

test('rendered product, article, demo, and docs links connect each framework', () => {
  for (const framework of frameworks) {
    const pages = [framework.landing, framework.article, framework.guide, framework.demo]
    const sources = pages.map(html)
    assert.equal(heading(sources[2], 1).length, 1, `${framework.guide} needs one H1`)
    assert.equal(heading(sources[3], 1).length, 1, `${framework.demo} needs one H1`)
    const expected = [framework.landing, framework.article, framework.guide, framework.demo]
    for (const destination of expected) validateDestination(`/${destination}`)
    assert.match(sources[0], new RegExp(`href="/${framework.article}"`))
    assert.match(sources[0], new RegExp(`href="/${framework.demo}"`))
    assert.match(sources[1], new RegExp(`href="/${framework.landing}"`))
    assert.match(sources[1], new RegExp(`href="/${framework.demo}"`))
    assert.match(sources[1], new RegExp(`href="/${framework.guide}/"`))
    for (const source of sources) assert.match(source, /href="\/pricing"/)
  }
  const branded = html('best-data-grid-for-react')
  assert.equal(heading(branded, 1)[0], 'RevoGrid for React: Features, Use Cases, and Trade-offs')
  assert.match(branded, /href="\/blog\/top-5-react-datagrid-libraries-2026"/)
})

test('changed framework pages have working internal routes and fragments', () => {
  const pages = [
    ...frameworks.flatMap(({ landing, article, guide, demo }) => [landing, article, guide, demo]),
    'best-data-grid-for-react',
  ]
  for (const page of pages) {
    const source = html(page)
    for (const anchor of tags(source, 'a')) {
      const href = attr(anchor, 'href')
      if (!href || href.startsWith('//') || (!href.startsWith('/') && !href.startsWith('#')))
        continue
      const [pathname, fragment] = href.split('#')
      const route = decodeURIComponent(pathname.split('?')[0])
      const target = route ? route.slice(1).replace(/\/$/, '') : page
      validateDestination(`/${target}`)
      if (fragment) {
        const ids = tags(html(target), '[a-z][a-z0-9]*')
          .map(tag => attr(tag, 'id'))
          .filter(Boolean)
        assert.ok(ids.includes(decodeURIComponent(fragment)), `${page} has broken fragment ${href}`)
      }
    }
  }
})
