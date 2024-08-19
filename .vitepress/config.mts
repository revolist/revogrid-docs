import { fileURLToPath, URL } from 'node:url'
import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import svgLoader from 'vite-svg-loader'
import { navbarEn } from './configs/navbar'
import { sidebarEn } from './configs/sidebar'

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
    title: 'Revo Grid',
    appearance: 'dark',
    description: 'Data Grid Library on steroids - Revogrid',

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
    },
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        [
            'meta',
            {
                property: 'og:type',
                content: 'website',
            },
        ],

        [
            'meta',
            {
                property: 'twitter:card',
                content: 'summary_large_image',
            },
        ],
        [
            'script',
            {
                id: 'cookieyes',
                type: 'text/javascript',
                src: 'https://cdn-cookieyes.com/client_data/77fa2aeccc90021ffe8b8f49/script.js',
            },
        ],
        [
            'script',
            {
                async: '',
                src: 'https://www.googletagmanager.com/gtag/js?id=G-894M8FYLZF',
            },
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-894M8FYLZF');`,
        ],
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: '/logo.svg?skipsvgo',
        outline: [2, 3],
        socialLinks: [
            { icon: 'x', link: 'https://x.com/revolist_ou/' },
            {
                icon: 'github',
                link: 'https://github.com/revolist/revogrid',
            },
        ],

        footer: {
            copyright: 'Copyright © 2014-present',
            message:
                'Revogrid is an open source project by Revolist OU. <br/> Join, contribute, grow with us—everyone is welcome.<br/><br/>',
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
        plugins: [svgLoader()],
        build: {
            chunkSizeWarningLimit: 2000,
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
            ],
        },
    },
    ignoreDeadLinks: true,
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withMermaid(config))
