import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

const WikiStats: React.FC = () => {
  const stats = usePluginData<WikiStatsData>('wiki-stats-plugin');

  if (!stats) {
    return <div>Loading stats...</div>;
  }

  return (
    <div>
      <p>Longest page: {stats.longestPage}</p>
      <p>Total pages: {stats.pageCount}</p>
      <p>two pages: {stats.pageCount2}</p>
      <p>Shortest page: {stats.shortestPage}</p>
    </div>
  );
};

export default WikiStats;
