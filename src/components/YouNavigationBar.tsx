import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactNode } from 'react';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion } from '../vars/sys.stylex';

interface YouNavigationBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  xstyle?: stylex.StyleXStyles | undefined;
  isHidden?: boolean | undefined;
  isFixed?: boolean | undefined;
  isSurfaceContainer?: boolean | undefined;
  isSurfaceBright?: boolean | undefined;
  isSurfaceDim?: boolean | undefined;
}

const styles = stylex.create({
  base: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    backgroundColor: `rgb(${youSysColor.surface})`,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    height: 80,
    display: 'flex',
    rowGap: 8,
    columnGap: 8,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    tranisitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'transform',
  },
  isFixed: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
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

export function YouNavigationBar({ xstyle, isHidden, isFixed, isSurfaceBright, isSurfaceContainer, isSurfaceDim, ...props }: YouNavigationBarProps): ReactNode {
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
