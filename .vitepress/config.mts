import { fileURLToPath, URL } from 'node:url'
import { DefaultTheme, defineConfig, HeadConfig, UserConfig } from 'vitepress'
import svgLoader from 'vite-svg-loader'
import { navbarEn } from './configs/navbar'
import { sidebarEn } from './configs/sidebar'
import dotenv from 'dotenv'
import path from 'node:path'
import { readFile } from 'node:fs/promises'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { containerPreview } from './plugin.preview'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import markdownItAttrs from 'markdown-it-attrs'
import type MarkdownIt from 'markdown-it'
import { createStructuredDataHead } from './configs/structuredData'
import { resolveCommercialFaqs, type CommercialFaqKey } from '../commercial/productCatalog'
import UnoCSS from 'unocss/vite'

dotenv.config()

const ssrGlobal = globalThis as typeof globalThis & {
    Element?: typeof Element
    HTMLElement?: typeof HTMLElement
}

ssrGlobal.Element ??= class Element {}
ssrGlobal.HTMLElement ??= class HTMLElement extends ssrGlobal.Element {}

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
    str
        .normalize('NFKD')
        // Remove accents
        .replace(rCombining, '')
        // Remove control characters
        .replace(rControl, '')
        // Replace special characters
        .replace(rSpecial, '-')
        // ensure it doesn't start with a number
        .replace(/^(\d)/, '_$1')

const mermaidMarkdownPlugin = (md: MarkdownIt) => {
    const fence = md.renderer.rules.fence?.bind(md.renderer.rules)

    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const language = token.info.trim()

        if (language === 'mermaid' || language === 'mmd') {
            const id = `mermaid-${idx}`
            const graph = encodeURIComponent(token.content)
            return `<ClientOnly><Mermaid id="${id}" graph="${graph}" /></ClientOnly>`
        }

        return fence ? fence(tokens, idx, options, env, self) : self.renderToken(tokens, idx, options)
    }
}

const revogridProWorkspaceRoot = path.resolve(__dirname, '../../..')
const revogridDemosRoot = path.resolve(__dirname, '../revogrid-demos')
const revogridDemoDataSuffix = '.revogrid-demo-source.ts'
const localProPackageRoot = path.resolve(revogridProWorkspaceRoot, 'packages/pro')
const localEnterprisePackageRoot = path.resolve(revogridProWorkspaceRoot, 'packages/enterprise')
const useLocalProPackages =
    process.env.npm_lifecycle_event === 'dev' ||
    process.env.npm_lifecycle_script?.includes('vitepress dev') ||
    process.argv.some((argument) => argument === 'dev')
const localProPackageAliases = useLocalProPackages
    ? [
        {
            find: /^@revolist\/revogrid-pro\/dist\/revogrid-pro\.css$/,
            replacement: path.resolve(localProPackageRoot, 'dist/revogrid-pro.css'),
        },
        {
            find: /^@revolist\/revogrid-enterprise\/dist\/revogrid-enterprise\.css$/,
            replacement: path.resolve(localEnterprisePackageRoot, 'dist/revogrid-enterprise.css'),
        },
        {
            find: /^@revolist\/revogrid-pro$/,
            replacement: path.resolve(localProPackageRoot, 'dist/revogrid-pro.js'),
        },
        {
            find: /^@revolist\/revogrid-enterprise$/,
            replacement: path.resolve(localEnterprisePackageRoot, 'dist/revogrid-enterprise.js'),
        },
    ]
    : []

const standaloneBuildPages: Record<string, string> = {
    gantt: 'gantt.md',
    scheduler: 'scheduler.md',
    timelinegrid: 'timelinegrid.md',
    'ops-scheduler': 'ops-scheduler.md',
    jsscheduler: 'jsscheduler.md',
    pivot: 'pivot/index.md',
    pivotio: 'pivotio.md',
    vue: 'vue.md',
    angular: 'angular.md',
    datagridjs: 'datagridjs.md',
}

const standaloneBuildPage = process.env.DOCS_BUILD_PAGE
const standaloneBuildSource = standaloneBuildPage ? standaloneBuildPages[standaloneBuildPage] : undefined
const standaloneBuildSrcDir = process.env.DOCS_STANDALONE_SRC_DIR
const standaloneBuildRewrites = standaloneBuildSource && !standaloneBuildSrcDir
    ? {
        'index.md': '__home.md',
        [standaloneBuildSource]: 'index.md',
    }
    : undefined

const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, '')

const siteUrl = trimTrailingSlash(process.env.DOCS_SITE_URL || 'https://rv-grid.com')

const siteHostname = (value: string): string | undefined => {
    try {
        return new URL(value).hostname
    } catch {
        return undefined
    }
}

const truthyEnv = (value: string | undefined): boolean =>
    value === '1' || value === 'true' || value === 'yes'

