import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { YouRootThemeEffect } from '../src/components/YouRootThemeEffect';
import { createRouter } from './router';

const el = document.createElement('div');

document.body.appendChild(el);

const router = createRouter();

createRoot(el).render(
  <StrictMode>
    <YouRootThemeEffect />
    <RouterProvider router={router} />
  </StrictMode>,
);
