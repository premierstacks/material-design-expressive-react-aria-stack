import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { useScreen } from '../hooks/media';

export interface YouPaneLayoutProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly compact?: string;
  readonly expanded?: string;
  readonly extraLarge?: string;
  readonly large?: string;
  readonly medium?: string;
}

const styles = stylex.create({
  base: {
    columnGap: 24,
    display: 'grid',
    rowGap: 24,
  },
  columns: (columns: string) => ({
    gridTemplateColumns: columns,
  }),
});

export function YouPaneLayout({ xstyle, children, compact = '1fr', medium = compact, expanded = '1fr 1fr', large = expanded, extraLarge = large, ...props }: YouPaneLayoutProps): ReactElement {
  const { compact: c, expanded: e, extraLarge: el, large: l, medium: m } = useScreen();

  return (
    <div
      {...stylex.props(
        styles.base,
        c ? styles.columns(compact) : null,
        m ? styles.columns(medium) : null,
        e ? styles.columns(expanded) : null,
        l ? styles.columns(large) : null,
        el ? styles.columns(extraLarge) : null,
        xstyle,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
