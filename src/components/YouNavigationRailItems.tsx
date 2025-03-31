import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';

interface YouNavigationRailItemsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
  isPadded?: boolean | undefined;
}

const styles = stylex.create({
  base: {
    display: 'flex',
    rowGap: 12,
    flexDirection: 'column',
  },
  isPadded: {
    paddingBlock: 18,
  },
});

export const YouNavigationRailItems: FC<YouNavigationRailItemsProps> = ({ xstyle, isPadded, ...props }: YouNavigationRailItemsProps): ReactNode => {
  return <div {...stylex.props(styles.base, isPadded ? styles.isPadded : null, xstyle)} {...props} />;
};
