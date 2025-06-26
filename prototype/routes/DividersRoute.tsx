import type { ReactElement } from 'react';
import { ExpressiveHorizontalDivider } from '../../src/components/ExpressiveHorizontalDivider';
import { ExpressiveTildeHorizontalDivider } from '../../src/components/ExpressiveTildeHorizontalDivider';
import { ExpressiveWiggleHorizontalDivider } from '../../src/components/ExpressiveWiggleHorizontalDivider';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function DividersRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item
        label="Horizontal Divider"
      >
        <ExpressiveHorizontalDivider />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Tilde Horizontal Divider"
      >
        <ExpressiveTildeHorizontalDivider />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item
        label="Wiggle Horizontal Divider"
      >
        <ExpressiveWiggleHorizontalDivider />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
