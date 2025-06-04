import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youSysColor, youSysState } from '../stylex/sys.stylex';

export interface YouOutlineLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly isDisabled?: boolean;
}

const styles = stylex.create({
  base: {
    borderBottomColor: 'currentcolor',
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderLeftColor: 'currentcolor',
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
    borderRightColor: 'currentcolor',
    borderRightStyle: 'solid',
    borderRightWidth: '1px',
    borderTopColor: 'currentcolor',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    bottom: 0,
    color: `rgb(${youSysColor.outline})`,
    left: 0,
    opacity: 1,
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    userSelect: 'none',
  },
  isDisabled: {
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    opacity: youSysState.disabledOutlineOpacity,
  },
});

export function YouOutlineLayer({ isDisabled = false, xstyle, ...props }: YouOutlineLayerProps): ReactElement {
  return (
    <div
      {...stylex.props(styles.base, isDisabled ? styles.isDisabled : null, xstyle)}
      {...props}
    />
  );
}
