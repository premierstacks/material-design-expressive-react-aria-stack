import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { useScreen } from '../hooks/media';
import { youSysShape } from '../stylex/sys.stylex';

export interface YouSurfaceRadiusProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly topleft?: boolean;
  readonly topright?: boolean;
  readonly bottomleft?: boolean;
  readonly bottomright?: boolean;
  readonly compact?: string | number;
  readonly expanded?: string | number;
  readonly extraLarge?: string | number;
  readonly large?: string | number;
  readonly medium?: string | number;
  readonly radius?: number | string;
}

const rootStyles = stylex.create({
  topleft: (radius: number | string) => ({
    borderTopLeftRadius: radius,
  }),
  topright: (radius: number | string) => ({
    borderTopRightRadius: radius,
  }),
  bottomleft: (radius: number | string) => ({
    borderBottomLeftRadius: radius,
  }),
  bottomright: (radius: number | string) => ({
    borderBottomRightRadius: radius,
  }),
});

export function YouSurfaceRadius({ xstyle, radius, topleft, topright, bottomleft, bottomright, compact, expanded = compact, medium = expanded, large = medium, extraLarge = large, ...props }: YouSurfaceRadiusProps): ReactElement {
  const { compact: c, medium: m, expanded: e, large: l, extraLarge: xl } = useScreen();

  if (topleft === undefined && topright === undefined && bottomleft === undefined && bottomright === undefined) {
    topleft = true;
    topright = true;
    bottomleft = true;
    bottomright = true;
  }

  if (radius === undefined && compact === undefined && medium === undefined && expanded === undefined && large === undefined && extraLarge === undefined) {
    radius = youSysShape.cornerLarge;
  }

  return (
    <div
      {...stylex.props(
        topleft === true && c && compact !== undefined ? rootStyles.topleft(compact) : null,
        topleft === true && m && medium !== undefined ? rootStyles.topleft(medium) : null,
        topleft === true && e && expanded !== undefined ? rootStyles.topleft(expanded) : null,
        topleft === true && l && large !== undefined ? rootStyles.topleft(large) : null,
        topleft === true && xl && extraLarge !== undefined ? rootStyles.topleft(extraLarge) : null,
        topleft === true && radius !== undefined ? rootStyles.topleft(radius) : null,
        topright === true && c && compact !== undefined ? rootStyles.topright(compact) : null,
        topright === true && m && medium !== undefined ? rootStyles.topright(medium) : null,
        topright === true && e && expanded !== undefined ? rootStyles.topright(expanded) : null,
        topright === true && l && large !== undefined ? rootStyles.topright(large) : null,
        topright === true && xl && extraLarge !== undefined ? rootStyles.topright(extraLarge) : null,
        topright === true && radius !== undefined ? rootStyles.topright(radius) : null,
        bottomleft === true && c && compact !== undefined ? rootStyles.bottomleft(compact) : null,
        bottomleft === true && m && medium !== undefined ? rootStyles.bottomleft(medium) : null,
        bottomleft === true && e && expanded !== undefined ? rootStyles.bottomleft(expanded) : null,
        bottomleft === true && l && large !== undefined ? rootStyles.bottomleft(large) : null,
        bottomleft === true && xl && extraLarge !== undefined ? rootStyles.bottomleft(extraLarge) : null,
        bottomleft === true && radius !== undefined ? rootStyles.bottomleft(radius) : null,
        bottomright === true && c && compact !== undefined ? rootStyles.bottomright(compact) : null,
        bottomright === true && m && medium !== undefined ? rootStyles.bottomright(medium) : null,
        bottomright === true && e && expanded !== undefined ? rootStyles.bottomright(expanded) : null,
        bottomright === true && l && large !== undefined ? rootStyles.bottomright(large) : null,
        bottomright === true && xl && extraLarge !== undefined ? rootStyles.bottomright(extraLarge) : null,
        bottomright === true && radius !== undefined ? rootStyles.bottomright(radius) : null,
        xstyle,
      )}
      {...props}
    />
  );
}
