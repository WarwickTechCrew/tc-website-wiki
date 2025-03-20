import { FiBook, FiCode, FiEdit3, FiMinimize2 } from 'react-icons/fi';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export function EditPageModal() {
  const doc = useDoc();

  console.log(doc);
  const closeModal = () => {
    // Remove the contents after the hash and remove the modal
    window.location.hash = '#null';

    // Remove the remaining hash from the URL
    history.pushState('', document.title, window.location.pathname + window.location.search);
  };

  if (window.location.hash !== '#edit') return;

  const docPath = doc.metadata.source.replace('@site/', '');

  return (
    <div
      className="fixed left-0 right-0 top-0 bottom-0 bg-black/50 z-[500] p-4 sm:p-8 pt-20 sm:pt-20 flex justify-center items-start"
      onClick={() => closeModal()}
    >
      <div
        className="mb-8 dark:bg-neutral-800 bg-gray-100 px-6 pt-4 pb-8 rounded-lg w-96 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="uppercase">Edit This Page</h2>
          <button className="hover:text-blue-800 dark:hover:text-cyan-500" onClick={() => closeModal()}>
            <FiMinimize2 />
          </button>
        </div>

        <p className="text-sm">
          This wiki is a work in progress, and is a collaborative resource that is made by and for all members of
          Warwick Tech Crew. Everyone is welcome and encouraged to contribute, even if you've only just joined the
          society.
        </p>

        <p className="text-sm mt-4">
          Please use the links below to edit <span className="font-bold">{doc.contentTitle}</span>:
        </p>
        <ul className="text-sm">
          <li>
            <a href="/contributing" target="_blank" className="flex gap-1 items-center">
              <FiBook />
              Contributing Guide (Opens in New Tab)
            </a>
          </li>
          <li>
            <a
              href={`https://github.com/WarwickTechCrew/tc-website-wiki/blob/main/${docPath}`}
              className="flex gap-1 items-center"
            >
              <FiCode />
              GitHub Source
            </a>
          </li>
          <li>
            <a
              href={`https://github.dev/WarwickTechCrew/tc-website-wiki/blob/main/${docPath}`}
              className="flex gap-1 items-center"
            >
              <FiEdit3 />
              GitHub Online Editor
            </a>
          </li>
        </ul>
      </div>
    </div>
    // ,
  );
}
