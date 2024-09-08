import { WikiShortlinkContent } from '@site/src/plugins/wiki-shortlinks';
import Layout from '@theme/Layout';
import Head from '@docusaurus/core/lib/client/exports/Head';

export default function ShortlinkRedirect({
  shortlink,
}: {
  shortlink: WikiShortlinkContent;
}) {
  return (
    <Layout title={shortlink.title} description={shortlink.description}>
      <Head>
        <link rel="canonical" href={shortlink.url} />
        <meta property="og:url" content={shortlink.url} />
        <meta http-equiv="refresh" content={`0; url=${shortlink.url}`} />
      </Head>
      <header className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold my-2 text-center">
          {shortlink.title}
        </h1>
        <main className="w-full max-w-screen-2xl mx-auto flex-grow flex flex-col">
          <div className="content-styling mb-4 px-4">
            <p>
              If you are not redirected shortly please go to{' '}
              <a href={shortlink.url}>{shortlink.url}</a>.
            </p>
          </div>
        </main>
      </header>
    </Layout>
  );
}
