import { WikiChange } from '@site/src/lib/git';
import { usePluginData } from '@docusaurus/core/lib/client/exports/useGlobalData';
import { useDocsVersion } from '@docusaurus/plugin-content-docs/client';
import type { PropVersionDocs } from '@docusaurus/plugin-content-docs';

function getWikiPageFromFile(
  fileName: string,
  docs: PropVersionDocs,
): { title: string; url: string } | null {
  // Get extension
  const extension = fileName.split('.').reverse()[0];
  const lowercaseExtension = extension.toLowerCase();
  if (
    lowercaseExtension !== 'md' &&
    lowercaseExtension !== 'mdx' &&
    lowercaseExtension !== 'tsx'
  )
    return null;

  // Strip wiki from start. Remaining id will be e.g. /03-disciplines
  let id = fileName.slice(4);

  // Remove numbers from name
  id = id.replace(/\/[0-9]+-/g, '/');

  // Remove extension
  id = id.replace(`.${extension}`, '');

  // Remove beginning slash
  id = id.slice(1);

  // Replace README with /index
  id = id.replace('/README', '/');

  // Try and find doc
  let doc = docs[id];
  if (!doc) doc = docs[`${id}/index`];
  if (!doc) return null;

  return {
    title: doc.title,
    url: `/wiki/${doc.id.replace('/index', '')}`,
  };
}

export default function WikiChangelog() {
  const version = useDocsVersion();
  const { changelog } = usePluginData('wiki-changelog-plugin') as {
    changelog: WikiChange[];
  };
  const changelogWithPages = changelog.map((change) => {
    const pages = change.files
      .map((file) => getWikiPageFromFile(file, version.docs))
      .filter((page) => !!page);

    // Remove duplicates
    const uniquePages = [];
    const uniquePageUrls = [];
    for (const page of pages) {
      if (!uniquePageUrls.includes(page.url)) {
        uniquePages.push(page);
        uniquePageUrls.push(page.url);
      }
    }

    return {
      ...change,
      pages: uniquePages,
    };
  });

  return (
    <ul className="!ml-0">
      {changelogWithPages.map((change) => (
        <li
          key={change.hash}
          className="mb-2 list-none flex flex-col md:flex-row gap-1"
        >
          <a
            className="text-xs text-neutral-600 font-bold uppercase mt-1.5 flex-shrink-0 group-hover:underline"
            href={`https://github.com/WarwickTechCrew/website/commit/${change.hash}`}
            target="_blank"
          >
            <time dateTime={change.date}>{change.formattedDate}</time>
            {' • '}
            {change.author}
          </a>
          <div>
            <div className="font-bold">{change.description}</div>
            <ul className="text-xs pl-2">
              {change.pages.map((page) => (
                <li key={page.url}>
                  <a href={page.url} target="_blank">
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
