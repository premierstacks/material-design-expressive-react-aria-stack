import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressiveSysDuration, expressiveSysOpacity, expressiveSysTimingFunction } from '../stylex/sys.stylex';

export interface ExpressiveFocusedStateLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly isFocused?: boolean;
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
  focused: {
    opacity: expressiveSysOpacity.focused,
  },
});

export function ExpressiveFocusedStateLayer({ isFocused = false, xstyle, ...props }: ExpressiveFocusedStateLayerProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        isFocused ? rootStyles.focused : null,
        xstyle,
      )}
      {...props}
    />
  );
}
