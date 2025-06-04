import type { ReactElement } from 'react';
import { YouSymbolCircle } from '../../src';
import { YouIcon } from '../../src/components/YouIcon';
import { YouSmallAppBar } from '../../src/components/YouSmallAppBar';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function AppBarsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item>
        <YouSmallAppBar
          leading={(
            <YouIcon
              size={40}
              symbol={<YouSymbolCircle />}
            />
          )}
          headline="Title Large"
          subhead="Label Large"
        />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
