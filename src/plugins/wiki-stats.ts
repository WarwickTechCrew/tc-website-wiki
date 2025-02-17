import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';

export interface WikiStatsData {
  pageCount: number;
}

function countMarkdownFiles(dir: string): number {
  let count = 0;
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      count += countMarkdownFiles(fullPath);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      count += 1;
    }
  }
  return count;
}

export default function wikiStatsPlugin(context: LoadContext): Plugin {
  return {
    name: 'wiki-stats-plugin',
    async loadContent() {
      const wikiPath = path.resolve(__dirname, '../../wiki');
      let stats: WikiStatsData = {
        pageCount: countMarkdownFiles(wikiPath),
      };
      return stats;
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
}
