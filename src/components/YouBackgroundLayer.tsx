import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { youSysColor, youSysState } from '../vars/sys.stylex';

export interface YouBackgroundLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  xstyle?: stylex.StyleXStyles | undefined;
  isDisabled?: boolean | undefined;
}

const styles = stylex.create({
  base: {
    inset: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    userSelect: 'none',
    backgroundColor: 'inherit',
    borderRadius: 'inherit',
  },
  isDisabled: {
    backgroundColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
  },
});

export const YouBackgroundLayer: FC<YouBackgroundLayerProps> = ({ xstyle, isDisabled, ...props }: YouBackgroundLayerProps): ReactNode => {
  return <div {...stylex.props(styles.base, isDisabled ? styles.isDisabled : null, xstyle)} {...props} />;
};
