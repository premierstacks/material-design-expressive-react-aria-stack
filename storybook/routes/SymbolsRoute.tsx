import stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { ExpressiveIcon, ExpressiveSymbolCircle, ExpressiveSymbolFlower, ExpressiveSymbolPill, ExpressiveSymbolRect, ExpressiveSymbolTriangle } from '../../src';
import { StorybookDisplay } from '../components/StorybookDisplay';

const styles = stylex.create({
  base: {
    height: '4rem',
    width: '4rem',
  },
});

export function SymbolsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Circle"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolCircle
              xstyle={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Flower"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolFlower
              xstyle={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Pill"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolPill
              xstyle={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Rect"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolRect
              xstyle={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Triangle"
      >
        <ExpressiveIcon
          symbol={(
            <ExpressiveSymbolTriangle
              xstyle={styles.base}
            />
          )}
        />
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
