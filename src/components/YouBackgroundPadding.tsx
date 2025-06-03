import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { useScreen } from '../hooks/media';

export interface YouBackgroundPaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  large: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export function YouBackgroundPadding({ xstyle, ...props }: YouBackgroundPaddingProps): ReactElement {
  const { extraLarge, large, expanded } = useScreen();

  return (
    <div
      {...stylex.props(
        styles.base,
        (expanded || large || extraLarge) ? styles.large : null,
        xstyle,
      )}
      {...props}
    />
  );
}
