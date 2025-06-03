import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youSysColor, youSysShape } from '../stylex/sys.stylex';

export interface YouFilledCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    appearance: 'none',
    backgroundColor: `rgb(${youSysColor.surfaceContainerHighest})`,
    borderBottomLeftRadius: youSysShape.cornerMedium,
    borderBottomRightRadius: youSysShape.cornerMedium,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: youSysShape.cornerMedium,
    borderTopRightRadius: youSysShape.cornerMedium,
    borderTopStyle: 'none',
    boxShadow: 'none',
    color: `rgb(${youSysColor.onSurface})`,
    display: 'block',
    outlineStyle: 'none',
    position: 'relative',
    textDecorationLine: 'none',
  },
});

export function YouFilledCard({ xstyle, children, ...props }: YouFilledCardProps): ReactElement {
  return (
    <div {...stylex.props(styles.base, xstyle)} {...props}>
      {children}
    </div>
  );
}
