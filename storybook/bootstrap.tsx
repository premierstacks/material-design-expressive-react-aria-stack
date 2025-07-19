import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ExpressiveHeadingContext } from '../src';
import { applyDocumentBackground } from '../src/components/ExpressiveDocumentBackgroundEffect';
import { createRouter } from './router';

const el = document.createElement('div');

document.body.appendChild(el);

applyDocumentBackground();

const router = createRouter();

createRoot(el).render(
  <StrictMode>
    <ExpressiveHeadingContext>
      <RouterProvider
        router={router}
      />
    </ExpressiveHeadingContext>
  </StrictMode>,
);
