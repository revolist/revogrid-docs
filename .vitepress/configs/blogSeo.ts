import type { HeadConfig } from 'vitepress'
import { articleSchemas, blogMetadata, type BlogFrontmatter } from '../../blog/blog.ts'

/** Populate blog-only metadata before VitePress merges site and page head entries. */
export function prepareBlogFrontmatter(
  frontmatter: BlogFrontmatter,
  relativePath: string,
  siteUrl: string,
) {
  if (!relativePath.startsWith('blog/') || relativePath === 'blog/index.md') return
  const head: HeadConfig[] = frontmatter.head || []
  frontmatter.head = head
  const metadata = blogMetadata(frontmatter)
  const canonical =
    head.find(([tag, attrs]) => tag === 'link' && attrs?.rel === 'canonical')?.[1]?.href ||
    `${siteUrl}/${relativePath.replace(/\.md$/, '')}`
  const authoredImage = head.find(
    ([tag, attrs]) => tag === 'meta' && attrs?.property === 'og:image',
  )?.[1]?.content
  const schemaImage = Array.isArray(metadata.schema.image)
    ? metadata.schema.image[0]
    : metadata.schema.image
  const image = new URL(
    frontmatter.socialImage ||
      authoredImage ||
      frontmatter.image ||
      (typeof schemaImage === 'string' ? schemaImage : schemaImage?.url) ||
      '/og-image.jpg',
    `${siteUrl}/`,
  ).href
  const imageAlt =
    frontmatter.socialImageAlt || frontmatter.imageAlt || `${frontmatter.title} preview`
  const add = (key: string, value: string, attribute = 'property') => {
    if (!head.some(([tag, attrs]) => tag === 'meta' && attrs?.[attribute] === key))
      head.push(['meta', { [attribute]: key, content: value }])
  }
  add('og:type', 'article')
  add('og:image', image)
  add('og:image:alt', imageAlt)
  add('twitter:card', 'summary_large_image', 'name')
  add('twitter:image', image, 'name')
  add('twitter:image:alt', imageAlt, 'name')
  if (metadata.date) add('article:published_time', metadata.date)
  if (metadata.modified) add('article:modified_time', metadata.modified)
  const defaults = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.description,
    image,
    inLanguage: 'en',
    ...(metadata.date ? { datePublished: metadata.date } : {}),
    ...(metadata.modified ? { dateModified: metadata.modified } : {}),
    ...(metadata.author
      ? {
          author:
            typeof frontmatter.author === 'object'
              ? frontmatter.author
              : {
                  '@type': 'Organization',
                  name: metadata.author,
                  ...(metadata.authorUrl ? { url: metadata.authorUrl } : {}),
                },
        }
      : {}),
    publisher: { '@type': 'Organization', name: 'RevoGrid', url: `${siteUrl}/` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }
  if (!articleSchemas(head).length) {
    head.push([
      'script',
      { type: 'application/ld+json', id: 'blog-article-json-ld' },
      JSON.stringify(defaults),
    ])
  } else {
    // Fill omissions without rewriting intentional headlines, dates, authors or images.
    for (const entry of head) {
      const articles = articleSchemas([entry])
      if (!articles.length) continue
      const json = JSON.parse(entry[2] as string)
      const nodes = Array.isArray(json) ? json : json['@graph'] || [json]
      for (const node of nodes) {
        if (
          ![node['@type']]
            .flat()
            .some(type => ['Article', 'BlogPosting', 'TechArticle', 'NewsArticle'].includes(type))
        )
          continue
        for (const [key, value] of Object.entries(defaults)) {
          if (node[key] == null && value != null) node[key] = value
        }
      }
      entry[2] = JSON.stringify(json)
    }
  }
  frontmatter.pageClass = [
    ...new Set(`${frontmatter.pageClass || ''} blog-article-page`.trim().split(/\s+/)),
  ].join(' ')
}
