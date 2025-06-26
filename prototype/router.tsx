import { createBrowserRouter } from 'react-router';
import { AppBarsRoute } from './routes/AppBarsRoute';
import { ButtonsRoute } from './routes/ButtonsRoute';
import { ColorsRoute } from './routes/ColorsRoute';
import { DividersRoute } from './routes/DividersRoute';
import { FontsRoute } from './routes/FontsRoute';
import { HeadingsRoute } from './routes/HeadingsRoute';
import { IconButtonsRoute } from './routes/IconButtonsRoute';
import { IndexRoute } from './routes/IndexRoute';
import { InteractionsRoute } from './routes/InteractionsRoute';
import { LinksRoute } from './routes/LinksRoute';
import { NavigationRailRoute } from './routes/NavigationRailRoute';
import { RadiusRoute } from './routes/RadiusRoute';
import { ReactAriaProviderRoute } from './routes/ReactAriaProviderRoute';
import { ScrollRestorationRoute } from './routes/ScrollRestorationRoute';
import { SentinelRoute } from './routes/SentinelRoute';
import { SplitRoute } from './routes/SplitRoute';
import { SymbolsRoute } from './routes/SymbolsRoute';

export function createRouter() {
  return createBrowserRouter([
    {
      element: <SentinelRoute />,
      children: [
        {
          element: <ReactAriaProviderRoute />,
          children: [
            {
              element: <ScrollRestorationRoute />,
              children: [
                {
                  element: <SplitRoute />,
                  children: [
                    {
                      index: true,
                      element: <IndexRoute />,
                    },
                    {
                      path: 'symbols',
                      element: <SymbolsRoute />,
                    },
                    {
                      path: 'divider',
                      element: <DividersRoute />,
                    },
                    {
                      path: 'interactions',
                      element: <InteractionsRoute />,
                    },
                    {
                      path: 'buttons',
                      element: <ButtonsRoute />,
                    },
                    {
                      path: 'links',
                      element: <LinksRoute />,
                    },
                    {
                      path: 'app-bars',
                      element: <AppBarsRoute />,
                    },
                    {
                      path: 'navigation-rail',
                      element: <NavigationRailRoute />,
                    },
                    {
                      path: 'icon-buttons',
                      element: <IconButtonsRoute />,
                    },
                    {
                      path: 'fonts',
                      element: <FontsRoute />,
                    },
                    {
                      path: 'headings',
                      element: <HeadingsRoute />,
                    },
                    {
                      path: 'colors',
                      element: <ColorsRoute />,
                    },
                    {
                      path: 'radius',
                      element: <RadiusRoute />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
}
