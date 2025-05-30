import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youSysColor, youSysMotion } from '../vars/sys.stylex';

interface YouActivationLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly isActive?: boolean;
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'transform, opacity',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    userSelect: 'none',
  },
  isActive: {
    opacity: 1,
    transform: 'scaleX(100%)',
  },
  isInactive: {
    opacity: 0,
    transform: 'scaleX(0%)',
  },
});

export function YouActivationLayer({ isActive = false, xstyle, ...props }: YouActivationLayerProps): ReactElement {
  return <div {...stylex.props(styles.base, isActive ? styles.isActive : styles.isInactive, xstyle)} {...props} />;
}
