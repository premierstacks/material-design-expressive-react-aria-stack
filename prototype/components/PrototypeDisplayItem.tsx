import * as stylex from '@stylexjs/stylex';
import type { ReactElement, ReactNode } from 'react';
import { youSysColor } from '../../src/stylex/sys.stylex';

const styles = stylex.create({
  base: {
    backgroundImage: `radial-gradient(circle, rgb(${youSysColor.primary} / 0.2) 1px, transparent 1px), radial-gradient(circle, rgb(${youSysColor.primary} / 0.2) 1px, transparent 1px)`,
    backgroundPositionX: '0px, 5px',
    backgroundPositionY: '0px, 5px',
    backgroundRepeat: 'repeat',
    backgroundSize: '10px 10px',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingBottom: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '1rem',
  },
});

interface PrototypeDisplayItemProps {
  readonly children: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

export function PrototypeDisplayItem({ children, xstyle }: PrototypeDisplayItemProps): ReactElement {
  return (
    <div
      {...stylex.props(styles.base, xstyle)}
    >
      {children}
    </div>
  );
}
