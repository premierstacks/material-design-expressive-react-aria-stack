import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressiveSysColor, expressiveSysDuration, expressiveSysTimingFunction } from '../stylex/sys.stylex';

export interface ExpressiveFocusOutlineLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly isFocusVisible?: boolean;
  readonly isInset?: boolean;
  readonly xstyle?: stylex.StyleXStyles;
}

const outlineKeyframes = stylex.keyframes({
  '0%': {
    outlineWidth: '0px',
  },
  '25%': {
    outlineWidth: '9px',
  },
  '100%': {
    outlineWidth: '3px',
  },
});

const insetKeyframes = stylex.keyframes({
  '0%': {
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  '25%': {
    borderBottomWidth: 9,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderTopWidth: 9,
  },
  '100%': {
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
  },
});

const rootStyles = stylex.create({
  base: {
    animationDuration: expressiveSysDuration.spatialDefault,
    animationFillMode: 'forwards',
    animationTimingFunction: expressiveSysTimingFunction.effectsDefault,
    borderBottomColor: `rgb(${expressiveSysColor.secondary})`,
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderBottomStyle: 'solid',
    borderBottomWidth: 0,
    borderLeftColor: `rgb(${expressiveSysColor.secondary})`,
    borderLeftStyle: 'solid',
    borderLeftWidth: 0,
    borderRightColor: `rgb(${expressiveSysColor.secondary})`,
    borderRightStyle: 'solid',
    borderRightWidth: 0,
    borderTopColor: `rgb(${expressiveSysColor.secondary})`,
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    borderTopStyle: 'solid',
    borderTopWidth: 0,
    bottom: 0,
    left: 0,
    outlineColor: `rgb(${expressiveSysColor.secondary})`,
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
    animationName: insetKeyframes,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
  },
  isOutline: {
    animationName: outlineKeyframes,
    outlineWidth: '3px',
  },
});

export function ExpressiveFocusedOutlineLayer({ isFocusVisible = false, isInset = false, xstyle, ...props }: ExpressiveFocusOutlineLayerProps): ReactElement {
  const variant = isInset ? rootStyles.isInset : rootStyles.isOutline;

  return (
    <div
      {...stylex.props(rootStyles.base, isFocusVisible ? variant : null, xstyle)}
      {...props}
    />
  );
}
