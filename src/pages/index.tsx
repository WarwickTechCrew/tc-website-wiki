import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AboutUs from '@site/src/components/home/about-us';
import Hires from '@site/src/components/home/hires';
import GetInvolved from '@site/src/components/home/get-involved';
import TheExec from '@site/src/components/home/the-exec';
import Shows from '@site/src/components/home/shows';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header>
        <h1>Hi</h1>
      </header>
      <main>
        <AboutUs />
        <div>
          <Hires />
          <GetInvolved />
        </div>
        <TheExec />
        <Shows />
      </main>
    </Layout>
  );
}
