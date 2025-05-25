import type { ReactElement } from 'react';
import { Link } from 'react-aria-components';

export function IndexRoute(): ReactElement {
  return (
    <main>
      <nav>
        <div>
          <Link href="/rules">Rules</Link>
        </div>
        <div>
          <Link href="/shapes">Shapes</Link>
        </div>
        <div>
          <Link href="/cards">Cards</Link>
        </div>
      </nav>
    </main>
  );
}
