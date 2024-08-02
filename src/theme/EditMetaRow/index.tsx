import React from 'react';
import clsx from 'clsx';
import EditThisPage from '@theme/EditThisPage';
import type { Props } from '@theme/EditMetaRow';

import LastUpdated from '@theme/LastUpdated';
import styles from './styles.module.css';
import { useDoc } from '@docusaurus/theme-common/internal';

export default function EditMetaRow({
  className,
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
}: Props): JSX.Element {
  const doc = useDoc();
  const authors = (doc.frontMatter as any).authors || [];
  const additionalAuthors = authors.filter(
    (name: string) => name !== lastUpdatedBy,
  );

  let additionalAuthorsString = '';
  for (let i = 0; i < additionalAuthors.length; i++) {
    additionalAuthorsString += additionalAuthors[i];
    if (i + 2 === additionalAuthors.length) additionalAuthorsString += ' and ';
    else if (i + 2 < additionalAuthors.length) additionalAuthorsString += ', ';
  }

  return (
    <div className={clsx('row', className)}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>
      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
        {additionalAuthorsString && (
          <p>Additional Contributors: {additionalAuthorsString}</p>
        )}
      </div>
    </div>
  );
}
