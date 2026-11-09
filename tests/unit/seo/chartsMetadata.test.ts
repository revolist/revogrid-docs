import assert from 'node:assert/strict'
import test from 'node:test'
import { createStructuredDataHead } from '../../../.vitepress/configs/structuredData'

test('Charts has its own software identity and no inherited grid offers or ratings', () => {
  const head = createStructuredDataHead({
    siteUrl: 'https://rv-grid.com',
    relativePath: 'charts/index.md',
    title: 'JavaScript Charts Library & Live Demos | RevoGrid',
  })
  const software = head.filter(([, attrs]) => attrs?.id === 'software-application-json-ld')
  assert.equal(software.length, 1)
  const data = JSON.parse(String(software[0][2]))
  assert.equal(data['@id'], 'https://rv-grid.com/charts/#software')
  assert.equal(data.name, 'RevoGrid Charts')
  assert.equal(data.url, 'https://rv-grid.com/charts/')
  assert.equal(data.applicationSubCategory, 'JavaScript Charts Library')
  assert.equal(data.offers, undefined)
  assert.equal(data.aggregateRating, undefined)
  assert.match(data.image, /\/img\/charts\/overview\.png$/)
})

test('Charts structured links respect the supplied deployment origin', () => {
  const head = createStructuredDataHead({
    siteUrl: 'https://preview.example.com',
    relativePath: 'charts/index.md',
    title: 'JavaScript Charts',
    faq: { items: [{ q: 'Does it need a grid?', a: 'No.' }] },
  })
  const schemas = head.map(([, , body]) => JSON.parse(String(body)))
  const software = schemas.find(item => item['@type'] === 'SoftwareApplication')
  assert.equal(software.url, 'https://preview.example.com/charts/')
  assert.equal(software.image, 'https://preview.example.com/img/charts/overview.png')
  assert.equal(schemas.filter(item => item['@type'] === 'FAQPage').length, 1)
  assert.equal(schemas.filter(item => item['@type'] === 'BreadcrumbList').length, 1)
})
