import type { ReactElement } from 'react';
import { Link } from 'react-aria-components';

export function IndexRoute(): ReactElement {
  return (
    <main>
      <nav>
        <div>
          <Link
            href="/divider"
          >
            Dividers
          </Link>
        </div>
        <div>
          <Link
            href="/symbols"
          >
            Symbols
          </Link>
        </div>
        <div>
          <Link
            href="/interactions"
          >
            Interactions
          </Link>
        </div>
        <div>
          <Link
            href="/buttons"
          >
            Buttons
          </Link>
        </div>
        <div>
          <Link
            href="/app-bars"
          >
            App Bars
          </Link>
        </div>
        <div>
          <Link
            href="/navigation-rail"
          >
            Navigation Rail
          </Link>
        </div>
      </nav>
    </main>
  );
}
