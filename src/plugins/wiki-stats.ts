import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { LoadContext, Plugin } from '@docusaurus/types';

export interface PageInfo {
  title: string;
  emoji: string;
  wordCount: number;
  url: string;
}

export interface WikiStatsData {
  pageCount: number;
  longestPages: PageInfo[];
  shortestPages: PageInfo[];
}

/**
 * Extracts stats for a single markdown file
 */
function getPageStats(filePath: string): PageInfo {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data: frontMatter, content: body } = matter(content);

  // Extract the first heading
  const titleMatch = body.match(/^#\s+(.*)/m);
  const title = titleMatch ? titleMatch[1].trim() : path.basename(filePath, path.extname(filePath));

  const docusarusFilePath = filePath
    .replace(/^.*?\/wiki\//, '/wiki/') // Remove everything before and including "wiki/"
    .replace(/\d{2}-/g, '') // Remove leading numbers and hyphens
    .replace(/\.md$/, '') // Remove the ".md" extension
    .replace(/\/index$/, ''); // Remove 'index' at the end (if it exists

  return {
    title: title,
    emoji: frontMatter?.sidebar_custom_props?.emoji ?? '?',
    wordCount: body.trim().split(/\s+/).filter(Boolean).length,
    url: docusarusFilePath,
  };
}

/**
 * Process all markdown files in a directory, recursively
 */
function processMarkdownFiles(dir: string): WikiStatsData {
  const pages: PageInfo[] = [];

  function traverseDirectory(currentDir: string): void {
    const files = fs.readdirSync(currentDir);

    for (const file of files) {
      const fullPath = path.join(currentDir, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (/\.(md|mdx)$/.test(file)) {
        pages.push(getPageStats(fullPath));
      }
    }
  }

  traverseDirectory(dir);

  // Sort pages by word count
  const sortedByWordCount = [...pages].sort((a, b) => b.wordCount - a.wordCount);

  return {
    pageCount: pages.length,
    longestPages: sortedByWordCount.slice(0, 10),
    shortestPages: sortedByWordCount.slice(-10).reverse(),
  };
}

/**
 * Wiki stats plugin for Docusaurus
 */
export default function wikiStatsPlugin(context: LoadContext): Plugin {
  return {
    name: 'wiki-stats-plugin',

    async loadContent() {
      const wikiPath = path.resolve(__dirname, '../../wiki');
      return processMarkdownFiles(wikiPath);
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
}
