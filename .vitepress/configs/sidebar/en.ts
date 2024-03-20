import type { DefaultTheme } from 'vitepress/types/default-theme'
const svelteLink = 'framework.svelte.overview';
const vueLink = 'framework.vue.overview';
const reactLink = 'framework.react.overview';
const angularLink = 'framework.angular.overview';
export const sidebarEn: DefaultTheme.Sidebar = {
    '/': [
        {
          text: 'Setup',
          items: [
            {
              text: 'Introduction',
              link: '/introduction.html',
            },
            {
              text: 'Installation',
              link: '/installation.html',
            },
          ],
        },
        {
          text: 'Essentials',
          collapsed: false,
          items: [
            {
              text: 'Getting Started',
              link: '/guide/',
            },
            {
              text: 'Dynamic Route Matching',
              link: '/guide/essentials/dynamic-matching.html',
            },
            {
              text: "Routes' Matching Syntax",
              link: '/guide/essentials/route-matching-syntax.html',
            },
            {
              text: 'Named Routes',
              link: '/guide/essentials/named-routes.html',
            },
            {
              text: 'Nested Routes',
              link: '/guide/essentials/nested-routes.html',
            },
            {
              text: 'Programmatic Navigation',
              link: '/guide/essentials/navigation.html',
            },
            {
              text: 'Named Views',
              link: '/guide/essentials/named-views.html',
            },
            {
              text: 'Redirect and Alias',
              link: '/guide/essentials/redirect-and-alias.html',
            },
            {
              text: 'Passing Props to Route Components',
              link: '/guide/essentials/passing-props.html',
            },
            {
              text: 'Different History modes',
              link: '/guide/essentials/history-mode.html',
            },
          ],
        },
        {
          text: 'Advanced',
          collapsed: false,
          items: [
            {
              text: 'Navigation guards',
              link: '/guide/advanced/navigation-guards.html',
            },
            {
              text: 'Route Meta Fields',
              link: '/guide/advanced/meta.html',
            },
            {
              text: 'Data Fetching',
              link: '/guide/advanced/data-fetching.html',
            },
            {
              text: 'Composition API',
              link: '/guide/advanced/composition-api.html',
            },
            {
              text: 'RouterView slot',
              link: '/guide/advanced/router-view-slot.html',
            },
            {
              text: 'Transitions',
              link: '/guide/advanced/transitions.html',
            },
            {
              text: 'Scroll Behavior',
              link: '/guide/advanced/scroll-behavior.html',
            },
            {
              text: 'Lazy Loading Routes',
              link: '/guide/advanced/lazy-loading.html',
            },
            {
              text: 'Typed Routes',
              link: '/guide/advanced/typed-routes.html',
            },
            {
              text: 'Extending RouterLink',
              link: '/guide/advanced/extending-router-link.html',
            },
            {
              text: 'Navigation Failures',
              link: '/guide/advanced/navigation-failures.html',
            },
            {
              text: 'Dynamic Routing',
              link: '/guide/advanced/dynamic-routing.html',
            },
          ],
        },
        {
          items: [
            {
              text: 'Migrating from Vue 2',
              link: '/guide/migration/index.html',
            },
          ],
        },
      ],

      '/api/': [
        {
          text: 'packages',
          items: [{ text: 'vue-router', link: '/api/' }],
        },
      ],
}

// export const sidebarEn: DefaultTheme.Sidebar = {
//     '/guide/': [
//         {
//           text: 'Documentation',
//           items: [
//             { link: 'getting-started' },
//             {
//               text: 'Column definitions',
//               items: [
//                 { link: 'column.properties'},
//                 { link: 'column.pinned'},
//                 { link: 'column.customHeader'},
//                 { link: 'column.grouping'},
//                 { link: 'autosize'},
//                 { link: 'column.resize' },
//               ]
//             },
//             // 'column.types',
//             // {
//             //   text: 'Cells',
//             //   collapsible: true,
//             //   items: [
//             //     'cell.renderer',
//             //     'cell.editor',
//             //     'cell.properties',
//             //   ]
//             // },
//             // 'sorting',
//             // 'filters',
//             // {
//             //   text: 'Row properties',
//             //   collapsible: true,
//             //   items: [
//             //     'rows.pinned',
//             //     'rows.class',
//             //     'rows.headers',
//             //     'rows.size'
//             //   ]
//             // },
//             // {
//             //   text: 'Theme Manager',
//             //   collapsible: true,
//             //   items: ['theme', 'theme.light', 'theme.dark'],
//             // },
//             // 'jsx.template',
//             // 'export.plugin',
//             // 'grid.size',
//             // 'migration',
//             // 'api',
//           ]
//         },
//         // {
//         //   text: 'Frameworks',
//         //   collapsible: true,
//         //   items: [
//         //     {
//         //       text: 'Vue',
//         //       collapsible: true,
//         //       items: [
//         //         vueLink,
//         //         'framework.vue.component',
//         //         'framework.vue.editor',
//         //         'framework.vue.webcomponent',
//         //       ]
//         //     },
//         //     {
//         //       text: 'React',
//         //       collapsible: true,
//         //       items: [reactLink, 'framework.react.component']
//         //     },
//         //     {
//         //       text: 'Svelte',
//         //       collapsible: true,
//         //       items: [
//         //         svelteLink,
//         //       ]
//         //     },
//         //     {
//         //       text: 'Angular 2+',
//         //       collapsible: true,
//         //       items: [
//         //         angularLink,
//         //         'framework.angular.webcomponent'
//         //       ]
//         //     },
//         //     'framework.ts',
//         //   ],
//         // }
//       ],
// }
