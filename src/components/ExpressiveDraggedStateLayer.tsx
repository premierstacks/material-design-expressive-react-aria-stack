import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressiveSysDuration, expressiveSysOpacity, expressiveSysTimingFunction } from '../stylex/sys.stylex';

export interface ExpressiveDraggedStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly isDragged?: boolean;
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
  dragged: {
    opacity: expressiveSysOpacity.dragged,
  },
});

export function ExpressiveDraggedStateLayer({ isDragged = false, xstyle, ...props }: ExpressiveDraggedStateLayerProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        isDragged ? rootStyles.dragged : null,
        xstyle,
      )}
      {...props}
    />
  );
}
