import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { applyRootTheme } from '../src/components/YouRootThemeProvider';
import { createRouter } from './router';

applyRootTheme();

const el = document.createElement('div');

document.body.appendChild(el);

const router = createRouter();

createRoot(el).render(
  <StrictMode>
    <RouterProvider
      router={router}
    />
  </StrictMode>,
);
