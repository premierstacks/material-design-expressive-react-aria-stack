import stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { YouSymbolCircle, YouSymbolFlower, YouSymbolPill, YouSymbolRect, YouSymbolTriangle } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

const styles = stylex.create({
  base: {
    height: '4rem',
    width: '4rem',
  },
});

export function SymbolsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item><YouSymbolCircle xstyle={styles.base} /></PrototypeDisplay.Item>
      <PrototypeDisplay.Item><YouSymbolFlower xstyle={styles.base} /></PrototypeDisplay.Item>
      <PrototypeDisplay.Item><YouSymbolPill xstyle={styles.base} /></PrototypeDisplay.Item>
      <PrototypeDisplay.Item><YouSymbolRect xstyle={styles.base} /></PrototypeDisplay.Item>
      <PrototypeDisplay.Item><YouSymbolTriangle xstyle={styles.base} /></PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
