type BrandProps = { footer?: boolean };

export default function Brand({ footer = false }: BrandProps) {
  return (
    <span className={`brand ${footer ? "footer-brand" : ""}`}>
      <span className="brand-mark" aria-hidden="true"><i /><i /></span>
      <span>CORTEX <b>XSIAM</b></span>
      {!footer && <small>STARTER GUIDE</small>}
    </span>
  );
}
