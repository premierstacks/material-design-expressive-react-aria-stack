import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import type { LinkProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { toClassName, toStyle } from '../helpers/utils';
import { youStylesTypography } from '../vars/styles.stylex';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface YouCommonLinkProps extends Omit<LinkProps, 'style' | 'className'> {
  isElevated?: boolean | undefined;
  isFilled?: boolean | undefined;
  isOutlined?: boolean | undefined;
  isText?: boolean | undefined;
  isTonal?: boolean | undefined;
  leading?: ReactNode | undefined;
  text?: ReactNode | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
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
    tranisitionDuration: youSysMotion.durationEmphasized,
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
  isDisabledOutline: {
    borderColor: `rgb(${youSysColor.outlineVariant}/${youSysState.disabledOutlineOpacity})`,
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

export function YouCommonLink({ leading, xstyle, isText, isElevated, isFilled, isTonal, isOutlined, children, text, ...props }: YouCommonLinkProps) {
  return (
    <Link
      style={(args) =>
        toStyle(
          args.defaultStyle,
          stylex.props(
            styles.base,
            isText ? styles.isText : null,
            isFilled ? styles.isFilled : null,
            isElevated ? styles.isElevated : null,
            isTonal ? styles.isTonal : null,
            isOutlined ? styles.isOutlined : null,
            leading ? styles.hasLeading : null,
            leading && (isElevated || isFilled || isTonal || isOutlined) ? styles.hasFilledLeading : null,
            args.isDisabled ? styles.isDisabled : null,
            args.isDisabled && (isElevated || isFilled || isTonal) ? styles.isDisabledBackground : null,
            args.isDisabled && isOutlined ? styles.isDisabledOutline : null,
            xstyle,
          ).style,
        )
      }
      className={(args) =>
        toClassName(
          args.defaultClassName,
          stylex.props(
            styles.base,
            isText ? styles.isText : null,
            isFilled ? styles.isFilled : null,
            isElevated ? styles.isElevated : null,
            isTonal ? styles.isTonal : null,
            isOutlined ? styles.isOutlined : null,
            leading ? styles.hasLeading : null,
            leading && (isElevated || isFilled || isTonal || isOutlined) ? styles.hasFilledLeading : null,
            args.isDisabled ? styles.isDisabled : null,
            args.isDisabled && (isElevated || isFilled || isTonal) ? styles.isDisabledBackground : null,
            args.isDisabled && isOutlined ? styles.isDisabledOutline : null,
            xstyle,
          ).className,
        )
      }
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          {leading && <span {...stylex.props(styles.leading)}>{leading}</span>}
          <span {...stylex.props(styles.children, youStylesTypography.labelLarge)}>{args.defaultChildren ?? (typeof children === 'function' ? children(args) : (children ?? text))}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}
