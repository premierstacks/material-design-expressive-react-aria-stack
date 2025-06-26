import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';

export interface ExpressiveTouchTargetProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
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

export function ExpressiveTouchTarget({ xstyle, children, ...props }: ExpressiveTouchTargetProps): ReactElement {
  return (
    <span
      {...stylex.props(rootStyles.base, xstyle)}
      {...props}
    >
      {children}
    </span>
  );
}
