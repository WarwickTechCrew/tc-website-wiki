export type ExternalLink = {
  type: 'link';
  href: string;
  label: string;
};

const externalLinks: ExternalLink[] = [
  {
    type: 'link',
    href: 'https://drive.google.com/drive/folders/1qcEIQINiboPD26nMSB-obGPqv5tbVeuY?usp=sharing',
    label: 'Exec Meeting Minutes',
  },
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
];

export default externalLinks;
