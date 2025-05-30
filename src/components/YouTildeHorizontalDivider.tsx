import * as stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { useSeparator, type SeparatorProps } from 'react-aria';
import { youSysColor } from '../vars/sys.stylex';

interface YouTildeHorizontalProviderProps extends Omit<SeparatorProps, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    color: `rgb(${youSysColor.primary})`,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
});

export function YouTildeHorizontalProvider({ xstyle, ...props }: YouTildeHorizontalProviderProps): ReactElement {
  const { separatorProps } = useSeparator(props);

  return (
    <svg {...stylex.props(styles.base, xstyle)} aria-hidden="true" width="155" height="9" fill="none" xmlns="http://www.w3.org/2000/svg" {...separatorProps}>
      <path
        d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
