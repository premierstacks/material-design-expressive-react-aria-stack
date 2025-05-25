import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type HTMLAttributes, type ReactElement, type ReactNode } from 'react';
import type { LinkProps, LinkRenderProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/utils';
import { youSysColor, youSysShape } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

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
  content: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});

export enum CardVariant {
  Elevated = 'elevated',
  Filled = 'filled',
  Outlined = 'outlined',
}

interface YouCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly variant?: CardVariant;
}

function baseStylex(variant: CardVariant, custom: stylex.StyleXStyles) {
  return stylex.props(styles.base, variant === CardVariant.Elevated ? styles.isElevated : null, variant === CardVariant.Filled ? styles.isFilled : null, variant === CardVariant.Outlined ? styles.isOutlined : null, custom);
}

export function YouCard({ xstyle, children, variant = CardVariant.Filled, ...props }: YouCardProps): ReactElement {
  return (
    <div {...baseStylex(variant, xstyle)} {...props}>
      <div {...stylex.props(styles.children)}>{children}</div>
      {variant === CardVariant.Outlined ? <YouOutlineLayer /> : null}
    </div>
  );
}

export function YouCardContent({ children }: { readonly children: ReactNode }): ReactElement {
  return (
    <div {...stylex.props(styles.children, styles.content)}>
      {children}
    </div>
  );
}

YouCard.Content = YouCardContent;

interface YouCardLinkProps extends Omit<LinkProps, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly variant?: CardVariant;
}

export function YouCardLink({ xstyle, children, variant = CardVariant.Filled, ...props }: YouCardLinkProps) {
  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, baseStylex(variant, xstyle).className);
  }, [variant, xstyle]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, baseStylex(variant, xstyle).style);
  }, [variant, xstyle]);

  return (
    <Link style={handleStyle} className={handleClassName} {...props}>
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          <div {...stylex.props(styles.children)}>{typeof children === 'function' ? children(args) : children}</div>
          {variant === CardVariant.Outlined ? <YouOutlineLayer isDisabled={args.isDisabled} /> : null}
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}
