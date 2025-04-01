import type { ReactNode } from 'react';
import { YouFlowerShape, YouIconButton, YouTopAppBar } from '../../src';

export default function YouTopAppBarRoute(): ReactNode {
  return (
    <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouTopAppBar
          isSurface
          isPadded
          leading={
            <YouIconButton>
              <YouFlowerShape />
            </YouIconButton>
          }
        >
          Title
        </YouTopAppBar>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouTopAppBar isSurfaceBright isPadded>
          Title
        </YouTopAppBar>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouTopAppBar isSurfaceContainer isPadded>
          Title
        </YouTopAppBar>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouTopAppBar isSurfaceContainerLowest isPadded>
          Title
        </YouTopAppBar>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouTopAppBar isSurfaceDim isPadded>
          Title
        </YouTopAppBar>
      </div>
    </main>
  );
}
