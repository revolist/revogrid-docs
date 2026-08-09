import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const outDir = path.join(rootDir, '.vitepress', 'dist')
const siteUrl = process.env.DOCS_SITE_URL || 'https://rv-grid.com'

const sidebarFiles = [
  '.vitepress/configs/sidebar/en.guide.ts',
  '.vitepress/configs/sidebar/en.demo.ts',
]

const curatedPages = [
  { text: 'RevoGrid home', link: '/' },
  { text: 'React Data Grid', link: '/react-data-grid' },
  { text: 'Vue Data Grid', link: '/vue-data-grid' },
  { text: 'Angular Data Grid', link: '/angular-data-grid' },
  { text: 'Svelte Data Grid', link: '/svelte-data-grid' },
  { text: 'RevoGrid Pro', link: '/pro/' },
  { text: 'Pro Feature Table', link: '/pro/feature-table' },
  { text: 'Pro Videos', link: '/pro/videos' },
  { text: 'Pivot Table', link: '/pivot/' },
  { text: 'RevoKanban', link: '/kanban' },
  { text: 'Gantt', link: '/gantt' },
  { text: 'JavaScript Scheduler', link: '/jsscheduler' },
]

const excludedSourcePatterns = [
  /^blog\//,
  /^compare\//,
  /^guide\/types\//,
  /^pro\/policies\//,
  /^pricing-page\//,
  /^public\//,
  /^\.vitepress\//,
  /^node_modules\//,
  /(^|\/)_/,
]

const titleFallbacks = new Map([
  ['/', 'RevoGrid Documentation'],
  ['/guide', 'JavaScript Data Grid Quick Start'],
  ['/guide/mcp', 'RevoGrid MCP for AI Agents'],
  ['/demo', 'RevoGrid Demos'],
  ['/pro', 'RevoGrid Pro'],
  ['/pivot', 'RevoGrid Pivot'],
  ['/kanban', 'RevoKanban JavaScript Kanban Board'],
])

function normalizeRoute(link) {
  if (!link || link.startsWith('http') || link.startsWith('#')) {
    return ''
  }

  const withoutHash = link.split('#')[0].split('?')[0]
  const withSlash = withoutHash.startsWith('/') ? withoutHash : `/${withoutHash}`
  const withoutIndex = withSlash.replace(/\/index$/, '/')

  if (withoutIndex === '/') {
    return '/'
  }

  return withoutIndex.replace(/\/$/, '')
}

