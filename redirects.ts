// Note that these only work in production, and not dev
export const redirectLinks: {
  from: string | string[];
  to: string;
}[] = [
  {
    from: ['/brand', '/branding', '/logo'],
    to: '/wiki/resources/branding',
  },
  {
    from: '/instagram',
    to: 'https://www.instagram.com/warwicktechcrew',
  },
  {
    from: ['/membership', '/join', '/su'],
    to: 'https://www.warwicksu.com/societies-sports/societies/techcrew/',
  },
  {
    from: ['/finance', '/mrf'],
    to: 'https://www.warwicksu.com/sgf/4251',
  },
];
