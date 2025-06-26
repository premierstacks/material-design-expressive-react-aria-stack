import type { ReactElement } from 'react';
import { ExpressiveOutlinedButton, ExpressiveRandomSymbol, ExpressiveTextButton, ExpressiveTonalButton } from '../../src';
import { ExpressiveElevatedButton } from '../../src/components/ExpressiveElevatedButton';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function ButtonsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Items
        label="Elevated Button"
      >
        <ExpressiveElevatedButton
          label="Elevated Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveElevatedButton
          label="Elevated Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveElevatedButton
          label="Elevated Button"
        />
        <ExpressiveElevatedButton
          label="Elevated Button"
          isDisabled
        />
      </PrototypeDisplay.Items>
      <PrototypeDisplay.Items
        label="Tonal Button"
      >
        <ExpressiveTonalButton
          label="Tonal Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveTonalButton
          label="Tonal Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveTonalButton
          label="Tonal Button"
        />
        <ExpressiveTonalButton
          label="Tonal Button"
          isDisabled
        />
      </PrototypeDisplay.Items>
      <PrototypeDisplay.Items
        label="Filled Button"
      >
        <ExpressiveElevatedButton
          label="Filled Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveElevatedButton
          label="Filled Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveElevatedButton
          label="Filled Button"
        />
        <ExpressiveElevatedButton
          label="Filled Button"
          isDisabled
        />
      </PrototypeDisplay.Items>
      <PrototypeDisplay.Items
        label="Outlined Button"
      >
        <ExpressiveOutlinedButton
          label="Outlined Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveOutlinedButton
          label="Outlined Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveOutlinedButton
          label="Outlined Button"
        />
        <ExpressiveOutlinedButton
          label="Outlined Button"
          isDisabled
        />
      </PrototypeDisplay.Items>
      <PrototypeDisplay.Items
        label="Text Button"
      >
        <ExpressiveTextButton
          label="Text Button"
          symbol={<ExpressiveRandomSymbol />}
        />
        <ExpressiveTextButton
          label="Text Button"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
        />
        <ExpressiveTextButton
          label="Text Button"
        />
        <ExpressiveTextButton
          label="Text Button"
          isDisabled
        />
      </PrototypeDisplay.Items>
    </PrototypeDisplay>
  );
}
