import { WikiShortlinkContent } from '@site/src/plugins/wiki-shortlinks';
import Layout from '@theme/Layout';
import Head from '@docusaurus/core/lib/client/exports/Head';
import { useEffect } from 'react';

export default function ShortlinkRedirect({ shortlink, hash }: { shortlink: WikiShortlinkContent; hash?: string }) {
  const url = `${shortlink.url}${hash ? '#' + hash : ''}`;

  useEffect(() => {
    if (window.location.hash) {
      window.location.href = shortlink.url + (window.location.search || '') + (window.location.hash || '');
    } else {
      window.location.href = shortlink.url + (window.location.search || '') + (hash ? '#' + hash : '');
    }
  }, []);

  return (
    <Layout title={shortlink.title} description={shortlink.description}>
      <Head>
        <link rel="canonical" href={shortlink.url} />
        <meta property="og:url" content={shortlink.url} />
        <noscript>
          <meta http-equiv="refresh" content={`0; url=${url}`} />
        </noscript>
      </Head>
      <header className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold my-2 text-center">{shortlink.title}</h1>
        <main className="w-full max-w-screen-2xl mx-auto flex-grow flex flex-col">
          <div className="content-styling mb-4 px-4">
            <p>
              If you are not redirected shortly please go to <a href={url}>{url}</a>.
            </p>
          </div>
        </main>
      </header>
    </Layout>
  );
}
