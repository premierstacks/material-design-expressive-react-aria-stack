import type { ReactElement } from 'react';
import { Outlet } from 'react-router';
import { YouBackground } from '../../src';

export function RootRoute(): ReactElement {
  return (<YouBackground><Outlet /></YouBackground>);
}
