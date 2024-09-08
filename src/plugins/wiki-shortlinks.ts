import { LoadContext, ParseFrontMatter, Plugin } from '@docusaurus/types';
import { parseMarkdownFile } from '@docusaurus/utils';
import fs from 'fs/promises';
import { getWikiUrlFromFileName } from '../lib/wiki';

export type WikiShortlinkContent = {
  title: string;
  description: string;
  url: string;

  shortlinks: string[];
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

  let url = getWikiUrlFromFileName(path);
  if (!url) return null;

  // Remove trailing url
  if (url.endsWith('/')) url = url.slice(0, -1);

  return {
    url: `${siteUrl}/${url}`,
    title: content.contentTitle,
    description:
      (content.frontMatter?.description as string) || content.excerpt,
    shortlinks: content.frontMatter.shortlinks as string[],
  };
}

async function getWikiPagePaths(path: string): Promise<string[]> {
  const fileEntry = await fs.readdir(path, { withFileTypes: true });

  let pages = [];
  for (const entry of fileEntry) {
    if (entry.isDirectory()) {
      pages.push(...(await getWikiPagePaths(`${path}/${entry.name}`)));
    } else if (entry.isFile()) {
      const lowercaseExtension = entry.name
        .split('.')
        .reverse()[0]
        .toLowerCase();
      if (
        lowercaseExtension === 'md' ||
        lowercaseExtension === 'mdx' ||
        lowercaseExtension === 'tsx'
      ) {
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
          loadWikiPageShortlinks(
            context.siteConfig.url,
            context.siteConfig.markdown.parseFrontMatter,
            pagePath,
          ),
        ),
      );

      return shortlinksContent.filter((shortlink) => !!shortlink);
    },
    async contentLoaded({
      content,
      actions: { createData, addRoute },
    }): Promise<void> {
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
      }
    },
  };
}
