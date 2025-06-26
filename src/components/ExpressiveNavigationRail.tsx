import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor } from '../stylex/sys.stylex';

export interface ExpressiveNavigationRailProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    backgroundColor: `rgb(${expressiveSysColor.surface})`,
    color: `rgb(${expressiveSysColor.onSurfaceVariant})`,
    overflowX: 'hidden',
    overflowY: 'hidden',
    transitionProperty: 'transform',
    width: 88,
  },
});

export function ExpressiveNavigationRail({ xstyle, ...props }: ExpressiveNavigationRailProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        expressivePresetTransition.spatialDefault,
        xstyle,
      )}
      {...props}
    />
  );
}
