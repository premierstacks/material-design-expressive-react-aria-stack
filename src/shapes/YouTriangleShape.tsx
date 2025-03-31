import * as stylex from '@stylexjs/stylex';
import type { FC, ReactNode, SVGAttributes } from 'react';

interface YouTriangleShapeProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'children'> {
  xstyle?: stylex.StyleXStyles | undefined;
}

export const YouTriangleShape: FC<YouTriangleShapeProps> = ({ xstyle, ...props }: YouTriangleShapeProps): ReactNode => {
  return (
    <svg {...stylex.props(xstyle)} width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <polygon points="20,0 40,40 0,40" fill="currentColor" />
    </svg>
  );
};
