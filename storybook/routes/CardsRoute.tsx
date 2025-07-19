import type { ReactElement } from 'react';
import { ExpressiveFilledCard, ExpressiveSurfacePadding } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function CardsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item
        label="Filled Card"
      >
        <ExpressiveFilledCard>
          <ExpressiveSurfacePadding>
            Filled Card
          </ExpressiveSurfacePadding>
        </ExpressiveFilledCard>
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
