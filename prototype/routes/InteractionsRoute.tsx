import stylex from '@stylexjs/stylex';
import { useEffect, useState, type ReactElement } from 'react';
import { YouActivationLayer } from '../../src/components/YouActivationLayer';
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
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [setIsActive]);

  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item
        xstyle={styles.base}
      >
        <YouActivationLayer
          isActive={isActive}
        />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        xstyle={styles.base}
      >
        <YouActivationLayer
          isActive={!isActive}
        />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
