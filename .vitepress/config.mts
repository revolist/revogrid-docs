import { fileURLToPath, URL } from 'node:url'
import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import svgLoader from 'vite-svg-loader'
import { navbarEn } from './configs/navbar'
import { sidebarEn } from './configs/sidebar'
import dotenv from 'dotenv'
import path from 'node:path'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { containerPreview } from './plugin.preview'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import markdownItAttrs from 'markdown-it-attrs'
import type MarkdownIt from 'markdown-it'

dotenv.config()

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

const useLocalProPackages = process.env.npm_lifecycle_event === 'dev' || process.argv.includes('dev')
const localProPackageAliases = useLocalProPackages
    ? [
        {
            find: '@revolist/revogrid-pro',
            replacement: path.resolve(__dirname, '../../../packages/pro'),
        },
        {
            find: '@revolist/revogrid-enterprise',
            replacement: path.resolve(__dirname, '../../../packages/enterprise'),
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
const standaloneBuildRewrites = standaloneBuildSource
    ? {
        'index.md': '__home.md',
        [standaloneBuildSource]: 'index.md',
    }
    : undefined

const browserOnlyPackageSsrShims = () => ({
    name: 'browser-only-package-ssr-shims',
    enforce: 'pre' as const,
    resolveId(source: string, _importer: string | undefined, options: { ssr?: boolean } = {}) {
        if (!options.ssr) return null

        if (source === '@revolist/revogrid-enterprise') {
            return path.resolve(__dirname, 'revogrid-enterprise-ssr-shim.ts')
        }

        if (source === '@revolist/revogrid-pro') {
            return path.resolve(__dirname, 'revogrid-pro-ssr-shim.ts')
        }

        return null
    },
})

const config: UserConfig<DefaultTheme.Config> = {
    sitemap: {
        hostname: 'https://rv-grid.com',
    },
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
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        ['meta', { property: 'og:title', content: 'RevoGrid - High-Performance Data Grid' }],
        ['meta', { property: 'og:url', content: 'https://rv-grid.com/guide' }],
        ['meta', { property: 'og:image', content: 'https://rv-grid.com/og-image.jpg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:description', content: 'Explore RevoGrid documentation to build high-performance, customizable data grids.' }],
        ['meta', { property: 'og:site_name', content: 'RevoGrid Documentation' }],

        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: 'RevoGrid - High-Performance Data Grid Framework' }],
        ['meta', { name: 'twitter:description', content: 'Explore RevoGrid documentation to build high-performance, customizable data grids.' }],
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
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: '/logo.svg?skipsvgo',
        outline: [2, 3],
        socialLinks: [
            // { icon: 'x', link: 'https://x.com/revolist_ou/' },
            {
                icon: 'github',
                link: 'https://github.com/revolist/revogrid',
            },
        ],

        footer: {
            // copyright: '',
            message: `RevoGrid is a powerful data grid library made by <a href="https://revolist.eu/" target="_blank">Revolist OU</a>. Copyright © 2017-present.`,
            items: [
                {
                links: [
                    {
                        link: '/pro/policies/privacy',
                        text: 'Privacy Policy',
                    },
                    {
                        link: '/pro/policies/terms',
                        text: 'Terms of Service',
                    },
                    {
                        link: '/pro/policies/security',
                        text: 'Security Policy',
                    },
                    {
                        link: '/guide/',
                        text: 'Quick Start',
                    },
                    {
                        link: 'https://revolist.eu/about-us/',
                        text: 'About us',
                    },
                    {
                        link: 'https://revolist.eu/services/',
                        text: 'Services',
                    },
                ],
            }],
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
        nav: navbarEn,

        sidebar: sidebarEn,
    },
    vite: {
        plugins: [
            browserOnlyPackageSsrShims(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
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
                '@revolist/revogrid-pro',
                '@revolist/revogrid-enterprise',
                '@braintree/sanitize-url',
                'dayjs',
                'debug',
                'cytoscape-cose-bilkent',
                'cytoscape',
            ], // List of node modules to include in bundling
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
        ? ['**/_*.md']
        : ['demo/**-pro/**', 'pro-pages/**', '**/_*.md'],
    rewrites: standaloneBuildRewrites,
    ignoreDeadLinks: true,
}

// https://vitepress.dev/reference/site-config
export default defineConfig(config)
