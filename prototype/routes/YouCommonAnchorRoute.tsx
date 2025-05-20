import type { ReactElement } from 'react';
import { YouElevatedCommonAnchor, YouFilledCommonAnchor, YouOutlinedCommonAnchor, YouPillShape, YouTextCommonAnchor, YouTonalCommonAnchor } from '../../src';

export function YouCommonAnchorRoute(): ReactElement {
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
        <YouTextCommonAnchor href="" leading={<YouPillShape />} label="Text Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouElevatedCommonAnchor href="" leading={<YouPillShape />} label="Elevated Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouFilledCommonAnchor href="" leading={<YouPillShape />} label="Filled Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTonalCommonAnchor href="" leading={<YouPillShape />} label="Tonal Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouOutlinedCommonAnchor href="" leading={<YouPillShape />} label="Outlined Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTextCommonAnchor href="" label="Text Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouElevatedCommonAnchor href="" label="Elevated Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouFilledCommonAnchor href="" label="Filled Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTonalCommonAnchor href="" label="Tonal Common Anchor" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouOutlinedCommonAnchor href="" label="Outlined Common Anchor" />
      </div>
    </main>
  );
}
