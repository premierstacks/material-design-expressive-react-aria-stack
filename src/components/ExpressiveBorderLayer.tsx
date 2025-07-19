import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressiveSysColor, expressiveSysOpacity } from '../stylex/sys.stylex';

export interface ExpressiveBorderLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly isDisabled?: boolean;
}

const rootStyles = stylex.create({
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
    color: `rgb(${expressiveSysColor.outline})`,
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
    color: `rgb(${expressiveSysColor.onSurfaceVariant})`,
    opacity: expressiveSysOpacity.disabledOutline,
  },
});

export function ExpressiveBorderLayer({ isDisabled = false, xstyle, ...props }: ExpressiveBorderLayerProps): ReactElement {
  return (
    <div
      {...stylex.props(rootStyles.base, isDisabled ? rootStyles.isDisabled : null, xstyle)}
      {...props}
    />
  );
}
