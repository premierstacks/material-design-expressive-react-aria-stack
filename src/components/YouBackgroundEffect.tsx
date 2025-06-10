import * as stylex from '@stylexjs/stylex';
import { useEffect, type ReactElement } from 'react';
import { youSysColor } from '../stylex/sys.stylex';

const styles = stylex.create({
  background: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
  },
  color: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  scrollbar: {
    scrollbarColor: `rgb(${youSysColor.outline}) transparent`,
  },
});

export function applyBackground(background: stylex.StyleXStyles = styles.background, color: stylex.StyleXStyles = styles.color, scrollbar: stylex.StyleXStyles = styles.scrollbar): () => void {
  const { className } = stylex.props(background, color, scrollbar);

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

export interface YouBackgroundEffectProps {
  readonly background?: stylex.StyleXStyles;
  readonly color?: stylex.StyleXStyles;
  readonly scrollbar?: stylex.StyleXStyles;
  readonly children?: ReactElement;
}

export function YouBackgroundEffect({ background, color, scrollbar, children }: YouBackgroundEffectProps): ReactElement | undefined {
  useEffect(() => {
    return applyBackground(background, color, scrollbar);
  }, [background, color, scrollbar]);

  return children;
}
