import type { DefaultTheme } from 'vitepress'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Product',
    items: [
      {
        text: 'Data Grid',
        link: '/',
        activeMatch: '^/$',
      },
      {
        text: 'Pivot Analytics',
        link: '/pivot',
        activeMatch: '^/pivot',
      },
      {
        text: 'Gantt',
        link: '/gantt',
        activeMatch: '^/gantt',
      },
      {
        text: 'Frameworks',
        items: [
          {
            text: 'React',
            link: '/react-data-grid',
            activeMatch: '^/react-data-grid',
          },
          {
            text: 'Vue',
            link: '/vue-data-grid',
            activeMatch: '^/vue-data-grid',
          },
          {
            text: 'Angular',
            link: '/angular-data-grid',
            activeMatch: '^/angular-data-grid',
          },
          {
            text: 'Svelte',
            link: '/svelte-data-grid',
            activeMatch: '^/svelte-data-grid',
          },
        ],
      },
    ],
  },
  {
    text: 'Docs',
    link: '/guide/',
    activeMatch: '^/guide/',
  },
  {
    text: 'Demos',
    link: '/demo/',
    activeMatch: '^/demo/',
    // target: '_self',
  },
  {
    text: 'Pricing',
    link: '/pricing',
  },
  {
    text: 'RevoGrid Pro',
    link: '/pro/',
    activeMatch: '^/(pro/(?!prices(?:/|$))|pro-docs/)',
  },
  {
    text: 'Blog',
    link: '/blog/',
    activeMatch: '^/blog/',
  },
  {
    text: 'Links',
    items: [
      {
        text: 'Discussions',
        link: 'https://github.com/revolist/revogrid/discussions',
      },
      {
        text: 'Roadmap',
        link: 'https://github.com/users/revolist/projects/3',
      },
      {
        text: 'v3.x',
        link: 'https://v3.rv-grid.com',
      },
    ],
  },
]
