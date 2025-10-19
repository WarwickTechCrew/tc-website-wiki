import { HiresAssistant, HiresAssistantTerm } from '@site/src/lib/exec';

export const formatHiresAssistantNames = (assistants: HiresAssistant[]) => {
  if (assistants.length === 0) return 'None';
  if (assistants.length === 1) return assistants[0].name;

  return (
    assistants
      .slice(0, -1)
      .map((a) => a.name)
      .join(', ') +
    ' and ' +
    assistants[assistants.length - 1].name
  );
};

export default function HiresAssistants({ hiresAssistants }: { hiresAssistants: HiresAssistantTerm[] }) {
  return (
    <div className="mt-4">
      <h3 className="font-bold uppercase">Hires Assistants</h3>
      <ul>
        {hiresAssistants.map((term) => (
          <li key={term.term}>
            <strong>{term.term}:</strong>
            <span> {formatHiresAssistantNames(term.assistants)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
