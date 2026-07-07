import { existsSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const trimTrailingSlash = value => value.replace(/\/+$/, '')
const siteUrl = trimTrailingSlash(process.env.DOCS_SITE_URL || 'https://rv-grid.com')
const canonicalSiteUrl = trimTrailingSlash(process.env.DOCS_CANONICAL_SITE_URL || 'https://rv-grid.com')

function hostname(value) {
  try {
    return new URL(value).hostname
  } catch {
    return undefined
  }
}

function truthyEnv(value) {
  return value === '1' || value === 'true' || value === 'yes'
}

const archiveHostnames = new Set(['v3.rv-grid.com'])
const isArchiveBuild = truthyEnv(process.env.DOCS_ARCHIVE) || archiveHostnames.has(hostname(siteUrl))
const distDir = join(process.cwd(), '.vitepress', 'dist')

if (!existsSync(distDir)) {
  console.error(`Docs dist directory not found: ${distDir}`)
  process.exit(1)
}

if (isArchiveBuild) {
  rmSync(join(distDir, 'sitemap.xml'), { force: true })
  rmSync(join(distDir, 'sitemap-index.xml'), { force: true })

  writeFileSync(
    join(distDir, 'robots.txt'),
    [
      `# robots.txt for ${hostname(siteUrl) || siteUrl} archive`,
      '',
      'User-agent: *',
      'Disallow: /',
      '',
      `# Current documentation is indexed at ${canonicalSiteUrl}/`,
      '',
    ].join('\n'),
    'utf8',
  )

  console.log(`Generated archive robots.txt for ${siteUrl}`)
} else {
  writeFileSync(
    join(distDir, 'robots.txt'),
    [
      `# robots.txt for ${hostname(siteUrl) || siteUrl}`,
      '',
      'User-agent: *',
      'Disallow: /private/',
      'Disallow: /temp/',
      'Allow: /',
      '',
      '# Sitemap location',
      `Sitemap: ${siteUrl}/sitemap.xml`,
      '',
      '# Crawling Delay to avoid server overload',
      'Crawl-delay: 10',
      '',
      '# Specific rules for well-known crawlers',
      'User-agent: Googlebot',
      'Allow: /',
      '',
      'User-agent: Bingbot',
      'Allow: /',
      '',
      'User-agent: Yandex',
      'Allow: /',
      '',
      '# Block some unnecessary files',
      'User-agent: *',
      'Disallow: /*.pdf$',
      'Disallow: /*.zip$',
      'Disallow: /*.doc$',
      'Disallow: /*.html$',
      '',
      '# Block any URLs with query parameters',
      'User-agent: *',
      'Disallow: /*?',
      '',
    ].join('\n'),
    'utf8',
  )

  console.log(`Generated robots.txt for ${siteUrl}`)
}
