import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { youSysColor, youSysState } from '../vars/sys.stylex';

export interface YouOutlineLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  xstyle?: stylex.StyleXStyles | undefined;
  isDisabled?: boolean | undefined;
}

const styles = stylex.create({
  base: {
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'currentcolor',
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    userSelect: 'none',
    opacity: 1,
    color: `rgb(${youSysColor.outline})`,
  },
  isDisabled: {
    opacity: youSysState.disabledOutlineOpacity,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
});

export const YouOutlineLayer: FC<YouOutlineLayerProps> = ({ isDisabled, xstyle, ...props }: YouOutlineLayerProps): ReactNode => {
  return <div {...stylex.props(styles.base, isDisabled ? styles.isDisabled : null, xstyle)} {...props} />;
};
