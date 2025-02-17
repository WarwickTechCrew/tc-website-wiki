import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

const WikiStats: React.FC = () => {
  const pluginData = usePluginData<WikiStatsData>('wiki-stats-plugin');

  return (
    <div>
      <h2>Wiki Statistics</h2>
      <p>Total Wiki Pages: {pluginData?.pageCount || 'error :('}</p>
    </div>
  );
};

export default WikiStats;
