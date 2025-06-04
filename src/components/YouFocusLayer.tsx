import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youSysColor } from '../stylex/sys.stylex';

export interface YouFocusLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly isFocusVisible?: boolean;
  readonly isInset?: boolean;
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    borderBottomColor: `rgb(${youSysColor.secondary})`,
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderBottomStyle: 'solid',
    borderBottomWidth: 0,
    borderLeftColor: `rgb(${youSysColor.secondary})`,
    borderLeftStyle: 'solid',
    borderLeftWidth: 0,
    borderRightColor: `rgb(${youSysColor.secondary})`,
    borderRightStyle: 'solid',
    borderRightWidth: 0,
    borderTopColor: `rgb(${youSysColor.secondary})`,
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    borderTopStyle: 'solid',
    borderTopWidth: 0,
    bottom: 0,
    left: 0,
    outlineColor: `rgb(${youSysColor.secondary})`,
    outlineOffset: '2px',
    outlineStyle: 'solid',
    outlineWidth: '0px',
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    userSelect: 'none',
    zIndex: 90,
  },
  isInset: {
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
  },
  isOutline: {
    outlineWidth: '3px',
  },
});

export function YouFocusLayer({ isFocusVisible = false, isInset = false, xstyle, ...props }: YouFocusLayerProps): ReactElement {
  const variant = isInset ? styles.isInset : styles.isOutline;

  return (
    <div
      {...stylex.props(styles.base, isFocusVisible ? variant : null, xstyle)}
      {...props}
    />
  );
}
