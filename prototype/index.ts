import * as stylex from '@stylexjs/stylex';
import { stylexify } from '../src/helpers/stylex';
import { youSysColor } from '../src/vars/sys.stylex';

document.querySelectorAll('link[rel="preload"][as="style"]').forEach((link) => {
  if (link instanceof HTMLLinkElement) {
    link.rel = 'stylesheet';
  }
});

stylexify(
  document.documentElement,
  stylex.create({
    base: {
      color: `rgb(${youSysColor.onSurface})`,
      backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
      scrollbarColor: `rgb(${youSysColor.outline}) red`,
    },
  }).base,
);

void import('./bootstrap');
