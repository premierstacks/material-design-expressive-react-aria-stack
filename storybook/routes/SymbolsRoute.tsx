import stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { ExpressiveIcon, ExpressiveSymbolCircle, ExpressiveSymbolFlower, ExpressiveSymbolPill, ExpressiveSymbolRect, ExpressiveSymbolTriangle } from '../../src';
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
        label="Circle"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolCircle
              xstyle={styles.base}
            />
          )}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Flower"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolFlower
              xstyle={styles.base}
            />
          )}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Pill"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolPill
              xstyle={styles.base}
            />
          )}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Rect"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolRect
              xstyle={styles.base}
            />
          )}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Triangle"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolTriangle
              xstyle={styles.base}
            />
          )}
        />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
