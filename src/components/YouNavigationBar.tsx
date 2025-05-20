import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion } from '../vars/sys.stylex';

interface YouNavigationBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly isHidden?: boolean;
  readonly isFixed?: boolean;
  readonly isSurfaceContainer?: boolean;
  readonly isSurfaceBright?: boolean;
  readonly isSurfaceDim?: boolean;
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
  isFixed: {
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    zIndex: 50,
  },
  isHidden: {
    transform: 'translateY(100%)',
  },
  isVisible: {
    transform: 'translateY(0%)',
  },
  isSurfaceBright: { backgroundColor: `rgb(${youSysColor.surfaceBright})` },
  isSurfaceContainer: { backgroundColor: `rgb(${youSysColor.surfaceContainer})` },
  isSurfaceDim: { backgroundColor: `rgb(${youSysColor.surfaceDim})` },
});

export function YouNavigationBar({ xstyle, isHidden = false, isFixed = false, isSurfaceBright = false, isSurfaceContainer = false, isSurfaceDim = false, ...props }: YouNavigationBarProps): ReactElement {
  return (
    <div
      {...stylex.props(
        styles.base,
        youStylesTypography.labelMedium,
        isFixed ? styles.isFixed : null,
        isHidden ? styles.isHidden : styles.isVisible,
        isSurfaceBright ? styles.isSurfaceBright : null,
        isSurfaceContainer ? styles.isSurfaceContainer : null,
        isSurfaceDim ? styles.isSurfaceDim : null,
        xstyle,
      )}
      {...props}
    />
  );
}
