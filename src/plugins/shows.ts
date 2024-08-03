import { loadShowYears } from '../lib/show';
import { LoadContext, Plugin } from '@docusaurus/types';

export type Show = {
  name: string;
};

export default function showsPlugin(
  context: LoadContext,
): Plugin<{ shows: Show[] }> {
  return {
    name: 'shows-plugin',
    async contentLoaded({ content, actions: { addRoute, createData } }) {
      const showYears = await loadShowYears();
      const showYearsJsonPath = await createData(
        'show-years.json',
        JSON.stringify(showYears),
      );

      addRoute({
        path: '/shows',
        component: '@site/src/components/shows/shows.tsx',
        modules: {
          showYears: showYearsJsonPath,
        },
        exact: true,
      });
    },
  };
}
