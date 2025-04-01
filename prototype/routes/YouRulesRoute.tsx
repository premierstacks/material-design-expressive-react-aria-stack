import type { ReactNode } from 'react';
import { YouHorizontalRule, YouTildeRule, YouWiggleRule } from '../../src';

export default function YouRulesRoute(): ReactNode {
  return (
    <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouHorizontalRule />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouWiggleRule />
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouTildeRule />
      </div>
    </main>
  );
}
