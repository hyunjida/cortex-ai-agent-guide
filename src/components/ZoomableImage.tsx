type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export default function ZoomableImage({ src, alt, className, loading }: ZoomableImageProps) {
  return <a className={`screen-example-link${className ? ` ${className}` : ""}`} href={src} target="_blank" rel="noreferrer" title="새 창에서 크게 보기">
    <img src={src} alt={alt} loading={loading} />
    <span>크게 보기 ↗</span>
  </a>;
}
