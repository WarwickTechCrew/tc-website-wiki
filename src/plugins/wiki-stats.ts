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

function getPageStats(filePath: string): PageInfo {
  const content = fs.readFileSync(filePath, 'utf8');
  const name = path.basename(filePath, path.extname(filePath));
  return {
    wordCount: content.trim().split(/\s+/).length, // cursed
    name: name,
    path: filePath,
  };
}

// Process all markdown files in a directory, recursively
function processMarkdownFiles(dir: string): WikiStatsData {
  let pageCount = 0;
  let pages: PageInfo[] = [];

  // recurse through the directories
  function processDir(currentDir: string) {
    
    for (const file of fs.readdirSync(currentDir)) {
      const fullPath = path.join(currentDir, file);


      if (fs.statSync(fullPath).isDirectory()) {
        processDir(fullPath);
      } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
        pageCount += 1;
        pages.push(getPageStats(fullPath));
      }
    }
  }

  processDir(dir);
  
  const sortedPages = [...pages].sort((a, b) => b.wordCount - a.wordCount);
  
  return {
    pageCount,
    longestPages: sortedPages.slice(0, 5),
    shortestPages: sortedPages.slice(-5).reverse()
  };
}

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
