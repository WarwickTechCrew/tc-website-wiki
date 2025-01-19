import React, { useEffect, useState } from 'react';

const fetchSitemapUrls = async () => {
  const response = await fetch('/sitemap.xml');
  const text = await response.text();
  const url_tags = new DOMParser()
    .parseFromString(text, 'text/xml')
    .getElementsByTagName('url');
  return Array.from(url_tags)
    .map((url) => url.getElementsByTagName('loc')[0]?.textContent)
    .filter(Boolean);
};

const RandomPageButton: React.FC = () => {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    fetchSitemapUrls().then(setPages);
  }, []);

  const goToRandomPage = () => {
    window.location.href = pages[Math.floor(Math.random() * pages.length)];
  };

  return <button onClick={goToRandomPage}>Go to Random Page</button>;
};

export default RandomPageButton;
