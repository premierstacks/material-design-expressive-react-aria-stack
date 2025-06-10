import * as stylex from '@stylexjs/stylex';
import { youSysColor } from '../stylex/sys.stylex';

const styles = stylex.create({
  background: {
    backgroundColor: `rgb(${youSysColor.surfaceContainer})`,
  },
  color: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  scrollbar: {
    scrollbarColor: `rgb(${youSysColor.outline}) transparent`,
  },
});

export function applyRootTheme(background: stylex.StyleXStyles = styles.background, color: stylex.StyleXStyles = styles.color, scrollbar: stylex.StyleXStyles = styles.scrollbar): () => void {
  const { className } = stylex.props(background, color, scrollbar);

  if (className === undefined) {
    return function () {
      return;
    };
  }

  const classes = className.split(' ');

  document.documentElement.classList.add(...classes);

  return () => {
    document.documentElement.classList.remove(...classes);
  };
}
