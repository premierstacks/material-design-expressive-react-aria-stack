import '../src/css/styles';

import 'core-js/actual';

document.querySelectorAll('link[rel="preload"][as="style"]').forEach((link) => {
  if (link instanceof HTMLLinkElement) {
    link.rel = 'stylesheet';
  }
});

import * as stylex from '@stylexjs/stylex';
import { stylexify } from '../src/helpers/stylex';
import { youSysColor } from '../src/vars/sys.stylex';

stylexify(
  document.documentElement,
  stylex.create({
    base: {
      backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
      color: `rgb(${youSysColor.onSurface})`,
      scrollbarColor: `rgb(${youSysColor.outline}) transparent`,
    },
  }).base,
);

void import('./bootstrap');
