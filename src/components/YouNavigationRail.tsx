import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { youSysColor, youSysMotion } from '../vars/sys.stylex';

interface YouNavigationRailProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
  isOffscreen?: boolean | undefined;
  isFixed?: boolean | undefined;
  isSurfaceDim?: boolean | undefined;
  isSurfaceContainer?: boolean | undefined;
}

const styles = stylex.create({
  base: {
    overflow: 'hidden',
    width: 88,
    backgroundColor: `rgb(${youSysColor.surface})`,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    tranisitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'transform',
  },
  isSurfaceDim: {
    backgroundColor: `rgb(${youSysColor.surfaceDim})`,
  },
  isSurfaceContainer: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
  },
  isFixed: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 50,
  },
  isOffScreen: {
    transform: 'translateX(-100%)',
  },
  isOnScreen: {
    transform: 'translateX(0%)',
  },
});

export const YouNavigationRail: FC<YouNavigationRailProps> = ({ xstyle, isOffscreen, isFixed, isSurfaceDim, isSurfaceContainer, ...props }: YouNavigationRailProps): ReactNode => {
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
};

interface YouNavigationRailPaddingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
}

const railStyles = stylex.create({
  base: {
    paddingTop: 18,
    paddingBottom: 18,
  },
});

export const YouNavigationRailPadding: FC<YouNavigationRailPaddingProps> = ({ xstyle, ...props }: YouNavigationRailPaddingProps): ReactNode => {
  return <div {...stylex.props(railStyles.base, xstyle)} {...props} />;
};
