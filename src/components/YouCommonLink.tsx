import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactNode } from 'react';
import type { LinkProps, LinkRenderProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/utils';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouCommonLinkProps extends Omit<LinkProps, 'style' | 'className' | 'children'> {
  readonly leading?: ReactNode;
  readonly label: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
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
  hasFilledLeading: {
    paddingLeft: 16,
  },
  isDisabled: {
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
  },
  isDisabledBackground: {
    backgroundColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
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
  children: {
    display: 'inline-block',
    position: 'relative',
  },
});

export function YouFilledCommonLink({ leading, xstyle, label, ...props }: YouCommonLinkProps) {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(
      styles.base,
      styles.isFilled,
      leading !== undefined ? styles.hasLeading : null,
      leading !== undefined ? styles.hasFilledLeading : null,
      args.isDisabled ? styles.isDisabled : null,
      args.isDisabled ? styles.isDisabledBackground : null,
      xstyle,
    );
  }, [leading, xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Link
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
          <span {...stylex.props(styles.children, youStylesTypography.labelLarge)}>{label}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}

export function YouElevatedCommonLink({ leading, xstyle, label, ...props }: YouCommonLinkProps) {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(
      styles.base,
      styles.isElevated,
      leading !== undefined ? styles.hasLeading : null,
      leading !== undefined ? styles.hasFilledLeading : null,
      args.isDisabled ? styles.isDisabled : null,
      args.isDisabled ? styles.isDisabledBackground : null,
      xstyle,
    );
  }, [leading, xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Link
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
          <span {...stylex.props(styles.children, youStylesTypography.labelLarge)}>{label}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}

export function YouTonalCommonLink({ leading, xstyle, label, ...props }: YouCommonLinkProps) {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(
      styles.base,
      styles.isTonal,
      leading !== undefined ? styles.hasLeading : null,
      leading !== undefined ? styles.hasFilledLeading : null,
      args.isDisabled ? styles.isDisabled : null,
      args.isDisabled ? styles.isDisabledBackground : null,
      xstyle,
    );
  }, [leading, xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Link
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
          <span {...stylex.props(styles.children, youStylesTypography.labelLarge)}>{label}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}

export function YouOutlinedCommonLink({ leading, xstyle, label, ...props }: YouCommonLinkProps) {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(
      styles.base,
      styles.isOutlined,
      leading !== undefined ? styles.hasLeading : null,
      leading !== undefined ? styles.hasFilledLeading : null,
      args.isDisabled ? styles.isDisabled : null,
      xstyle,
    );
  }, [leading, xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Link
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
          <span {...stylex.props(styles.children, youStylesTypography.labelLarge)}>{label}</span>
          <YouOutlineLayer isDisabled={args.isDisabled} />
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}

export function YouTextCommonLink({ leading, xstyle, label, ...props }: YouCommonLinkProps) {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(
      styles.base,
      styles.isText,
      leading !== undefined ? styles.hasLeading : null,
      args.isDisabled ? styles.isDisabled : null,
      xstyle,
    );
  }, [leading, xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Link
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          {leading !== undefined ? <span {...stylex.props(styles.leading)}>{leading}</span> : null}
          <span {...stylex.props(styles.children, youStylesTypography.labelLarge)}>{label}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}
