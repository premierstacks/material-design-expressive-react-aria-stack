import * as stylex from '@stylexjs/stylex';
import type { ReactElement, SVGAttributes } from 'react';
import { youSysColor } from '../vars/sys.stylex';

interface YouTildeRuleProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly isPrimary?: boolean;
}

const styles = stylex.create({
  base: {
    color: `rgb(${youSysColor.outlineVariant})`,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
  },
  isPrimary: {
    color: `rgb(${youSysColor.primary})`,
  },
});

export function YouTildeRule({ xstyle, isPrimary = false, ...props }: YouTildeRuleProps): ReactElement {
  return (
    <svg {...stylex.props(styles.base, isPrimary ? styles.isPrimary : null, xstyle)} aria-hidden="true" width="155" height="9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.5 4.5c5.067-4.667 10.133-4.667 15.2 0s10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0 10.133-4.667 15.2 0 10.133 4.667 15.2 0"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
