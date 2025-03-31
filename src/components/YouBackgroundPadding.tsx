import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLProps, ReactNode } from 'react';
import { useScreen } from '../hooks/media';

interface YouBackgroundPaddingProps extends Omit<HTMLProps<HTMLDivElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
  top?: boolean | undefined;
  right?: boolean | undefined;
  bottom?: boolean | undefined;
  left?: boolean | undefined;
}

const styles = stylex.create({
  top: { paddingTop: 16 },
  bottom: { paddingBottom: 16 },
  left: { paddingLeft: 16 },
  right: { paddingRight: 16 },
  leftLarge: { paddingLeft: 24 },
  rightLarge: { paddingRight: 24 },
});

export const YouBackgroundPadding: FC<YouBackgroundPaddingProps> = ({ xstyle, top, right, bottom, left, ...props }: YouBackgroundPaddingProps): ReactNode => {
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
};
