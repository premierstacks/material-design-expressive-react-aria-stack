import type { ReactElement } from 'react';
import { useLocation } from 'react-router';
import { ExpressiveNavigationRail, ExpressiveNavigationRailItems, ExpressiveNavigationRailLink, ExpressiveRandomSymbol } from '../../src';
import { StorybookDisplay } from '../components/StorybookDisplay';

export function NavigationRailRoute(): ReactElement {
  const location = useLocation();

  return (
    <StorybookDisplay>
      <StorybookDisplay.Item
        label="Navigation Rail"
      >
        <ExpressiveNavigationRail>
          <ExpressiveNavigationRailItems>
            <ExpressiveNavigationRailLink
              href="#home"
              label="Home"
              aria-current={location.hash === '#home' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<ExpressiveRandomSymbol />}
            />
            <ExpressiveNavigationRailLink
              href="#about"
              label="About"
              aria-current={location.hash === '#about' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<ExpressiveRandomSymbol />}
            />
            <ExpressiveNavigationRailLink
              href="#contact"
              label="Contact"
              aria-current={location.hash === '#contact' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<ExpressiveRandomSymbol />}
            />
            <ExpressiveNavigationRailLink
              href="#profile"
              label="Profile"
              aria-current={location.hash === '#profile' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<ExpressiveRandomSymbol />}
            />
            <ExpressiveNavigationRailLink
              href="#shop"
              label="Shop"
              aria-current={location.hash === '#shop' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              isDisabled
              symbol={<ExpressiveRandomSymbol />}
            />
          </ExpressiveNavigationRailItems>
        </ExpressiveNavigationRail>
      </StorybookDisplay.Item>
    </StorybookDisplay>
  );
}
