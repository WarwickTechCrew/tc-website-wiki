import fs from 'fs';
import path from 'path';
import { LoadContext, Plugin } from '@docusaurus/types';

interface PageInfo {
  name: string;
  wordCount: number;
  path: string;
}

export interface WikiStatsData {
  pageCount: number;
  longestPages: PageInfo[];
  shortestPages: PageInfo[];
}

function getWordCount(content: string): number {
  return content.trim().split(/\s+/).length;
}

function getPageStats(filePath: string): PageInfo {
  const content = fs.readFileSync(filePath, 'utf8');
  const name = path.basename(filePath, path.extname(filePath));
  return {
    wordCount: getWordCount(content),
    name: name,
    path: filePath
  };
}

function processMarkdownFiles(dir: string): {
  count: number;
  longest: PageInfo[];
  shortest: PageInfo[];
} {
  let count = 0;
  let pages: PageInfo[] = [];

  function processDir(currentDir: string) {
    for (const file of fs.readdirSync(currentDir)) {
      const fullPath = path.join(currentDir, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        processDir(fullPath);
      } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
        count += 1;
        pages.push(getPageStats(fullPath));
      }
    }
  }

  processDir(dir);
  
  const sortedPages = [...pages].sort((a, b) => b.wordCount - a.wordCount);
  
  return {
    count,
    longest: sortedPages.slice(0, 5),
    shortest: sortedPages.slice(-5).reverse()
  };
}

export default function wikiStatsPlugin(context: LoadContext): Plugin {
  return {
    name: 'wiki-stats-plugin',
    async loadContent() {
      const wikiPath = path.resolve(__dirname, '../../wiki');
      const { count, longest, shortest } = processMarkdownFiles(wikiPath);
      
      const stats: WikiStatsData = {
        pageCount: count,
        longestPages: longest,
        shortestPages: shortest,
      };
      
      return stats;
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },
  };
}