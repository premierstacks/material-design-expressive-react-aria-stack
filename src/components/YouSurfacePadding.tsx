import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLProps, ReactNode } from 'react';

interface YouSurfacePaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
}

const styles = stylex.create({
  top: { paddingTop: 16 },
  right: { paddingRight: 16 },
  bottom: { paddingBottom: 16 },
  left: { paddingLeft: 16 },
});

export const YouSurfacePadding: FC<YouSurfacePaddingProps> = ({ xstyle, top, right, bottom, left, ...props }: YouSurfacePaddingProps): ReactNode => {
  return <div {...stylex.props(top ? styles.top : null, right ? styles.right : null, bottom ? styles.bottom : null, left ? styles.left : null, xstyle)} {...props} />;
};
