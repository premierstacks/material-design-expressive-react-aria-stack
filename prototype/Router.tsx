import type { FC, ReactNode } from 'react';
import { RouterProvider as AriaRouterProvider } from 'react-aria';
import { createBrowserRouter, Outlet, RouterProvider, useHref, useNavigate, type NavigateOptions, type To } from 'react-router';
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

export const ReactAriaProvider: FC = (): ReactNode => {
  const navigate = useNavigate();

  return (
    <AriaRouterProvider useHref={useHref} navigate={(to: To, opts: NavigateOptions | undefined) => void navigate(to, opts)}>
      <Outlet />
    </AriaRouterProvider>
  );
};

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

export const Router: FC = (): ReactNode => {
  return <RouterProvider router={router} />;
};
