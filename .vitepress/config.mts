import { fileURLToPath, URL } from 'node:url'
import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import svgLoader from 'vite-svg-loader'
import { navbarEn } from './configs/navbar'
import { sidebarEn } from './configs/sidebar'
import { viteObfuscateFile } from 'vite-plugin-obfuscator'
import dotenv from 'dotenv'
import path from 'node:path'

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
    title: 'RevoGrid',
    appearance: 'dark',
    description: 'Data Grid Library on steroids - RevoGrid',

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
            copyright: 'Copyright © 2014-present',
            message:
                'Revogrid is an open source project by <a href="https://revolist.eu/" target="_blank">Revolist OU</a>. <br/> Join, contribute, grow with us—everyone is welcome.<br/><br/>',
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
        carbonAds: {
            code: 'CW7DPKQL',
            placement: 'rv-gridcom',
        },
    },
    vite: {
        plugins: [
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
        build: {
            sourcemap: false,
            // minify: 'terser',
            // terserOptions: {
            //     compress: {
            //         drop_console: true,
            //     },
            //     mangle: {
            //         toplevel: true, // Mangle top-level variable names, including class names
            //     },
            //     keep_classnames: false, // Allow mangling of class names
            //     keep_fnames: false, // Allow mangling of function names
            // },
        },
        optimizeDeps: {
            include: ['@revolist/revogrid-pro', 'pro-pages'], // List of node modules to include in bundling
            // esbuildOptions: {
            //     minify: true,  // Pre-minify using esbuild
            //     target: 'es2020',  // Set the target JavaScript version
            // },
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
