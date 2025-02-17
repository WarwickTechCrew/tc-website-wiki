import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';

export interface WikiStatsData {
  pageCount: number;
}

function countMarkdownFiles(dir: string): WikiStatsData {
  let count = 0;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      count += countMarkdownFiles(fullPath).pageCount;
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      count += 1;
    }
  }

  let stats: WikiStatsData = {
    pageCount: count,
  };

  return stats;
}

export default function wikiStatsPlugin(context: LoadContext): Plugin {
  return {
    name: 'wiki-stats-plugin',
    async loadContent() {
      const wikiPath = path.resolve(__dirname, '../../wiki');
      return countMarkdownFiles(wikiPath);
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
}
