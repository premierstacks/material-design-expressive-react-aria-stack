import * as stylex from '@stylexjs/stylex';
import { useEffect, type ReactElement } from 'react';
import { youSysColor } from '../stylex/sys.stylex';

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
    color: `rgb(${youSysColor.onSurface})`,
    scrollbarColor: `rgb(${youSysColor.outline}) transparent`,
  },
});

export interface YouRootThemeProviderProps {
  children: ReactElement;
}

export function applyRootTheme(): () => void {
  const { className } = stylex.props(styles.base);

  if (className === undefined) {
    return function () {
      return;
    };
  }

  const classes = className.split(' ');

  document.documentElement.classList.add(...classes);

  return () => {
    document.documentElement.classList.remove(...classes);
  };
}

export function YouRootThemeProvider({ children }: YouRootThemeProviderProps): ReactElement {
  useEffect(applyRootTheme, []);

  return children;
}