const archiveHostnames = new Set(['v3.rv-grid.com'])
const isArchiveBuild = truthyEnv(process.env.DOCS_ARCHIVE) || archiveHostnames.has(siteHostname(siteUrl) || '')
const canonicalSiteUrl = trimTrailingSlash(
    process.env.DOCS_CANONICAL_SITE_URL || (isArchiveBuild ? 'https://rv-grid.com' : siteUrl)
)

const cleanPagePath = (relativePath: string): string => {
    const withoutExtension = relativePath.replace(/\.md$/, '')

    if (withoutExtension === 'index') {
        return '/'
    }

    if (withoutExtension.endsWith('/index')) {
        return `/${withoutExtension.replace(/\/index$/, '/')}`
    }

    return `/${withoutExtension}`
}

const pageUrl = (relativePath: string, baseUrl = canonicalSiteUrl): string =>
    `${baseUrl}${cleanPagePath(relativePath)}`

const normalizeTitle = (title: string): string =>
    title.endsWith(' | RevoGrid') ? title : `${title} | RevoGrid`

const hasHeadEntry = (
    head: HeadConfig[] | undefined,
    tag: string,
    attrName: string,
    attrValue: string
): boolean =>
    Boolean(head?.some(([headTag, attrs]) => {
        if (headTag !== tag || !attrs) return false
        return attrs[attrName] === attrValue
    }))

const headMetaContent = (
    head: HeadConfig[] | undefined,
    attrName: 'name' | 'property',
    attrValue: string
): string | undefined => {
    const entry = head?.find(([tag, attrs]) => {
        if (tag !== 'meta' || !attrs) return false
        return attrs[attrName] === attrValue && typeof attrs.content === 'string'
    })

    return entry?.[1]?.content as string | undefined
}

const archiveControlledHead = (head: HeadConfig[] | undefined): HeadConfig[] | undefined => {
    if (!isArchiveBuild || !head) {
        return head
    }

    return head.filter(([tag, attrs]) => {
        if (!attrs) return true

        if (tag === 'meta' && (attrs.name === 'robots' || attrs.name === 'googlebot')) {
            return false
        }

        return true
    })
}

