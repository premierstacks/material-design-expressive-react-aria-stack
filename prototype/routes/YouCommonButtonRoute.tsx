import type { ReactElement } from 'react';
import { YouElevatedCommonButton, YouFilledCommonButton, YouOutlinedCommonButton, YouPillShape, YouTextCommonButton, YouTonalCommonButton } from '../../src';

export function YouCommonButtonRoute(): ReactElement {
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
        <YouTextCommonButton leading={<YouPillShape />} label="Text Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouElevatedCommonButton leading={<YouPillShape />} label="Elevated Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouFilledCommonButton leading={<YouPillShape />} label="Filled Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTonalCommonButton leading={<YouPillShape />} label="Tonal Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouOutlinedCommonButton leading={<YouPillShape />} label="Outlined Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTextCommonButton label="Text Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouElevatedCommonButton label="Elevated Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouFilledCommonButton label="Filled Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouTonalCommonButton label="Tonal Common Button" />
      </div>
      <div style={{
        padding: '1rem',
        backgroundColor: 'white',
      }}
      >
        <YouOutlinedCommonButton label="Outlined Common Button" />
      </div>
    </main>
  );
}
