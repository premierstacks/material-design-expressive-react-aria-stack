import * as stylex from '@stylexjs/stylex';
import type { ReactElement, ReactNode } from 'react';
import { PrototypeDisplayItem } from './PrototypeDisplayItem';

interface PrototypeDisplayProps {
  readonly children: ReactNode;
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1rem',
  },
});

export function PrototypeDisplay({ children }: PrototypeDisplayProps): ReactElement {
  return (
    <main
      {...stylex.props(styles.base)}
    >
      {children}
    </main>
  );
}

PrototypeDisplay.Item = PrototypeDisplayItem;
