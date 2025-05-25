import type { ReactElement } from 'react';
import { YouBackground } from '../src';
import { Router } from './Router';

export function App(): ReactElement {
  return (
    <>
      <YouBackground />
      <Router />
    </>
  );
}
