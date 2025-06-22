import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { useScreen } from '../hooks/media';

export interface YouSurfacePaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly compact?: string | number;
  readonly expanded?: string | number;
  readonly extraLarge?: string | number;
  readonly large?: string | number;
  readonly medium?: string | number;
  readonly padding?: string | number;
  readonly left?: boolean;
  readonly right?: boolean;
  readonly top?: boolean;
  readonly bottom?: boolean;
}

const styles = stylex.create({
  left: (padding: string | number) => ({
    paddingLeft: padding,
  }),
  right: (padding: string | number) => ({
    paddingRight: padding,
  }),
  top: (padding: string | number) => ({
    paddingTop: padding,
  }),
  bottom: (padding: string | number) => ({
    paddingBottom: padding,
  }),
});

export function YouSurfacePadding({ xstyle, compact, medium = compact, expanded = medium, large = expanded, extraLarge = large, padding, left, right, top, bottom, ...props }: YouSurfacePaddingProps): ReactElement {
  const { compact: c, medium: m, expanded: e, large: l, extraLarge: xl } = useScreen();

  if (compact === undefined && medium === undefined && expanded === undefined && large === undefined && extraLarge === undefined && padding === undefined) {
    padding = 16;
  }

  if (left === undefined && right === undefined && top === undefined && bottom === undefined) {
    left = true;
    right = true;
    top = true;
    bottom = true;
  }

  return (
    <div
      {...stylex.props(
        left === true && c && compact !== undefined ? styles.left(compact) : null,
        left === true && m && medium !== undefined ? styles.left(medium) : null,
        left === true && e && expanded !== undefined ? styles.left(expanded) : null,
        left === true && l && large !== undefined ? styles.left(large) : null,
        left === true && xl && extraLarge !== undefined ? styles.left(extraLarge) : null,
        left === true && padding !== undefined ? styles.left(padding) : null,
        right === true && c && compact !== undefined ? styles.right(compact) : null,
        right === true && m && medium !== undefined ? styles.right(medium) : null,
        right === true && e && expanded !== undefined ? styles.right(expanded) : null,
        right === true && l && large !== undefined ? styles.right(large) : null,
        right === true && xl && extraLarge !== undefined ? styles.right(extraLarge) : null,
        right === true && padding !== undefined ? styles.right(padding) : null,
        top === true && c && compact !== undefined ? styles.top(compact) : null,
        top === true && m && medium !== undefined ? styles.top(medium) : null,
        top === true && e && expanded !== undefined ? styles.top(expanded) : null,
        top === true && l && large !== undefined ? styles.top(large) : null,
        top === true && xl && extraLarge !== undefined ? styles.top(extraLarge) : null,
        top === true && padding !== undefined ? styles.top(padding) : null,
        bottom === true && c && compact !== undefined ? styles.bottom(compact) : null,
        bottom === true && m && medium !== undefined ? styles.bottom(medium) : null,
        bottom === true && e && expanded !== undefined ? styles.bottom(expanded) : null,
        bottom === true && l && large !== undefined ? styles.bottom(large) : null,
        bottom === true && xl && extraLarge !== undefined ? styles.bottom(extraLarge) : null,
        bottom === true && padding !== undefined ? styles.bottom(padding) : null,
        xstyle,
      )}
      {...props}
    />
  );
}
