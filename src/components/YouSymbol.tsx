import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';

interface YouSymbolProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  size?: number | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
  symbol?: ReactNode | undefined;
}

const styles = stylex.create({
  base: {
    position: 'relative',
    fontSize: 'inherit',
    userSelect: 'none',
    verticalAlign: 'middle',
    pointerEvents: 'none',
    width: '1em',
    height: '1em',
    overflow: 'hidden',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: (size: number) => ({ fontSize: size }),
});

export const YouSymbol: FC<YouSymbolProps> = ({ symbol, size, xstyle, children, ...props }: YouSymbolProps): ReactNode => {
  return (
    <span {...stylex.props(styles.base, size !== undefined ? styles.size(size) : null, xstyle)} {...props} role="presentation">
      {children ?? symbol}
    </span>
  );
};
