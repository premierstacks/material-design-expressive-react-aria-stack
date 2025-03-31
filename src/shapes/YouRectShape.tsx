import * as stylex from '@stylexjs/stylex';
import type { FC, ReactNode, SVGAttributes } from 'react';

interface YouRectShapeProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'children'> {
  xstyle?: stylex.StyleXStyles | undefined;
}

export const YouRectShape: FC<YouRectShapeProps> = ({ xstyle, ...props }: YouRectShapeProps): ReactNode => {
  return (
    <svg {...stylex.props(xstyle)} width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0" y="0" width="40" height="40" rx="10" ry="10" fill="currentColor" />
    </svg>
  );
};
