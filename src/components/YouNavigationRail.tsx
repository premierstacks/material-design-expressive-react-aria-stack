import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youPresetMotion } from '../stylex/preset.stylex';
import { youSysColor } from '../stylex/sys.stylex';

export interface YouNavigationRailProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surface})`,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    overflowX: 'hidden',
    overflowY: 'hidden',
    transitionProperty: 'transform',
    width: 88,
  },
});

export function YouNavigationRail({ xstyle, ...props }: YouNavigationRailProps): ReactElement {
  return (
    <div
      {...stylex.props(
        styles.base,
        youPresetMotion.expressiveDefaultSpatial,
        xstyle,
      )}
      {...props}
    />
  );
}
