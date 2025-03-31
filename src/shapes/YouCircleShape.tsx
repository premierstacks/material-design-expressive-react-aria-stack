import * as stylex from '@stylexjs/stylex';
import type { FC, ReactNode, SVGAttributes } from 'react';

interface YouCircleShapeProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'children'> {
  xstyle?: stylex.StyleXStyles | undefined;
}

export const YouCircleShape: FC<YouCircleShapeProps> = ({ xstyle, ...props }: YouCircleShapeProps): ReactNode => {
  return (
    <svg {...stylex.props(xstyle)} width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="20" cy="20" r="20" fill="currentColor" />
    </svg>
  );
};
