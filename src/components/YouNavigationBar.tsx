import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youPresetMotion, youPresetTypography } from '../stylex/preset.stylex';
import { youSysColor } from '../stylex/sys.stylex';

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
    transitionProperty: 'transform',
  },
});

export function YouNavigationBar({ xstyle, ...props }: YouNavigationBarProps): ReactElement {
  return (
    <div
      {...stylex.props(
        styles.base,
        youPresetMotion.expressiveDefaultSpatial,
        youPresetTypography.emphasizedLabelMedium,
        xstyle,
      )}
      {...props}
    />
  );
}
