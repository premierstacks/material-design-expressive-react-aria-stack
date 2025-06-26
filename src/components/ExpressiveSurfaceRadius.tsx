import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { expressiveSysRadius } from '../stylex/sys.stylex';

type RadiusValue = number | string;

export interface ExpressiveSurfaceRadiusProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly topleft?: boolean | RadiusValue;
  readonly topright?: boolean | RadiusValue;
  readonly bottomleft?: boolean | RadiusValue;
  readonly bottomright?: boolean | RadiusValue;
  readonly radius?: RadiusValue;
}

const rootStyles = stylex.create({
  topleft: (radius: RadiusValue) => ({
    borderTopLeftRadius: radius,
  }),
  topright: (radius: RadiusValue) => ({
    borderTopRightRadius: radius,
  }),
  bottomleft: (radius: RadiusValue) => ({
    borderBottomLeftRadius: radius,
  }),
  bottomright: (radius: RadiusValue) => ({
    borderBottomRightRadius: radius,
  }),
});

export function ExpressiveSurfaceRadius({ xstyle, radius = expressiveSysRadius.large, topleft, topright, bottomleft, bottomright, ...props }: ExpressiveSurfaceRadiusProps): ReactElement {
  if (topleft === undefined && topright === undefined && bottomleft === undefined && bottomright === undefined) {
    topleft = true;
    topright = true;
    bottomleft = true;
    bottomright = true;
  }

  return (
    <div
      {...stylex.props(
        bottomright === true ? rootStyles.bottomright(radius) : null,
        topleft === true ? rootStyles.topleft(radius) : null,
        topright === true ? rootStyles.topright(radius) : null,
        bottomleft === true ? rootStyles.bottomleft(radius) : null,
        typeof bottomright === 'number' || typeof bottomright === 'string' ? rootStyles.bottomright(bottomright) : null,
        typeof topleft === 'number' || typeof topleft === 'string' ? rootStyles.topleft(topleft) : null,
        typeof topright === 'number' || typeof topright === 'string' ? rootStyles.topright(topright) : null,
        typeof bottomleft === 'number' || typeof bottomleft === 'string' ? rootStyles.bottomleft(bottomleft) : null,
        xstyle,
      )}
      {...props}
    />
  );
}
