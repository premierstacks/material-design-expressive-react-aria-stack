import type { ReactElement } from 'react';
import { useLocation } from 'react-router';
import { YouNavigationRail, YouNavigationRailItems, YouNavigationRailLink, YouSymbolCircle, YouSymbolFlower, YouSymbolPill, YouSymbolRect, YouSymbolTriangle } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function NavigationRailRoute(): ReactElement {
  const location = useLocation();

  return (
    <PrototypeDisplay>
      <PrototypeDisplay.Item>
        <YouNavigationRail>
          <YouNavigationRailItems>
            <YouNavigationRailLink
              href="#home"
              label="Home"
              aria-current={location.hash === '#home' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<YouSymbolCircle />}
            />
            <YouNavigationRailLink
              href="#about"
              label="About"
              aria-current={location.hash === '#about' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<YouSymbolFlower />}
            />
            <YouNavigationRailLink
              href="#contact"
              label="Contact"
              aria-current={location.hash === '#contact' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<YouSymbolPill />}
            />
            <YouNavigationRailLink
              href="#profile"
              label="Profile"
              aria-current={location.hash === '#profile' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              symbol={<YouSymbolRect />}
            />
            <YouNavigationRailLink
              href="#shop"
              label="Shop"
              aria-current={location.hash === '#shop' ? 'page' : undefined}
              routerOptions={{ replace: true }}
              isDisabled
              symbol={<YouSymbolTriangle />}
            />
          </YouNavigationRailItems>
        </YouNavigationRail>
      </PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
