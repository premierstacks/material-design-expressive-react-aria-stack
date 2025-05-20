/* eslint-disable react/no-array-index-key */

import stylex from '@stylexjs/stylex';
import type { ReactElement, ReactNode } from 'react';
import { youSysColor } from '../../src/vars/sys.stylex';

interface PrototypeDisplayProps {
  readonly children: Iterable<ReactNode>;
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
  },
  child: {
    backgroundImage: `radial-gradient(circle, rgb(${youSysColor.primary} / 0.2) 1px, transparent 1px), radial-gradient(circle, rgb(${youSysColor.primary} / 0.2) 1px, transparent 1px)`,
    backgroundPositionX: '0px, 5px',
    backgroundPositionY: '0px, 5px',
    backgroundRepeat: 'repeat',
    backgroundSize: '10px 10px',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: '1rem',
  },
});

export function PrototypeDisplay({ children }: PrototypeDisplayProps): ReactElement {
  return (
    <main {...stylex.props(styles.base)}>
      {[...children].map((child, index) => (
        <div key={index} {...stylex.props(styles.child)}>
          {child}
        </div>
      ))}
    </main>
  );
}
