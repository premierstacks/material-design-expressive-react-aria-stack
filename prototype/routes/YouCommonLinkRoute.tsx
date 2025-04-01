import type { ReactNode } from 'react';
import { YouCommonLink, YouPillShape } from '../../src';

export default function YouCommonLinkRoute(): ReactNode {
  return (
    <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isText href="" leading={<YouPillShape />}>
          Text Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isElevated href="" leading={<YouPillShape />}>
          Elevated Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isFilled href="" leading={<YouPillShape />}>
          Filled Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isTonal href="" leading={<YouPillShape />}>
          Tonal Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isOutlined href="" leading={<YouPillShape />}>
          Outlined Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isText href="">
          Text Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isElevated href="">
          Elevated Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isFilled href="">
          Filled Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isTonal href="">
          Tonal Common Link
        </YouCommonLink>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouCommonLink isOutlined href="">
          Outlined Common Link
        </YouCommonLink>
      </div>
    </main>
  );
}
