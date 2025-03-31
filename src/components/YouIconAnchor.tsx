import * as stylex from '@stylexjs/stylex';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { mergeProps, useFocusRing, useHover, usePress } from 'react-aria';
import { youSysColor, youSysMotion, youSysShape } from '../vars/sys.stylex';
import { YouBackgroundLayer } from './YouBackgroundLayer';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouIconAnchorProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
  interactionLayer?: (() => ReactNode) | undefined;
  backgroundLyer?: (() => ReactNode) | undefined;
  outlineLayer?: (() => ReactNode) | undefined;
  focusLayer?: (() => ReactNode) | undefined;
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

const backgroundStyles = stylex.create({
  isFilled: {
    backgroundColor: `rgb(${youSysColor.primary})`,
  },
  isTonal: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
  },
});

const interactionStyles = stylex.create({
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

export function YouIconAnchor({ isStandard, isFilled, isTonal, isOutlined, children, interactionLayer, xstyle, backgroundLyer, outlineLayer, focusLayer, icon, ...props }: YouIconAnchorProps) {
  const { hoverProps, isHovered } = useHover({});
  const { isPressed, pressProps } = usePress({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });

  return (
    <a
      {...stylex.props(styles.base, isStandard ? styles.isStandard : null, isFilled ? styles.isFilled : null, isTonal ? styles.isTonal : null, xstyle)}
      {...mergeProps(props, hoverProps, pressProps, focusProps)}
    >
      {backgroundLyer ? backgroundLyer() : <YouBackgroundLayer xstyle={[isFilled ? backgroundStyles.isFilled : null, isTonal ? backgroundStyles.isTonal : null]} />}
      {interactionLayer ? interactionLayer() : <YouInteractionLayer isHovered={isHovered} isDragged={false} isFocused={isFocused} isPressed={isPressed} />}
      <span {...stylex.props(interactionStyles.base)}>{children ?? icon}</span>
      {outlineLayer ? outlineLayer() : isOutlined ? <YouOutlineLayer /> : null}
      {focusLayer ? focusLayer() : <YouFocusLayer isFocusVisible={isFocusVisible} />}
    </a>
  );
}
