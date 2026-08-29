// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Space Adventures',
  tagline: 'A living sci-fi universe: encyclopedia, news, tales, and movies',
  favicon: 'img/favicon.ico',

  url: 'https://space-adventures.example.com',
  baseUrl: '/',

  organizationName: 'spaceadvantures',
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
          blogTitle: 'Space Adventures News',
          blogDescription:
            'Announcements, release notes, universe updates, and behind-the-scenes devlogs.',
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
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Space Adventures',
        logo: {
          alt: 'Space Adventures Logo',
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
            href: 'https://github.com/spaceadvantures/sat',
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
                href: 'https://github.com/spaceadvantures/sat',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Space Adventures. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
