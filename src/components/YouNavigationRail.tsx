import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youSysColor, youSysMotion } from '../vars/sys.stylex';

interface YouNavigationRailProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly isOffscreen?: boolean;
  readonly isFixed?: boolean;
  readonly isSurfaceDim?: boolean;
  readonly isSurfaceContainer?: boolean;
}

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surface})`,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    overflowX: 'hidden',
    overflowY: 'hidden',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'transform',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    width: 88,
  },
  isSurfaceDim: {
    backgroundColor: `rgb(${youSysColor.surfaceDim})`,
  },
  isSurfaceContainer: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
  },
  isFixed: {
    bottom: 0,
    left: 0,
    position: 'fixed',
    top: 0,
    zIndex: 50,
  },
  isOffScreen: {
    transform: 'translateX(-100%)',
  },
  isOnScreen: {
    transform: 'translateX(0%)',
  },
});

export function YouNavigationRail({ xstyle, isOffscreen = false, isFixed = false, isSurfaceDim = false, isSurfaceContainer = false, ...props }: YouNavigationRailProps): ReactElement {
  return (
    <div
      {...stylex.props(
        styles.base,
        isSurfaceDim ? styles.isSurfaceDim : null,
        isSurfaceContainer ? styles.isSurfaceContainer : null,
        isFixed ? styles.isFixed : null,
        isOffscreen ? styles.isOffScreen : styles.isOnScreen,
        xstyle,
      )}
      {...props}
    />
  );
}
