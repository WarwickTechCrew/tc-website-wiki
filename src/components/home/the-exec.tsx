import { usePluginData } from '@docusaurus/useGlobalData';
import { YearExec } from '@site/src/lib/exec';
import ExecCardGroup from '@site/src/components/exec/exec-card-group';
import Link from '@docusaurus/Link';
import { formatHiresAssistantNames } from '@site/src/components/exec/hires-assistants';

export default function TheExec() {
  const pluginData = usePluginData('exec-plugin') as { currentExecYear: YearExec };
  if (!pluginData?.currentExecYear) throw new Error('Exec plugin data not found');

  const currentExecYear = pluginData.currentExecYear;

  return (
    <div>
      <h2>The TechXec</h2>
      <p className="mb-2">
        The <Link href="/exec">Tech Crew Exec</Link> are a group of members elected to oversee the society and its
        operations and can be contacted at{' '}
        <a href="mailto:exec@warwicktechcrew.co.uk" target="_blank">
          exec@warwicktechcrew.co.uk
        </a>
        . For the year {currentExecYear.year}, the TechXec are:
      </p>
      <ExecCardGroup members={currentExecYear.exec} />

      {currentExecYear.hiresAssistants?.length > 0 && (
        <p className="my-4 uppercase text-center">
          <span className="font-bold">Hires Assistants:</span>{' '}
          {formatHiresAssistantNames(
            currentExecYear.hiresAssistants[currentExecYear.hiresAssistants.length - 1].assistants,
          )}
        </p>
      )}

      <p className="mt-2">
        A list of previous exec can be found on the <Link href="/exec">exec archive page</Link>.
      </p>
    </div>
  );
}
