type BrandLogoProps = {
  compact?: boolean;
  light?: boolean;
};

export function BrandLogo({ compact = false, light = false }: BrandLogoProps) {
  const width = compact ? 54 : 72;
  const height = compact ? 36 : 47;

  return (
    <img
      className={`brand-logo${compact ? " is-compact" : ""}`}
      src={light ? "/brand/huy-hoang-logo-light.png" : "/brand/huy-hoang-logo.png"}
      alt="Huy Hoàng"
      width={width}
      height={height}
      style={{ height: `${height}px`, maxHeight: `${height}px`, maxWidth: `${width}px`, width: `${width}px` }}
    />
  );
}
