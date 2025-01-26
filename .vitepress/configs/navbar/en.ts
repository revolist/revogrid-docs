import type { DefaultTheme } from 'vitepress'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Docs',
    link: '/guide/',
    activeMatch: '^/guide/',
  },
  {
    text: 'Demo',
    link: '/demo/',
    activeMatch: '^/demo/',
  },
  {
    text: 'RevoGrid Pro',
    link: '/pro/',
    activeMatch: '^/(pro|pro-docs)/',
  }, {
    text: 'v4.x',
    items: [{ text: 'v3.x', link: 'https://v3.rv-grid.com' }],
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
      // {
      //   text: 'Changelog',
      //   link: 'https://github.com/revolist/revogrid/CHANGELOG.md',
      // },
    ],
  },
]
