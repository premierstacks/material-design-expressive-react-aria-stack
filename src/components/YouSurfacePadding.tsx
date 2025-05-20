import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';

interface YouSurfacePaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly top?: boolean;
  readonly right?: boolean;
  readonly bottom?: boolean;
  readonly left?: boolean;
}

const styles = stylex.create({
  top: { paddingTop: 16 },
  right: { paddingRight: 16 },
  bottom: { paddingBottom: 16 },
  left: { paddingLeft: 16 },
});

export function YouSurfacePadding({ xstyle, top = false, right = false, bottom = false, left = false, ...props }: YouSurfacePaddingProps): ReactElement {
  return <div {...stylex.props(top ? styles.top : null, right ? styles.right : null, bottom ? styles.bottom : null, left ? styles.left : null, xstyle)} {...props} />;
}
