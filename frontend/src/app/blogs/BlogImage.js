import Image from "next/image";

export default function BlogImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}) {
  const safeSrc =
    typeof src === "string" && src.trim() ? src : "/banner-aboutus.webp";
  const isInlineImage =
    safeSrc.startsWith("data:") || safeSrc.startsWith("blob:");
  return (
    <Image
      src={safeSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized={isInlineImage}
    />
  );
}
