import stylex from '@stylexjs/stylex';
import { useEffect, useState, type ReactElement } from 'react';
import { ExpressiveActivationLayer } from '../../src/components/ExpressiveActivationLayer';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

const styles = stylex.create({
  base: {
    height: '4rem',
    position: 'relative',
  },
});

export function InteractionsRoute(): ReactElement {
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [setIsActive]);

  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item
        label="Activation Layer"
        xstyle={styles.base}
      >
        <ExpressiveActivationLayer
          isActive={isActive}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        xstyle={styles.base}
      >
        <ExpressiveActivationLayer
          isActive={!isActive}
        />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
