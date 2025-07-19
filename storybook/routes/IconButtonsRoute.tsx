import type { ReactElement } from 'react';
import { ExpressiveRandomSymbol, ExpressiveTouchTarget } from '../../src';
import { ExpressiveStandardIconButton } from '../../src/components/ExpressiveStandardIconButton';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function IconButtonsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Items
        label="Standard Icon Button"
      >
        <ExpressiveTouchTarget>
          <ExpressiveStandardIconButton
            symbol={<ExpressiveRandomSymbol />}
          />
        </ExpressiveTouchTarget>
        <ExpressiveTouchTarget>
          <ExpressiveStandardIconButton
            symbol={<ExpressiveRandomSymbol />}
            isDisabled
          />
        </ExpressiveTouchTarget>
      </PrototypeDisplay.Items>
    </PrototypeDisplay>
  );
}
