import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import { PageInfo, WikiStatsData } from '@site/src/plugins/wiki-stats';

const WikiStats: React.FC = () => {
  const stats = usePluginData('wiki-stats-plugin');

  if (!stats) {
    return <div>Loading stats...</div>;
  }


  const PageList = ({ pages, title }: { pages: PageInfo[]; title: string }) => (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <ol className="space-y-1 ml-4">
        {pages.map((page) => (
          <li key={page.url}>
            <a href={page.url} className="hover:underline">
              {page.title}
            </a>{' '}
            <span className="text-gray-600">({page.wordCount} words)</span>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <div className="wiki-stats py-4">
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <p className="text-xl mb-2">
          <strong>Wiki Statistics</strong>
        </p>
        <p>
          Total pages: <strong>{stats.pageCount}</strong>
        </p>
      </div>
      <PageList pages={stats.longestPages} title="Longest Pages" />
      <PageList pages={stats.shortestPages} title="Shortest Pages" />
    </div>
  );
};

export default WikiStats;
