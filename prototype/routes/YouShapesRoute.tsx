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
      {[
        <YouCircleShape xstyle={styles.base} key={1} />,
        <YouFlowerShape xstyle={styles.base} key={2} />,
        <YouPillShape xstyle={styles.base} key={3} />,
        <YouRectShape xstyle={styles.base} key={4} />,
        <YouTriangleShape xstyle={styles.base} key={5} />,
      ]}
    </PrototypeDisplay>
  );
}
