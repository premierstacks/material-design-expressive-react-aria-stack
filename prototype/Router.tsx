import { useCallback, type ReactElement } from 'react';
import { RouterProvider as AriaRouterProvider } from 'react-aria-components';
import { createBrowserRouter, Outlet, ScrollRestoration, useHref, useNavigate, type Location, type NavigateOptions, type To } from 'react-router';
import { AppBarsRoute } from './routes/AppBarsRoute';
import { ButtonsRoute } from './routes/ButtonsRoute';
import { DividersRoute } from './routes/DividersRoute';
import { IndexRoute } from './routes/IndexRoute';
import { InteractionsRoute } from './routes/InteractionsRoute';
import { SymbolsRoute } from './routes/SymbolsRoute';

function ReactAriaProviderRoute(): ReactElement {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (to: To, opts: NavigateOptions | undefined): void => {
      void navigate(to, opts);
    },
    [navigate],
  );

  return (
    // eslint-disable-next-line react-compiler/react-compiler
    <AriaRouterProvider navigate={handleNavigate} useHref={useHref}>
      <Outlet />
    </AriaRouterProvider>
  );
}

function ScrollRestorationRoute(): ReactElement {
  const handleKey = useCallback(({ pathname }: Location): string => pathname, []);

  return (
    <>
      <ScrollRestoration getKey={handleKey} />
      <Outlet />
    </>
  );
}

export function createRouter() {
  return createBrowserRouter([
    {
      element: <ReactAriaProviderRoute />,
      children: [
        {
          element: <ScrollRestorationRoute />,
          children: [
            {
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
              ],
            },
          ],
        },
      ],
    },
  ]);
}
