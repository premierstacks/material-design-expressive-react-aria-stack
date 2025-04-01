import type { ReactNode } from 'react';
import { YouFabButton, YouPillShape } from '../../src';

export default function YouFabButtonRoute(): ReactNode {
  return (
    <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSurface leading={<YouPillShape />}>
          Surface Fab Button
        </YouFabButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isPrimary leading={<YouPillShape />}>
          Primary Fab Button
        </YouFabButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSecondary leading={<YouPillShape />}>
          Secondary Fab Button
        </YouFabButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isTertiary leading={<YouPillShape />}>
          Tertiary Fab Button
        </YouFabButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSurface>Surface Fab Button</YouFabButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isPrimary>Primary Fab Button</YouFabButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSecondary>Secondary Fab Button</YouFabButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isTertiary>Tertiary Fab Button</YouFabButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSurface leading={<YouPillShape />} />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isPrimary leading={<YouPillShape />} />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSecondary leading={<YouPillShape />} />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isTertiary leading={<YouPillShape />} />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSurface leading={<YouPillShape />} isLarge />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isPrimary leading={<YouPillShape />} isLarge />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSecondary leading={<YouPillShape />} isLarge />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isTertiary leading={<YouPillShape />} isLarge />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSurface leading={<YouPillShape />} isSmall />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isPrimary leading={<YouPillShape />} isSmall />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isSecondary leading={<YouPillShape />} isSmall />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouFabButton isTertiary leading={<YouPillShape />} isSmall />
      </div>
    </main>
  );
}
