import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { youSysColor } from '../vars/sys.stylex';

export interface YouFocusLayerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {
  isFocusVisible?: boolean | undefined;
  isInset?: boolean | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const rootStyles = stylex.create({
  base: {
    borderColor: `rgb(${youSysColor.secondary})`,
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 0,
    inset: 0,
    outlineColor: `rgb(${youSysColor.secondary})`,
    outlineOffset: 2,
    outlineStyle: 'solid',
    outlineWidth: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    userSelect: 'none',
    zIndex: 90,
  },
  inset: {
    borderWidth: 3,
  },
  outline: {
    outlineWidth: 3,
  },
});

export const YouFocusLayer: FC<YouFocusLayerProps> = ({ isFocusVisible, isInset, xstyle, ...props }: YouFocusLayerProps): ReactNode => {
  return <div {...stylex.props(rootStyles.base, isFocusVisible ? (isInset ? rootStyles.inset : rootStyles.outline) : null, xstyle)} {...props} />;
};
