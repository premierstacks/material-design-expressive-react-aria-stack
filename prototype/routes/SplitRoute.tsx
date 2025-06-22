import * as stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { Link } from 'react-aria-components';
import { Outlet } from 'react-router';
import { YouSurface, YouSurfacePadding } from '../../src';
import { YouContainerPadding } from '../../src/components/YouContainerPadding';
import { YouPaneGrid } from '../../src/components/YouPaneGrid';
import { YouSurfaceRadius } from '../../src/components/YouSurfaceRadius';

function Nav(): ReactElement {
  return (
    <YouSurfaceRadius>
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
            <div>
              <Link
                href="/icon-buttons"
              >
                Icon Buttons
              </Link>
            </div>
          </nav>
        </YouSurfacePadding>
      </YouSurface>
    </YouSurfaceRadius>
  );
}

const styles = stylex.create({ layout: { alignItems: 'start' } });

export function SplitRoute(): ReactElement {
  return (
    <YouContainerPadding
      left
      right
      top
      bottom
    >
      <YouPaneGrid
        compact="1fr"
        expanded="max-content 1fr"
        xstyle={styles.layout}
      >
        <Nav />
        <Outlet />
      </YouPaneGrid>
    </YouContainerPadding>
  );
}
