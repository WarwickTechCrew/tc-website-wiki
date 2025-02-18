import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';


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
    <>
      <p>Total wiki pages: {stats.pageCount}</p>
      <div>
        <p>Longest pages:</p>
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
    </>
  );
};

export default WikiStats;
