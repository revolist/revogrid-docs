/** Shared, serializable blog metadata. Content bodies stay on the build side. */
export type BlogFrontmatter = Record<string, any>
export type ArticleSchema = Record<string, any>
export const blogTopics = [
  'Data Grid',
  'Pivot',
  'Gantt',
  'Scheduler',
  'Kanban',
  'Charts',
  'Engineering',
  'Product updates',
] as const

export function articleSchemas(head: any[] = []): ArticleSchema[] {
  return head.flatMap(([tag, attrs, body]) => {
    if (tag !== 'script' || attrs?.type !== 'application/ld+json') return []
    try {
      const json = JSON.parse(body)
      const nodes = Array.isArray(json) ? json : json['@graph'] || [json]
      return nodes.filter((node: ArticleSchema) =>
        [node['@type']]
          .flat()
          .some(type => ['Article', 'BlogPosting', 'TechArticle', 'NewsArticle'].includes(type)),
      )
    } catch {
      return []
    }
  })
}

function isoDate(value: unknown): string | undefined {
  if (!value) return
  const date = value instanceof Date ? value : new Date(String(value))
  if (!Number.isNaN(date.getTime())) return date.toISOString().slice(0, 10)
}
const dateLabel = (date?: string) =>
  date
    ? new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(date))
    : undefined

export function blogMetadata(frontmatter: BlogFrontmatter) {
  const schema = articleSchemas(frontmatter.head)[0] || {}
  const author = frontmatter.author || schema.author
  const firstAuthor = Array.isArray(author) ? author[0] : author
  const date = isoDate(frontmatter.date || schema.datePublished)
  const modified = isoDate(frontmatter.dateModified || frontmatter.updated || schema.dateModified)
  return {
    date,
    modified,
    dateLabel: dateLabel(date),
    modifiedLabel: modified && modified !== date ? dateLabel(modified) : undefined,
    author: typeof firstAuthor === 'string' ? firstAuthor : firstAuthor?.name,
    authorUrl: typeof firstAuthor === 'object' ? firstAuthor?.url : undefined,
    schema,
  }
}

const editorial: Record<string, { title?: string; excerpt?: string }> = {
  'react-spreadsheet-copy-paste-validation-undo-redo': {
    title: 'Build an Excel-like spreadsheet in React',
    excerpt: 'Paste from Excel, validate inventory, and add undo and redo to a working editor.',
  },
  'advanced-data-grid-filtering-ecommerce-project-management': {
    title: 'Choose the right data grid filters',
    excerpt: 'Practical filtering patterns for orders, inventory, and project workflows.',
  },
  'high-performance-javascript-excel-data-grid': {
    title: 'Build a faster JavaScript spreadsheet',
    excerpt: 'Bring editing, clipboard workflows, and large datasets into your web app.',
  },
  'react-kanban-board-tutorial': {
    title: 'Build a React Kanban board',
    excerpt: 'Create a typed drag-and-drop board with editing, WIP limits, and persistence.',
  },
  'virtualized-kanban-board-50000-tasks': {
    title: 'A Kanban board for 50,000 tasks',
    excerpt: 'Keep large workflows responsive with virtualization and a single data model.',
  },
  'best-javascript-kanban-board-libraries-2026': {
    title: 'JavaScript Kanban libraries compared',
    excerpt: 'Compare framework support, workflow controls, performance, and licensing.',
  },
  'top-5-react-datagrid-libraries-2026': { title: 'The best React data grids in 2026' },
  'top-5-angular-data-grid-libraries-2026': { title: 'The best Angular data grids in 2026' },
  'top-5-vue-data-grid-libraries-2026': { title: 'The best Vue data grids in 2026' },
  'best-js-datagrid-in-2026': { title: 'JavaScript data grids compared' },
  'best-js-gantt-in-2026': { title: 'JavaScript Gantt libraries compared' },
  'best-js-scheduler-in-2026': { title: 'JavaScript schedulers compared' },
  'best-js-pivot-in-2026': { title: 'JavaScript pivot tables compared' },
  'react-gantt-chart-component-build-vs-buy': { title: 'React Gantt charts: build or buy?' },
  'revogrid-vs-bryntum-scheduler-2026': { title: 'RevoGrid vs Bryntum Scheduler' },
  'revogrid-pro-2': { title: 'What’s new in RevoGrid Pro 2' },
}

export function blogTopic(frontmatter: BlogFrontmatter): string {
  const category = String(frontmatter.category || '')
  if (/product update/i.test(category)) return 'Product updates'
  if (/^gantt/i.test(category)) return 'Gantt'
  const exactTopic = blogTopics.find(topic => topic.toLowerCase() === category.toLowerCase())
  if (exactTopic && exactTopic !== 'Engineering') return exactTopic
  const subject = `${category} ${frontmatter.title || ''} ${(frontmatter.tags || []).join(' ')}`
  for (const topic of ['Kanban', 'Pivot', 'Gantt', 'Scheduler', 'Charts']) {
    if (new RegExp(topic === 'Charts' ? '\\bcharts?\\b' : topic, 'i').test(subject)) return topic
  }
  if (/data.?grid|spreadsheet|react|angular|vue|dash\b/i.test(subject)) return 'Data Grid'
  return 'Engineering'
}

export function createBlogPost(url: string, frontmatter: BlogFrontmatter, source = '') {
  const slug = url.replace(/\/$/, '').split('/').pop() || ''
  const metadata = blogMetadata(frontmatter)
  const title = frontmatter.title || metadata.schema.headline || slug.replace(/-/g, ' ')
  const body = source
    .replace(/^---[\s\S]*?---/, '')
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '')
    .replace(/<[^>]*>/g, '')
  const minutes = Math.max(1, Math.ceil(body.trim().split(/\s+/).filter(Boolean).length / 220))
  const { schema: _schema, ...display } = metadata
  return {
    ...display,
    url: url.replace(/\.html$/, ''),
    title,
    cardTitle: frontmatter.cardTitle || editorial[slug]?.title || title,
    description: frontmatter.description || '',
    excerpt: frontmatter.excerpt || editorial[slug]?.excerpt || frontmatter.description || '',
    topic: blogTopic(frontmatter),
    tags: (frontmatter.tags || []) as string[],
    image: frontmatter.image || '/og-image.jpg',
    imageAlt: frontmatter.imageAlt || `${title} preview`,
    readingTime: `${minutes} min read`,
    featured: Boolean(frontmatter.featured),
    demoUrl: frontmatter.demoUrl as string | undefined,
  }
}
export type BlogPost = ReturnType<typeof createBlogPost>
