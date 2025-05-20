/* eslint-disable sonarjs/cognitive-complexity */

import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import type { ToggleButtonProps, ToggleButtonRenderProps } from 'react-aria-components';
import { ToggleButton } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/utils';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface YouToggleIconButtonProps extends Omit<ToggleButtonProps, 'style' | 'className'> {
  readonly isFilled?: boolean;
  readonly isOutlined?: boolean;
  readonly isStandard?: boolean;
  readonly isTonal?: boolean;
  readonly on?: ReactNode;
  readonly off?: ReactNode;
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
    height: 48,
    justifyContent: 'center',
    outlineStyle: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'background-color, color, border-color',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    whiteSpace: 'nowrap',
    width: 48,
  },
  isStandard: {
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
  isSelectedStandard: {
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.primary})`,
  },
  isFilled: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerHighest})`,
    color: `rgb(${youSysColor.primary})`,
  },
  isSelectedFilled: {
    backgroundColor: `rgb(${youSysColor.primary})`,
    color: `rgb(${youSysColor.onPrimary})`,
  },
  isTonal: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerHighest})`,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
  isSelectedTonal: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    color: `rgb(${youSysColor.onSecondaryContainer})`,
  },
  isOutlined: {
    backgroundColor: 'transparent',
    borderBottomColor: `rgb(${youSysColor.outline})`,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderLeftColor: `rgb(${youSysColor.outline})`,
    borderLeftStyle: 'solid',
    borderLeftWidth: 1,
    borderRightColor: `rgb(${youSysColor.outline})`,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    borderTopColor: `rgb(${youSysColor.outline})`,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
  isSelectedOutlined: {
    backgroundColor: `rgb(${youSysColor.inverseSurface})`,
    color: `rgb(${youSysColor.inverseOnSurface})`,
  },
  isDisabled: {
    backgroundColor: 'transparent',
    borderBottomColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
    borderLeftColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
    borderRightColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
    borderTopColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
  },
  isDisabledBackground: {
    backgroundColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
  },
  children: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 24,
    justifyContent: 'center',
    maxHeight: 24,
    maxWidth: 24,
    position: 'relative',
  },
});

export function YouToggleIconButton({ isStandard = false, isFilled = false, isTonal = false, isOutlined = false, children, xstyle, on, off, ...props }: YouToggleIconButtonProps): ReactElement {
  const ariax = useCallback((args: ToggleButtonRenderProps) => {
    return stylex.props(
      styles.base,
      isStandard ? styles.isStandard : null,
      args.isSelected && isStandard ? styles.isSelectedStandard : null,
      isFilled ? styles.isFilled : null,
      args.isSelected && isFilled ? styles.isSelectedFilled : null,
      isTonal ? styles.isTonal : null,
      args.isSelected && isTonal ? styles.isSelectedTonal : null,
      isOutlined ? styles.isOutlined : null,
      args.isSelected && isOutlined ? styles.isSelectedOutlined : null,
      args.isDisabled ? styles.isDisabled : null,
      args.isDisabled && (isFilled || isTonal || (args.isSelected && isOutlined)) ? styles.isDisabledBackground : null,
      xstyle,
    );
  }, [isStandard, isFilled, isTonal, isOutlined, xstyle]);

  const handleClassName = useCallback((args: ToggleButtonRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: ToggleButtonRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <ToggleButton
      className={handleClassName}
      style={handleStyle}
      {...props}
    >
      {(args) => {
        const fallback = args.isSelected ? on : off;

        return (
          <>
            <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
            <span {...stylex.props(styles.children)}>{(typeof children === 'function' ? children(args) : children ?? fallback) ?? args.defaultChildren}</span>
            <YouFocusLayer isFocusVisible={args.isFocusVisible} />
          </>
        );
      }}
    </ToggleButton>
  );
}
