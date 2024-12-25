import { LoadContext, ParseFrontMatter, Plugin } from '@docusaurus/types';
import { parseMarkdownFile } from '@docusaurus/utils';
import fs from 'fs/promises';
import pathlib from 'path';
import { getWikiUrlOrIdFromFileName } from '../lib/wiki';

export type SectionShortlink = {
  shortlink: string;
  hash: string;
};

export type WikiShortlinkContent = {
  title: string;
  description: string;
  url: string;
  id: string;

  shortlinks: string[];
  sectionShortlinks: SectionShortlink[];
};

async function loadWikiPageShortlinks(
  siteUrl: string,
  parseFrontMatter: ParseFrontMatter,
  path: string,
): Promise<WikiShortlinkContent | null> {
  let fileContent: string;
  try {
    fileContent = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error(`Failed to read wiki file ${path}`);
  }

  const content = await parseMarkdownFile({
    fileContent,
    filePath: path,
    parseFrontMatter,
  });
  if (!content.frontMatter.shortlinks) return null;

  let url = getWikiUrlOrIdFromFileName(path);
  if (!url) return null;

  // Remove trailing url
  if (url.endsWith('/')) url = url.slice(0, -1);

  const sectionShortlinks: SectionShortlink[] = [];
  if (content.frontMatter.sectionShortlinks) {
    for (const sectionShortlink of content.frontMatter.sectionShortlinks as any[]) {
      if (!sectionShortlink.shortlink) {
        console.error(sectionShortlink);
        throw new Error(`${path} is missing a shortlink in the sectionShortlinks frontmatter`);
      }
      if (!sectionShortlink.hash) {
        console.error(sectionShortlink);
        throw new Error(`${path} is missing a hash in the sectionShortlinks frontmatter`);
      }

      sectionShortlinks.push({
        shortlink: sectionShortlink.shortlink,
        hash: sectionShortlink.hash,
      });
    }
  }
  console.log(content);

  return {
    url: `${siteUrl}/${url}`,
    title: content.contentTitle,
    description: (content.frontMatter?.description as string) || content.excerpt,
    id: getWikiUrlOrIdFromFileName(path, true),
    shortlinks: content.frontMatter.shortlinks as string[],
    sectionShortlinks,
  };
}

async function getWikiPagePaths(path: string): Promise<string[]> {
  const fileEntry = await fs.readdir(path, { withFileTypes: true });

  let pages = [];
  for (const entry of fileEntry) {
    if (entry.isDirectory()) {
      pages.push(...(await getWikiPagePaths(`${path}/${entry.name}`)));
    } else if (entry.isFile()) {
      const lowercaseExtension = entry.name.split('.').reverse()[0].toLowerCase();
      if (lowercaseExtension === 'md' || lowercaseExtension === 'mdx' || lowercaseExtension === 'tsx') {
        pages.push(`${path}/${entry.name}`);
      }
    }
  }
  return pages;
}

export default function wikiShortlinksPlugin(context: LoadContext): Plugin {
  return {
    name: 'wiki-shortlinks-plugin',
    getPathsToWatch: () => ['wiki/**'],
    async loadContent() {
      const wikiPagePaths = await getWikiPagePaths('wiki');

      const shortlinksContent = await Promise.all(
        wikiPagePaths.map((pagePath) =>
          loadWikiPageShortlinks(context.siteConfig.url, context.siteConfig.markdown.parseFrontMatter, pagePath),
        ),
      );

      return shortlinksContent.filter((shortlink) => !!shortlink);
    },
    async contentLoaded({ content, actions: { createData, addRoute } }): Promise<void> {
      const shortlinksContent = content as WikiShortlinkContent[];

      for (const shortlinkContent of shortlinksContent) {
        const shortlinkJsonPath = await createData(
          `${shortlinkContent.title}-${new Date().getTime()}-shortlink.json`,
          JSON.stringify(shortlinkContent),
        );

        for (const shortlink of shortlinkContent.shortlinks) {
          addRoute({
            path: `/${shortlink}`,
            component: '@site/src/components/wiki/shortlink-redirect.tsx',
            modules: {
              shortlink: shortlinkJsonPath,
            },
            exact: true,
          });
        }

        for (const shortlink of shortlinkContent.sectionShortlinks) {
          const sectionShortlinkHashJsonPath = await createData(
            `${shortlinkContent.title}-${shortlink.shortlink}-${new Date().getTime()}-shortlink.json`,
            JSON.stringify(shortlink.hash),
          );

          addRoute({
            path: `/${shortlink.shortlink}`,
            component: '@site/src/components/wiki/shortlink-redirect.tsx',
            modules: {
              shortlink: shortlinkJsonPath,
              hash: sectionShortlinkHashJsonPath,
            },
            exact: true,
          });
        }
      }
    },
  };
}
