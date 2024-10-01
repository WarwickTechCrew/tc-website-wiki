import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from './plugins/tailwind-plugin';
import { getGitContributors } from './src/lib/git';
import { redirectLinks } from './redirects';

const config: Config = {
  title: 'Warwick Tech Crew',
  tagline:
    'Welcome to Warwick Tech Crew, the technical theatre and entertainment society at the University of Warwick.',
  favicon: '/favicon.ico',

  markdown: {
    mermaid: true,
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      const authors = await getGitContributors(
        params.filePath,
        result.frontMatter,
      );

      return {
        ...result,
        frontMatter: {
          ...result.frontMatter,
          authors,
        },
      };
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  url: 'https://www.warwicktechcrew.co.uk',

  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'WarwickTechCrew',
  projectName: 'website', // repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    tailwindPlugin,
    './src/plugins/shows.ts',
    './src/plugins/wiki-changelog.ts',
    './src/plugins/wiki-shortlinks.ts',
    ['@docusaurus/plugin-client-redirects', { redirects: redirectLinks }],
  ],

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-FW2CD6P70C',
          anonymizeIP: true,
        },
        docs: {
          path: './wiki',
          routeBasePath: 'wiki',
          sidebarPath: './sidebar.ts',
          editUrl: 'https://github.com/WarwickTechCrew/website/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          admonitions: {
            keywords: ['lore'],
            extendDefaults: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Warwick Tech Crew',
      logo: {
        alt: 'Warwick Tech Crew Logo',
        src: '/logo-light.svg',
        srcDark: '/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wiki',
          position: 'left',
          label: 'Wiki',
        },
        {
          to: '/shows',
          label: 'Shows',
          position: 'left',
        },
        {
          to: '/hires',
          label: 'Hires',
          position: 'left',
        },
        {
          to: '/opportunities',
          label: 'Get Involved',
          position: 'left',
        },
        {
          href: 'https://dash.adam-rms.com',
          label: 'AdamRMS',
          position: 'right',
          className: 'flex items-center',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: '5STUTZ5KN2',
      apiKey: 'f7185f5b9c2d2d34bcf3d330f7c63f51',
      indexName: 'warwicktechcrew-co',
      insights: true,
      searchPagePath: 'wiki/search',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
