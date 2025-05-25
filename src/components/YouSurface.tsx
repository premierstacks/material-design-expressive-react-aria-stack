import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { youSysColor, youSysShape } from '../vars/sys.stylex';

interface SurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly isRounded?: boolean;
  readonly topleft?: boolean;
  readonly topright?: boolean;
  readonly bottomright?: boolean;
  readonly bottomleft?: boolean;
}

const rootStyles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surface})`,
    borderBottomLeftRadius: youSysShape.cornerLarge,
    borderBottomRightRadius: youSysShape.cornerLarge,
    borderTopLeftRadius: youSysShape.cornerLarge,
    borderTopRightRadius: youSysShape.cornerLarge,
    color: `rgb(${youSysColor.onSurface})`,
  },
});

export function Surface({ xstyle, ...props }: SurfaceProps): ReactElement {
  return <div {...stylex.props(rootStyles.base, xstyle)} {...props} />;
}

interface YouSurfaceContentProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const contentStyles = stylex.create({
  base: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});

export function YouSurfaceContent({ xstyle, ...props }: YouSurfaceContentProps): ReactElement {
  return <div {...stylex.props(contentStyles.base, xstyle)} {...props} />;
}

Surface.Content = YouSurfaceContent;
