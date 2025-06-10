import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { youSysColor, youSysShape } from '../stylex/sys.stylex';

export interface YouSurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  readonly topleft?: boolean;
  readonly topright?: boolean;
  readonly bottomleft?: boolean;
  readonly bottomright?: boolean;
  readonly radius?: number | string;
}

const rootStyles = stylex.create({
  base: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  surface: {
    backgroundColor: `rgb(${youSysColor.surface})`,
  },
  surfaceContainerLowest: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerLowest})`,
  },
  surfaceContainerLow: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerLow})`,
  },
  surfaceContainer: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
  },
  surfaceContainerHigh: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerHigh})`,
  },
  surfaceContainerHighest: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerHighest})`,
  },
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

export function YouSurface({ xstyle, radius = youSysShape.cornerLarge, elevation = 1, topleft, topright, bottomleft, bottomright, ...props }: YouSurfaceProps): ReactElement {
  if (topleft === undefined && topright === undefined && bottomleft === undefined && bottomright === undefined) {
    topleft = true;
    topright = true;
    bottomleft = true;
    bottomright = true;
  }

  return (
    <div
      {...stylex.props(
        rootStyles.base,
        elevation === 0 ? rootStyles.surfaceContainerLowest : null,
        elevation === 1 ? rootStyles.surface : null,
        elevation === 2 ? rootStyles.surfaceContainerLow : null,
        elevation === 3 ? rootStyles.surfaceContainer : null,
        elevation === 4 ? rootStyles.surfaceContainerHigh : null,
        elevation === 5 ? rootStyles.surfaceContainerHighest : null,
        topleft === true ? rootStyles.topleft(radius) : null,
        topright === true ? rootStyles.topright(radius) : null,
        bottomleft === true ? rootStyles.bottomleft(radius) : null,
        bottomright === true ? rootStyles.bottomright(radius) : null,
        xstyle,
      )}
      {...props}
    />
  );
}
