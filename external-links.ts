export type ExternalLink = {
  type: 'link';
  href: string;
  label: string;
};

const externalLinks: ExternalLink[] = [
  {
    type: 'link',
    href: 'https://dash.adam-rms.com',
    label: 'AdamRMS',
  },
  {
    type: 'link',
    href: 'https://www.warwicksu.com/sgf/4251',
    label: 'SU Finance',
  },
  {
    type: 'link',
    href: 'https://www.warwicksu.com/resources/techcrew/Tech-Crew-Constitution/',
    label: 'Constitution',
  },
  {
    type: 'link',
    href: 'https://gallery.warwickdrama.org.uk/',
    label: 'Warwick Drama Photo Archive',
  },
];

export default externalLinks;
