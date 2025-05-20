import * as stylex from '@stylexjs/stylex';
import type { ReactElement, SVGAttributes } from 'react';

interface YouFlowerShapeProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
}

export function YouFlowerShape({ xstyle, ...props }: YouFlowerShapeProps): ReactElement {
  return (
    <svg {...stylex.props(xstyle)} width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
        fill="currentColor"
      />
    </svg>
  );
}
