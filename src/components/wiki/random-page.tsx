import React, { useEffect, useState } from 'react';

const fetchSitemapUrls = async () => {
  const response = await fetch('/sitemap.xml');
  const text = await response.text();
  const url_tags = new DOMParser().parseFromString(text, 'text/xml').getElementsByTagName('url');
  return Array.from(url_tags)
    .map((url) => url.getElementsByTagName('loc')[0]?.textContent)
    .filter(Boolean);
};

/**
 * Note, this button will only work in production, as the sitemap is not available in development.
 * To test in development: `npm run build` then `npm run serve`
 * @returns
 */
const RandomPageButton: React.FC = () => {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    fetchSitemapUrls().then(setPages);
  }, []);

  const goToRandomPage = () => {
    window.location.href = pages[Math.floor(Math.random() * pages.length)];
  };

  return (
    <button
      onClick={goToRandomPage}
      style={{ fontFamily: 'Century Gothic, sans-serif' }}
      className="flex flex-col items-center font-bold text-lg rounded border-2 border-black shadow-md transition duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
    >
      <div className="bg-black text-white py-2 px-2 w-full text-center">
        I'm Feeling Lucky
      </div>
      <div className="bg-white text-black py-2 px-2 w-full text-center">
        Go to Random Page
      </div>
    </button>
  );
  
  
};

export default RandomPageButton;
