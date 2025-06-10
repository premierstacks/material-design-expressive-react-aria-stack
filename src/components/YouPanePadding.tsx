import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { useScreen } from '../hooks/media';

export interface YouPanePaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
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

export function YouPanePadding({ xstyle, compact = 16, medium = 24, expanded = medium, large = expanded, extraLarge = large, top, left, right, bottom, ...props }: YouPanePaddingProps): ReactElement {
  const { compact: c, expanded: e, extraLarge: el, large: l, medium: m } = useScreen();

  if (top === undefined && left === undefined && right === undefined && bottom === undefined) {
    right = true;

    if (c) {
      left = true;
    }
  }

  return (
    <div
      {...stylex.props(
        c && left === true ? styles.left(compact) : null,
        c && right === true ? styles.right(compact) : null,
        c && top === true ? styles.top(compact) : null,
        c && bottom === true ? styles.bottom(compact) : null,
        m && left === true ? styles.left(medium) : null,
        m && right === true ? styles.right(medium) : null,
        m && top === true ? styles.top(medium) : null,
        m && bottom === true ? styles.bottom(medium) : null,
        e && left === true ? styles.left(expanded) : null,
        e && right === true ? styles.right(expanded) : null,
        e && top === true ? styles.top(expanded) : null,
        e && bottom === true ? styles.bottom(expanded) : null,
        l && left === true ? styles.left(large) : null,
        l && right === true ? styles.right(large) : null,
        l && top === true ? styles.top(large) : null,
        l && bottom === true ? styles.bottom(large) : null,
        el && left === true ? styles.left(extraLarge) : null,
        el && right === true ? styles.right(extraLarge) : null,
        el && top === true ? styles.top(extraLarge) : null,
        el && bottom === true ? styles.bottom(extraLarge) : null,
        xstyle,
      )}
      {...props}
    />
  );
}
