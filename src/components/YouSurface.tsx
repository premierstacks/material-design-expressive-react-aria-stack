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

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surface})`,
    color: `rgb(${youSysColor.onSurface})`,
  },
  topleft: {
    borderTopLeftRadius: youSysShape.cornerLarge,
  },
  topright: {
    borderTopRightRadius: youSysShape.cornerLarge,
  },
  bottomright: {
    borderBottomRightRadius: youSysShape.cornerLarge,
  },
  bottomleft: {
    borderBottomLeftRadius: youSysShape.cornerLarge,
  },
});

export function Surface({ xstyle, topleft = false, topright = false, bottomleft = false, bottomright = false, ...props }: SurfaceProps): ReactElement {
  return <div {...stylex.props(styles.base, topleft ? styles.topleft : null, topright ? styles.topright : null, bottomleft ? styles.bottomleft : null, bottomright ? styles.bottomright : null, xstyle)} {...props} />;
}
