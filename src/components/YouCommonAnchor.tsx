import * as stylex from '@stylexjs/stylex';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { mergeProps, useFocusRing, useHover, usePress } from 'react-aria';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion, youSysShape } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouCommonAnchorProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style' | 'className' | 'children'> {
  readonly leading?: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
  readonly label: ReactNode;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
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
    paddingLeft: 12,
    paddingRight: 12,
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'background-color, color, border-color',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    whiteSpace: 'nowrap',
  },
  isText: {
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.primary})`,
  },
  isFilled: {
    backgroundColor: `rgb(${youSysColor.primary})`,
    color: `rgb(${youSysColor.onPrimary})`,
    paddingLeft: 24,
    paddingRight: 24,
  },
  isElevated: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerLow})`,
    color: `rgb(${youSysColor.primary})`,
    paddingLeft: 24,
    paddingRight: 24,
  },
  isTonal: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    color: `rgb(${youSysColor.onSecondaryContainer})`,
    paddingLeft: 24,
    paddingRight: 24,
  },
  isOutlined: {
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.primary})`,
    paddingLeft: 24,
    paddingRight: 24,
  },
  hasLeading: {
    paddingRight: 16,
  },
  leadingOpaque: {
    paddingLeft: 16,
  },
  leading: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 18,
    justifyContent: 'center',
    marginRight: 8,
    maxHeight: 18,
    maxWidth: 18,
    position: 'relative',
  },
  label: {
    display: 'inline-block',
    position: 'relative',
  },
});

export function YouElevatedCommonAnchor({ xstyle, leading, label, ...props }: YouCommonAnchorProps) {
  const { hoverProps, isHovered } = useHover({});
  const { isPressed, pressProps } = usePress({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });

  return (
    <a
      {...stylex.props(
        styles.base,
        styles.isElevated,
        styles.leadingOpaque,
        leading !== undefined ? styles.hasLeading : null,
        xstyle,
      )}
      {...mergeProps(hoverProps, pressProps, focusProps, props)}
    >
      <YouInteractionLayer isHovered={isHovered} isDragged={false} isFocused={isFocused} isPressed={isPressed} />
      {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
      <span {...stylex.props(styles.label, youStylesTypography.labelLarge)}>{label}</span>
      <YouFocusLayer isFocusVisible={isFocusVisible} />
    </a>
  );
}

export function YouTextCommonAnchor({ xstyle, leading, label, ...props }: YouCommonAnchorProps) {
  const { hoverProps, isHovered } = useHover({});
  const { isPressed, pressProps } = usePress({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });

  return (
    <a
      {...stylex.props(
        styles.base,
        styles.isText,
        leading !== undefined ? styles.hasLeading : null,
        xstyle,
      )}
      {...mergeProps(hoverProps, pressProps, focusProps, props)}
    >
      <YouInteractionLayer isHovered={isHovered} isDragged={false} isFocused={isFocused} isPressed={isPressed} />
      {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
      <span {...stylex.props(styles.label, youStylesTypography.labelLarge)}>{label}</span>
      <YouFocusLayer isFocusVisible={isFocusVisible} />
    </a>
  );
}

export function YouFilledCommonAnchor({ xstyle, leading, label, ...props }: YouCommonAnchorProps) {
  const { hoverProps, isHovered } = useHover({});
  const { isPressed, pressProps } = usePress({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });

  return (
    <a
      {...stylex.props(
        styles.base,
        styles.isFilled,
        styles.leadingOpaque,
        leading !== undefined ? styles.hasLeading : null,
        xstyle,
      )}
      {...mergeProps(hoverProps, pressProps, focusProps, props)}
    >
      <YouInteractionLayer isHovered={isHovered} isDragged={false} isFocused={isFocused} isPressed={isPressed} />
      {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
      <span {...stylex.props(styles.label, youStylesTypography.labelLarge)}>{label}</span>
      <YouFocusLayer isFocusVisible={isFocusVisible} />
    </a>
  );
}

export function YouTonalCommonAnchor({ xstyle, leading, label, ...props }: YouCommonAnchorProps) {
  const { hoverProps, isHovered } = useHover({});
  const { isPressed, pressProps } = usePress({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });

  return (
    <a
      {...stylex.props(
        styles.base,
        styles.isTonal,
        styles.leadingOpaque,
        leading !== undefined ? styles.hasLeading : null,
        xstyle,
      )}
      {...mergeProps(hoverProps, pressProps, focusProps, props)}
    >
      <YouInteractionLayer isHovered={isHovered} isDragged={false} isFocused={isFocused} isPressed={isPressed} />
      {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
      <span {...stylex.props(styles.label, youStylesTypography.labelLarge)}>{label}</span>
      <YouFocusLayer isFocusVisible={isFocusVisible} />
    </a>
  );
}

export function YouOutlinedCommonAnchor({ xstyle, leading, label, ...props }: YouCommonAnchorProps) {
  const { hoverProps, isHovered } = useHover({});
  const { isPressed, pressProps } = usePress({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });

  return (
    <a
      {...stylex.props(
        styles.base,
        styles.isOutlined,
        styles.leadingOpaque,
        leading !== undefined ? styles.hasLeading : null,
        xstyle,
      )}
      {...mergeProps(hoverProps, pressProps, focusProps, props)}
    >
      <YouInteractionLayer isHovered={isHovered} isDragged={false} isFocused={isFocused} isPressed={isPressed} />
      {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
      <span {...stylex.props(styles.label, youStylesTypography.labelLarge)}>{label}</span>
      <YouOutlineLayer />
      <YouFocusLayer isFocusVisible={isFocusVisible} />
    </a>
  );
}
