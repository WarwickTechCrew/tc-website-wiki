import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

const WikiStats: React.FC = () => {
  // Fetch the plugin data using usePluginData
  const pluginData = usePluginData<WikiStatsData>('wiki-stats-plugin');

  return (
    <div>
      <h2>Wiki Statistics</h2>
      <p>Total Markdown Pages: {pluginData?.pageCount || 'error :('}</p>
    </div>
  );
};

export default WikiStats;
