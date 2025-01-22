import type { DefaultTheme } from 'vitepress'

export const navbarEn: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
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
    items: [{ text: 'v3.x', link: 'https://revolist.github.io/revogrid/' }],
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
