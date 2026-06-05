import type { DefaultTheme } from 'vitepress'
import {
    sidebarAngularEn,
    sidebarJavaScriptDemosEn,
    sidebarReactEn,
    sidebarVue2En,
    sidebarVue3En,
} from './en.demo'

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
        text: 'Getting Started',
        items: [
            {
                text: 'Quick Start',
                link: '/guide/',
            },
            {
                text: 'Installation',
                link: '/guide/installation',
            },
            {
                text: 'Overview',
                link: '/guide/overview',
            },
            {
                text: 'Data Synchronization',
                link: '/guide/data-sync',
            },
            {
                text: 'Proxy Source Editing',
                link: '/guide/proxy-source',
            },
            {
                text: 'Grid size',
                link: '/guide/grid.size',
            },
        ],
    },
    {
        text: 'Essentials',
        collapsed: true,
        items: [
            {
                text: 'Best Practices',
                link: '/guide/patterns',
            },
            {
                text: 'Performance',
                link: '/guide/performance',
            },
            {
                text: 'Programmatic Control',
                link: '/guide/programmatic-control',
            },
            {
                text: 'AI Agents and MCP',
                link: '/guide/mcp',
            },
            {
                text: 'Advanced Configuration',
                link: '/guide/advanced-configuration',
            },
            {
                text: 'Event Patterns',
                link: '/guide/events-guide',
            },
            {
                text: 'JSX/TSX Template',
                link: '/guide/jsx.template',
            },
            {
                text: 'Features and Definitions',
                link: '/guide/defs',
            },
            {
                text: 'API',
                link: '/guide/api/revoGrid',
            },
            {
                text: 'Hooks and Events',
                link: '/guide/api/events',
            },
            { text: 'Typings', link: '/guide/types/README' },
            {
                text: 'Viewports',
                link: '/guide/viewports',
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
                        text: 'Custom Column & Cell Formats',
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
                        text: 'Custom Cell Formats',
                        link: '/guide/cell/custom-formats',
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
                text: 'RTL Support',
                link: '/guide/rtl',
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
            {
                text: 'Real-Time Updates',
                link: '/guide/realtime-updates',
            },
        ],
    },


    {
        text: 'Frameworks',
        items: [
            {
                text: '<img src="/js.svg" alt="JS logo" width="15" height="15"/> TypeScript',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/ts/' },
                    {
                        text: 'Examples',
                        collapsed: true,
                        items: sidebarJavaScriptDemosEn,
                    },
                ],
            },
            {
                text: '<img src="/angular.svg" alt="Angular logo" width="15" height="15"/> Angular',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/angular/' },
                    {
                        text: 'Cell Template',
                        link: '/guide/angular/renderer',
                    },
                    { text: 'Cell Editor', link: '/guide/angular/editor' },
                    { text: 'Tree Data', link: '/guide/angular/tree' },
                    {
                        text: 'Examples',
                        collapsed: true,
                        items: sidebarAngularEn,
                    },
                ],
            },
            {
                text: '<img src="/react.svg" alt="React logo" width="15" height="15"/> React',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/react/' },
                    {
                        text: 'Cell Template',
                        link: '/guide/react/renderer',
                    },
                    { text: 'Cell Editor', link: '/guide/react/editor' },
                    {
                        text: 'Examples',
                        collapsed: true,
                        items: sidebarReactEn,
                    },
                ],
            },
            {
                text: '<img src="/vuejs.svg" alt="Vue 3 logo" width="15" height="15"/> Vue 3',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/vue3/' },
                    { text: 'Cell Template', link: '/guide/vue3/renderer' },
                    { text: 'Cell Editor', link: '/guide/vue3/editor' },
                    {
                        text: 'Examples',
                        collapsed: true,
                        items: sidebarVue3En,
                    },
                ],
            },
            {
                text: '<img src="/svelte.svg" alt="Svelte logo" width="15" height="15"/> Svelte',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/svelte/' },
                    { text: 'Cell Template', link: '/guide/svelte/renderer' },
                    { text: 'Cell Editor', link: '/guide/svelte/editor' },
                    { text: 'Tree Data', link: '/guide/svelte/tree' },
                    {
                        text: 'Examples',
                        collapsed: true,
                        items: [
                            {
                                text: 'Getting Started',
                                link: '/guide/demos/svelte/svelte-datagrid',
                            },
                        ],
                    },
                ],
            },
            {
                text: '<img src="/stenciljs.svg" alt="StencilJs logo" width="15" height="15"/> StencilJs',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/stencil/' },
                    {
                        text: 'Examples',
                        collapsed: true,
                        items: [
                            {
                                text: 'Getting Started',
                                link: '/guide/demos/stencil/stencil.sample',
                            },
                        ],
                    },
                ],
            },
            {
                text: '<img src="/vuejs.svg" alt="Vue 2 logo" width="15" height="15"/> Vue 2',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/vue2/' },
                    { text: 'Cell Template', link: '/guide/vue2/renderer' },
                    { text: 'Cell Editor', link: '/guide/vue2/editor' },
                    {
                        text: 'Examples',
                        collapsed: true,
                        items: sidebarVue2En,
                    },
                ],
            },
            {
                text: '<img src="/react-query-icon.svg" alt="TanStack logo" width="15" height="15"/> Tanstack',
                collapsed: true,
                items: [
                    { text: 'Getting Started', link: '/guide/tanstack' },
                    { text: 'Tree Data', link: '/guide/tanstack/tree' },
                    {
                        text: 'Examples',
                        collapsed: true,
                        items: [
                            {
                                text: 'Getting Started',
                                link: '/guide/demos/tanstack/',
                            },
                        ],
                    },
                ],
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
