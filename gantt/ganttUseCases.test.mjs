import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'

const pageSource = readFileSync(new URL('../gantt.md', import.meta.url), 'utf8')
const componentSource = readFileSync(new URL('./GanttPageLayout.vue', import.meta.url), 'utf8')
const configSource = readFileSync(new URL('./ganttLanding.ts', import.meta.url), 'utf8')
const useCasesSection = pageSource.match(/  useCases:\n([\s\S]*?)\n  faq:/)?.[1] ?? ''

test('presents six linked Gantt use cases with accessible visual previews', () => {
  assert.equal(useCasesSection.match(/^      - title: /gm)?.length, 6)
  assert.equal(useCasesSection.match(/^        media: \/img\/gantt-use-cases\//gm)?.length, 6)
  assert.equal(useCasesSection.match(/^        mediaAlt: /gm)?.length, 6)
  assert.equal(useCasesSection.match(/^        href: \/gantt\//gm)?.length, 6)
  assert.equal(useCasesSection.match(/^        cta: /gm)?.length, 6)

  const mediaPaths = [...useCasesSection.matchAll(/^        media: (\/img\/gantt-use-cases\/[^\n]+)$/gm)]
    .map(([, path]) => path)
  for (const mediaPath of mediaPaths) {
    assert.ok(
      existsSync(new URL(`../public${mediaPath}`, import.meta.url)),
      `Missing use-case preview: ${mediaPath}`,
    )
  }

  const articleLinks = [...useCasesSection.matchAll(/^        href: (\/gantt\/[^\n]+)$/gm)]
    .map(([, href]) => href)
  for (const href of articleLinks) {
    const slug = href.replace('/gantt/', '')
    assert.ok(
      existsSync(new URL(`./${slug}.md`, import.meta.url)),
      `Missing use-case guide: ${href}`,
    )
  }
})

test('links the human-centered Gantt benefits guide from the landing page', () => {
  assert.match(useCasesSection, /benefits:\n      label: .+\n      href: \/gantt\/benefits-of-gantt-chart/)
  assert.ok(existsSync(new URL('./benefits-of-gantt-chart.md', import.meta.url)))
})

test('renders visual use-case cards as lazy, focusable links with a text fallback', () => {
  assert.match(componentSource, /:is="item\.href \? 'a' : 'article'"/)
  assert.match(componentSource, /:alt="item\.mediaAlt \|\| ''"/)
  assert.match(componentSource, /width="1200"/)
  assert.match(componentSource, /height="675"/)
  assert.match(componentSource, /loading="lazy"/)
  assert.match(componentSource, /\.use-case-card/)
  assert.match(componentSource, /\[href\]:focus-visible/)
  assert.match(configSource, /mediaAlt\?: string/)
  assert.match(configSource, /benefits\?: \{ label: string, href: string \}/)
})
