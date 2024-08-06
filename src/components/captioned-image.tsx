export default function CaptionedImage({
  src,
  alt,
  caption,
  width,
  maxWidth,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: string;
  maxWidth?: string;
}) {
  return (
    <figure
      className={`${width || 'w-56 flex-grow'} flex-shrink-0 ${maxWidth || 'max-w-[45rem]'}`}
    >
      <img
        src={src}
        alt={alt}
        className={`h-auto w-full object-contain ${maxWidth || 'max-w-full'}`}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
