import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { useScreen } from '../hooks/media';

export interface YouContainerPaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly compact?: number | string;
  readonly expanded?: number | string;
  readonly extraLarge?: number | string;
  readonly large?: number | string;
  readonly medium?: number | string;
  readonly left?: boolean;
  readonly right?: boolean;
  readonly top?: boolean;
  readonly bottom?: boolean;
  readonly padding?: number | string;
}

const styles = stylex.create({
  left: (padding: number | string) => ({
    paddingLeft: padding,
  }),
  right: (padding: number | string) => ({
    paddingRight: padding,
  }),
  top: (padding: number | string) => ({
    paddingTop: padding,
  }),
  bottom: (padding: number | string) => ({
    paddingBottom: padding,
  }),
});

export function YouContainerPadding({ xstyle, padding, compact, medium = compact, expanded = medium, large = expanded, extraLarge = large, top, left, right, bottom, ...props }: YouContainerPaddingProps): ReactElement {
  const { compact: c, expanded: e, extraLarge: el, large: l, medium: m } = useScreen();

  if (top === undefined && left === undefined && right === undefined && bottom === undefined) {
    right = true;

    if (c) {
      left = true;
    }
  }

  if (padding === undefined && compact === undefined && medium === undefined && expanded === undefined && large === undefined && extraLarge === undefined) {
    padding = 16;

    if (m || l || el || e) {
      padding = 24;
    }
  }

  console.log(c, left, compact);

  return (
    <div
      {...stylex.props(
        c && left === true && compact !== undefined ? styles.left(compact) : null,
        c && right === true && compact !== undefined ? styles.right(compact) : null,
        c && top === true && compact !== undefined ? styles.top(compact) : null,
        c && bottom === true && compact !== undefined ? styles.bottom(compact) : null,
        m && left === true && medium !== undefined ? styles.left(medium) : null,
        m && right === true && medium !== undefined ? styles.right(medium) : null,
        m && top === true && medium !== undefined ? styles.top(medium) : null,
        m && bottom === true && medium !== undefined ? styles.bottom(medium) : null,
        e && left === true && expanded !== undefined ? styles.left(expanded) : null,
        e && right === true && expanded !== undefined ? styles.right(expanded) : null,
        e && top === true && expanded !== undefined ? styles.top(expanded) : null,
        e && bottom === true && expanded !== undefined ? styles.bottom(expanded) : null,
        l && left === true && large !== undefined ? styles.left(large) : null,
        l && right === true && large !== undefined ? styles.right(large) : null,
        l && top === true && large !== undefined ? styles.top(large) : null,
        l && bottom === true && large !== undefined ? styles.bottom(large) : null,
        el && left === true && extraLarge !== undefined ? styles.left(extraLarge) : null,
        el && right === true && extraLarge !== undefined ? styles.right(extraLarge) : null,
        el && top === true && extraLarge !== undefined ? styles.top(extraLarge) : null,
        el && bottom === true && extraLarge !== undefined ? styles.bottom(extraLarge) : null,
        left === true && padding !== undefined ? styles.left(padding) : null,
        right === true && padding !== undefined ? styles.right(padding) : null,
        top === true && padding !== undefined ? styles.top(padding) : null,
        bottom === true && padding !== undefined ? styles.bottom(padding) : null,
        xstyle,
      )}
      {...props}
    />
  );
}
