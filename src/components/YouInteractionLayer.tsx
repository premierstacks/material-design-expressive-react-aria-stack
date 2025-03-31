import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { youSysState } from '../vars/sys.stylex';

export interface YouInteractionLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  isDragged?: boolean | undefined;
  isFocused?: boolean | undefined;
  isHovered?: boolean | undefined;
  isPressed?: boolean | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const rootStyles = stylex.create({
  base: {
    backgroundColor: 'currentColor',
    borderRadius: 'inherit',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    userSelect: 'none',
  },
  opacity: (pressed: string, hovered: string, focused: string, dragged: string) => ({
    opacity: `calc(${pressed} + ${hovered} + ${focused} + ${dragged})`,
  }),
});

export const YouInteractionLayer: FC<YouInteractionLayerProps> = ({ isHovered, isPressed, isFocused, isDragged, xstyle, ...props }: YouInteractionLayerProps): ReactNode => {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        rootStyles.opacity(
          isPressed ? youSysState.pressedStateLayerOpacity : '0',
          isHovered ? youSysState.hoverStateLayerOpacity : '0',
          isFocused ? youSysState.focusStateLayerOpacity : '0',
          isDragged ? youSysState.draggedStateLayerOpacity : '0',
        ),
        xstyle,
      )}
      {...props}
    />
  );
};
