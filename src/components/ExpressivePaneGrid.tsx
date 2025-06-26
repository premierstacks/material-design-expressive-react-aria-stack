import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';

export interface ExpressivePaneGridProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly columns?: string;
  readonly gap?: string | number;
}

const rootStyles = stylex.create({
  base: {
    columnGap: 24,
    display: 'grid',
    rowGap: 24,
  },
  columns: (columns: string) => ({
    gridTemplateColumns: columns,
  }),
  gap: (gap: string | number) => ({
    columnGap: gap,
    rowGap: gap,
  }),
});

export function ExpressivePaneGrid({ xstyle, children, columns, gap, ...props }: ExpressivePaneGridProps): ReactElement {
  return (
    <div
      {...stylex.props(
        rootStyles.base,
        columns !== undefined ? rootStyles.columns(columns) : null,
        gap !== undefined ? rootStyles.gap(gap) : null,
        xstyle,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
