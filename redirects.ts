// External/non-wiki redirect links
// Note that these only work in production, and not dev
export const redirectLinks: {
  from: string | string[];
  to: string;
}[] = [
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
  {
    from: ['/crew-opportunities.html', '/crew-opportunities'],
    to: '/opportunities',
  },
];
