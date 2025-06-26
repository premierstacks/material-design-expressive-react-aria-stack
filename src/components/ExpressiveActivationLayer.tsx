import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor } from '../stylex/sys.stylex';

export interface ExpressiveActivationLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly isActive?: boolean;
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    backgroundColor: `rgb(${expressiveSysColor.secondaryContainer})`,
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    transitionProperty: 'transform, opacity',
    userSelect: 'none',
  },
  isActive: {
    opacity: 1,
    transform: 'scaleX(100%)',
  },
  isInactive: {
    opacity: 0,
    transform: 'scaleX(0%)',
  },
});

export function ExpressiveActivationLayer({ isActive = false, xstyle, ...props }: ExpressiveActivationLayerProps): ReactElement {
  return (
    <div
      {...stylex.props(rootStyles.base, expressivePresetTransition.spatialFast, isActive ? rootStyles.isActive : rootStyles.isInactive, xstyle)}
      {...props}
    />
  );
}
