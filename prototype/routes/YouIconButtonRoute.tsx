import { useEffect, useState, type ReactNode } from 'react';
import { YouIconButton, YouPillShape } from '../../src';

export default function YouIconButtonRoute(): ReactNode {
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPending((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouIconButton isStandard isPending={isPending}>
          <YouPillShape />
        </YouIconButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouIconButton isFilled isPending={isPending}>
          <YouPillShape />
        </YouIconButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouIconButton isTonal isPending={isPending}>
          <YouPillShape />
        </YouIconButton>
      </div>
      <div style={{ padding: '1rem', backgroundColor: 'white' }}>
        <YouIconButton isOutlined isPending={isPending}>
          <YouPillShape />
        </YouIconButton>
      </div>
    </main>
  );
}
