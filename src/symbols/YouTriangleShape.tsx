import * as stylex from '@stylexjs/stylex';
import type { ReactElement, SVGAttributes } from 'react';

interface YouSymbolTriangleProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
}

export function YouSymbolTriangle({ xstyle, ...props }: YouSymbolTriangleProps): ReactElement {
  return (
    <svg {...stylex.props(xstyle)} width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polygon points="20,0 40,40 0,40" fill="currentColor" />
    </svg>
  );
}
