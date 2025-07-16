import { LoadContext, Plugin } from '@docusaurus/types';
import { loadExecYears, YearExec } from '../lib/exec';

export default function execPlugin(context: LoadContext): Plugin<{
  currentExecYear: YearExec;
}> {
  return {
    name: 'exec-plugin',
    async contentLoaded({ content, actions: { addRoute, createData, setGlobalData } }) {
      const execYears = await loadExecYears();
      const execYearsJsonPath = await createData('exec-years.json', JSON.stringify(execYears));

      addRoute({
        path: '/exec',
        component: '@site/src/components/exec/exec.tsx',
        modules: {
          execYears: execYearsJsonPath,
        },
        exact: true,
      });

      setGlobalData({ currentExecYear: execYears[0] });
    },
  };
}
