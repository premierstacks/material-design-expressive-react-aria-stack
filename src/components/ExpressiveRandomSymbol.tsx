import type * as stylex from '@stylexjs/stylex';
import type { ReactElement, SVGAttributes } from 'react';
import { useMemo } from 'react';
import { ExpressiveSymbolCircle } from '../symbols/ExpressiveSymbolCircle';
import { ExpressiveSymbolFlower } from '../symbols/ExpressiveSymbolFlower';
import { ExpressiveSymbolPill } from '../symbols/ExpressiveSymbolPill';
import { ExpressiveSymbolRect } from '../symbols/ExpressiveSymbolRect';
import { ExpressiveSymbolTriangle } from '../symbols/ExpressiveSymbolTriangle';

const symbols = [
  ExpressiveSymbolCircle,
  ExpressiveSymbolFlower,
  ExpressiveSymbolPill,
  ExpressiveSymbolRect,
  ExpressiveSymbolTriangle,
];

let counter = 0;

function next(): number {
  return counter++;
}

interface ExpressiveRandomSymbolProps extends Omit<SVGAttributes<SVGSVGElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
}

export function ExpressiveRandomSymbol(props: ExpressiveRandomSymbolProps): ReactElement {
  const draw = useMemo(() => next() % symbols.length, []);

  const SymbolComponent = symbols[draw];

  if (SymbolComponent === undefined) {
    throw new Error(`ExpressiveRandomSymbol: no symbol component found for index ${draw.toString()}`);
  }

  return (
    <SymbolComponent
      {...props}
    />
  );
}
