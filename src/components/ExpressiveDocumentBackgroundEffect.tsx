import * as stylex from '@stylexjs/stylex';
import { useEffect, type ReactElement } from 'react';
import { expressiveSysColor } from '../stylex/sys.stylex';

const rootStyles = stylex.create({
  background: {
    backgroundColor: `rgb(${expressiveSysColor.surfaceContainer})`,
  },
  color: {
    color: `rgb(${expressiveSysColor.onSurface})`,
  },
  scrollbar: {
    scrollbarColor: `rgb(${expressiveSysColor.outline}) transparent`,
  },
});

export function applyDocumentBackground(background: stylex.StyleXStyles = rootStyles.background, color: stylex.StyleXStyles = rootStyles.color, scrollbar: stylex.StyleXStyles = rootStyles.scrollbar): () => void {
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

export interface ExpressiveDocumentBackgroundEffectProps {
  readonly background?: stylex.StyleXStyles;
  readonly color?: stylex.StyleXStyles;
  readonly scrollbar?: stylex.StyleXStyles;
  readonly children?: ReactElement;
}

export function ExpressiveDocumentBackgroundEffect({ background, color, scrollbar, children }: ExpressiveDocumentBackgroundEffectProps): ReactElement | undefined {
  useEffect(() => {
    return applyDocumentBackground(background, color, scrollbar);
  }, [background, color, scrollbar]);

  return children;
}
