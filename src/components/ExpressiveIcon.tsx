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
    flexShrink: 0,
    fontSize: 'calc(24/16*1rem)',
    height: '1em',
    maxHeight: '100%',
    position: 'relative',
    whiteSpace: 'nowrap',
  },
  size: (size: number | string) => ({ fontSize: typeof size === 'number' ? `calc(${size.toFixed()}/16*1rem)` : size }),
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
