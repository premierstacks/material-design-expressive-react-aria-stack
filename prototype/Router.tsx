import { useCallback, type ReactElement } from 'react';
import { RouterProvider as AriaRouterProvider } from 'react-aria';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration, useHref, useNavigate, type Location, type NavigateOptions, type To } from 'react-router';
import { IndexRoute } from './routes/IndexRoute';
import { RootRoute } from './routes/RootRoute';
import { YouCommonAnchorRoute } from './routes/YouCommonAnchorRoute';
import { YouCommonButtonRoute } from './routes/YouCommonButtonRoute';
import { YouCommonLinkRoute } from './routes/YouCommonLinkRoute';
import { YouIconButtonRoute } from './routes/YouIconButtonRoute';
import { YouRulesRoute } from './routes/YouRulesRoute';
import { YouShapesRoute } from './routes/YouShapesRoute';
import { YouToggleIconButtonRoute } from './routes/YouToggleIconButtonRoute';
import { YouTopAppBarRoute } from './routes/YouTopAppBarRoute';

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
            path: 'shapes',
            element: <YouShapesRoute />,
          },
          {
            path: 'common-anchor',
            element: <YouCommonAnchorRoute />,
          },
          {
            path: 'common-button',
            element: <YouCommonButtonRoute />,
          },
          {
            path: 'common-link',
            element: <YouCommonLinkRoute />,
          },
          {
            path: 'icon-button',
            element: <YouIconButtonRoute />,
          },
          {
            path: 'toggle-icon-button',
            element: <YouToggleIconButtonRoute />,
          },
          {
            path: 'top-app-bar',
            element: <YouTopAppBarRoute />,
          },
          {
            path: 'rules',
            element: <YouRulesRoute />,
          },
        ],
      },
    ],
  },
]);

export function Router(): ReactElement {
  return <RouterProvider router={router} />;
}
