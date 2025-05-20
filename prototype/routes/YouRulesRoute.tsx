import type { ReactElement } from 'react';
import { YouHorizontalRule, YouTildeRule, YouWiggleRule } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function YouRulesRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      {[
        <YouHorizontalRule key={1} />,
        <YouTildeRule key={2} />,
        <YouWiggleRule key={3} />,
      ]}
    </PrototypeDisplay>
  );
}
