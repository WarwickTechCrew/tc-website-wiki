import { useDoc, DocContextValue } from '@docusaurus/plugin-content-docs/client';
import type { DocFrontMatter } from '@docusaurus/plugin-content-docs';
import { FiCheck, FiCopy, FiLink } from 'react-icons/fi';
import useDocusaurusContext from '@docusaurus/core/lib/client/exports/useDocusaurusContext';
import { useState } from 'react';

export type Resource = {
  name: string;
  url: string;
  author?: string;
};

function DocResourcesDiv({ isMobile, resources }: { isMobile?: boolean; resources?: Resource[] }) {
  if (!resources || resources.length === 0) return null;

  return (
    <div className={`dark:bg-neutral-800 bg-gray-100 p-2 rounded-lg my-2 ${isMobile ? 'min-[997px]:hidden' : ''}`}>
      <h2 className="text-sm uppercase mb-1 pl-1">Resources</h2>
      <ul className={isMobile ? '' : 'text-sm'}>
        {resources.map((resource) => (
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
                  <span className="block uppercase text-xs font-bold dark:text-neutral-400 text-neutral-600 !no-underline">
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

function ShortlinkDiv({ isMobile, shortlinks }: { isMobile?: boolean; shortlinks?: string[] }) {
  if (!shortlinks || shortlinks.length === 0) return null;

  const context = useDocusaurusContext();
  const url = (context.siteConfig.customFields.shortlinkUrl as string) || context.siteConfig.url;

  const [isCopied, setIsCopied] = useState(false);

  async function copyShortlinkToClipboard() {
    await navigator.clipboard.writeText(`${url}/${shortlinks[0]}`);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <div
      className={`dark:bg-neutral-800 bg-gray-100 p-2 rounded-lg my-2 overflow-hidden ${isMobile ? 'min-[997px]:hidden' : ''}`}
    >
      <h2 className="text-sm uppercase mb-1 pl-1">Shortlink</h2>
      <button className="flex gap-1 group text-left max-w-full" onClick={copyShortlinkToClipboard}>
        {isCopied ? (
          <FiCheck className="mt-1 shrink-0" />
        ) : (
          <FiCopy className="mt-1 group-hover:text-blue-800 dark:group-hover:text-cyan-500 shrink-0" />
        )}
        <p className={`select-text flex flex-wrap text-wrap break-all hyphens-none ${isMobile ? '' : 'text-sm'}`}>
          {url}/<span className="font-bold">{shortlinks[0]}</span>
        </p>
      </button>
    </div>
  );
}

export default function DocResources({ isMobile }: { isMobile?: boolean }) {
  const { frontMatter } = useDoc() as DocContextValue & {
    frontMatter: DocFrontMatter & {
      resources?: Resource[];
      shortlinks?: string[];
    };
  };

  return (
    <>
      <ShortlinkDiv isMobile={isMobile} shortlinks={frontMatter.shortlinks} />
      <DocResourcesDiv isMobile={isMobile} resources={frontMatter.resources} />
    </>
  );
}
