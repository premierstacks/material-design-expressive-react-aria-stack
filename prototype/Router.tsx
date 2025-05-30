import { useCallback, type ReactElement } from 'react';
import { RouterProvider as AriaRouterProvider } from 'react-aria';
import { createBrowserRouter, Outlet, ScrollRestoration, useHref, useNavigate, type Location, type NavigateOptions, type To } from 'react-router';
import { IndexRoute } from './routes/IndexRoute';
import { RootRoute } from './routes/RootRoute';
import { YouActivationLayerRoute } from './routes/YouActivationLayerRoute';
import { YouBackgroundRoute } from './routes/YouBackgroundRoute';
import { YouCardRoute } from './routes/YouCardRoute';
import { YouDividersRoute } from './routes/YouRulesRoute';
import { YouShapesRoute } from './routes/YouShapesRoute';

function ReactAriaProvider(): ReactElement {
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (to: To, opts: NavigateOptions | undefined): void => {
      void navigate(to, opts);
    },
    [navigate],
  );

  const handleKey = useCallback(({ pathname }: Location): string => pathname, []);

  return (
    // eslint-disable-next-line react-compiler/react-compiler
    <AriaRouterProvider navigate={handleNavigate} useHref={useHref}>
      <ScrollRestoration getKey={handleKey} />
      <Outlet />
    </AriaRouterProvider>
  );
}

export function createRouter() {
  return createBrowserRouter([
    {
      element: <ReactAriaProvider />,
      children: [
        {
          path: '/',
          element: <RootRoute />,
          children: [
            {
              index: true,
              element: <IndexRoute />,
            },
            {
              path: 'shapes',
              element: <YouShapesRoute />,
            },
            {
              path: 'divider',
              element: <YouDividersRoute />,
            },
            {
              path: 'cards',
              element: <YouCardRoute />,
            },
            {
              path: 'activation',
              element: <YouActivationLayerRoute />,
            },
            {
              path: 'background',
              element: <YouBackgroundRoute />,
            },
          ],
        },
      ],
    },
  ]);
}
