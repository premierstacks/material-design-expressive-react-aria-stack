import type { ReactElement } from 'react';
import { ExpressiveHorizontalDivider } from '../../src/components/ExpressiveHorizontalDivider';
import { ExpressiveTildeHorizontalDivider } from '../../src/components/ExpressiveTildeHorizontalDivider';
import { ExpressiveWiggleHorizontalDivider } from '../../src/components/ExpressiveWiggleHorizontalDivider';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function DividersRoute(): ReactElement {
  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Horizontal Divider"
      >
        <ExpressiveHorizontalDivider />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Tilde Horizontal Divider"
      >
        <ExpressiveTildeHorizontalDivider />
      </StorybookDisplay.Item>
      <StorybookDisplay.Item
        label="Wiggle Horizontal Divider"
      >
        <ExpressiveWiggleHorizontalDivider />
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
