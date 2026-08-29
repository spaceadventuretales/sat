// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tales of Space Adventures',
  tagline: 'Stories and movies first, with a living canon encyclopedia',
  favicon: 'img/favicon.ico',

  url: 'https://sat.engilyin.com',
  baseUrl: '/',

  organizationName: 'spaceadventuretales',
  projectName: 'sat',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/encyclopedia',
          sidebarPath: './sidebars.js',
          routeBasePath: 'encyclopedia',
        },
        blog: {
          routeBasePath: 'news',
          blogTitle: 'Tales of Space Adventures News',
          blogDescription:
            'Announcements, release notes, universe updates, and behind-the-scenes story and movie devlogs.',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/sat-social-card.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Tales of Space Adventures',
        logo: {
          alt: 'Tales of Space Adventures Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/stories',
            label: 'Stories',
            position: 'left',
          },
          {
            to: '/movies',
            label: 'Movies',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'encyclopediaSidebar',
            position: 'left',
            label: 'Encyclopedia',
          },
          {to: '/news', label: 'News', position: 'left'},
          {to: '/manifesto', label: 'Manifesto', position: 'left'},
          {to: '/motivation', label: 'Motivation', position: 'left'},
          {to: '/community', label: 'Community', position: 'right'},
          {
            href: 'https://github.com/spaceadventuretales/sat',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Story Platform',
            items: [
              {
                label: 'Stories',
                to: '/stories',
              },
              {
                label: 'Movies',
                to: '/movies',
              },
              {
                label: 'Manifesto',
                to: '/manifesto',
              },
            ],
          },
          {
            title: 'Reference And Updates',
            items: [
              {
                label: 'Encyclopedia',
                to: '/encyclopedia/intro',
              },
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'Motivation',
                to: '/motivation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community & Contact',
                to: '/community',
              },
              {
                label: 'Timeline',
                to: '/encyclopedia/history/timeline',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/spaceadventuretales/sat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tales of Space Adventures. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
