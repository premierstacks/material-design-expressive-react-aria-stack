import type { ReactElement } from 'react';
import { YouHorizontalDivider, YouTildeHorizontalProvider, YouWiggleHorizontalDivider } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function YouRulesRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <YouHorizontalDivider />
      <YouTildeHorizontalProvider />
      <YouWiggleHorizontalDivider />
    </PrototypeDisplay>
  );
}
