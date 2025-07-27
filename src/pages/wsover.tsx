import Head from '@docusaurus/Head';

export default function Wsover() {
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
          <div className="animate-spin">😭</div>
          <div className="animate-bounce">😭</div>
          <div className="animate-spin">😭</div>
          <div className="animate-bounce">😭</div>
          <div className="animate-spin">😭</div>
        </div>
      </div>
    </main>
  );
}
