import type { ReactElement } from 'react';
import { YouSymbolCircle } from '../../src';
import { YouSmallAppBar } from '../../src/components/YouSmallAppBar';
import { YouSymbol } from '../../src/components/YouSymbol';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function AppBarsRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item><YouSmallAppBar leading={<YouSymbol size={40} symbol={<YouSymbolCircle />} />} headline="Title Large" subhead="Label Large" /></PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
