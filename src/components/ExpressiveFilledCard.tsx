import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressiveSysColor, expressiveSysRadius } from '../stylex/sys.stylex';

export interface ExpressiveFilledCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    appearance: 'none',
    backgroundColor: `rgb(${expressiveSysColor.surfaceContainerHighest})`,
    borderBottomLeftRadius: expressiveSysRadius.medium,
    borderBottomRightRadius: expressiveSysRadius.medium,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: expressiveSysRadius.medium,
    borderTopRightRadius: expressiveSysRadius.medium,
    borderTopStyle: 'none',
    boxShadow: 'none',
    color: `rgb(${expressiveSysColor.onSurface})`,
    display: 'block',
    outlineStyle: 'none',
    position: 'relative',
    textDecorationLine: 'none',
  },
});

export function ExpressiveFilledCard({ xstyle, children, ...props }: ExpressiveFilledCardProps): ReactElement {
  return (
    <div
      {...stylex.props(rootStyles.base, xstyle)}
      {...props}
    >
      {children}
    </div>
  );
}
