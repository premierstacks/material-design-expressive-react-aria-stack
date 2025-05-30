import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';

interface YouSymbolProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className'> {
  readonly size?: number;
  readonly xstyle?: stylex.StyleXStyles;
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
    pointerEvents: 'none',
    position: 'relative',
    userSelect: 'none',
    verticalAlign: 'middle',
    width: '1em',
  },
  size: (size: number) => ({ fontSize: size }),
});

export function YouSymbol({ size, xstyle, children, ...props }: YouSymbolProps): ReactElement {
  return (
    <span {...stylex.props(styles.base, size !== undefined ? styles.size(size) : null, xstyle)} {...props}>
      {children}
    </span>
  );
}
