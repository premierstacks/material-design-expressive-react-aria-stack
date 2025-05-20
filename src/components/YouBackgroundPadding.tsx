import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactElement } from 'react';
import { useScreen } from '../hooks/media';

interface YouBackgroundPaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly top?: boolean;
  readonly right?: boolean;
  readonly bottom?: boolean;
  readonly left?: boolean;
}

const styles = stylex.create({
  top: { paddingTop: 16 },
  bottom: { paddingBottom: 16 },
  left: { paddingLeft: 16 },
  right: { paddingRight: 16 },
  leftLarge: { paddingLeft: 24 },
  rightLarge: { paddingRight: 24 },
});

export function YouBackgroundPadding({ xstyle, top = false, right = false, bottom = false, left = false, ...props }: YouBackgroundPaddingProps): ReactElement {
  const { extraLarge, large, expanded } = useScreen();

  return (
    <div
      {...stylex.props(
        top ? styles.top : null,
        bottom ? styles.bottom : null,
        left ? styles.left : null,
        right ? styles.right : null,
        left && (expanded || large || extraLarge) ? styles.leftLarge : null,
        right && (expanded || large || extraLarge) ? styles.rightLarge : null,
        xstyle,
      )}
      {...props}
    />
  );
}