const config: UserConfig<DefaultTheme.Config> = {
    ...((standaloneBuildSource || isArchiveBuild) ? {} : { sitemap: {
        hostname: siteUrl,
        transformItems(items) {
            return items.filter((item) => !item.url.includes('pivot/landing'))
        },
    } }),
    ...(standaloneBuildSrcDir
        ? {
            srcDir: standaloneBuildSrcDir,
            outDir: path.resolve(__dirname, 'dist'),
            publicDir: path.resolve(__dirname, '../public'),
        }
        : {}),
    cleanUrls: true,
    title: 'RevoGrid',
    appearance: 'dark',
    description:
        'Data Grid Library on steroids for Vue, Angular, React, Svelte and JS',

    markdown: {
        theme: {
            dark: 'one-dark-pro',
            light: 'github-light',
        },

        attrs: {
            leftDelimiter: '%{',
            rightDelimiter: '}%',
        },

        anchor: {
            slugify,
        },
        languageAlias: {
            pnpm: 'js',
            npm: 'js',
            yarn: 'js',
            bun: 'js',
        },
        config(md) {
            md.use(mermaidMarkdownPlugin)
            md.use(tabsMarkdownPlugin)
            md.use(containerPreview)
            md.use(markdownItAttrs, {
                // optional, these are default options
                leftDelimiter: '{',
                rightDelimiter: '}',
                allowedAttributes: [], // empty array = all attributes are allowed
            })
        },
    },
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=optional',
            },
        ],
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        ['meta', { property: 'og:image', content: 'https://rv-grid.com/og-image.jpg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'RevoGrid Documentation' }],

        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:image', content: 'https://rv-grid.com/og-image.jpg' }],
        ['meta', { name: 'twitter:site', content: '@RevoGrid' }],

        [
            'script',
            {},
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T7JNJDXW');`,
        ],
    ],
    transformPageData(pageData) {
        const frontmatter = pageData.frontmatter
        const commercialFaqKeys = (frontmatter.commercialFaqKeys ?? []) as CommercialFaqKey[]
        const authoredFaq = frontmatter.faq as { heading?: string, items?: Array<{ q?: string, a?: string }> } | undefined
        const nestedFaq = (frontmatter.ganttLanding as { faq?: { items?: Array<{ q?: string, a?: string }> } } | undefined)?.faq
        const generatedFaqs = resolveCommercialFaqs(commercialFaqKeys)
        const baseItems = authoredFaq?.items ?? nestedFaq?.items ?? []
        const generatedQuestions = new Set(generatedFaqs.map((item) => item.q))

        if (generatedFaqs.length || baseItems.length) {
            frontmatter.faq = {
                ...authoredFaq,
                items: [
                    ...baseItems.filter((item) => !item.q || !generatedQuestions.has(item.q)),
                    ...generatedFaqs,
                ],
            }
        }

        if (!isArchiveBuild) {
            return
        }

        frontmatter.head = archiveControlledHead(frontmatter.head as HeadConfig[] | undefined)
    },
    transformHead({ pageData, siteData }) {
        const frontmatter = pageData.frontmatter
        const head = frontmatter.head as HeadConfig[] | undefined
        const title = normalizeTitle(frontmatter.title || pageData.title || siteData.title)
        const description = frontmatter.description || headMetaContent(head, 'name', 'description') || siteData.description
        const url = pageUrl(pageData.relativePath)
        const dynamicHead: HeadConfig[] = []

        if (!hasHeadEntry(head, 'link', 'rel', 'canonical')) {
            dynamicHead.push(['link', { rel: 'canonical', href: url }])
        }

        if (!hasHeadEntry(head, 'meta', 'property', 'og:title')) {
            dynamicHead.push(['meta', { property: 'og:title', content: title }])
        }

        if (!hasHeadEntry(head, 'meta', 'property', 'og:description')) {
            dynamicHead.push(['meta', { property: 'og:description', content: description }])
        }

        if (!hasHeadEntry(head, 'meta', 'property', 'og:url')) {
            dynamicHead.push(['meta', { property: 'og:url', content: url }])
        }

        if (!hasHeadEntry(head, 'meta', 'name', 'twitter:title')) {
            dynamicHead.push(['meta', { name: 'twitter:title', content: title }])
        }

        if (!hasHeadEntry(head, 'meta', 'name', 'twitter:description')) {
            dynamicHead.push(['meta', { name: 'twitter:description', content: description }])
        }

        if (isArchiveBuild) {
            dynamicHead.push(['meta', { name: 'robots', content: 'noindex,follow' }])
            dynamicHead.push(['meta', { name: 'googlebot', content: 'noindex,follow' }])
        }

        dynamicHead.push(...createStructuredDataHead({
            siteUrl: canonicalSiteUrl,
            relativePath: pageData.relativePath,
            title,
            faq: frontmatter.faq as { items?: Array<{ q?: string; a?: string }> } | undefined,
        }))

        return dynamicHead
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: '/logo.svg?skipsvgo',
        outline: [2, 3],
        socialLinks: standaloneBuildSource ? [] : [
            // { icon: 'x', link: 'https://x.com/revolist_ou/' },
            {
                icon: 'github',
                link: 'https://github.com/revolist/revogrid',
            },
        ],

        footer: {
            message: `RevoGrid is a powerful data grid library made by <a href="https://revolist.eu/" target="_blank">Revolist OU</a>. Copyright © 2017-present.`,
            items: standaloneBuildSource ? [] : [
                {
                    title: 'Product',
                    links: [
                        {
                            link: '/',
                            text: 'Overview',
                        },
                        {
                            link: '/pro/feature-table',
                            text: 'Features',
                        },
                        {
                            link: '/pricing',
                            text: 'Pricing',
                        },
                        {
                            link: '/pro/',
                            text: 'RevoGrid Pro',
                        },
                    ],
                },
                {
                    title: 'Resources',
                    links: [
                        {
                            link: '/guide/',
                            text: 'Docs',
                        },
                        {
                            link: '/demo/',
                            text: 'Demos',
                        },
                        {
                            link: '/compare/',
                            text: 'Comparisons',
                        },
                        {
                            link: '/blog/',
                            text: 'Blog',
                        },
                    ],
                },
                {
                    title: 'Company',
                    links: [
                        {
                            link: 'https://revolist.eu/about-us/',
                            text: 'About us',
                        },
                        {
                            link: 'https://revolist.eu/services/',
                            text: 'Services',
                        },
                    ],
                },
                {
                    title: 'Legal',
                    links: [
                        {
                            link: '/pro/policies/license',
                            text: 'License',
                        },
                    {
                        link: '/pro/policies/privacy',
                            text: 'Privacy',
                    },
                    {
                        link: '/pro/policies/terms',
                            text: 'Terms',
                    },
                    {
                        link: '/pro/policies/security',
                            text: 'Security',
                    },
                    ],
                },
            ],
        },

        editLink: {
            pattern:
                'https://github.com/revolist/revogrid-docs/edit/main/:path',
            text: 'Suggest changes',
        },

        search: {
            provider: 'algolia',
            options: {
              appId: 'A7AL1RN49F',
              apiKey: '32c3895410dbd2626a07c065d0e88bec',
              indexName: 'RevoGrid',
            }
        },
        nav: standaloneBuildSource ? [] : navbarEn,

        sidebar: sidebarEn,
    },
    vite: {
        plugins: [
            {
                // VitePress reserves `*.data.ts` for content loaders. Demo datasets are
                // regular source modules, so resolve them under a non-reserved filename.
                name: 'revogrid-demo-data-source',
                enforce: 'pre',
                resolveId(source, importer) {
                    if (!source.endsWith('.data') && !source.endsWith('.data.ts')) return null

                    let resolvedSourcePath: string | null = null
                    if (source.startsWith('@revogrid-demos/')) {
                        resolvedSourcePath = path.resolve(
                            revogridDemosRoot,
                            source.slice('@revogrid-demos/'.length),
                        )
                    } else if (source.startsWith(revogridDemosRoot)) {
                        resolvedSourcePath = source
                    } else if (importer?.startsWith(revogridDemosRoot)) {
                        resolvedSourcePath = path.resolve(path.dirname(importer), source)
                    }

                    const sourcePath = resolvedSourcePath?.replace(/\.ts$/, '')
                    return sourcePath
                        ? `${sourcePath}${revogridDemoDataSuffix}`
                        : null
                },
                async load(id) {
                    if (!id.endsWith(revogridDemoDataSuffix)) return null

                    const sourcePath = `${id.slice(0, -revogridDemoDataSuffix.length)}.ts`
                    this.addWatchFile(sourcePath)
                    return readFile(sourcePath, 'utf8')
                },
            },
            {
                name: 'inject-gtm-noscript',
                transformIndexHtml(html) {
                    return html.replace(
                        /<body([^>]*)>/,
                        `<body$1>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T7JNJDXW"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
                    )
                },
            },
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            UnoCSS({
                configFile: path.resolve(__dirname, '../uno.config.ts'),
            }),
            svgLoader(),
        ],
        ssr: {
            noExternal: [
                'element-plus',
                '@revolist/revogrid-pro',
                '@revolist/revogrid-enterprise',
                '@revolist/revogrid-column-date',
                '@revolist/revogrid-column-numeral',
                '@revolist/revogrid-column-select',
            ],
        },
        build: {
            sourcemap: false,
        },
        optimizeDeps: {
            include: [
                ...(
                    useLocalProPackages
                        ? []
                        : [
                            '@revolist/revogrid-pro',
                            '@revolist/revogrid-enterprise',
                        ]
                ),
                '@braintree/sanitize-url',
                'dayjs',
                'debug',
                'cytoscape-cose-bilkent',
                'cytoscape',
                'numeral',
            ], // List of node modules to include in bundling
            ...(useLocalProPackages
                ? {
                    exclude: [
                        '@revolist/revogrid-pro',
                        '@revolist/revogrid-enterprise',
                    ],
                }
                : {}),
        },
        resolve: {
            extensions: [
                '.mjs',
                '.js',
                '.mts',
                '.ts',
                '.jsx',
                '.tsx',
                '.json',
                '.svg',
            ],
            alias: [
                {
                    find: '@revogrid-demos',
                    replacement: revogridDemosRoot,
                },
                {
                    find: /^.*\/VPImage\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./theme/VPImage.vue', import.meta.url)
                    ),
                },
                {
                    find: /^.*\/VPFooter\.vue$/,
                    replacement: fileURLToPath(
                        new URL('./theme/VPFooter.vue', import.meta.url)
                    ),
                },
                {
                    find: '@/',
                    replacement: `${path.resolve(__dirname, '../')}/`,
                },
                ...localProPackageAliases,
                {
                    find: 'dayjs/plugin/advancedFormat.js',
                    replacement: 'dayjs/esm/plugin/advancedFormat',
                },
                {
                    find: 'dayjs/plugin/customParseFormat.js',
                    replacement: 'dayjs/esm/plugin/customParseFormat',
                },
                {
                    find: 'dayjs/plugin/isoWeek.js',
                    replacement: 'dayjs/esm/plugin/isoWeek',
                },
                {
                    find: 'cytoscape/dist/cytoscape.umd.js',
                    replacement: 'cytoscape/dist/cytoscape.esm.mjs',
                },
            ],
        },
    },
    srcExclude: process.env.VITE_PRO_INCLUDE
        ? [
            'revogrid-demos/**',
            '**/_*.md',
            'README.md',
            'guide/parts/*.md',
            'guide/plugin/base.md',
            'guide/plugin/dispatcher.md',
            'guide/plugin/example.md',
            'guide/column/cell.template.md',
        ]
        : [
            'revogrid-demos/**',
            'demo/**-pro/**',
            'pro-pages/**',
            '**/_*.md',
            'README.md',
            'guide/parts/*.md',
            'guide/plugin/base.md',
            'guide/plugin/dispatcher.md',
            'guide/plugin/example.md',
            'guide/column/cell.template.md',
        ],
    rewrites: standaloneBuildRewrites,
    ignoreDeadLinks: true,
}

// https://vitepress.dev/reference/site-config
export default defineConfig(config)
