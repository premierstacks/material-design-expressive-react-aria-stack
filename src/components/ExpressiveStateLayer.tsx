import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressiveSysOpacity } from '../stylex/sys.stylex';

export interface ExpressiveStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly isDragged?: boolean;
  readonly isFocused?: boolean;
  readonly isHovered?: boolean;
  readonly isPressed?: boolean;
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
    userSelect: 'none',
  },
  hovered: {
    opacity: expressiveSysOpacity.hovered,
  },
  pressed: {
    opacity: expressiveSysOpacity.pressed,
  },
  focused: {
    opacity: expressiveSysOpacity.focused,
  },
  dragged: {
    opacity: expressiveSysOpacity.dragged,
  },
});

export function ExpressiveStateLayer({ isHovered = false, isPressed = false, isFocused = false, isDragged = false, xstyle, ...props }: ExpressiveStateLayerProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        isHovered ? rootStyles.hovered : null,
        isFocused ? rootStyles.focused : null,
        isPressed ? rootStyles.pressed : null,
        isDragged ? rootStyles.dragged : null,
        xstyle,
      )}
      {...props}
    />
  );
}
