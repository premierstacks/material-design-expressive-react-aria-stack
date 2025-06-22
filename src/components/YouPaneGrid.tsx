import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { useScreen } from '../hooks/media';

export interface YouPaneGridProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly columns?: string;
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

export function YouPaneGrid({ xstyle, children, columns, compact, medium = compact, expanded = medium, large = expanded, extraLarge = large, ...props }: YouPaneGridProps): ReactElement {
  const { compact: c, expanded: e, extraLarge: el, large: l, medium: m } = useScreen();

  return (
    <div
      {...stylex.props(
        styles.base,
        c && compact !== undefined ? styles.columns(compact) : null,
        m && medium !== undefined ? styles.columns(medium) : null,
        e && expanded !== undefined ? styles.columns(expanded) : null,
        l && large !== undefined ? styles.columns(large) : null,
        el && extraLarge !== undefined ? styles.columns(extraLarge) : null,
        columns !== undefined ? styles.columns(columns) : null,
        xstyle,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
