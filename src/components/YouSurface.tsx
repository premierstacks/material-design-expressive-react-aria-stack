import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLProps, ReactNode } from 'react';
import { youSysColor, youSysShape } from '../vars/sys.stylex';

interface SurfaceProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
  isRounded?: boolean | undefined;
  tl?: boolean | undefined;
  tr?: boolean | undefined;
  br?: boolean | undefined;
  bl?: boolean | undefined;
}

const styles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surface})`,
    color: `rgb(${youSysColor.onSurface})`,
  },
  tl: {
    borderTopLeftRadius: youSysShape.cornerLarge,
  },
  tr: {
    borderTopRightRadius: youSysShape.cornerLarge,
  },
  br: {
    borderBottomRightRadius: youSysShape.cornerLarge,
  },
  bl: {
    borderBottomLeftRadius: youSysShape.cornerLarge,
  },
});

export const Surface: FC<SurfaceProps> = ({ xstyle, tl, tr, bl, br, ...props }: SurfaceProps): ReactNode => {
  return <div {...stylex.props(styles.base, tl ? styles.tl : null, tr ? styles.tr : null, bl ? styles.bl : null, br ? styles.br : null, xstyle)} {...props} />;
};
