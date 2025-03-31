import * as stylex from '@stylexjs/stylex';
import type { FC, ReactNode, SVGAttributes } from 'react';

interface YouPillShapeProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'children'> {
  xstyle?: stylex.StyleXStyles | undefined;
}

export const YouPillShape: FC<YouPillShapeProps> = ({ xstyle, ...props }: YouPillShapeProps): ReactNode => {
  return (
    <svg {...stylex.props(xstyle)} width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="-2" y="5" width="44" height="30" rx="15" ry="15" fill="currentColor" transform="rotate(45 20 20)" />
    </svg>
  );
};
