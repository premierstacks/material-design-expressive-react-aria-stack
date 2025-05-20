import type { ReactElement } from 'react';
import { Link } from 'react-aria-components';

export function IndexRoute(): ReactElement {
  return (
    <main>
      <nav>
        <div>
          <Link href="/common-anchor">CommonAnchor</Link>
        </div>
        <div>
          <Link href="/common-button">CommonButton</Link>
        </div>
        <div>
          <Link href="/common-link">CommonLink</Link>
        </div>
        <div>
          <Link href="/icon-button">IconButton</Link>
        </div>
        <div>
          <Link href="/toggle-icon-button">ToggleIconButton</Link>
        </div>
        <div>
          <Link href="/top-app-bar">TopAppBar</Link>
        </div>
        <div>
          <Link href="/rules">Rules</Link>
        </div>
        <div>
          <Link href="/shapes">Shapes</Link>
        </div>
      </nav>
    </main>
  );
}
