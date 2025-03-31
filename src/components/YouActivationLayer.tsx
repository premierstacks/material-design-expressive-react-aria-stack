import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { youSysColor } from '../vars/sys.stylex';

interface YouActivationLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  isActive?: boolean | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    borderRadius: 'inherit',
    inset: 0,
    pointerEvents: 'none',
    position: 'absolute',
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

export const YouActivationLayer: FC<YouActivationLayerProps> = ({ isActive, xstyle, ...props }: YouActivationLayerProps): ReactNode => {
  return <div {...stylex.props(styles.base, isActive ? styles.isActive : styles.isInactive, xstyle)} {...props} />;
};
