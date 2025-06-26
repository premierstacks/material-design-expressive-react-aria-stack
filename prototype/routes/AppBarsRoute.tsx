import type { ReactElement } from 'react';
import { ExpressiveRandomSymbol } from '../../src';
import { ExpressiveIcon } from '../../src/components/ExpressiveIcon';
import { ExpressiveSmallAppBar } from '../../src/components/ExpressiveSmallAppBar';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function AppBarsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item
        label="Small App Bar"
      >
        <ExpressiveSmallAppBar
          leading={(
            <ExpressiveIcon
              size={40}
              symbol={<ExpressiveRandomSymbol />}
            />
          )}
          headline="Title Large"
          subhead="Label Large"
        />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
