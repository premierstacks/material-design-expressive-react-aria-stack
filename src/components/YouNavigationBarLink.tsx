import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import { Link, type LinkProps } from 'react-aria-components';
import { toClassName, toStyle } from '../helpers/utils';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouActivationLayer } from './YouActivationLayer';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface NavigationBarLinkProps extends Omit<LinkProps, 'style' | 'className'> {
  icon: ReactNode;
  text: ReactNode;
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
    cursor: 'pointer',
    paddingTop: 12,
    paddingBottom: 16,
    textAlign: 'center',
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    flexGrow: 1,
    flexBasis: 0,
    outlineWidth: 0,
    whiteSpace: 'nowrap',
    display: 'block',
    minWidth: 0,
    borderRadius: youSysShape.cornerLarge,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    tranisitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'color',
  },
  isHovered: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  isDisabled: {
    pointerEvents: 'none',
    userSelect: 'none',
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
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
    lineHeight: 32,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
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
    maxHeight: 24,
    maxWidth: 24,
    position: 'relative',
    lineHeight: 1,
  },
});

const childrenStyles = stylex.create({
  base: {
    marginTop: 4,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});

export function NavigationBarLink({ text, icon, xstyle, isActive = false, ...props }: NavigationBarLinkProps): ReactNode {
  return (
    <Link
      style={(args) =>
        toStyle(args.defaultStyle, stylex.props(styles.base, args.isHovered ? styles.isHovered : null, args.isDisabled ? styles.isDisabled : null, youStylesTypography.labelMedium, xstyle).style)
      }
      className={(args) =>
        toClassName(
          args.defaultClassName,
          stylex.props(styles.base, args.isHovered ? styles.isHovered : null, args.isDisabled ? styles.isDisabled : null, youStylesTypography.labelMedium, xstyle).className,
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
              <YouFocusLayer isFocusVisible={args.isFocusVisible} isInset />
            </div>
          </div>
          <div {...stylex.props(childrenStyles.base)}>{text}</div>
        </>
      )}
    </Link>
  );
}
