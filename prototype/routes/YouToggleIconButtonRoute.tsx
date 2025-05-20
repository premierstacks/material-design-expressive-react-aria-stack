import type { ReactElement } from 'react';
import { YouPillShape, YouToggleIconButton } from '../../src';

export function YouToggleIconButtonRoute(): ReactElement {
  return (
    <main style={{
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
    >
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouToggleIconButton isStandard>
          <YouPillShape />
        </YouToggleIconButton>
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouToggleIconButton isFilled>
          <YouPillShape />
        </YouToggleIconButton>
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouToggleIconButton isTonal>
          <YouPillShape />
        </YouToggleIconButton>
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouToggleIconButton isOutlined>
          <YouPillShape />
        </YouToggleIconButton>
      </div>
    </main>
  );
}
