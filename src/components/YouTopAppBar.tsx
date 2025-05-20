import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion } from '../vars/sys.stylex';

interface YouSmallTopAppBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly isFixed?: boolean;
  readonly isOffScreen?: boolean;
  readonly isSticky?: boolean;
  readonly isSurfaceContainer?: boolean;
  readonly isSurfaceContainerLowest?: boolean;
  readonly isSurfaceBright?: boolean;
  readonly isSurface?: boolean;
  readonly isSurfaceDim?: boolean;
  readonly leading?: ReactNode;
  readonly trailing?: ReactNode;
  readonly isPadded?: boolean;
  readonly isCentered?: boolean;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    columnGap: 16,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'left, right, top, bottom, transform',
    transitionTimingFunction: youSysMotion.easingEmphasized,
  },
  isSticky: {
    left: 0,
    position: 'sticky',
    right: 0,
    top: 0,
    zIndex: 40,
  },
  isSurfaceContainer: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
  },
  isSurfaceContainerLowest: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerLowest})`,
  },
  isSurfaceBright: {
    backgroundColor: `rgb(${youSysColor.surfaceBright})`,
  },
  isSurface: {
    backgroundColor: `rgb(${youSysColor.surface})`,
  },
  isSurfaceDim: {
    backgroundColor: `rgb(${youSysColor.surfaceDim})`,
  },
  isOffScreen: {
    transform: 'translateY(-100%)',
  },
  isOnScreen: {
    transform: 'translateY(0%)',
  },
  leading: {
    alignItems: 'center',
    color: `rgb(${youSysColor.onSurface})`,
    display: 'flex',
  },
  children: {
    alignItems: 'center',
    color: `rgb(${youSysColor.onSurface})`,
    display: 'flex',
  },
  trailing: {
    alignItems: 'center',
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    display: 'flex',
    justifySelf: 'end',
  },
});

export function YouSmallTopAppBar({
  xstyle,
  isSticky = false,
  isOffScreen = false,
  isSurfaceContainer = false,
  isSurfaceContainerLowest = false,
  isSurfaceBright = false,
  isSurface = false,
  isSurfaceDim = false,
  leading,
  trailing,
  children,
  ...props
}: YouSmallTopAppBarProps): ReactElement {
  return (
    <div
      {...stylex.props(
        styles.base,
        isSticky ? styles.isSticky : null,
        isSurfaceContainer ? styles.isSurfaceContainer : null,
        isSurfaceContainerLowest ? styles.isSurfaceContainerLowest : null,
        isSurfaceBright ? styles.isSurfaceBright : null,
        isSurface ? styles.isSurface : null,
        isSurfaceDim ? styles.isSurfaceDim : null,
        isOffScreen ? styles.isOffScreen : styles.isOnScreen,
        xstyle,
      )}
      {...props}
    >
      <div {...stylex.props(styles.leading)}>{leading}</div>
      <div {...stylex.props(styles.children, youStylesTypography.titleLarge)}>{children}</div>
      <div {...stylex.props(styles.trailing)}>{trailing}</div>
    </div>
  );
}
