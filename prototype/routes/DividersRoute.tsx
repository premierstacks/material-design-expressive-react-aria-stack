import type { ReactElement } from 'react';
import { YouHorizontalDivider } from '../../src/components/YouHorizontalDivider';
import { YouTildeHorizontalDivider } from '../../src/components/YouTildeHorizontalDivider';
import { YouWiggleHorizontalDivider } from '../../src/components/YouWiggleHorizontalDivider';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function DividersRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item>
        <YouHorizontalDivider />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouTildeHorizontalDivider />
      </PrototypeDisplay.Item>
      <PrototypeDisplay.Item>
        <YouWiggleHorizontalDivider />
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
