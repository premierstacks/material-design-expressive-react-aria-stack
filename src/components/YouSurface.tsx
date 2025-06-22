import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { youSysColor } from '../stylex/sys.stylex';

export interface YouSurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
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
});

export function YouSurface({ xstyle, surface = 1, ...props }: YouSurfaceProps): ReactElement {
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
