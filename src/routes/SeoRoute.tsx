import type { ReactNode } from 'react';
import { useSeo, type SeoArgs } from '../hooks/seo';

interface SeoRouteProps extends SeoArgs {
  children: ReactNode;
}

export default function SeoRoute({ title, keywords, description, children }: SeoRouteProps): ReactNode {
  useSeo({ title, keywords, description });

  return children;
}
