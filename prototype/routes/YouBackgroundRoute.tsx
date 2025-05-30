import type { ReactElement } from 'react';
import { YouBackgroundContent } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function YouBackgroundRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item>
        <YouBackgroundContent>
          Background Padding
        </YouBackgroundContent>
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
