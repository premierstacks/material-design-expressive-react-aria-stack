import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactNode } from 'react';
import type { ButtonProps, ButtonRenderProps } from 'react-aria-components';
import { Button } from 'react-aria-components';
import { mergeClassNames, mergeCssProperties } from '../helpers/styles';
import { expressivePresetFont, expressivePresetReset, expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor, expressiveSysOpacity, expressiveSysRadius } from '../stylex/sys.stylex';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressiveIcon } from './ExpressiveIcon';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveFilledButtonProps extends Omit<ButtonProps, 'style' | 'className' | 'children'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: `rgb(${expressiveSysColor.primary})`,
    borderBottomLeftRadius: expressiveSysRadius.full,
    borderBottomRightRadius: expressiveSysRadius.full,
    borderTopLeftRadius: expressiveSysRadius.full,
    borderTopRightRadius: expressiveSysRadius.full,
    color: `rgb(${expressiveSysColor.onPrimary})`,
    columnGap: 8,
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative',
    textAlign: 'center',
    transitionProperty: 'background-color, color, border-color',
    whiteSpace: 'nowrap',
  },
  isDisabled: {
    backgroundColor: `rgb(${expressiveSysColor.onSurfaceVariant}/${expressiveSysOpacity.disabledContainer})`,
    color: `rgb(${expressiveSysColor.onSurfaceVariant}/${expressiveSysOpacity.disabledContent})`,
  },
});

const labelStyles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    flexShrink: 0,
    position: 'relative',
    whiteSpace: 'nowrap',
  },
});

export function ExpressiveFilledButton({ symbol, xstyle, label, ...props }: ExpressiveFilledButtonProps) {
  const ariax = useCallback((args: ButtonRenderProps) => {
    return stylex.props(
      expressivePresetReset.button,
      expressivePresetTransition.effectsFast,
      rootStyles.base,
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
                <ExpressiveIcon
                  size={18}
                  symbol={symbol}
                />
              )
            : null}
          <span
            {...stylex.props(expressivePresetFont.labelLarge, labelStyles.base)}
          >
            {label}
          </span>
          <ExpressiveFocusedOutlineLayer
            isFocusVisible={args.isFocusVisible}
          />
        </>
      )}
    </Button>
  );
}
