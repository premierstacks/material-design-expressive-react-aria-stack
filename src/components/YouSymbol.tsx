import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';

export interface YouSymbolProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className' | 'children'> {
  readonly size?: number;
  readonly xstyle?: stylex.StyleXStyles;
  readonly symbol?: ReactNode;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 'inherit',
    height: '1em',
    justifyContent: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    verticalAlign: 'middle',
    width: '1em',
  },
  size: (size: number) => ({ fontSize: size }),
});

export function YouSymbol({ size, xstyle, symbol, ...props }: YouSymbolProps): ReactElement {
  return (
    <span {...stylex.props(styles.base, size !== undefined ? styles.size(size) : null, xstyle)} {...props}>
      {symbol}
    </span>
  );
}
