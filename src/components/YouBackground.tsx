import * as stylex from '@stylexjs/stylex';
import { useEffect, type HTMLProps, type ReactElement, type ReactNode } from 'react';
import { stylexify } from '../helpers/stylex';
import { useScreen } from '../hooks/media';
import { youSysColor } from '../vars/sys.stylex';

const rootStyles = stylex.create({
  base: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
    color: `rgb(${youSysColor.onSurface})`,
    scrollbarColor: `rgb(${youSysColor.outline}) transparent`,
  },
});

interface YouBackgroundProps {
  readonly children?: ReactNode;
}

// eslint-disable-next-line sonarjs/function-return-type
export function YouBackground({ children }: YouBackgroundProps): ReactNode {
  useEffect(() => {
    stylexify(
      document.documentElement,
      rootStyles.base,
      true,
    );
  }, []);

  return children;
}

interface YouBackgroundContentProps extends Omit<HTMLProps<HTMLDivElement>, 'style' | 'className'> {
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

export function YouBackgroundContent({ xstyle, ...props }: YouBackgroundContentProps): ReactElement {
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

YouBackground.Content = YouBackgroundContent;
