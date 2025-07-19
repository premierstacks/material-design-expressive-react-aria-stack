import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressiveSysDuration, expressiveSysOpacity, expressiveSysTimingFunction } from '../stylex/sys.stylex';

export interface ExpressiveHoveredStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly isHovered?: boolean;
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    backgroundColor: 'currentColor',
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    bottom: 0,
    left: 0,
    opacity: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    transitionDuration: expressiveSysDuration.effectsSlow,
    transitionProperty: 'opacity',
    transitionTimingFunction: expressiveSysTimingFunction.effectsSlow,
    userSelect: 'none',
  },
  hovered: {
    opacity: expressiveSysOpacity.hovered,
  },
});

export function ExpressiveHoveredStateLayer({ isHovered = false, xstyle, ...props }: ExpressiveHoveredStateLayerProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        isHovered ? rootStyles.hovered : null,
        xstyle,
      )}
      {...props}
    />
  );
}
