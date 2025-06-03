import * as stylex from '@stylexjs/stylex';
import { useEffect } from 'react';
import { toCssText } from '../helpers/styles';
import { youSysColor } from '../stylex/sys.stylex';

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
    color: `rgb(${youSysColor.onSurface})`,
    scrollbarColor: `rgb(${youSysColor.outline}) transparent`,
  },
});

export function YouRootThemeEffect(): null {
  useEffect(() => {
    const oldClassName = document.documentElement.className;
    const oldStyle = document.documentElement.style.cssText;

    const { className, style } = stylex.props(styles.base);

    if (className !== undefined) {
      document.documentElement.className = className;
    }

    if (style !== undefined) {
      document.documentElement.style = toCssText(style);
    }

    return () => {
      document.documentElement.className = oldClassName;
      document.documentElement.style = oldStyle;
    };
  }, []);

  return null;
}
