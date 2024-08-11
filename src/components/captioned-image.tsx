import Image, { SrcImage } from '@theme/IdealImage';

export default function CaptionedImage({
  img,
  alt,
  caption,
  width,
  maxWidth,
}: {
  img: SrcImage;
  alt: string;
  caption: string;
  width?: string;
  maxWidth?: string;
}) {
  return (
    <figure
      className={`${width || 'w-56 flex-grow'} flex-shrink-0 ${maxWidth || 'max-w-[45rem]'}`}
    >
      <Image
        img={img}
        alt={alt}
        className={`mb-[4px] h-auto w-full object-contain ${maxWidth || 'max-w-full'}`}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
