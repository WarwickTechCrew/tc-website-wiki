import Head from '@docusaurus/Head';
import { useState } from 'react';

export function RipEmoji({
  bounce,
  imageSrc,
  setImage,
}: {
  bounce?: boolean;
  imageSrc: string;
  setImage: (src: string) => void;
}) {
  return (
    <button className={`block ${bounce ? 'animate-spin' : 'animate-bounce'}`} onClick={() => setImage(imageSrc)}>
      😭
    </button>
  );
}

export default function Wsover() {
  const [currentImage, setCurrentImage] = useState('');

  return (
    <main className="flex h-screen w-full items-center justify-center p-2 bg-red-100">
      <Head>
        <title>It's all Wsover :((</title>
        <meta name="description" content="Guys it's all Wsover :((" />
      </Head>
      <div className="bg-pink-800 w-full max-w-sm p-4 rounded-lg shadow-lg">
        <h1 className="text-white text-2xl pb-2 font-bold text-center font-bold font-cabin">
          <span className="animate-ping block mb-2">😭</span>
          <span className="animate-pulse">It's All Wsover</span>
        </h1>
        <iframe
          src="https://open.spotify.com/embed/playlist/5A3CudswPm3bdPBSCvWIge?utm_source=generator"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div className="flex justify-center mt-2 gap-4 text-2xl">
          <RipEmoji imageSrc="josh.jpg" setImage={setCurrentImage} />
          <RipEmoji bounce imageSrc="makkapakka.jpg" setImage={setCurrentImage} />
          <RipEmoji imageSrc="kishan.jpg" setImage={setCurrentImage} />
          <RipEmoji bounce imageSrc="plates.jpg" setImage={setCurrentImage} />
          <RipEmoji imageSrc="danny.jpg" setImage={setCurrentImage} />
        </div>
      </div>
      {currentImage && (
        <div
          className="fixed left-0 top-0 right-0 bottom-0 bg-black/30 z-10 flex p-4 items-center justify-center"
          onClick={() => setCurrentImage('')}
        >
          <img
            src={`/images/wsover/${currentImage}`}
            alt="Wsover Image"
            className="max-w-md w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </main>
  );
}
