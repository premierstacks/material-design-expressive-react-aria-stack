import * as stylex from '@stylexjs/stylex';
import type { ReactElement, ReactNode } from 'react';
import { PrototypeDisplayItem } from './PrototypeDisplayItem';
import { PrototypeDisplayItems } from './PrototypeDisplayItems';

interface PrototypeDisplayProps {
  readonly children: ReactNode;
}

const rootStyles = stylex.create({
  base: {
    columnGap: '4rem',
    display: 'grid',
    rowGap: '4rem',
  },
});

export function PrototypeDisplay({ children }: PrototypeDisplayProps): ReactElement {
  return (
    <main
      {...stylex.props(rootStyles.base)}
    >
      {children}
    </main>
  );
}

PrototypeDisplay.Item = PrototypeDisplayItem;
PrototypeDisplay.Items = PrototypeDisplayItems;
