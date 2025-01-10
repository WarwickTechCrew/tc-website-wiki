import useDocusaurusContext from '@docusaurus/core/lib/client/exports/useDocusaurusContext';
import { useState } from 'react';
import { FiCheck, FiCopy, FiInfo, FiMaximize2, FiMinimize, FiMinimize2 } from 'react-icons/fi';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

function DocShortlinkCopy({ shortlink, small }: { shortlink: string; small?: boolean }) {
  const [isCopied, setIsCopied] = useState(false);

  const context = useDocusaurusContext();
  const url = (context.siteConfig.customFields.shortlinkUrl as string) || context.siteConfig.url;

  async function copyShortlinkToClipboard() {
    await navigator.clipboard.writeText(`${url}/${shortlink}`);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  return (
    <button className="flex gap-1 group text-left max-w-full items-center" onClick={copyShortlinkToClipboard}>
      {isCopied ? (
        <FiCheck className="shrink-0" />
      ) : (
        <FiCopy className="group-hover:text-blue-800 dark:group-hover:text-cyan-500 shrink-0" />
      )}
      <p className={`select-text flex flex-wrap text-wrap break-all hyphens-none ${small ? 'text-sm' : ''}`}>
        {url}/<span className="font-bold">{shortlink}</span>
      </p>
    </button>
  );
}

export function DocShortlinks({ isMobile, shortlinks }: { isMobile?: boolean; shortlinks?: string[] }) {
  if (!shortlinks || shortlinks.length === 0) return null;

  const [showInfoModal, setShowInfoModal] = useState(false);
  const doc = useDoc();

  return (
    <div
      className={`dark:bg-neutral-800 bg-gray-100 p-2 rounded-lg my-2 overflow-hidden ${isMobile ? 'min-[997px]:hidden' : ''}`}
    >
      <button
        className="group mb-1 mx-1 flex items-center justify-between cursor-pointer w-full pr-2"
        onClick={() => setShowInfoModal(true)}
      >
        <h2 className="text-sm uppercase group-hover:underline">
          {shortlinks.length > 1 ? `Shortlinks (${shortlinks.length})` : 'Shortlink'}
        </h2>
        <div className="ml-1 mb-0.5 group-hover:text-blue-800 dark:group-hover:text-cyan-500 group-hover:scale-105">
          <FiMaximize2 />
        </div>
      </button>

      <DocShortlinkCopy shortlink={shortlinks[0]} small={!isMobile} />

      {showInfoModal && (
        <div
          className="fixed left-0 right-0 top-0 bottom-0 bg-black/50 z-[500] p-4 sm:p-8 pt-20 sm:pt-20 flex justify-center items-start"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="mb-8 dark:bg-neutral-800 bg-gray-100 px-6 pt-4 pb-8 rounded-lg w-96 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-center justify-between">
              <h2 className="uppercase">Page Shortlinks</h2>
              <button className=" hover:text-blue-800 dark:hover:text-cyan-500" onClick={() => setShowInfoModal(false)}>
                <FiMinimize2 />
              </button>
            </div>

            <p className="mb-1 text-sm">
              <strong>{doc.contentTitle}</strong> can be accessed and shared via the following short URLs:
            </p>

            <ul>
              {shortlinks.map((shortlink) => (
                <li key={shortlink}>
                  <DocShortlinkCopy shortlink={shortlink} small />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
