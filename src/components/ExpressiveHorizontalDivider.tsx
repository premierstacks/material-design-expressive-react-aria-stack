import * as stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import type { SeparatorProps } from 'react-aria';
import { Separator } from 'react-aria-components';
import { expressiveSysColor } from '../stylex/sys.stylex';

export interface ExpressiveHorizontalDividerProps extends Omit<SeparatorProps, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    borderBottomStyle: 'none',
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderLeftWidth: 0,
    borderRightStyle: 'none',
    borderRightWidth: 0,
    borderTopColor: 'currentColor',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    color: `rgb(${expressiveSysColor.outlineVariant})`,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    position: 'relative',
  },
});

export function ExpressiveHorizontalDivider({ xstyle, ...props }: ExpressiveHorizontalDividerProps): ReactElement {
  return (
    <Separator
      {...stylex.props(rootStyles.base, xstyle)}
      {...props}
      orientation="horizontal"
    />
  );
}
