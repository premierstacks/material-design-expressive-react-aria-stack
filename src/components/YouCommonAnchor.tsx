import * as stylex from '@stylexjs/stylex';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { mergeProps, useFocusRing, useHover, usePress } from 'react-aria';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion, youSysShape } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface YouCommonAnchorProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style' | 'className'> {
  isElevated?: boolean | undefined;
  isFilled?: boolean | undefined;
  isOutlined?: boolean | undefined;
  isText?: boolean | undefined;
  isTonal?: boolean | undefined;
  leading?: ReactNode | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
  text?: ReactNode | undefined;
}

const rootStyles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'none',
    color: 'inherit',
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    outlineStyle: 'none',
    paddingInline: 12,
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    whiteSpace: 'nowrap',
    borderRadius: youSysShape.cornerFull,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'background-color, color, border-color',
  },
  isText: {
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.primary})`,
  },
  isFilled: {
    backgroundColor: `rgb(${youSysColor.primary})`,
    color: `rgb(${youSysColor.onPrimary})`,
    paddingInline: 24,
  },
  isElevated: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerLow})`,
    color: `rgb(${youSysColor.primary})`,
    paddingInline: 24,
  },
  isTonal: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    color: `rgb(${youSysColor.onSecondaryContainer})`,
    paddingInline: 24,
  },
  isOutlined: {
    backgroundColor: 'transparent',
    borderColor: `rgb(${youSysColor.outline})`,
    borderStyle: 'solid',
    borderWidth: 1,
    color: `rgb(${youSysColor.primary})`,
    paddingInline: 24,
  },
  leading: {
    paddingRight: 16,
  },
  leadingOpaque: {
    paddingLeft: 16,
  },
});

const leadingStyles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 18,
    justifyContent: 'center',
    marginRight: 8,
    maxHeight: 18,
    maxWidth: 18,
    position: 'relative',
  },
});

const labelStyles = stylex.create({
  base: {
    display: 'inline-block',
    position: 'relative',
  },
});

export function YouCommonAnchor({ xstyle, leading, isText, isElevated, isFilled, isTonal, isOutlined, children, text, ...props }: YouCommonAnchorProps) {
  const { hoverProps, isHovered } = useHover({});
  const { isPressed, pressProps } = usePress({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });

  return (
    <a
      {...stylex.props(
        rootStyles.base,
        isText && rootStyles.isText,
        isFilled && rootStyles.isFilled,
        isElevated && rootStyles.isElevated,
        isTonal && rootStyles.isTonal,
        isOutlined && rootStyles.isOutlined,
        leading ? rootStyles.leading : null,
        leading && (isElevated || isFilled || isTonal || isOutlined) ? rootStyles.leadingOpaque : null,
        xstyle,
      )}
      {...mergeProps(hoverProps, pressProps, focusProps, props)}
    >
      <YouInteractionLayer isHovered={isHovered} isDragged={false} isFocused={isFocused} isPressed={isPressed} />
      {leading && <span {...stylex.props(leadingStyles.base)}>{leading}</span>}
      <span {...stylex.props(labelStyles.base, youStylesTypography.labelLarge)}>{text ?? children}</span>
      <YouFocusLayer isFocusVisible={isFocusVisible} />
    </a>
  );
}