function routeToSource(route) {
  if (route === '/') {
    return 'index.md'
  }

  const normalized = route.replace(/^\//, '')
  const direct = `${normalized}.md`
  const index = `${normalized}/index.md`

  if (existsSync(path.join(rootDir, direct))) {
    return direct
  }

  if (existsSync(path.join(rootDir, index))) {
    return index
  }

  return ''
}

function routeToUrl(route) {
  if (route === '/') {
    return `${siteUrl}/`
  }

  return `${siteUrl}${route}`
}

function shouldIncludeSource(source) {
  return Boolean(source) && !excludedSourcePatterns.some((pattern) => pattern.test(source))
}

function cleanSidebarText(text) {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractSidebarLinks(file) {
  const filePath = path.join(rootDir, file)

  if (!existsSync(filePath)) {
    return []
  }

  const content = stripLineComments(readFileSync(filePath, 'utf8'))
  const items = []
  const objectPattern = /\{[\s\S]*?\}/g
  let match

  while ((match = objectPattern.exec(content))) {
    const object = match[0]
    const linkMatch = object.match(/\blink:\s*(['"`])([^'"`]+)\1/)

    if (!linkMatch) {
      continue
    }

    const textMatch = object.match(/\btext:\s*(['"`])([\s\S]*?)\1/)
    items.push({
      text: cleanSidebarText(textMatch?.[2] || linkMatch[2]),
      link: linkMatch[2],
    })
  }

  return items
}

function stripLineComments(content) {
  return content
    .split('\n')
    .filter((line) => !line.trim().startsWith('//'))
    .join('\n')
}

function collectPages() {
  const collected = []
  const seenRoutes = new Set()

  for (const item of [
    ...curatedPages,
    ...sidebarFiles.flatMap((file) => extractSidebarLinks(file)),
  ]) {
    const route = normalizeRoute(item.link)
    const source = routeToSource(route)

    if (!route || seenRoutes.has(route) || !shouldIncludeSource(source)) {
      continue
    }

    collected.push({
      route,
      source,
      sidebarText: item.text,
    })
    seenRoutes.add(route)
  }

  return collected
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---\n')) {
    return { attrs: {}, body: raw }
  }

  const end = raw.indexOf('\n---', 4)

  if (end === -1) {
    return { attrs: {}, body: raw }
  }

  const frontmatter = raw.slice(4, end)
  const body = raw.slice(end + 4).replace(/^\n/, '')
  const attrs = {}
  const lines = frontmatter.split('\n')

  for (let i = 0; i < lines.length; i += 1) {
    const titleMatch = lines[i].match(/^title:\s*(.*)$/)
    const descriptionMatch = lines[i].match(/^description:\s*(.*)$/)

    if (titleMatch) {
      attrs.title = unquoteYaml(titleMatch[1])
      continue
    }

    if (descriptionMatch) {
      attrs.description = unquoteYaml(descriptionMatch[1])
    }
  }

  if (!attrs.description) {
    const descriptionIndex = lines.findIndex((line) => line.trim() === '- name: description')
    const contentLine = descriptionIndex >= 0
      ? lines.slice(descriptionIndex + 1).find((line) => line.trim().startsWith('content:'))
      : undefined

    if (contentLine) {
      attrs.description = unquoteYaml(contentLine.replace(/^\s*content:\s*/, ''))
    }
  }

  return { attrs, body }
}

function unquoteYaml(value) {
  return value
    .trim()
    .replace(/^['"]|['"]$/g, '')
}

function expandIncludes(content, source, stack = []) {
  return content.replace(/<!--\s*@include:\s*([^>]+?)\s*-->/g, (_match, includePath) => {
    const cleanIncludePath = includePath.trim()
    const resolved = path.normalize(path.join(path.dirname(path.join(rootDir, source)), cleanIncludePath))
    const relative = path.relative(rootDir, resolved)

    if (!relative || relative.startsWith('..') || !existsSync(resolved)) {
      return ''
    }

    if (stack.includes(relative)) {
      return ''
    }

    const raw = readFileSync(resolved, 'utf8')
    const { body } = relative.endsWith('.md') ? parseFrontmatter(raw) : { body: raw }

    return expandIncludes(body, relative, [...stack, relative])
  })
}

function splitFencedMarkdown(content) {
  const parts = []
  const fencePattern = /^```[\s\S]*?^```[ \t]*$/gm
  let lastIndex = 0
  let match

  while ((match = fencePattern.exec(content))) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: content.slice(lastIndex, match.index) })
    }

    parts.push({ type: 'code', value: match[0] })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < content.length) {
    parts.push({ type: 'text', value: content.slice(lastIndex) })
  }

  return parts
}

function relativeLinkToUrl(source, target) {
  if (!target.startsWith('./') && !target.startsWith('../')) {
    return target
  }

  const [targetPath, anchor = ''] = target.split('#')
  const sourceDir = path.posix.dirname(source)
  let route = path.posix.normalize(path.posix.join('/', sourceDir, targetPath))

  route = route
    .replace(/\.md$/, '')
    .replace(/\/index$/, '/')

  if (route !== '/') {
    route = route.replace(/\/$/, '')
  }

  return `${siteUrl}${route}${anchor ? `#${anchor}` : ''}`
}

function normalizeMarkdownLinks(content, source) {
  return content
    .replace(/(!?\[[^\]]*?\]\()\/([^)\s]+)(\))/g, (_match, prefix, route, suffix) => {
      return `${prefix}${siteUrl}/${route}${suffix}`
    })
    .replace(/(!?\[[^\]]*?\]\()((?:\.\.?\/)[^)\s]+)(\))/g, (_match, prefix, target, suffix) => {
      return `${prefix}${relativeLinkToUrl(source, target)}${suffix}`
    })
    .replace(/\bhref="\/([^"]+)"/g, `href="${siteUrl}/$1"`)
    .replace(/\bhref="((?:\.\.?\/)[^"]+)"/g, (_match, target) => `href="${relativeLinkToUrl(source, target)}"`)
}

function stripVueBlocks(content) {
  return content
    .replace(/<Badge\b[^>]*>([\s\S]*?)<\/Badge>/gi, '$1')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<ClientOnly\b[\s\S]*?<\/ClientOnly>/gi, '')
}

function stripComponentBlocks(content) {
  const componentStart = /^\s*<([A-Z][A-Za-z0-9]*|DemoWidgetFrame|QuickStartCdnExample|ClientOnly|template)\b/
  const lines = content.split('\n')
  const kept = []
  let skipping = false

  for (const line of lines) {
    if (skipping) {
      if (line.includes('/>') || line.match(/^\s*<\/[A-Za-z0-9]+>/)) {
        skipping = false
      }
      continue
    }

    if (componentStart.test(line)) {
      if (!line.includes('/>') && !line.match(/>\s*$/)) {
        skipping = true
      }
      continue
    }

    kept.push(line)
  }

  return kept.join('\n')
}

