import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';

export interface ExpressiveNavigationRailItemsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 18,
    paddingTop: 18,
    rowGap: 12,
  },
});

export function ExpressiveNavigationRailItems({ xstyle, ...props }: ExpressiveNavigationRailItemsProps): ReactElement {
  return (
    <div
      {...stylex.props(rootStyles.base, xstyle)}
      {...props}
    />
  );
}
