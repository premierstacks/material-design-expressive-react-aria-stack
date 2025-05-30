import type { ReactElement } from 'react';
import { Link } from 'react-aria-components';

export function IndexRoute(): ReactElement {
  return (
    <main>
      <nav>
        <div>
          <Link href="/divider">Dividers</Link>
        </div>
        <div>
          <Link href="/shapes">Shapes</Link>
        </div>
        <div>
          <Link href="/cards">Cards</Link>
        </div>
        <div>
          <Link href="/activation">Activation Layer</Link>
        </div>
        <div>
          <Link href="/background">Background</Link>
        </div>
        <div>
          <Link href="/buttons">Buttons</Link>
        </div>
      </nav>
    </main>
  );
}
