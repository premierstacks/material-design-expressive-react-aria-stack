import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactNode } from 'react';
import type { ButtonProps, ButtonRenderProps } from 'react-aria-components';
import { Button } from 'react-aria-components';
import { mergeClassNames, mergeCssProperties } from '../helpers/styles';
import { expressivePresetFont, expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor, expressiveSysOpacity, expressiveSysRadius } from '../stylex/sys.stylex';
import { ExpressiveBorderLayer } from './ExpressiveBorderLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveOutlinedButtonProps extends Omit<ButtonProps, 'style' | 'className' | 'children'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomLeftRadius: expressiveSysRadius.full,
    borderBottomRightRadius: expressiveSysRadius.full,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: expressiveSysRadius.full,
    borderTopRightRadius: expressiveSysRadius.full,
    borderTopStyle: 'none',
    color: `rgb(${expressiveSysColor.primary})`,
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
    backgroundColor: `rgb(${expressiveSysColor.onSurfaceVariant}/${expressiveSysOpacity.disabledContainer})`,
    color: `rgb(${expressiveSysColor.onSurfaceVariant}/${expressiveSysOpacity.disabledContent})`,
  },
});

const symbolStyles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 18,
    justifyContent: 'center',
    maxHeight: 18,
    maxWidth: 18,
    position: 'relative',
  },
});

const labelStyles = stylex.create({
  base: {
    display: 'inline-block',
    position: 'relative',
  },
});

export function ExpressiveOutlinedButton({ symbol, xstyle, label, ...props }: ExpressiveOutlinedButtonProps) {
  const ariax = useCallback((args: ButtonRenderProps) => {
    return stylex.props(
      rootStyles.base,
      expressivePresetTransition.effectsFast,
      args.isDisabled || args.isPending ? rootStyles.isDisabled : null,
      xstyle,
    );
  }, [xstyle]);

  const handleClassName = useCallback((args: ButtonRenderProps & { defaultClassName: string | undefined }) => {
    return mergeClassNames(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: ButtonRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return mergeCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Button
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
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
          {symbol !== undefined
            ? (
                <span
                  {...stylex.props(symbolStyles.base)}
                >
                  {symbol}
                </span>
              )
            : null}
          <span
            {...stylex.props(labelStyles.base, expressivePresetFont.labelLarge)}
          >
            {label}
          </span>
          <ExpressiveBorderLayer
            isDisabled={args.isDisabled}
          />
          <ExpressiveFocusedOutlineLayer
            isFocusVisible={args.isFocusVisible}
          />
        </>
      )}
    </Button>
  );
}
