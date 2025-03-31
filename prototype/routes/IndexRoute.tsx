import type { FC, ReactNode } from 'react';
import { Link } from 'react-aria-components';

export const IndexRoute: FC = (): ReactNode => {
  return (
    <main>
      <Link href="/components/you-common-anchor">YouCommonAnchor</Link>
    </main>
  );
};
