import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';

export interface YouSurfacePaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});

export function YouSurfacePadding({ xstyle, ...props }: YouSurfacePaddingProps): ReactElement {
  return (
    <div
      {...stylex.props(styles.base, xstyle)}
      {...props}
    />
  );
}
