import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import type { ToggleButtonProps } from 'react-aria-components';
import { ToggleButton } from 'react-aria-components';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface YouToggleIconButtonProps extends ToggleButtonProps {
  isFilled?: boolean | undefined;
  isOutlined?: boolean | undefined;
  isStandard?: boolean | undefined;
  isTonal?: boolean | undefined;
  on?: ReactNode | undefined;
  off?: ReactNode | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: youSysShape.cornerFull,
    borderStyle: 'none',
    color: 'inherit',
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    outlineStyle: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    whiteSpace: 'nowrap',
    width: 40,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperties: 'background-color, color, border-color',
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
    borderColor: `rgb(${youSysColor.outline})`,
    borderStyle: 'solid',
    borderWidth: 1,
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
  isSelectedOutlined: {
    backgroundColor: `rgb(${youSysColor.inverseSurface})`,
    color: `rgb(${youSysColor.inverseOnSurface})`,
  },
  isDisabled: {
    backgroundColor: 'transparent',
    borderColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
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

export function YouToggleIconButton({ isStandard, isFilled, isTonal, isOutlined, children, xstyle, on, off, ...props }: YouToggleIconButtonProps) {
  return (
    <ToggleButton
      className={(args) =>
        stylex.props(
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
        ).className ?? ''
      }
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          <span {...stylex.props(styles.children)}>{args.defaultChildren ?? (typeof children === 'function' ? children(args) : (children ?? (args.isSelected ? on : off)))}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </ToggleButton>
  );
}
