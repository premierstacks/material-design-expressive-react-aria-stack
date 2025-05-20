import type { ReactElement } from 'react';
import { YouCircleShape, YouFlowerShape, YouIconButton, YouPillShape, YouRectShape, YouSmallTopAppBar, YouSymbol, YouTriangleShape } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

export function YouTopAppBarRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      {[
        <YouSmallTopAppBar
          key={1}
          leading={<YouSymbol size={24} symbol={<YouCircleShape />} />}
          trailing={[<YouIconButton key={1} icon={<YouFlowerShape />} />, <YouIconButton key={2} icon={<YouPillShape />} />, <YouIconButton key={3} icon={<YouTriangleShape />} />]}
        >
          Title Large
        </YouSmallTopAppBar>,
        <YouSmallTopAppBar
          key={2}
          isSurface
          leading={<YouSymbol size={24} symbol={<YouCircleShape />} />}
          trailing={[<YouIconButton key={1} icon={<YouFlowerShape />} />, <YouIconButton key={2} icon={<YouPillShape />} />, <YouIconButton key={3} icon={<YouTriangleShape />} />]}
        >
          Title Large
        </YouSmallTopAppBar>,
        <YouSmallTopAppBar key={3} isSurfaceBright leading={<YouSymbol size={24} symbol={<YouFlowerShape />} />} trailing={[<YouIconButton key={1} icon={<YouFlowerShape />} />, <YouIconButton key={2} icon={<YouPillShape />} />, <YouIconButton key={3} icon={<YouTriangleShape />} />]}>
          Title Large
        </YouSmallTopAppBar>,
        <YouSmallTopAppBar key={4} isSurfaceContainer leading={<YouSymbol size={24} symbol={<YouPillShape />} />} trailing={[<YouIconButton key={1} icon={<YouFlowerShape />} />, <YouIconButton key={2} icon={<YouPillShape />} />, <YouIconButton key={3} icon={<YouTriangleShape />} />]}>
          Title Large
        </YouSmallTopAppBar>,
        <YouSmallTopAppBar key={5} isSurfaceContainerLowest leading={<YouSymbol size={24} symbol={<YouRectShape />} />} trailing={[<YouIconButton key={1} icon={<YouFlowerShape />} />, <YouIconButton key={2} icon={<YouPillShape />} />, <YouIconButton key={3} icon={<YouTriangleShape />} />]}>
          Title Large
        </YouSmallTopAppBar>,
        <YouSmallTopAppBar key={6} isSurfaceDim leading={<YouSymbol size={24} symbol={<YouTriangleShape />} />} trailing={[<YouIconButton key={1} icon={<YouFlowerShape />} />, <YouIconButton key={2} icon={<YouPillShape />} />, <YouIconButton key={3} icon={<YouTriangleShape />} />]}>
          Title Large
        </YouSmallTopAppBar>,
      ]}
    </PrototypeDisplay>
  );
}
