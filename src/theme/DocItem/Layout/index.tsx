import React from 'react';
import clsx from 'clsx';
import { useWindowSize } from '@docusaurus/theme-common';
import { useDoc, DocContextValue } from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import type { Props } from '@theme/DocItem/Layout';
import type { DocFrontMatter } from '@docusaurus/plugin-content-docs';

import styles from './styles.module.css';
import DocResources, { Resource } from '@site/src/components/wiki/doc-resources';

function showDocResources(): boolean {
  const { frontMatter } = useDoc() as DocContextValue & {
    frontMatter: DocFrontMatter & { resources?: Resource[] };
  };

  if (!frontMatter.resources || frontMatter.resources.length === 0) return false;
  return true;
}

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    (canRender || showDocResources) && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({ children }: Props): JSX.Element {
  const doc = useDoc();
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  return (
    <div className="row wiki-docs">
      {doc.assets.image && !(doc.frontMatter as { disable_banner?: boolean }).disable_banner && (
        <img
          className="doc-hero-img"
          src={doc.assets.image}
          alt={((doc.frontMatter as any).image_alt as string) || doc.contentTitle}
        />
      )}

      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />

            {docTOC.mobile}
            <DocResources isMobile />
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
