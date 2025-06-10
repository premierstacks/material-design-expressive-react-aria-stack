import * as stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { Link } from 'react-aria-components';
import { Outlet } from 'react-router';
import { YouSurface, YouSurfacePadding } from '../../src';
import { YouPaneLayout } from '../../src/components/YouPaneLayout';
import { YouPanePadding } from '../../src/components/YouPanePadding';

function Nav(): ReactElement {
  return (
    <YouSurface>
      <YouSurfacePadding>
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
      </YouSurfacePadding>
    </YouSurface>
  );
}

const styles = stylex.create({ layout: { alignItems: 'start' } });

export function SplitRoute(): ReactElement {
  return (
    <YouPanePadding
      left
      right
      top
      bottom
    >
      <YouPaneLayout
        expanded="max-content 1fr"
        xstyle={styles.layout}
      >
        <Nav />
        <Outlet />
      </YouPaneLayout>
    </YouPanePadding>
  );
}
