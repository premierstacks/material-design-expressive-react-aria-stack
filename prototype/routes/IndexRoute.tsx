import type { ReactElement } from 'react';
import { Link } from 'react-aria-components';

export function IndexRoute(): ReactElement {
  return (
    <main>
      <nav>
        <div>
          <Link href="/components/you-common-anchor">YouCommonAnchor</Link>
        </div>
        <div>
          <Link href="/components/you-common-button">YouCommonButton</Link>
        </div>
        <div>
          <Link href="/components/you-common-link">YouCommonLink</Link>
        </div>
        <div>
          <Link href="/components/you-fab-button">YouFabButton</Link>
        </div>
        <div>
          <Link href="/components/you-icon-button">YouIconButton</Link>
        </div>
        <div>
          <Link href="/components/you-rules">YouRules</Link>
        </div>
        <div>
          <Link href="/components/you-toggle-icon-button">YouToggleIconButton</Link>
        </div>
        <div>
          <Link href="/components/you-top-app-bar">YouTopAppBar</Link>
        </div>
      </nav>
    </main>
  );
}
