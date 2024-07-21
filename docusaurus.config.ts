import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from './plugins/tailwind-plugin';

const config: Config = {
  title: 'Warwick Tech Crew',
  tagline: 'Providing technical services at the University of Warwick',
  favicon: 'img/favicon.ico',


  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // url: 'https://www.warwicktechcrew.co.uk',
  url: 'https://warwicktechcrew.github.io/website',

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

  plugins: [tailwindPlugin],

  presets: [
    [
      'classic',
      {
        docs: {
          path: './wiki',
          routeBasePath: 'wiki',
          sidebarPath: './sidebar.ts',
          editUrl: 'https://github.com/WarwickTechCrew/website/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Warwick Tech Crew',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wiki',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
