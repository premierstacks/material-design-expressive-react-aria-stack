import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes } from 'react';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion } from '../vars/sys.stylex';

interface YouTopAppBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
  isFixed?: boolean | undefined;
  isOffscreen?: boolean | undefined;
  isSticky?: boolean | undefined;
  isSurfaceContainer?: boolean | undefined;
  isSurfaceContainerLowest?: boolean | undefined;
  isSurfaceBright?: boolean | undefined;
  isSurface?: boolean | undefined;
  isSurfaceDim?: boolean | undefined;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  isPadded?: boolean | undefined;
  isCentered?: boolean | undefined;
}

const styles = stylex.create({
  base: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr',
    columnGap: 16,
    alignItems: 'center',
    height: 64,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperties: 'left, right, top, bottom, transform',
  },
  hasLeading: {
    gridTemplateColumns: 'auto 1fr',
  },
  hasLeadingAndTrailing: {
    gridTemplateColumns: 'auto 1fr auto',
  },
  isCentered: {
    gridTemplateColumns: '1fr auto 1fr',
  },
  isPadded: {
    paddingInline: 16,
  },
  isSticky: {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
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
    color: `rgb(${youSysColor.onSurface})`,
    display: 'flex',
    alignItems: 'center',
  },
  children: {
    color: `rgb(${youSysColor.onSurface})`,
    display: 'flex',
    alignItems: 'center',
  },
  trailing: {
    justifySelf: 'end',
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    display: 'flex',
    alignItems: 'center',
  },
});

export const YouTopAppBar: FC<YouTopAppBarProps> = ({
  xstyle,
  isSticky,
  isOffscreen,
  isSurfaceContainer,
  isSurfaceContainerLowest,
  isSurfaceBright,
  isSurface,
  isSurfaceDim,
  leading,
  trailing,
  children,
  isPadded,
  isCentered,
  ...props
}: YouTopAppBarProps) => {
  return (
    <div
      {...stylex.props(
        styles.base,
        leading ? styles.hasLeading : null,
        leading && trailing ? styles.hasLeadingAndTrailing : null,
        isCentered ? styles.isCentered : null,
        isPadded ? styles.isPadded : null,
        isSticky ? styles.isSticky : null,
        isSurfaceContainer ? styles.isSurfaceContainer : null,
        isSurfaceContainerLowest ? styles.isSurfaceContainerLowest : null,
        isSurfaceBright ? styles.isSurfaceBright : null,
        isSurface ? styles.isSurface : null,
        isSurfaceDim ? styles.isSurfaceDim : null,
        isOffscreen ? styles.isOffScreen : styles.isOnScreen,
        xstyle,
      )}
      {...props}
    >
      {leading ? <div {...stylex.props(styles.leading)}>{leading}</div> : null}
      {children ? <div {...stylex.props(styles.children, youStylesTypography.titleLarge)}>{children}</div> : null}
      {trailing ? <div {...stylex.props(styles.trailing)}>{trailing}</div> : null}
    </div>
  );
};
