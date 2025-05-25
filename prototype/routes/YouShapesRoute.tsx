import stylex from '@stylexjs/stylex';
import type { ReactElement } from 'react';
import { YouCircleShape, YouFlowerShape, YouPillShape, YouRectShape, YouTriangleShape } from '../../src';
import { PrototypeDisplay } from '../components/PrototypeDisplay';

const styles = stylex.create({
  base: {
    height: '4rem',
    width: '4rem',
  },
});

export function YouShapesRoute(): ReactElement {
  return (
    <PrototypeDisplay>
      <YouCircleShape xstyle={styles.base} />
      <YouFlowerShape xstyle={styles.base} />
      <YouPillShape xstyle={styles.base} />
      <YouRectShape xstyle={styles.base} />
      <YouTriangleShape xstyle={styles.base} />
    </PrototypeDisplay>
  );
}
