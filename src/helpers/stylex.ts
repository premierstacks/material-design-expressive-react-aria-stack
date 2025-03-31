import * as stylex from '@stylexjs/stylex';

export function stylexify(el: HTMLElement, xstyle: stylex.StyleXStyles, override = false) {
  const attrs = stylex.attrs(xstyle);

  if (attrs.class !== undefined) {
    if (override) {
      el.className = attrs.class;
    } else {
      el.className += ` ${attrs.class}`;
    }
  }

  if (attrs['data-style-src'] !== undefined) {
    el.setAttribute('data-style-src', attrs['data-style-src']);
  }

  if (attrs.style !== undefined) {
    if (override) {
      el.style.cssText = attrs.style;
    } else {
      el.style.cssText += `; ${attrs.style}`;
    }
  }
}
