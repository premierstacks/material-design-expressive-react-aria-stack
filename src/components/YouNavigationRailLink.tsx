import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import { Link, type LinkProps } from 'react-aria-components';
import { toClassName, toStyle } from '../helpers/utils';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouActivationLayer } from './YouActivationLayer';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface YouNavigationRailLinkProps extends Omit<LinkProps, 'style' | 'className'> {
  icon?: ReactNode | undefined;
  text?: ReactNode | undefined;
  isActive?: boolean | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    outlineStyle: 'none',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    position: 'relative',
    display: 'block',
    cursor: 'pointer',
    paddingBottom: 12,
    textAlign: 'center',
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    outlineWidth: 0,
    borderTopLeftRadius: youSysShape.cornerLarge,
    borderBottomLeftRadius: youSysShape.cornerLarge,
    borderTopRightRadius: youSysShape.cornerLarge,
    borderBottomRightRadius: youSysShape.cornerLarge,
    minWidth: 0,
  },
  isActive: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  isDisabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
  },
});

const badgeStyles = stylex.create({
  base: {
    width: 56,
    height: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  isActive: {
    color: `rgb(${youSysColor.onSecondaryContainer})`,
  },
  isDisabled: {
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
  },
});

const iconStyles = stylex.create({
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

const childrenStyles = stylex.create({
  base: {
    marginTop: 4,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

export function YouNavigationRailLink({ xstyle, icon, text, children, isActive = false, ...props }: YouNavigationRailLinkProps): ReactNode {
  return (
    <Link
      style={(args) =>
        toStyle(
          args.defaultStyle,
          stylex.props(styles.base, youStylesTypography.labelMedium, isActive || args.isCurrent || args.isHovered ? styles.isActive : null, args.isDisabled ? styles.isDisabled : null, xstyle).style,
        )
      }
      className={(args) =>
        toClassName(
          args.defaultClassName,
          stylex.props(styles.base, youStylesTypography.labelMedium, isActive || args.isCurrent || args.isHovered ? styles.isActive : null, args.isDisabled ? styles.isDisabled : null, xstyle)
            .className,
        )
      }
      {...props}
    >
      {(args) => (
        <>
          <div>
            <div {...stylex.props(badgeStyles.base, isActive || args.isCurrent ? badgeStyles.isActive : null, args.isDisabled ? badgeStyles.isDisabled : null)}>
              <YouActivationLayer isActive={isActive || args.isCurrent} />
              <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
              <span {...stylex.props(iconStyles.base)}>{icon}</span>
              <YouFocusLayer isFocusVisible={args.isFocusVisible} />
            </div>
          </div>
          <div {...stylex.props(childrenStyles.base)}>{typeof children === 'function' ? children(args) : (children ?? text)}</div>
        </>
      )}
    </Link>
  );
}
