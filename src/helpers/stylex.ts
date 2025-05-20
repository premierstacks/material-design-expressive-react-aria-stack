import * as stylex from '@stylexjs/stylex';
import { toClassName, toStyle } from './utils';

export function stylexify(el: HTMLElement, xstyle: stylex.StyleXStyles, override = false) {
  const { className, style, 'data-style-src': dataStyleSrc } = stylex.props(xstyle);

  if (className !== undefined) {
    if (override) {
      el.className = className;
    } else {
      el.className = toClassName(el.className, className);
    }
  }

  if (dataStyleSrc !== undefined) {
    el.setAttribute('data-style-src', dataStyleSrc);
  }

  if (style !== undefined) {
    if (override) {
      el.style.cssText = Object.keys(style).map((key) => `${key}:${(style[key] ?? '').toString()};`).join('');
    } else {
      el.style.cssText = toStyle(el.style.cssText, Object.keys(style).map((key) => `${key}:${(style[key] ?? '').toString()};`).join(''));
    }
  }
}
