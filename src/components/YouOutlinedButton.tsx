import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactNode } from 'react';
import type { ButtonProps, ButtonRenderProps } from 'react-aria-components';
import { Button } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/styles';
import { youPresetTypography, youPresetMotion } from '../stylex/preset.stylex';
import { youSysColor, youSysShape, youSysState } from '../stylex/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

export interface YouOutlinedButtonProps extends Omit<ButtonProps, 'style' | 'className' | 'children'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
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
    color: `rgb(${youSysColor.primary})`,
    columnGap: 8,
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    outlineStyle: 'none',
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    transitionProperty: 'background-color, color, border-color',
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
    maxHeight: 18,
    maxWidth: 18,
    position: 'relative',
  },
  label: {
    display: 'inline-block',
    position: 'relative',
  },
});

export function YouOutlinedButton({ symbol, xstyle, label, ...props }: YouOutlinedButtonProps) {
  const ariax = useCallback((args: ButtonRenderProps) => {
    return stylex.props(
      styles.base,
      youPresetMotion.expressiveFastEffects,
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
            {...stylex.props(styles.label, youPresetTypography.emphasizedLabelLarge)}
          >
            {label}
          </span>
          <YouOutlineLayer
            isDisabled={args.isDisabled}
          />
          <YouFocusLayer
            isFocusVisible={args.isFocusVisible}
          />
        </>
      )}
    </Button>
  );
}
