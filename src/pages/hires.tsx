import Layout from '@theme/Layout';
import generalCarousel from '@site/src/components/home/general-carousel';
import TechCrewCarousel from '@site/src/components/carousel';
import Introduction from '@site/src/components/hires/introduction.md';
import Equipment from '@site/src/components/hires/equipment.md';
import PreviousHires from '@site/src/components/hires/previous-hires.md';
import CaptionedImage from '@site/src/components/captioned-image';

export default function Hires() {
  return (
    <Layout title="Hires">
      <header className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Tech Crew Hires</h1>
      </header>
      <main>
        <div className="max-w-screen-2xl mx-auto px-4 content-styling flex gap-x-4 flex-wrap">
          <div className="w-96 flex-grow">
            <Introduction />
          </div>
          <CaptionedImage
            src={require('@site/static/images/hires/wsaf-joshheng.jpg').default}
            alt="Tech tent at Warwick Student Arts Festival"
            caption="Warwick Student Arts Festival Tech Tent, 2024. Photo © Josh Heng"
            width="w-96"
          />
        </div>
        <div className="max-w-screen-2xl mx-auto flex flex-wrap-reverse mb-6">
          <div className="p-4 w-[40rem] flex-grow">
            <div className="h-full">
              <iframe
                width="640px"
                height="480px"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdf0w-5j3cztJ0Dg0mW0tv1c4pSfmpN89QTfUumh6IewyjIig/viewform?embedded=true" 
                className="border-0 w-full min-h-full h-[40rem] max-h-screen"
                allowFullScreen
                loading="eager"
              ></iframe>
            </div>
          </div>

          <div className="p-4 content-styling w-[32rem] flex-grow space-y-4">
            <div>
              <Equipment />
            </div>
            <div>
              <PreviousHires />
            </div>
            <CaptionedImage
              src={
                require('@site/static/images/hires/stagefest-joshheng.jpg')
                  .default
              }
              alt="Music Theatre Warwick Stagefest"
              caption="MTW Stagefest, 2023. Photo © Josh Heng"
              width="w-80"
            />
          </div>
        </div>

        <TechCrewCarousel slides={generalCarousel} />
      </main>
    </Layout>
  );
}
