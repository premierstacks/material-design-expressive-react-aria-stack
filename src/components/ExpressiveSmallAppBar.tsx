import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { expressivePresetFont, expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor } from '../stylex/sys.stylex';

export interface ExpressiveSmallAppBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly headline?: ReactNode;
  readonly subhead?: ReactNode;
  readonly leading?: ReactNode;
  readonly trailing?: ReactNode;
}

const rootStyles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: `rgb(${expressiveSysColor.surface})`,
    color: `rgb(${expressiveSysColor.onSurface})`,
    columnGap: 16,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative',
    transitionProperty: 'left, right, top, bottom, transform',
  },
});

const leadingStyles = stylex.create({
  base: {
    alignItems: 'center',
    color: `rgb(${expressiveSysColor.onSurface})`,
    display: 'flex',
  },
});

const contentStyles = stylex.create({
  base: {
    color: `rgb(${expressiveSysColor.onSurface})`,
  },
});

const trailingStyles = stylex.create({
  base: {
    alignItems: 'center',
    color: `rgb(${expressiveSysColor.onSurfaceVariant})`,
    display: 'flex',
    justifySelf: 'end',
  },
});

const headlineStyles = stylex.create({
  base: {
    color: `rgb(${expressiveSysColor.onSurface})`,
  },
});

const subheadStyles = stylex.create({
  base: {
    color: `rgb(${expressiveSysColor.onSurfaceVariant})`,
  },
});

export function ExpressiveSmallAppBar({
  xstyle,
  leading,
  trailing,
  headline,
  subhead,
  ...props
}: ExpressiveSmallAppBarProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        expressivePresetTransition.spatialDefault,
        xstyle,
      )}
      {...props}
    >
      <div
        {...stylex.props(leadingStyles.base)}
      >
        {leading}
      </div>
      <div
        {...stylex.props(contentStyles.base)}
      >
        {headline !== undefined
          ? (
              <div
                {...stylex.props(headlineStyles.base, expressivePresetFont.titleLarge)}
              >
                {headline}
              </div>
            )
          : null}
        {subhead !== undefined
          ? (
              <div
                {...stylex.props(subheadStyles.base, expressivePresetFont.labelLarge)}
              >
                {subhead}
              </div>
            )
          : null}
      </div>
      <div
        {...stylex.props(trailingStyles.base)}
      >
        {trailing}
      </div>
    </div>
  );
}
