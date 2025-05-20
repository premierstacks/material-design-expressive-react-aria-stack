import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { Link, type LinkProps, type LinkRenderProps } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/utils';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouActivationLayer } from './YouActivationLayer';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface NavigationBarLinkProps extends Omit<LinkProps, 'style' | 'className'> {
  readonly icon: ReactNode;
  readonly text: ReactNode;
  readonly isActive?: boolean;
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    borderBottomLeftRadius: youSysShape.cornerLarge,
    borderBottomRightRadius: youSysShape.cornerLarge,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: youSysShape.cornerLarge,
    borderTopRightRadius: youSysShape.cornerLarge,
    borderTopStyle: 'none',
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    cursor: 'pointer',
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    minWidth: 0,
    outlineStyle: 'none',
    outlineWidth: '0px',
    paddingBottom: 16,
    paddingTop: 12,
    position: 'relative',
    textAlign: 'center',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'color',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    whiteSpace: 'nowrap',
  },
  isHovered: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  isDisabled: {
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
    pointerEvents: 'none',
    userSelect: 'none',
  },
});

const badgeStyles = stylex.create({
  base: {
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    display: 'flex',
    height: 32,
    justifyContent: 'center',
    lineHeight: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    textAlign: 'center',
    width: 56,
  },
  isActive: {
    color: `rgb(${youSysColor.onSecondaryContainer})`,
  },
  isDisabled: {
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
  },
});

const iconStyles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 24,
    justifyContent: 'center',
    lineHeight: 1,
    maxHeight: 24,
    maxWidth: 24,
    position: 'relative',
  },
});

const childrenStyles = stylex.create({
  base: {
    marginTop: 4,
    overflowX: 'hidden',
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export function NavigationBarLink({ children, text, icon, xstyle, isActive = false, ...props }: NavigationBarLinkProps): ReactElement {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(styles.base, args.isHovered ? styles.isHovered : null, args.isDisabled ? styles.isDisabled : null, youStylesTypography.labelMedium, xstyle);
  }, [xstyle]);

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
          <div>
            <div {...stylex.props(badgeStyles.base, isActive || args.isCurrent ? badgeStyles.isActive : null, args.isDisabled ? badgeStyles.isDisabled : null)}>
              <YouActivationLayer isActive={isActive || args.isCurrent} />
              <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
              <span {...stylex.props(iconStyles.base)}>{icon}</span>
              <YouFocusLayer isFocusVisible={args.isFocusVisible} isInset />
            </div>
          </div>
          <div {...stylex.props(childrenStyles.base)}>{(typeof children === 'function' ? children(args) : (children ?? text)) ?? args.defaultChildren}</div>
        </>
      )}
    </Link>
  );
}
