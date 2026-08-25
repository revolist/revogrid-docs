import type { DefaultTheme } from 'vitepress'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Product',
    items: [
      {
        text: 'Excel Data Grid',
        link: '/excel-data-grid',
        activeMatch: '^/excel-data-grid',
      },
      {
        text: 'Pivot Table JS',
        link: '/pivot',
        activeMatch: '^/pivot',
      },
      {
        text: 'Kanban Board JS',
        link: '/kanban',
        activeMatch: '^/kanban',
      },
      {
        text: 'Gantt Chart JS',
        link: '/gantt',
        activeMatch: '^/gantt',
      },
      {
        text: 'Scheduler JS',
        link: '/jsscheduler',
        activeMatch: '^/jsscheduler',
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
        text: 'Comparisons',
        link: '/compare/',
      },
      {
        text: 'Discussions',
        link: 'https://github.com/revolist/revogrid/discussions',
      },
      {
        text: 'Roadmap',
        link: 'https://github.com/users/revolist/projects/3',
      },
    ],
  },
]
