import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface YouIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className' | 'children'> {
  readonly size?: number | string;
  readonly xstyle?: stylex.StyleXStyles;
  readonly symbol?: ReactNode;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 'inherit',
    justifyContent: 'center',
    maxHeight: '1em',
    maxWidth: '1em',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    verticalAlign: 'middle',
  },
  size: (size: number | string) => ({ fontSize: size }),
});

export function YouIcon({ size, xstyle, symbol, ...props }: YouIconProps): ReactElement {
  return (
    <span
      {...stylex.props(styles.base, size !== undefined ? styles.size(size) : null, xstyle)}
      {...props}
    >
      {symbol}
    </span>
  );
}
