import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const docsRoot = new URL('../../../../../', import.meta.url)
const homepage = readFileSync(new URL('index.md', docsRoot), 'utf8')
const layout = readFileSync(new URL('.vitepress/theme/RevoGridHomeLayout.vue', docsRoot), 'utf8')
const component = readFileSync(new URL('.vitepress/theme/home-v2/HomeFeedbackCloud.vue', docsRoot), 'utf8')

test('places the source-backed feedback cloud directly before Advanced Modules', () => {
  assert.ok(homepage.indexOf('\nfeedback:') < homepage.indexOf('\nadvanced:'))
  assert.match(homepage, /title: Built into products\. Praised in practice\./)
  assert.match(homepage, /source: Customer email/)
  assert.match(homepage, /https:\/\/github\.com\/revolist\/revogrid\/issues\/141/)
  assert.ok(layout.indexOf('<HomeFeedbackCloud') < layout.indexOf('<HomeAdvancedModules'))
})

test('keeps mailbox praise anonymous and links only public GitHub sources', () => {
  const feedback = homepage.slice(homepage.indexOf('\nfeedback:'), homepage.indexOf('\nadvanced:'))

  assert.doesNotMatch(feedback, /mailto:|@(?:gmail|revolist|rv-grid|gastova|hanmi)/i)
  assert.doesNotMatch(feedback, /message[_ -]?id|thread[_ -]?id/i)
  assert.match(feedback, /attribution: RevoGrid Pro customer/)
  assert.match(feedback, /source: GitHub\n\s+link: https:\/\/github\.com\/revolist\/revogrid\/issues\//)
})

test('uses semantic quotes and responsive cloud breakpoints', () => {
  assert.match(component, /<blockquote/)
  assert.match(component, /<cite>/)
  assert.match(component, /role="list"/)
  assert.match(component, /rel="noopener noreferrer"/)
  assert.match(component, /@media \(max-width: 960px\)/)
  assert.match(component, /@media \(max-width: 640px\)/)
})
