import type { ReactNode } from 'react';
import { YouCommonButton, YouPillShape } from '../../src';

export default function YouCommonButtonRoute(): ReactNode {
  return (
    <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isText leading={<YouPillShape />}>
          Text Common Button
        </YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isElevated leading={<YouPillShape />}>
          Elevated Common Button
        </YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isFilled leading={<YouPillShape />}>
          Filled Common Button
        </YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isTonal leading={<YouPillShape />}>
          Tonal Common Button
        </YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isOutlined leading={<YouPillShape />}>
          Outlined Common Button
        </YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isText>Text Common Button</YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isElevated>Elevated Common Button</YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isFilled>Filled Common Button</YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isTonal>Tonal Common Button</YouCommonButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonButton isOutlined>Outlined Common Button</YouCommonButton>
      </div>
    </main>
  );
}
