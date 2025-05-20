import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import type { ButtonProps, ButtonRenderProps } from 'react-aria-components';
import { Button } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/utils';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouIconButtonProps extends Omit<ButtonProps, 'style' | 'className'> {
  readonly isFilled?: boolean;
  readonly isOutlined?: boolean;
  readonly isStandard?: boolean;
  readonly isTonal?: boolean;
  readonly icon?: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    appearance: 'none',
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
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'color',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    whiteSpace: 'nowrap',
    width: 40,
  },
  isStandard: {
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
  isFilled: {
    backgroundColor: `rgb(${youSysColor.primary})`,
    color: `rgb(${youSysColor.onPrimary})`,
  },
  isTonal: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    color: `rgb(${youSysColor.onSecondaryContainer})`,
  },
  isDisabled: {
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
  },
  isDisabledBackground: {
    backgroundColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
  },
});

const childrenStyles = stylex.create({
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

export function YouIconButton({ isStandard = false, isFilled = false, isTonal = false, isOutlined = false, children, xstyle, icon, ...props }: YouIconButtonProps): ReactElement {
  const ariax = useCallback((args: ButtonRenderProps) => {
    return stylex.props(
      styles.base,
      isStandard ? styles.isStandard : null,
      isFilled ? styles.isFilled : null,
      isTonal ? styles.isTonal : null,
      args.isDisabled || args.isPending ? styles.isDisabled : null,
      (args.isDisabled || args.isPending) && (isFilled || isTonal) ? styles.isDisabledBackground : null,
      xstyle,
    );
  }, [isStandard, isFilled, isTonal, xstyle]);

  const handleClassName = useCallback((args: ButtonRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: ButtonRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Button
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          <span {...stylex.props(childrenStyles.base)}>{(typeof children === 'function' ? children(args) : (children ?? icon)) ?? args.defaultChildren}</span>
          {isOutlined ? <YouOutlineLayer isDisabled={args.isDisabled || args.isPending} /> : null}
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Button>
  );
}
