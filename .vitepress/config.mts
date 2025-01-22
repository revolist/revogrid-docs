import { fileURLToPath, URL } from 'node:url'
import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import svgLoader from 'vite-svg-loader'
import { navbarEn } from './configs/navbar'
import { sidebarEn } from './configs/sidebar'
import { viteObfuscateFile } from 'vite-plugin-obfuscator'
import dotenv from 'dotenv'
import path from 'node:path'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { containerPreview } from './plugin.preview'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import markdownItAttrs from 'markdown-it-attrs'
import { text } from 'node:stream/consumers'
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
                    {
                        link: 'https://revolist.eu/lets-talk/',
                        text: 'Contact us',
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
            provider: 'local',
        },
        nav: navbarEn,

        sidebar: sidebarEn,
    },
    vite: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            svgLoader(),
            viteObfuscateFile({
                // Obfuscation options, for example:
                compact: true,
                controlFlowFlattening: true,
                deadCodeInjection: true,
                debugProtection: true,
                disableConsoleOutput: true,
                renameProperties: true,
            }),
        ],
        ssr: {
            noExternal: ['element-plus'],
        },
        build: {
            sourcemap: false,
        },
        optimizeDeps: {
            include: ['@revolist/revogrid-pro', 'pro-pages'], // List of node modules to include in bundling
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
                    replacement: path.resolve(__dirname, '/'),
                },
                {
                    find: '@revolist/revogrid-pro',
                    replacement: path.resolve(__dirname, '../pro-pages'),
                },
            ],
        },
    },
    srcExclude: process.env.VITE_PRO_INCLUDE
        ? undefined
        : ['demo/**-pro/**', 'pro-pages/**'],
    ignoreDeadLinks: true,
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withMermaid(config))
