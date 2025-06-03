import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { youPresetTypography } from '../stylex/preset.stylex';
import { youSysColor, youSysMotion } from '../stylex/sys.stylex';

export interface YouSmallAppBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly headline?: ReactNode;
  readonly subhead?: ReactNode;
  readonly leading?: ReactNode;
  readonly trailing?: ReactNode;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: `rgb(${youSysColor.surface})`,
    color: `rgb(${youSysColor.onSurface})`,
    columnGap: 16,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'left, right, top, bottom, transform',
    transitionTimingFunction: youSysMotion.easingEmphasized,
  },
  leading: {
    alignItems: 'center',
    color: `rgb(${youSysColor.onSurface})`,
    display: 'flex',
  },
  content: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  trailing: {
    alignItems: 'center',
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    display: 'flex',
    justifySelf: 'end',
  },
  headline: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  subhead: {
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
});

export function YouSmallAppBar({
  xstyle,
  leading,
  trailing,
  headline,
  subhead,
  ...props
}: YouSmallAppBarProps): ReactElement {
  return (
    <div
      {...stylex.props(
        styles.base,
        xstyle,
      )}
      {...props}
    >
      <div {...stylex.props(styles.leading)}>{leading}</div>
      <div {...stylex.props(styles.content)}>
        {headline !== undefined ? <div {...stylex.props(styles.headline, youPresetTypography.titleLarge)}>{headline}</div> : null}
        {subhead !== undefined ? <div {...stylex.props(styles.subhead, youPresetTypography.labelLarge)}>{subhead}</div> : null}
      </div>
      <div {...stylex.props(styles.trailing)}>{trailing}</div>
    </div>
  );
}
