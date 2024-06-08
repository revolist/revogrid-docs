import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
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

const mermaidCfg = withMermaid({
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
    },
    head: [
        [
            'link',
            { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' },
        ],
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
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: '/images/logo.svg',
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
                'https://github.com/revolist/revogrid/edit/main/packages/docs/:path',
            text: 'Suggest changes',
        },

        search: {
            provider: 'algolia',
            options: {
                appId: 'BTNTW3I1XP',
                apiKey: '771d10c8c5cc48f7922f15048b4d931c',
                indexName: 'revolist/revogrid',
            },
        },
        nav: navbarEn,

        sidebar: sidebarEn,
    },
    vite: {
        plugins: [svgLoader()],
        resolve: {
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
});

// https://vitepress.dev/reference/site-config
export default defineConfig(mermaidCfg)
