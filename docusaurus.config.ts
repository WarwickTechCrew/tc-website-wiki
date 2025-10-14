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
  favicon: '/logo-theme.svg',

  markdown: {
    mermaid: true,
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      const authors = await getGitContributors(params.filePath, result.frontMatter);

      return {
        ...result,
        frontMatter: {
          ...result.frontMatter,
          authors,
        },
      };
    },
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  url: 'https://www.warwicktechcrew.co.uk',

  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'WarwickTechCrew',
  projectName: 'website', // repo name

  onBrokenLinks: 'throw',

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
    './src/plugins/wiki-stats.ts',
    './src/plugins/exec.ts',
    ['@docusaurus/plugin-client-redirects', { redirects: redirectLinks }],
    'plugin-image-zoom',
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

          // We now have custom logic to handle this and show a modal
          editUrl: () => '#edit',
          // editUrl: 'https://github.com/WarwickTechCrew/tc-website-wiki/tree/main/',

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
        sitemap: {
          lastmod: 'date',
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

    imageZoom: {
      selector: '.wiki-docs .content-styling img',

      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
      },
    },
  } satisfies Preset.ThemeConfig,

  customFields: {
    shortlinkUrl: process.env.SHORTLINK_URL, // E.g. https://wwtc.uk
  },
};

export default config;
