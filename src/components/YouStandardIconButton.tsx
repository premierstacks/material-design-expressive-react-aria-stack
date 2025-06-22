import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { Button, type ButtonProps, type ButtonRenderProps } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/styles';
import { youPresetMotion } from '../stylex/preset.stylex';
import { youSysColor, youSysShape, youSysState } from '../stylex/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouIcon } from './YouIcon';
import { YouInteractionLayer } from './YouInteractionLayer';

interface YouStandardIconButtonProps extends Omit<ButtonProps, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly symbol?: ReactNode;
}

const rootStyles = stylex.create({
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
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    outlineStyle: 'none',
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'none',
    transitionProperty: 'background-color, color, border-color',
    whiteSpace: 'nowrap',
    width: 40,
  },
  isDisabled: {
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
  },
});

export function YouStandardIconButton({ xstyle, symbol, ...props }: YouStandardIconButtonProps): ReactElement {
  const ariax = useCallback((args: ButtonRenderProps) => {
    return stylex.props(
      rootStyles.base,
      youPresetMotion.expressiveFastEffects,
      args.isDisabled || args.isPending ? rootStyles.isDisabled : null,
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
      {(args) => {
        return (
          <>
            <YouInteractionLayer
              isHovered={args.isHovered}
              isDragged={false}
              isFocused={args.isFocused}
              isPressed={args.isPressed}
            />
            <YouIcon
              size="calc(24/16*1rem)"
              symbol={symbol}
            />
            <YouFocusLayer
              isFocusVisible={args.isFocusVisible}
            />
          </>
        );
      }}
    </Button>
  );
}
