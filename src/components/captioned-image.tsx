export default function CaptionedImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="w-56 flex-shrink-0">
      <img src={src} alt={alt} className="h-auto w-full object-contain" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
