import { LoadContext, ParseFrontMatter, Plugin, Props } from '@docusaurus/types';
import { parseMarkdownFile } from '@docusaurus/utils';
import fs from 'fs/promises';
import { getWikiUrlFromFileName } from '../lib/wiki';

export type SectionShortlink = {
  shortlink: string;
  hash: string;
};

export type WikiShortlinkContent = {
  title: string;
  description: string;
  url: string;

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

  let url = getWikiUrlFromFileName(path);
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

  return {
    url: `${siteUrl}/${url}`,
    title: content.contentTitle,
    description: (content.frontMatter?.description as string) || content.excerpt,
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
    async postBuild(props: Props) {
      // Create Cloudflare _redirects file
      console.log(props.outDir);

      type Redirect = {
        from: string;
        to: string;
        code: '302' | '301';
      };

      const redirects: Redirect[] = [];

      // Create redirect plugin redirects
      const clientRedirectsPlugin = props.plugins.find(
        (plugin) => plugin.name === 'docusaurus-plugin-client-redirects',
      );
      if (clientRedirectsPlugin) {
        const clientRedirects = clientRedirectsPlugin.options.redirects as {
          from: string | string[];
          to: string;
        }[];

        for (const redirect of clientRedirects) {
          let destination = redirect.to;
          if (destination.startsWith('/')) {
            destination = props.siteConfig.url + destination;
          }

          if (Array.isArray(redirect.from)) {
            for (const from of redirect.from) {
              redirects.push({
                from: from,
                to: destination,
                code: '302', // Temporary redirect
              });
            }
          } else {
            redirects.push({
              from: redirect.from,
              to: destination,
              code: '302', // Temporary redirect
            });
          }
        }
      }

      // Create shortlink redirects
      const wikiShortlinksPlugin = props.plugins.find((plugin) => plugin.name === 'wiki-shortlinks-plugin');
      if (wikiShortlinksPlugin) {
        const wikiShortlinks = wikiShortlinksPlugin.content as WikiShortlinkContent[];
        for (const shortlinkContent of wikiShortlinks) {
          for (const shortlink of shortlinkContent.shortlinks) {
            redirects.push({
              from: `/${shortlink}`,
              to: shortlinkContent.url,
              code: '301', // Permanent redirect, pass SEO ranking
            });
          }

          for (const shortlink of shortlinkContent.sectionShortlinks) {
            redirects.push({
              from: `/${shortlink.shortlink}`,
              to: `${shortlinkContent.url}#${shortlink.hash}`,
              code: '301', // Permanent redirect, pass SEO ranking
            });
          }
        }
      }

      const redirectFileContent = redirects
        .map((redirect) => `${redirect.from} ${redirect.to} ${redirect.code}`)
        .join('\n');

      await fs.writeFile(`${props.outDir}/_redirects`, redirectFileContent);
    },
  };
}
