import type { DefaultTheme } from 'vitepress'
import { sidebarProEn, withProBadges } from './pro-navigation.ts'
import { mergeGridSidebar } from './merge-grid-sidebar.ts'
import {
  sidebarAngularEn,
  sidebarJavaScriptDemosEn,
  sidebarReactEn,
  sidebarVue2En,
  sidebarVue3En,
} from './en.demo.ts'

// {
//     text: 'Pro',
//     items: [
//         {
//             text: `Column Spanning ${PRO_BADGE}`,
//             link: '/guide/column/span',
//         },
//     ],
// },

const coreGridSidebar: DefaultTheme.SidebarItem[] = [
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
        text: 'Data Loading and Sync',
        link: '/guide/data-sync',
      },
      {
        text: 'State Persistence',
        link: '/guide/state-persistence',
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
        text: 'Keyboard Navigation',
        link: '/guide/keyboard',
      },
      {
        text: 'Proxy Source Editing',
        link: '/guide/proxy-source',
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
      },
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
  {
    text: 'Cells',
    collapsed: true,
    items: [
      {
        text: 'Cell Definitions',
        link: '/guide/cell/',
      },
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
  {
    text: 'Rows',
    collapsed: true,
    items: [
      {
        text: 'Row Definitions',
        link: '/guide/row',
      },
      {
        text: 'Row Height',
        link: '/guide/row/height',
      },
      {
        text: 'Row Resizing',
        link: '/guide/row/resize',
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
  {
    text: 'Editors',
    collapsed: true,
    items: [
      {
        text: 'Overview',
        link: '/guide/editing',
      },
      {
        text: 'String',
        link: '/guide/editors/string',
      },
      {
        text: 'Number',
        link: '/guide/editors/number',
      },
      {
        text: 'Select Dropdown',
        link: '/guide/editors/select',
      },
      {
        text: 'Date',
        link: '/guide/editors/date',
      },
    ],
  },
  {
    text: 'Filtering',
    collapsed: true,
    items: [
      {
        text: 'Overview',
        link: '/guide/filters',
      },
    ],
  },
  {
    text: 'Sorting',
    link: '/guide/sorting',
  },
  {
    text: 'Accessibility',
    collapsed: true,
    items: [
      {
        text: 'WCAG',
        link: '/guide/wcag',
      },
      {
        text: 'RTL Support',
        link: '/guide/rtl',
      },
    ],
  },
  {
    text: 'Advance',
    collapsed: true,
    items: [
      {
        text: 'Plugins',
        link: '/guide/plugin',
      },
      { text: 'Slots', link: '/guide/slots' },
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
    text: 'Server-Side Data',
    collapsed: true,
    items: [
      {
        text: 'Overview',
        link: '/guide/server-side-data',
      },
    ],
  },
  {
    text: 'Export',
    collapsed: true,
    items: [
      {
        text: 'Export CSV',
        link: '/guide/export.plugin',
      },
      {
        text: 'Export PDF',
        link: '/guide/pdf-export',
      },
      {
        text: 'Export Excel',
        link: '/guide/data-grid-export-excel',
      },
    ],
  },
]

const dataGrid = sidebarProEn.find(section => section.text === 'Data Grid')

export const sidebarGuideEn: DefaultTheme.SidebarItem[] = withProBadges([
  {
    text: 'Data Grid',
    collapsed: false,
    items: [
      ...mergeGridSidebar(coreGridSidebar, dataGrid?.items ?? [], {
        'Data Filter': 'Filtering',
        'Excel Export': 'Export Excel',
      }),
    ],
  },
  ...sidebarProEn.filter(section => section !== dataGrid),
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
        text: '<img src="/python.svg" alt="Python logo" width="15" height="15"/> Dash / Python',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/guide/dash/' },
          {
            text: 'Getting Started',
            link: '/guide/dash/getting-started',
          },
          {
            text: 'DataFrames',
            link: '/guide/dash/dataframes',
          },
          { text: 'Columns', link: '/guide/dash/columns' },
          {
            text: 'Callbacks and Events',
            link: '/guide/dash/callbacks-and-events',
          },
          {
            text: 'Edit Synchronization',
            link: '/guide/dash/edit-synchronization',
          },
          {
            text: 'Property Reference',
            link: '/guide/dash/property-reference',
          },
          {
            text: 'Core API Reference',
            link: '/guide/dash/core-api-reference',
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
    text: 'Get Pro Trial',
    link: '/trial',
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
  {
    text: 'Security',
    link: '/guide/security',
  },
])
