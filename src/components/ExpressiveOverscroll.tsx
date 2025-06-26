import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';

export interface ExpressiveOverscrollProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    paddingBottom: '50vh',
    position: 'relative',
  },
});

export function ExpressiveOverscroll({ xstyle, children, ...props }: ExpressiveOverscrollProps): ReactElement {
  return (
    <div
      {...stylex.props(rootStyles.base, xstyle)}
      {...props}
    >
      {children}
    </div>
  );
}
