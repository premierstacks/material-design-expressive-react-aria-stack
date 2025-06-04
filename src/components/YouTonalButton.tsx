import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactNode } from 'react';
import type { ButtonProps, ButtonRenderProps } from 'react-aria-components';
import { Button } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/styles';
import { youPresetTypography } from '../stylex/preset.stylex';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../stylex/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

export interface YouTonalButtonProps extends Omit<ButtonProps, 'style' | 'className' | 'children'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
    borderBottomLeftRadius: youSysShape.cornerFull,
    borderBottomRightRadius: youSysShape.cornerFull,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: youSysShape.cornerFull,
    borderTopRightRadius: youSysShape.cornerFull,
    borderTopStyle: 'none',
    color: `rgb(${youSysColor.onSecondaryContainer})`,
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    outlineStyle: 'none',
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'background-color, color, border-color',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    whiteSpace: 'nowrap',
  },
  isDisabled: {
    backgroundColor: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
  },
  symbol: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 18,
    justifyContent: 'center',
    marginRight: 8,
    maxHeight: 18,
    maxWidth: 18,
    position: 'relative',
  },
  label: {
    display: 'inline-block',
    position: 'relative',
  },
});

export function YouTonalButton({ symbol, xstyle, label, ...props }: YouTonalButtonProps) {
  const ariax = useCallback((args: ButtonRenderProps) => {
    return stylex.props(
      styles.base,
      args.isDisabled || args.isPending ? styles.isDisabled : null,
      xstyle,
    );
  }, [xstyle]);

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
          <YouInteractionLayer
            isHovered={args.isHovered}
            isDragged={false}
            isFocused={args.isFocused}
            isPressed={args.isPressed}
          />
          {symbol !== undefined
            ? (
                <span
                  {...stylex.props(styles.symbol)}
                >
                  {symbol}
                </span>
              )
            : null}
          <span
            {...stylex.props(styles.label, youPresetTypography.labelLarge)}
          >
            {label}
          </span>
          <YouFocusLayer
            isFocusVisible={args.isFocusVisible}
          />
        </>
      )}
    </Button>
  );
}
