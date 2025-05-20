import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';

interface YouOverscrollProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    height: '50vh',
    position: 'relative',
  },
});

export function YouOverscroll({ xstyle, ...props }: YouOverscrollProps): ReactElement {
  return <div {...stylex.props(styles.base, xstyle)} {...props} />;
}
