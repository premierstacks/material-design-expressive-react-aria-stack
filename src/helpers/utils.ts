export function toClassName(defaultClassName: string | undefined, stylexClassName: string | undefined): string {
  return `${defaultClassName ?? ''} ${stylexClassName ?? ''}`;
}

export function toStyle(defaultStyle: React.CSSProperties | undefined, stylexStyle: React.CSSProperties | undefined): React.CSSProperties {
  return { ...(defaultStyle ?? {}), ...(stylexStyle ?? {}) };
}
