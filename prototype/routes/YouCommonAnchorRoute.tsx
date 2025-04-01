import type { ReactNode } from 'react';
import { YouCommonAnchor, YouPillShape } from '../../src';

export default function YouCommonAnchorRoute(): ReactNode {
  return (
    <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isText href="" leading={<YouPillShape />}>
          Text Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isElevated href="" leading={<YouPillShape />}>
          Elevated Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isFilled href="" leading={<YouPillShape />}>
          Filled Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isTonal href="" leading={<YouPillShape />}>
          Tonal Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isOutlined href="" leading={<YouPillShape />}>
          Outlined Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isText href="">
          Text Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isElevated href="">
          Elevated Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isFilled href="">
          Filled Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isTonal href="">
          Tonal Common Anchor
        </YouCommonAnchor>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonAnchor isOutlined href="">
          Outlined Common Anchor
        </YouCommonAnchor>
      </div>
    </main>
  );
}
