import type { ReactElement } from 'react';
import { YouSymbolCircle } from '../../src';
import { YouElevatedButton } from '../../src/components/YouElevatedButton';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function ButtonsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item>
        <YouElevatedButton
          label="Elevated Button"
          symbol={<YouSymbolCircle />}
        />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
