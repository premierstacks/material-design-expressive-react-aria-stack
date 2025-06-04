import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';

export interface YouNavigationRailItemsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 18,
    paddingTop: 18,
    rowGap: 12,
  },
});

export function YouNavigationRailItems({ xstyle, ...props }: YouNavigationRailItemsProps): ReactElement {
  return (
    <div
      {...stylex.props(styles.base, xstyle)}
      {...props}
    />
  );
}
