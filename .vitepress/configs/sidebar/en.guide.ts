import type { DefaultTheme } from 'vitepress'

    // {
    //     text: 'Pro',
    //     items: [
    //         {
    //             text: `Column Spanning ${PRO_BADGE}`,
    //             link: '/guide/column/span',
    //         },
    //     ],
    // },

export const sidebarGuideEn: DefaultTheme.SidebarItem[] = [
    {
        text: 'Essentials',
        collapsed: true,
        items: [
            {
                text: 'Best Practices',
                link: '/guide/patterns',
            },
            {
                text: 'JSX/TSX Template',
                link: '/guide/jsx.template',
            },
            {
                text: 'Lifecycle Hooks',
                link: '/guide/lifecycle',
            },
            {
                text: 'Features and Definitions',
                link: '/guide/defs',
            },
            {
                text: 'Grid size',
                link: '/guide/grid.size',
            },
            {
                text: 'API',
                link: '/guide/api/revoGrid',
            },
            { text: 'Typings', link: '/guide/types/README' },
            {
                text: 'Viewports',
                link: '/guide/viewports',
            },
        ],
    },
    {
        text: 'Getting Started',
        collapsed: true,
        items: [
            {
                text: 'Overview',
                link: '/guide/overview',
            },
            {
                text: 'Quick Start',
                link: '/guide/',
            },
            {
                text: 'Installation',
                link: '/guide/installation',
            },
            {
                text: 'Data Synchronization',
                link: '/guide/data-sync',
            },
        ],
    },
    {
        text: 'Columns',
        collapsed: true,
        items: [
            {
                text: 'Column Definitions',
                link: '/guide/column/',
                items: [
                    {
                        text: 'Column Resizing',
                        link: '/guide/column/resize',
                    },
                    {
                        text: 'Column Autosize',
                        link: '/guide/column/autosize',
                    },
                    {
                        text: 'Column Header Template',
                        link: '/guide/column/header.template',
                    },
                    {
                        text: 'Column Header Properties',
                        link: '/guide/column/properties',
                    },
                    {
                        text: 'Column Readonly',
                        link: '/guide/column/readonly',
                    },
                    {
                        text: 'Column Ordering',
                        link: '/guide/column/order',
                    },
                    {
                        text: 'Column Pinning',
                        link: '/guide/column/pin',
                    },
                    {
                        text: 'Column Groups',
                        link: '/guide/column/grouping',
                    },
                    {
                        text: 'Custom Columns',
                        link: '/guide/column/types',
                    },
                    {
                        text: 'Column Stretching',
                        link: '/guide/column/stretch',
                    },
                ],
            },
        ],
    },
    {
        text: 'Cells',
        collapsed: true,
        items: [
            {
                text: 'Cell Definitions',
                link: '/guide/cell/',
                items: [
                    {
                        text: 'Cell Readonly',
                        link: '/guide/column/readonly',
                    },
                    {
                        text: 'Cell Template',
                        link: '/guide/cell/renderer',
                    },
                    {
                        text: 'Cell Editor',
                        link: '/guide/cell/editor',
                    },
                ],
            },
        ],
    },
    {
        text: 'Rows',
        collapsed: true,
        items: [
            {
                text: 'Row Definitions',
                link: '/guide/row',
                items: [
                    {
                        text: 'Row Height',
                        link: '/guide/row/height',
                    },
                    {
                        text: 'Row Pinning',
                        link: '/guide/row/pin',
                    },
                    {
                        text: 'Row Headers',
                        link: '/guide/row/headers',
                    },
                    {
                        text: 'Row Ordering',
                        link: '/guide/row/order',
                    },
                    {
                        text: 'Row Grouping',
                        link: '/guide/row/grouping',
                    },
                ],
            },
        ],
    },
    {
        text: 'Advance',
        collapsed: true,
        items: [
            {
                text: 'Accessibility',
                link: '/guide/wcag',
            },

            {
                text: 'Editing',
                link: '/guide/editing',
            },
            {
                text: 'Export',
                link: '/guide/export.plugin',
            },
            {
                text: 'Filtering',
                link: '/guide/filters',
            },
            {
                text: 'Plugins',
                link: '/guide/plugin',
            },
            {
                text: 'Security',
                link: '/guide/security',
            },
            { text: 'Slots', link: '/guide/slots' },
            {
                text: 'Sorting',
                link: '/guide/sorting',
            },
            {
                text: 'Standalone',
                link: '/guide/standalone',
            },
            {
                text: 'SSR',
                link: '/guide/ssr',
            },
            {
                text: 'Theme Manager',
                link: '/guide/theme',
            },
        ],
    },


    {
        text: 'Frameworks',
        items: [
            {
                text: 'Angular',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/angular/' },
                    {
                        text: 'Cell Template',
                        link: '/guide/angular/renderer',
                    },
                    { text: 'Cell Editor', link: '/guide/angular/editor' },
                ],
            },
            {
                text: 'React',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/react/' },
                    {
                        text: 'Cell Template',
                        link: '/guide/react/renderer',
                    },
                    { text: 'Cell Editor', link: '/guide/react/editor' },
                ],
            },
            {
                text: 'StencilJs',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/stencil/' },
                ],
            },
            {
                text: 'Svelte',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/svelte/' },
                ],
            },
            {
                text: 'Vue 2',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/vue2/' },
                    { text: 'Cell Template', link: '/guide/vue2/renderer' },
                    { text: 'Cell Editor', link: '/guide/vue2/editor' },
                ],
            },
            {
                text: 'Vue 3',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/vue3/' },
                    { text: 'Cell Template', link: '/guide/vue3/renderer' },
                    { text: 'Cell Editor', link: '/guide/vue3/editor' },
                ],
            },
            {
                text: 'Tanstack',
                link: '/guide/tanstack',
            },
        ],
    },
    {
        text: 'Licensing',
        link: '/guide/licensing',
    },
    {
        text: 'Remove Attribution',
        link: '/guide/attribution',
    },
    {
        text: 'Contributor Guide',
        link: '/guide/CONTRIBUTING',
    },
    {
        text: 'Versioning',
        link: '/guide/migration',
        items: [
            {
                text: 'Migration Guide v4',
                link: '/guide/migrations/v4',
            },
        ],
    },
    {
        text: 'Pro',
        link: '/pro/',
    },
    {
        text: 'Data Grid explained',
        link: '/blog/datagrid',
    },
]