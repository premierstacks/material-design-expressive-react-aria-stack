import * as stylex from '@stylexjs/stylex';
import type { HTMLProps, ReactNode } from 'react';
import { youSysColor, youSysMotion, youSysShape } from '../vars/sys.stylex';
import { YouBackgroundLayer } from './YouBackgroundLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouIconProps extends Omit<HTMLProps<HTMLSpanElement>, 'style'> {
  interactionLayer?: ReactNode | undefined;
  backgroundLayer?: ReactNode | undefined;
  outlineLayer?: ReactNode | undefined;
  focusLayer?: ReactNode | undefined;
  isFilled?: boolean | undefined;
  isOutlined?: boolean | undefined;
  isStandard?: boolean | undefined;
  isTonal?: boolean | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
  icon?: ReactNode | undefined;
}

const styles = stylex.create({
  base: {
    appearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: youSysShape.cornerFull,
    borderStyle: 'none',
    color: 'inherit',
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    outlineStyle: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    whiteSpace: 'nowrap',
    width: 40,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    tranisitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'color',
  },
  isStandard: {
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
  isFilled: {
    color: `rgb(${youSysColor.onPrimary})`,
  },
  isTonal: {
    color: `rgb(${youSysColor.onSecondaryContainer})`,
  },
});

const layerStyles = stylex.create({
  isFilled: {
    backgroundColor: `rgb(${youSysColor.primary})`,
  },
  isTonal: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
  },
});

const interactionsStyles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 24,
    justifyContent: 'center',
    maxHeight: 24,
    maxWidth: 24,
    position: 'relative',
  },
});

export function YouIcon({ isStandard, isFilled, isTonal, isOutlined, children, interactionLayer, xstyle, backgroundLayer, outlineLayer, focusLayer, icon, ...props }: YouIconProps) {
  return (
    <span {...stylex.props(styles.base, isStandard ? styles.isStandard : null, isFilled ? styles.isFilled : null, isTonal ? styles.isTonal : null, xstyle)} {...props}>
      {backgroundLayer ?? <YouBackgroundLayer xstyle={[isFilled ? layerStyles.isFilled : null, isTonal ? layerStyles.isTonal : null]} />}
      {interactionLayer}
      <span {...stylex.props(interactionsStyles.base)}>{children ?? icon}</span>
      {(outlineLayer ?? isOutlined) ? <YouOutlineLayer /> : null}
      {focusLayer}
    </span>
  );
}
