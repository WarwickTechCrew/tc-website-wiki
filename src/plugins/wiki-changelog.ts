import { getWikiChangelog, WikiChange } from '../lib/git';
import { LoadContext, Plugin } from '@docusaurus/types';

export default function wikiChangelogPlugin(context: LoadContext): Plugin<{
  changes: WikiChange[];
}> {
  return {
    name: 'wiki-changelog-plugin',
    async contentLoaded({ content, actions: { setGlobalData } }) {
      const changelog = await getWikiChangelog();
      setGlobalData({ changelog });
    },
  };
}
