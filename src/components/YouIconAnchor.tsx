import * as stylex from '@stylexjs/stylex';
import type { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react';
import { mergeProps, useFocusRing, useHover, usePress } from 'react-aria';
import { youSysColor, youSysMotion, youSysShape } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouIconAnchorProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style' | 'className'> {
  readonly isFilled?: boolean;
  readonly isOutlined?: boolean;
  readonly isStandard?: boolean;
  readonly isTonal?: boolean;
  readonly xstyle?: stylex.StyleXStyles;
  readonly icon?: ReactNode;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: youSysShape.cornerFull,
    borderBottomRightRadius: youSysShape.cornerFull,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: youSysShape.cornerFull,
    borderTopRightRadius: youSysShape.cornerFull,
    borderTopStyle: 'none',
    color: 'inherit',
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    outlineStyle: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'color',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    whiteSpace: 'nowrap',
    width: 40,
  },
  isStandard: {
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
  isFilled: {
    backgroundColor: `rgb(${youSysColor.primary})`,
    color: `rgb(${youSysColor.onPrimary})`,
  },
  isTonal: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    color: `rgb(${youSysColor.onSecondaryContainer})`,
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

export function YouIconAnchor({ isStandard = false, isFilled = false, isTonal = false, isOutlined = false, children, xstyle, icon, ...props }: YouIconAnchorProps): ReactElement {
  const { hoverProps, isHovered } = useHover({});
  const { isPressed, pressProps } = usePress({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });

  return (
    <a
      {...stylex.props(styles.base, isStandard ? styles.isStandard : null, isFilled ? styles.isFilled : null, isTonal ? styles.isTonal : null, xstyle)}
      {...mergeProps(props, hoverProps, pressProps, focusProps)}
    >
      <YouInteractionLayer isHovered={isHovered} isDragged={false} isFocused={isFocused} isPressed={isPressed} />
      <span {...stylex.props(interactionStyles.base)}>{children ?? icon}</span>
      {isOutlined ? <YouOutlineLayer /> : null}
      <YouFocusLayer isFocusVisible={isFocusVisible} />
    </a>
  );
}
