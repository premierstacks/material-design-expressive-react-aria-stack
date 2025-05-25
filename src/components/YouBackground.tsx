import * as stylex from '@stylexjs/stylex';
import { useEffect, type HTMLProps, type ReactElement } from 'react';
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

export function YouBackground(): null {
  useEffect(() => {
    const className = document.documentElement.className;
    const style = document.documentElement.style;

    stylexify(
      document.documentElement,
      rootStyles.base,
      true,
    );

    return () => {
      document.documentElement.className = className;
      document.documentElement.style.cssText = style.cssText;
    };
  }, []);

  return null;
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
