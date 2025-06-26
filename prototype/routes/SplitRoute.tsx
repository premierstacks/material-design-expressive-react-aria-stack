import * as stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { Link } from 'react-aria-components';
import { Outlet } from 'react-router';
import { ExpressiveSurface, ExpressiveSurfacePadding } from '../../src';
import { ExpressiveContainerPadding } from '../../src/components/ExpressiveContainerPadding';
import { ExpressivePaneGrid } from '../../src/components/ExpressivePaneGrid';
import { ExpressiveSurfaceRadius } from '../../src/components/ExpressiveSurfaceRadius';

function Nav(): ReactElement {
  return (
    <ExpressiveSurfaceRadius>
      <ExpressiveSurface>
        <ExpressiveSurfacePadding>
          <nav>
            <div>
              <Link
                href="/fonts"
              >
                Fonts
              </Link>
            </div>
            <div>
              <Link
                href="/headings"
              >
                Headings
              </Link>
            </div>
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
                href="/links"
              >
                Links
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
            <div>
              <Link
                href="/colors"
              >
                Colors
              </Link>
            </div>
            <div>
              <Link
                href="/radius"
              >
                Radius
              </Link>
            </div>
          </nav>
        </ExpressiveSurfacePadding>
      </ExpressiveSurface>
    </ExpressiveSurfaceRadius>
  );
}

const styles = stylex.create({ laexpressivet: { alignItems: 'start' } });

export function SplitRoute(): ReactElement {
  return (
    <ExpressiveContainerPadding
      left
      right
      top
      bottom
      padding={24}
    >
      <ExpressivePaneGrid
        columns="max-content 1fr"
        xstyle={styles.laexpressivet}
      >
        <Nav />
        <Outlet />
      </ExpressivePaneGrid>
    </ExpressiveContainerPadding>
  );
}
