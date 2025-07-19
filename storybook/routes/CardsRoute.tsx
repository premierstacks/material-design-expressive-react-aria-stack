import type { ReactElement } from 'react';
import { ExpressiveFilledCard, ExpressiveSurfacePadding } from '../../src';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function CardsRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Filled Card"
      >
        <ExpressiveFilledCard>
          <ExpressiveSurfacePadding>
            Filled Card
          </ExpressiveSurfacePadding>
        </ExpressiveFilledCard>
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
