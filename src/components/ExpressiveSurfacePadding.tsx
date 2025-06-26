import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';

type PaddingValue = number | string;

export interface ExpressiveSurfacePaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly padding?: PaddingValue;
  readonly left?: boolean | PaddingValue;
  readonly right?: boolean | PaddingValue;
  readonly top?: boolean | PaddingValue;
  readonly bottom?: boolean | PaddingValue;
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

export function ExpressiveSurfacePadding({ xstyle, padding = 16, left, right, top, bottom, ...props }: ExpressiveSurfacePaddingProps): ReactElement {
  if (left === undefined && right === undefined && top === undefined && bottom === undefined) {
    left = true;
    right = true;
    top = true;
    bottom = true;
  }

  return (
    <div
      {...stylex.props(
        bottom === true ? rootStyles.bottom(padding) : null,
        left === true ? rootStyles.left(padding) : null,
        right === true ? rootStyles.right(padding) : null,
        top === true ? rootStyles.top(padding) : null,
        typeof bottom === 'number' || typeof bottom === 'string' ? rootStyles.bottom(bottom) : null,
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
