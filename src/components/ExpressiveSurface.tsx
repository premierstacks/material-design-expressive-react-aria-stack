import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { expressiveSysColor } from '../stylex/sys.stylex';

export interface ExpressiveSurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly surface?: -1 | 0 | 1 | 2 | 3 | 4 | 5;
}

const rootStyles = stylex.create({
  base: {
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    color: `rgb(${expressiveSysColor.onSurface})`,
  },
  surface: {
    backgroundColor: `rgb(${expressiveSysColor.surface})`,
  },
  surfaceContainerLowest: {
    backgroundColor: `rgb(${expressiveSysColor.surfaceContainerLowest})`,
  },
  surfaceContainerLow: {
    backgroundColor: `rgb(${expressiveSysColor.surfaceContainerLow})`,
  },
  surfaceContainer: {
    backgroundColor: `rgb(${expressiveSysColor.surfaceContainer})`,
  },
  surfaceContainerHigh: {
    backgroundColor: `rgb(${expressiveSysColor.surfaceContainerHigh})`,
  },
  surfaceContainerHighest: {
    backgroundColor: `rgb(${expressiveSysColor.surfaceContainerHighest})`,
  },
});

export function ExpressiveSurface({ xstyle, surface = 1, ...props }: ExpressiveSurfaceProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        surface === 0 ? rootStyles.surfaceContainerLowest : null,
        surface === 1 ? rootStyles.surface : null,
        surface === 2 ? rootStyles.surfaceContainerLow : null,
        surface === 3 ? rootStyles.surfaceContainer : null,
        surface === 4 ? rootStyles.surfaceContainerHigh : null,
        surface === 5 ? rootStyles.surfaceContainerHighest : null,
        xstyle,
      )}
      {...props}
    />
  );
}
