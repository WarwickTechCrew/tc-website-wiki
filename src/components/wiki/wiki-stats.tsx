import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

interface PageInfo {
  name: string;
  wordCount: number;
  path: string;
}

interface WikiStatsData {
  pageCount: number;
  pageCount2: number;
  longestPages: PageInfo[];
  shortestPages: PageInfo[];
}

const WikiStats: React.FC = () => {
  const stats = usePluginData<WikiStatsData>('wiki-stats-plugin');

  if (!stats) {
    return <div>Loading stats...</div>;
  }

  // Convert file path to URL
  const getPageUrl = (filePath: string) => {
    const urlPath = filePath.split('/wiki/')[1].replace(/\.(md|mdx)$/, '');
    return `/${urlPath}`;
  };

  return (
    <div className="space-y-4">
      <p>Total pages: {stats.pageCount}</p>

      <div>
        <p className="font-medium mb-2">Longest pages:</p>
        {stats.longestPages.map((page, index) => (
          <p key={page.path} className="ml-4">
            {index + 1}.{page.path}({page.wordCount} words)
          </p>
        ))}
      </div>

      <div>
        <p className="font-medium mb-2">Shortest pages:</p>
        {stats.shortestPages.map((page, index) => (
          <p key={page.path} className="ml-4">
            {index + 1}.{page.name}({page.wordCount} words)
          </p>
        ))}
      </div>
    </div>
  );
};

export default WikiStats;
