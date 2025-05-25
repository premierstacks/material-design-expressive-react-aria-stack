import * as stylex from '@stylexjs/stylex';
import type { ReactElement, SVGAttributes } from 'react';
import { useId } from 'react';
import { youSysColor } from '../vars/sys.stylex';

interface YouWiggleHorizontalDividerProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    color: `rgb(${youSysColor.outlineVariant})`,
    display: 'block',
    position: 'relative',
  },
});

export function YouWiggleHorizontalDivider({ xstyle, ...props }: YouWiggleHorizontalDividerProps): ReactElement {
  const id = useId();

  return (
    <svg aria-hidden="true" width="100%" height="8" {...stylex.props(styles.base, xstyle)} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <pattern id={id} width="91" height="8" patternUnits="userSpaceOnUse">
        <path
          d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
          stroke="currentColor"
          strokeLinecap="square"
        />
      </pattern>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
