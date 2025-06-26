import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressiveSysOpacity } from '../stylex/sys.stylex';

export interface ExpressiveInteractionLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
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
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    userSelect: 'none',
  },
  opacity: (pressed: string, hovered: string, focused: string, dragged: string) => ({
    opacity: `calc(${pressed} + ${hovered} + ${focused} + ${dragged})`,
  }),
});

export function ExpressiveInteractionLayer({ isHovered = false, isPressed = false, isFocused = false, isDragged = false, xstyle, ...props }: ExpressiveInteractionLayerProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        rootStyles.opacity(
          isPressed ? expressiveSysOpacity.pressed : '0',
          isHovered ? expressiveSysOpacity.hovered : '0',
          isFocused ? expressiveSysOpacity.focused : '0',
          isDragged ? expressiveSysOpacity.dragged : '0',
        ),
        xstyle,
      )}
      {...props}
    />
  );
}
