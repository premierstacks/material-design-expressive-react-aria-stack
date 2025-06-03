import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';

export interface YouTouchTargetProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    minHeight: '48px',
    minWidth: '48px',
    position: 'relative',
    verticalAlign: 'middle',
  },
});

export function YouTouchTarget({ xstyle, children, ...props }: YouTouchTargetProps): ReactElement {
  return (
    <span {...stylex.props(styles.base, xstyle)} {...props}>
      {children}
    </span>
  );
}
