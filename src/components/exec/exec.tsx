import { YearExec } from '@site/src/lib/exec';
import Layout from '@theme/Layout';
import ExecCardGroup from '@site/src/components/exec/exec-card-group';
import Introduction from '@site/src/components/exec/introduction.md';

export default function Exec({ execYears }: { execYears: YearExec[] }) {
  return (
    <Layout title="Exec">
      <header className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Tech Crew Exec</h1>
      </header>
      <main className="w-full max-w-screen-2xl mx-auto flex-grow flex flex-col">
        <div className="content-styling mb-4 px-4">
          <Introduction />
        </div>

        <div className="space-y-6 px-4 mb-8">
          {execYears.map((execYear) => (
            <div key={execYear.year}>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-xl">{execYear.year}</h3>
                <div className="border-b-black border-b flex-grow" />
              </div>

              <ExecCardGroup members={execYear.exec} />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
