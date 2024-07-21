import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AboutUs from '@site/src/components/home/about-us.mdx';
import Hires from '@site/src/components/home/hires.mdx';
import GetInvolved from '@site/src/components/home/get-involved.mdx';
import TheExec from '@site/src/components/home/the-exec';
import Shows from '@site/src/components/home/shows.mdx';
import TechCrewCarousel, { CarouselSlide } from '@site/src/components/carousel';
import showsCarousel from '@site/src/components/home/shows-carousel';
import generalCarousel from '@site/src/components/home/general-carousel';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className="relative">
        <div>
          <TechCrewCarousel slides={showsCarousel} />
        </div>

        <div className="absolute top-8 right-8 bottom-32 left-8">
          <div className="max-w-screen-xl mx-auto text-white h-full">
            <div className="flex gap-4 items-center h-full">
              <img
                src="/logo-light.svg"
                alt="Tech Crew Logo"
                className="w-32 h-auto"
              />
              <div>
                <p className="text-xl">Welcome to</p>
                <h1 className="text-5xl font-bold">Warwick Tech Crew</h1>
                <p className="text-lg font-medium">
                  Providing technical services at the University of Warwick
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="-mt-32">
        <section className="relative my-4 mx-16">
          <div className="max-w-screen-xl mx-auto p-6 bg-gray-200 flex gap-4">
            <div>
              <AboutUs />
            </div>
            <figure className="w-56 flex-shrink-0">
              <img
                src={
                  require('@site/static/images/streetcar-joshheng.jpg').default
                }
                alt="Streetcar"
                className="h-auto w-full object-contain"
              />
              <figcaption>
                A Streetcar Named Desire, WUDS, 2024. Photo &copy; Josh Heng
              </figcaption>
            </figure>
          </div>
        </section>
        <div className="flex max-w-screen-2xl mx-auto">
          <section className="p-4">
            <Hires />
          </section>
          <section className="p-4">
            <GetInvolved />
          </section>
        </div>
        <section className="p-4">
          <TechCrewCarousel slides={generalCarousel} />
          <TheExec />
        </section>
        <section className="p-4 max-w-screen-2xl mx-auto">
          <Shows />
        </section>
      </main>
    </Layout>
  );
}
