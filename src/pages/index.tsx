import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AboutUs from '@site/src/components/home/about-us.mdx';
import Hires from '@site/src/components/home/hires.mdx';
import GetInvolved from '@site/src/components/home/get-involved.mdx';
import TheExec from '@site/src/components/home/the-exec';
import Shows from '@site/src/components/home/shows.mdx';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className="max-w-screen-2xl mx-auto">
        <p>Welcome to</p>
        <h1 className="text-3xl font-bold">Warwick Tech Crew</h1>
        <p>Providing technical services at the University of Warwick</p>
      </header>
      <main className="max-w-screen-2xl mx-auto">
        <section className="py-8 px-4 bg-gray-200">
          <AboutUs />
        </section>
        <div className="flex">
          <section className="p-4">
            <Hires />
          </section>
          <section className="p-4">
            <GetInvolved />
          </section>
        </div>
        <section className="p-4">
          <TheExec />
        </section>
        <section className="p-4">
          <Shows />
        </section>
      </main>
    </Layout>
  );
}
