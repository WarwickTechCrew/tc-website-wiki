import React from 'react';
import clsx from 'clsx';
import EditThisPage from '@theme/EditThisPage';
import type { Props } from '@theme/EditMetaRow';

import LastUpdated from '@theme/LastUpdated';
import styles from './styles.module.css';
import { useDoc } from '@docusaurus/theme-common/internal';
import { authorNames } from '@site/src/lib/author-names';

export default function EditMetaRow({
  className,
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
}: Props): JSX.Element {
  const doc = useDoc();
  const authors = (doc.frontMatter as any).authors || [];
  const lastUpdatedByName = authorNames[lastUpdatedBy] || lastUpdatedBy;

  let authorsString = '';
  for (let i = 0; i < authors.length; i++) {
    authorsString += authors[i];
    if (i + 2 === authors.length) authorsString += ' and ';
    else if (i + 2 < authors.length) authorsString += ', ';
  }

  return (
    <div className={clsx('row', className)}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>
      <div className={clsx('col', styles.lastUpdated)}>
        <p>Contributors: {authorsString}</p>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedByName}
          />
        )}
      </div>
    </div>
  );
}
