import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';

type PaddingValue = number | string;

export interface ExpressiveContainerPaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly left?: boolean | PaddingValue;
  readonly right?: boolean | PaddingValue;
  readonly top?: boolean | PaddingValue;
  readonly bottom?: boolean | PaddingValue;
  readonly padding?: PaddingValue;
}

const rootStyles = stylex.create({
  left: (padding: PaddingValue) => ({
    paddingLeft: padding,
  }),
  right: (padding: PaddingValue) => ({
    paddingRight: padding,
  }),
  top: (padding: PaddingValue) => ({
    paddingTop: padding,
  }),
  bottom: (padding: PaddingValue) => ({
    paddingBottom: padding,
  }),
});

export function ExpressiveContainerPadding({ xstyle, padding, top, left, right, bottom, ...props }: ExpressiveContainerPaddingProps): ReactElement {
  return (
    <div
      {...stylex.props(
        left === true && padding !== undefined ? rootStyles.left(padding) : null,
        right === true && padding !== undefined ? rootStyles.right(padding) : null,
        top === true && padding !== undefined ? rootStyles.top(padding) : null,
        bottom === true && padding !== undefined ? rootStyles.bottom(padding) : null,
        typeof left === 'number' || typeof left === 'string' ? rootStyles.left(left) : null,
        typeof right === 'number' || typeof right === 'string' ? rootStyles.right(right) : null,
        typeof top === 'number' || typeof top === 'string' ? rootStyles.top(top) : null,
        typeof bottom === 'number' || typeof bottom === 'string' ? rootStyles.bottom(bottom) : null,
        xstyle,
      )}
      {...props}
    />
  );
}
