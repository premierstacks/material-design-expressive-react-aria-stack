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
      <PrototypeDisplay.Item><YouCircleShape xstyle={styles.base} /></PrototypeDisplay.Item>
      <PrototypeDisplay.Item><YouFlowerShape xstyle={styles.base} /></PrototypeDisplay.Item>
      <PrototypeDisplay.Item><YouPillShape xstyle={styles.base} /></PrototypeDisplay.Item>
      <PrototypeDisplay.Item><YouRectShape xstyle={styles.base} /></PrototypeDisplay.Item>
      <PrototypeDisplay.Item><YouTriangleShape xstyle={styles.base} /></PrototypeDisplay.Item>
    </PrototypeDisplay>
  );
}
