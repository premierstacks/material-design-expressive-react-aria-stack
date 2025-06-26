import stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { ExpressiveRandomSymbol } from '../../src';
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
      <PrototypeDisplay.Item
        label="Symbol Circle"
      >
        <ExpressiveRandomSymbol
          xstyle={styles.base}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Symbol Flower"
      >
        <ExpressiveRandomSymbol
          xstyle={styles.base}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Symbol Pill"
      >
        <ExpressiveRandomSymbol
          xstyle={styles.base}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Symbol Rectangle"
      >
        <ExpressiveRandomSymbol
          xstyle={styles.base}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Symbol Triangle"
      >
        <ExpressiveRandomSymbol
          xstyle={styles.base}
        />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
