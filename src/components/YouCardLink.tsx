import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactNode } from 'react';
import type { LinkProps, LinkRenderProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/utils';
import { youSysColor, youSysShape } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouCardLinkProps extends Omit<LinkProps, 'style' | 'className'> {
  readonly before?: (args: LinkRenderProps) => ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    appearance: 'none',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: youSysShape.cornerMedium,
    borderBottomRightRadius: youSysShape.cornerMedium,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: youSysShape.cornerMedium,
    borderTopRightRadius: youSysShape.cornerMedium,
    borderTopStyle: 'none',
    boxShadow: 'none',
    color: `rgb(${youSysColor.onSurface})`,
    display: 'block',
    outlineStyle: 'none',
    position: 'relative',
    textDecorationLine: 'none',
  },
  isElevated: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerLow})`,
  },
  isFilled: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerHighest})`,
  },
  isOutlined: {
    backgroundColor: `rgb(${youSysColor.surface})`,
  },
  children: {
    borderBottomLeftRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
    position: 'relative',
  },
});

export function YouElevatedCardLink({ xstyle, children, before, ...props }: YouCardLinkProps) {
  const ariax = useCallback(() => {
    return stylex.props(styles.base, styles.isElevated, xstyle);
  }, [xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax().className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax().style);
  }, [ariax]);

  return (
    <Link style={handleStyle} className={handleClassName} {...props}>
      {(args) => (
        <>
          {before !== undefined ? before(args) : null}
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          <div {...stylex.props(styles.children)}>{typeof children === 'function' ? children(args) : children}</div>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}

export function YouFilledCardLink({ xstyle, children, before, ...props }: YouCardLinkProps) {
  const ariax = useCallback(() => {
    return stylex.props(styles.base, styles.isFilled, xstyle);
  }, [xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax().className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax().style);
  }, [ariax]);

  return (
    <Link style={handleStyle} className={handleClassName} {...props}>
      {(args) => (
        <>
          {before !== undefined ? before(args) : null}
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          <div {...stylex.props(styles.children)}>{typeof children === 'function' ? children(args) : children}</div>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}

export function YouOutlinedCardLink({ xstyle, children, before, ...props }: YouCardLinkProps) {
  const ariax = useCallback(() => {
    return stylex.props(styles.base, styles.isOutlined, xstyle);
  }, [xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax().className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax().style);
  }, [ariax]);

  return (
    <Link style={handleStyle} className={handleClassName} {...props}>
      {(args) => (
        <>
          {before !== undefined ? before(args) : null}
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          <div {...stylex.props(styles.children)}>{typeof children === 'function' ? children(args) : children}</div>
          <YouOutlineLayer isDisabled={args.isDisabled} />
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}
