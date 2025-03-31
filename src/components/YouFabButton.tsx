import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import { Button, type ButtonProps } from 'react-aria-components';
import { toClassName, toStyle } from '../helpers/utils';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface YouFabButtonProps extends Omit<ButtonProps, 'style' | 'className'> {
  isLarge?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSmall?: boolean;
  isSurface?: boolean;
  isTertiary?: boolean;
  leading?: ReactNode | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'none',
    color: 'inherit',
    display: 'inline-flex',
    height: 56,
    justifyContent: 'center',
    outlineStyle: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    whiteSpace: 'nowrap',
    borderRadius: youSysShape.cornerFull,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    tranisitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'background-color, color',
  },
  hasChildren: {
    minWidth: 80,
    paddingInline: 16,
  },
  hasNoChildren: {
    width: 56,
  },
  isPrimary: {
    backgroundColor: `rgb(${youSysColor.primaryContainer})`,
    color: `rgb(${youSysColor.onPrimaryContainer})`,
  },
  isSurface: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerHigh})`,
    color: `rgb(${youSysColor.onSurface})`,
  },
  isSecondary: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    color: `rgb(${youSysColor.onSecondaryContainer})`,
  },
  isTertiary: {
    backgroundColor: `rgb(${youSysColor.tertiaryContainer})`,
    color: `rgb(${youSysColor.onTertiaryContainer})`,
  },
  isSmall: {
    borderRadius: youSysShape.cornerMedium,
    height: 40,
    width: 40,
  },
  isLarge: {
    borderRadius: youSysShape.cornerLarge,
    height: 96,
    width: 96,
  },
  isDisabled: {
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
  },
  isDisabledContainer: {
    backgroundColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
  },
  leading: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 24,
    justifyContent: 'center',
    maxHeight: 24,
    maxWidth: 24,
    position: 'relative',
  },
  largeLeading: {
    fontSize: 32,
    maxHeight: 32,
    maxWidth: 32,
  },
  children: {
    display: 'inline-block',
    position: 'relative',
  },
  childrenHasLeading: {
    marginLeft: 12,
  },
});

export function YouFabButton({ children, isLarge, isPrimary, isSecondary, isSmall, isSurface, isTertiary, leading, xstyle, ...props }: YouFabButtonProps): ReactNode {
  return (
    <Button
      style={(args) =>
        toStyle(
          args.defaultStyle,
          stylex.props(
            styles.base,
            children ? styles.hasChildren : styles.hasNoChildren,
            isPrimary ? styles.isPrimary : null,
            isSurface ? styles.isSurface : null,
            isSecondary ? styles.isSecondary : null,
            isTertiary ? styles.isTertiary : null,
            isSmall ? styles.isSmall : null,
            isLarge ? styles.isLarge : null,
            args.isDisabled || args.isPending ? styles.isDisabled : null,
            (args.isDisabled || args.isPending) && (isPrimary || isSecondary || isTertiary || isSurface) ? styles.isDisabledContainer : null,
            xstyle,
          ).style,
        )
      }
      className={(args) =>
        toClassName(
          args.defaultClassName,
          stylex.props(
            styles.base,
            children ? styles.hasChildren : styles.hasNoChildren,
            isPrimary ? styles.isPrimary : null,
            isSurface ? styles.isSurface : null,
            isSecondary ? styles.isSecondary : null,
            isTertiary ? styles.isTertiary : null,
            isSmall ? styles.isSmall : null,
            isLarge ? styles.isLarge : null,
            args.isDisabled || args.isPending ? styles.isDisabled : null,
            (args.isDisabled || args.isPending) && (isPrimary || isSecondary || isTertiary || isSurface) ? styles.isDisabledContainer : null,
            xstyle,
          ).className,
        )
      }
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          {leading && <span {...stylex.props(styles.leading, isLarge ? styles.largeLeading : null)}>{leading}</span>}
          {children ? (
            <span {...stylex.props(styles.children, leading ? styles.childrenHasLeading : null, youStylesTypography.labelLarge)}>
              {args.defaultChildren ?? (typeof children === 'function' ? children(args) : children)}
            </span>
          ) : null}
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Button>
  );
}
