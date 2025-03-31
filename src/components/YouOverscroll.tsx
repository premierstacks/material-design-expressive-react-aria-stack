import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';

interface YouOverscrollProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    position: 'relative',
    height: '50vh',
  },
});

export const YouOverscroll: FC<YouOverscrollProps> = ({ xstyle, ...props }: YouOverscrollProps): ReactNode => {
  return <div {...stylex.props(styles.base, xstyle)} {...props} />;
};
