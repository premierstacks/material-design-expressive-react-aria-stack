import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { youSysColor, youSysShape } from '../stylex/sys.stylex';

export interface SurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surface})`,
    borderBottomLeftRadius: youSysShape.cornerLarge,
    borderBottomRightRadius: youSysShape.cornerLarge,
    borderTopLeftRadius: youSysShape.cornerLarge,
    borderTopRightRadius: youSysShape.cornerLarge,
    color: `rgb(${youSysColor.onSurface})`,
  },
});

export function Surface({ xstyle, ...props }: SurfaceProps): ReactElement {
  return (
    <div
      {...stylex.props(rootStyles.base, xstyle)}
      {...props}
    />
  );
}
