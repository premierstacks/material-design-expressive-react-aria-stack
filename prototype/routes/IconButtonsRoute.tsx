import type { ReactElement } from 'react';
import { YouSymbolCircle } from '../../src';
import { YouStandardIconButton } from '../../src/components/YouStandardIconButton';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function IconButtonsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item>
        <YouStandardIconButton
          symbol={<YouSymbolCircle />}
        />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
