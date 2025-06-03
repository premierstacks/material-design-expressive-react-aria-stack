import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youPresetTypography } from '../stylex/preset.stylex';
import { youSysColor, youSysMotion } from '../stylex/sys.stylex';

export interface YouNavigationBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surface})`,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    columnGap: 8,
    display: 'flex',
    height: 80,
    overflowX: 'hidden',
    overflowY: 'hidden',
    rowGap: 8,
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'transform',
    transitionTimingFunction: youSysMotion.easingEmphasized,
  },
});

export function YouNavigationBar({ xstyle, ...props }: YouNavigationBarProps): ReactElement {
  return (
    <div
      {...stylex.props(
        styles.base,
        youPresetTypography.labelMedium,
        xstyle,
      )}
      {...props}
    />
  );
}
