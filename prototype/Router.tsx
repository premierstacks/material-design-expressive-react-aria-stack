import { useCallback, type ReactElement } from 'react';
import { RouterProvider as AriaRouterProvider } from 'react-aria';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, useHref, useNavigate, type Location, type NavigateOptions, type To } from 'react-router';
import { IndexRoute } from './routes/IndexRoute';
import { RootRoute } from './routes/RootRoute';
import YouCommonAnchorRoute from './routes/YouCommonAnchorRoute';
import YouCommonButtonRoute from './routes/YouCommonButtonRoute';
import YouCommonLinkRoute from './routes/YouCommonLinkRoute';
import YouFabButtonRoute from './routes/YouFabButtonRoute';
import YouIconButtonRoute from './routes/YouIconButtonRoute';
import YouRulesRoute from './routes/YouRulesRoute';
import YouToggleIconButtonRoute from './routes/YouToggleIconButtonRoute';
import YouTopAppBarRoute from './routes/YouTopAppBarRoute';

export function ReactAriaProvider(): ReactElement {
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

const router = createBrowserRouter([
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
            path: 'components',
            children: [
              {
                path: 'you-common-anchor',
                element: <YouCommonAnchorRoute />,
              },
              {
                path: 'you-common-button',
                element: <YouCommonButtonRoute />,
              },
              {
                path: 'you-common-link',
                element: <YouCommonLinkRoute />,
              },
              {
                path: 'you-fab-button',
                element: <YouFabButtonRoute />,
              },
              {
                path: 'you-icon-button',
                element: <YouIconButtonRoute />,
              },
              {
                path: 'you-rules',
                element: <YouRulesRoute />,
              },
              {
                path: 'you-toggle-icon-button',
                element: <YouToggleIconButtonRoute />,
              },
              {
                path: 'you-top-app-bar',
                element: <YouTopAppBarRoute />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export function Router(): ReactElement {
  return <RouterProvider router={router} />;
}
