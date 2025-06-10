import { createBrowserRouter } from 'react-router';
import { AppBarsRoute } from './routes/AppBarsRoute';
import { ButtonsRoute } from './routes/ButtonsRoute';
import { DividersRoute } from './routes/DividersRoute';
import { IndexRoute } from './routes/IndexRoute';
import { InteractionsRoute } from './routes/InteractionsRoute';
import { NavigationRailRoute } from './routes/NavigationRailRoute';
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
                      path: 'app-bars',
                      element: <AppBarsRoute />,
                    },
                    {
                      path: 'navigation-rail',
                      element: <NavigationRailRoute />,
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
