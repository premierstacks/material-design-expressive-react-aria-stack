import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { expressivePresetFont, expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor } from '../stylex/sys.stylex';

export interface ExpressiveNavigationBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    backgroundColor: `rgb(${expressiveSysColor.surface})`,
    color: `rgb(${expressiveSysColor.onSurfaceVariant})`,
    columnGap: 8,
    display: 'flex',
    height: 80,
    overflowX: 'hidden',
    overflowY: 'hidden',
    rowGap: 8,
    transitionProperty: 'transform',
  },
});

export function ExpressiveNavigationBar({ xstyle, ...props }: ExpressiveNavigationBarProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        expressivePresetTransition.spatialDefault,
        expressivePresetFont.labelMedium,
        xstyle,
      )}
      {...props}
    />
  );
}
