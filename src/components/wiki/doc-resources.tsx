import { useDoc, DocContextValue } from '@docusaurus/theme-common/internal';
import type { DocFrontMatter } from '@docusaurus/plugin-content-docs';
import { FiLink } from 'react-icons/fi';

export type Resource = {
  name: string;
  url: string;
  author?: string;
};

export default function DocResources({ isMobile }: { isMobile?: boolean }) {
  const { frontMatter } = useDoc() as DocContextValue & {
    frontMatter: DocFrontMatter & { resources?: Resource[] };
  };

  if (!frontMatter.resources || frontMatter.resources.length === 0) return null;
  return (
    <div
      className={`bg-gray-100 p-2 rounded-lg my-2 ${isMobile ? 'min-[997px]:hidden' : ''}`}
    >
      <h2 className="text-sm uppercase mb-1 pl-1">Resources</h2>
      <ul className={isMobile ? '' : 'text-sm'}>
        {frontMatter.resources.map((resource) => (
          <li key={resource.url} className="mb-1">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 hover:no-underline group"
            >
              <FiLink className="mt-1" />
              <div>
                <span className="group-hover:underline">{resource.name}</span>
                {resource.author && (
                  <span className="block uppercase text-xs font-bold text-neutral-600 !no-underline">
                    {resource.author}
                  </span>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
