import type { CSSProperties } from 'react';
import type { StandardLonghandProperties } from 'csstype';

export function mergeClassNames(...names: (string | null | undefined | boolean)[]): string {
  const result = new Set<string>();

  for (const name of names) {
    if (typeof name === 'string') {
      name.trim().split(/\s+/).forEach((cls) => result.add(cls));
    }
  }

  return Array.from(result).join(' ');
}

export function mergeCssProperties(...properties: (CSSProperties | null | undefined | boolean)[]): CSSProperties {
  const result: CSSProperties = {};

  for (const prop of properties) {
    if (typeof prop === 'object' && prop !== null) {
      Object.assign(result, prop);
    }
  }

  return result;
}

export function styles(...properties: StandardLonghandProperties[]): StandardLonghandProperties {
  const result: StandardLonghandProperties = {};

  for (const prop of properties) {
    Object.assign(result, prop);
  }

  return result;
}

export function toRem(size: number | string): string {
  if (typeof size === 'number') {
    return `calc(${size.toFixed()}/16*1rem)`;
  }

  if (size.endsWith('px')) {
    return `calc(${size.slice(0, -2)}/16*1rem)`;
  }

  if (size.startsWith('calc(') && size.endsWith(')')) {
    return size;
  }

  throw new Error(`toRem: unsupported string value [${size}]`);
}
