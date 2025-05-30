import type { ReactElement } from 'react';
import { YouHorizontalDivider, YouTildeHorizontalProvider, YouWiggleHorizontalDivider } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function YouDividersRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item>
        <YouHorizontalDivider />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouTildeHorizontalProvider />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouWiggleHorizontalDivider />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
