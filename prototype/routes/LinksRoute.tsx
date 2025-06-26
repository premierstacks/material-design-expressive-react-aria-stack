import type { ReactElement } from 'react';
import { ExpressiveElevatedLink, ExpressiveOutlinedLink, ExpressiveRandomSymbol, ExpressiveTextLink, ExpressiveTonalLink } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function LinksRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Items
        label="Elevated Link"
      >
        <ExpressiveElevatedLink
          label="Elevated Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Elevated Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Elevated Link"
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Elevated Link"
          isDisabled
          href="#fake"
        />
      </PrototypeDisplay.Items>
      <PrototypeDisplay.Items
        label="Tonal Link"
      >
        <ExpressiveTonalLink
          label="Tonal Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveTonalLink
          label="Tonal Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveTonalLink
          label="Tonal Link"
          href="#fake"
        />
        <ExpressiveTonalLink
          label="Tonal Link"
          isDisabled
          href="#fake"
        />
      </PrototypeDisplay.Items>
      <PrototypeDisplay.Items
        label="Filled Link"
      >
        <ExpressiveElevatedLink
          label="Filled Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Filled Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Filled Link"
          href="#fake"
        />
        <ExpressiveElevatedLink
          label="Filled Link"
          isDisabled
          href="#fake"
        />
      </PrototypeDisplay.Items>
      <PrototypeDisplay.Items
        label="Outlined Link"
      >
        <ExpressiveOutlinedLink
          label="Outlined Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveOutlinedLink
          label="Outlined Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveOutlinedLink
          label="Outlined Link"
          href="#fake"
        />
        <ExpressiveOutlinedLink
          label="Outlined Link"
          isDisabled
          href="#fake"
        />
      </PrototypeDisplay.Items>
      <PrototypeDisplay.Items
        label="Text Link"
      >
        <ExpressiveTextLink
          label="Text Link"
          symbol={<ExpressiveRandomSymbol />}
          href="#fake"
        />
        <ExpressiveTextLink
          label="Text Link"
          symbol={<ExpressiveRandomSymbol />}
          isDisabled
          href="#fake"
        />
        <ExpressiveTextLink
          label="Text Link"
          href="#fake"
        />
        <ExpressiveTextLink
          label="Text Link"
          isDisabled
          href="#fake"
        />
      </PrototypeDisplay.Items>
    </PrototypeDisplay>
  );
}