function normalizePageContent(content, source) {
  return splitFencedMarkdown(content)
    .map((part) => {
      if (part.type === 'code') {
        return part.value
      }

      return normalizeMarkdownLinks(stripComponentBlocks(stripVueBlocks(part.value)), source)
    })
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function readPage(page) {
  const sourcePath = path.join(rootDir, page.source)
  const raw = readFileSync(sourcePath, 'utf8')
  const { attrs, body } = parseFrontmatter(raw)
  const expanded = expandIncludes(body, page.source, [page.source])
  const content = removeDuplicateTitleHeading(normalizePageContent(expanded, page.source), attrs.title)
  const title = attrs.title || firstHeading(content) || titleFallbacks.get(page.route) || page.sidebarText

  return {
    ...page,
    title,
    description: attrs.description || '',
    content,
    url: routeToUrl(page.route),
  }
}

function removeDuplicateTitleHeading(content, title) {
  if (!title) {
    return content
  }

  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return content.replace(new RegExp(`^#\\s+${escapedTitle}\\s*\\n+`), '').trim()
}

function firstHeading(content) {
  return content.match(/^#\s+(.+)$/m)?.[1]?.trim()
}

function pageGroup(page) {
  if (page.route === '/' || page.route.includes('-data-grid')) {
    return 'Overview and Framework Landing Pages'
  }

  if (page.route.startsWith('/demo')) {
    return 'Live Demos'
  }

  if (page.route.startsWith('/pro')) {
    return 'RevoGrid Pro'
  }

  if (page.route.startsWith('/pivot')) {
    return 'Pivot'
  }

  if (/gantt|scheduler/.test(page.route)) {
    return 'Scheduling'
  }

  if (page.route.startsWith('/guide/demos')) {
    return 'Framework Examples'
  }

  if (/\/guide\/(react|vue2|vue3|angular|svelte|stencil|tanstack|ts)/.test(page.route)) {
    return 'Framework Guides'
  }

  return 'Core Guides'
}

function buildLlmsIndex(pages) {
  const essentials = [
    pages.find((page) => page.route === '/guide'),
    pages.find((page) => page.route === '/guide/mcp'),
    pages.find((page) => page.route === '/guide/installation'),
    pages.find((page) => page.route === '/guide/api/revoGrid'),
    pages.find((page) => page.route === '/demo'),
  ].filter(Boolean)

  const grouped = new Map()

  for (const page of pages) {
    const group = pageGroup(page)

    if (!grouped.has(group)) {
      grouped.set(group, [])
    }

    grouped.get(group).push(page)
  }

  const lines = [
    '# RevoGrid Documentation',
    '',
    '> RevoGrid is a high-performance JavaScript data grid for Vue, React, Angular, Svelte, and plain JavaScript apps.',
    '',
    'Use this file as a compact map for AI agents. For full normalized Markdown context, fetch /llms-full.txt.',
    '',
    '## Agent and MCP Context',
    '',
    '- MCP server: https://mcp.rv-grid.com',
    '- Agent setup guide: https://rv-grid.com/guide/mcp',
    '- Full docs export: https://rv-grid.com/llms-full.txt',
    '',
    '## Start Here',
    '',
    ...essentials.map((page) => `- [${page.title}](${page.url})${page.description ? ` - ${page.description}` : ''}`),
    '',
  ]

  for (const [group, groupPages] of grouped) {
    lines.push(`## ${group}`, '')

    for (const page of groupPages) {
      lines.push(`- [${page.title}](${page.url})`)
    }

    lines.push('')
  }

  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`
}

function buildLlmsFull(pages) {
  const lines = [
    '# RevoGrid Documentation Full Export',
    '',
    `Generated from source Markdown for ${siteUrl}.`,
    'Generated type API pages, blog posts, comparison pages, legal policies, and hidden partials are intentionally excluded.',
    '',
  ]

  for (const page of pages) {
    lines.push('---', '', `# ${page.title}`, '', `Source: ${page.url}`)

    if (page.description) {
      lines.push('', `Description: ${page.description}`)
    }

    if (page.content) {
      lines.push('', page.content, '')
    } else {
      lines.push('', 'This page is rendered from VitePress frontmatter and Vue components; no standalone Markdown body is available in the normalized export.', '')
    }
  }

  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`
}

function main() {
  mkdirSync(outDir, { recursive: true })

  const pages = collectPages().map(readPage).filter((page) => page.content || page.description)
  const duplicateRoutes = pages
    .map((page) => page.route)
    .filter((route, index, routes) => routes.indexOf(route) !== index)

  if (duplicateRoutes.length) {
    throw new Error(`Duplicate llms routes: ${[...new Set(duplicateRoutes)].join(', ')}`)
  }

  writeFileSync(path.join(outDir, 'llms.txt'), buildLlmsIndex(pages), 'utf8')
  writeFileSync(path.join(outDir, 'llms-full.txt'), buildLlmsFull(pages), 'utf8')

  console.log(`Generated llms.txt and llms-full.txt with ${pages.length} pages`)
}

main()
