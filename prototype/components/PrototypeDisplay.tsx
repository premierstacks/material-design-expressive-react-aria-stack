import * as stylex from '@stylexjs/stylex';
import type { ReactElement, ReactNode } from 'react';
import { PrototypeDisplayItem } from './PrototypeDisplayItem';

interface PrototypeDisplayProps {
  readonly children: ReactNode;
}

const styles = stylex.create({
  base: {
    columnGap: '1rem',
    display: 'grid',
    rowGap: '1rem',
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
