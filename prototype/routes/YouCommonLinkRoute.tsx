import type { ReactElement } from 'react';
import { YouElevatedCommonLink, YouFilledCommonLink, YouOutlinedCommonLink, YouPillShape, YouTextCommonLink, YouTonalCommonLink } from '../../src';

export function YouCommonLinkRoute(): ReactElement {
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
        <YouTextCommonLink href="" leading={<YouPillShape />} label="Text Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouElevatedCommonLink href="" leading={<YouPillShape />} label="Elevated Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouFilledCommonLink href="" leading={<YouPillShape />} label="Filled Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTonalCommonLink href="" leading={<YouPillShape />} label="Tonal Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouOutlinedCommonLink href="" leading={<YouPillShape />} label="Outlined Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTextCommonLink href="" label="Text Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouElevatedCommonLink href="" label="Elevated Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouFilledCommonLink href="" label="Filled Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTonalCommonLink href="" label="Tonal Common Link" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouOutlinedCommonLink href="" label="Outlined Common Link" />
      </div>
    </main>
  );
}
