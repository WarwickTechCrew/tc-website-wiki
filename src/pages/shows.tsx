import Layout from '@theme/Layout';
import Introduction from '@site/src/components/shows/introduction.md';
import CaptionedImage from '@site/src/components/captioned-image';

export default function Shows() {
  return (
    <Layout title="Shows">
      <header className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Tech Crew Shows</h1>
      </header>
      <main className="w-full max-w-screen-2xl mx-auto flex-grow flex flex-col">
        <div className="flex flex-wrap mb-4 px-4 gap-x-4">
          <div className="content-styling w-96 flex-grow max-w-full">
            <Introduction />
          </div>
          <CaptionedImage
            src={
              require('@site/static/images/opportunities/improvmusical-kishansharma.jpg')
                .default
            }
            alt="The Improv Musical"
            caption="The Improv Musical, MTW, 2024. Photo © Kishan Sharma"
            width="w-52"
          />
        </div>
        <div className="flex-grow">To do</div>
      </main>
    </Layout>
  );
}
