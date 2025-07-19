import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { Button, type ButtonProps, type ButtonRenderProps } from 'react-aria-components';
import { toClass, toCssProperties } from '../helpers/styles';
import { expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor, expressiveSysOpacity, expressiveSysRadius } from '../stylex/sys.stylex';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

interface ExpressiveStandardIconButtonProps extends Omit<ButtonProps, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly symbol?: ReactNode;
}

const rootStyles = stylex.create({
  base: {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: expressiveSysRadius.full,
    borderBottomRightRadius: expressiveSysRadius.full,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: expressiveSysRadius.full,
    borderTopRightRadius: expressiveSysRadius.full,
    borderTopStyle: 'none',
    color: `rgb(${expressiveSysColor.onSurfaceVariant})`,
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
    color: `rgb(${expressiveSysColor.onSurfaceVariant}/${expressiveSysOpacity.disabledContent})`,
  },
});

export function ExpressiveStandardIconButton({ xstyle, symbol, ...props }: ExpressiveStandardIconButtonProps): ReactElement {
  const ariax = useCallback((args: ButtonRenderProps) => {
    return stylex.props(
      rootStyles.base,
      expressivePresetTransition.effectsFast,
      args.isDisabled || args.isPending ? rootStyles.isDisabled : null,
      xstyle,
    );
  }, [xstyle]);

  const handleClassName = useCallback((args: ButtonRenderProps & { defaultClassName: string | undefined }) => {
    return toClass(args.defaultClassName, ariax(args).className);
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
            <ExpressiveHoveredStateLayer
              isHovered={args.isHovered}
            />
            <ExpressivePressedStateLayer
              isPressed={args.isPressed}
            />
            <ExpressiveFocusedStateLayer
              isFocused={args.isFocusVisible}
            />
            <ExpressiveIcon
              size="calc(24/16*1rem)"
              symbol={symbol}
            />
            <ExpressiveFocusedOutlineLayer
              isFocusVisible={args.isFocusVisible}
            />
          </>
        );
      }}
    </Button>
  );
}
