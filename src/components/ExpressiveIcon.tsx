import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface ExpressiveIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className' | 'children'> {
  readonly size?: number | string;
  readonly xstyle?: stylex.StyleXStyles;
  readonly symbol?: ReactNode;
}

const rootStyles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 'inherit',
    justifyContent: 'center',
    maxHeight: '1em',
    maxWidth: '1em',
    position: 'relative',
    verticalAlign: 'middle',
  },
  size: (size: number | string) => ({ fontSize: size }),
});

export function ExpressiveIcon({ size, xstyle, symbol, ...props }: ExpressiveIconProps): ReactElement {
  return (
    <span
      {...stylex.props(rootStyles.base, size !== undefined ? rootStyles.size(size) : null, xstyle)}
      {...props}
    >
      {symbol}
    </span>
  );
}
