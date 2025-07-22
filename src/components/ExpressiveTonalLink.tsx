import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactNode } from 'react';
import type { LinkProps, LinkRenderProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { mergeClassNames, mergeCssProperties } from '../helpers/styles';
import { expressivePresetFont, expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor, expressiveSysOpacity, expressiveSysRadius } from '../stylex/sys.stylex';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveTonalLinkProps extends Omit<LinkProps, 'style' | 'className' | 'children'> {
  readonly symbol?: ReactNode;
  readonly label: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    alignItems: 'center',
    backgroundColor: `rgb(${expressiveSysColor.secondaryContainer})`,
    borderBottomLeftRadius: expressiveSysRadius.full,
    borderBottomRightRadius: expressiveSysRadius.full,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: expressiveSysRadius.full,
    borderTopRightRadius: expressiveSysRadius.full,
    borderTopStyle: 'none',
    color: `rgb(${expressiveSysColor.onSecondaryContainer})`,
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

export function ExpressiveTonalLink({ symbol, xstyle, label, ...props }: ExpressiveTonalLinkProps) {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(
      rootStyles.base,
      expressivePresetTransition.effectsFast,
      args.isDisabled ? rootStyles.isDisabled : null,
      xstyle,
    );
  }, [xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return mergeClassNames(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return mergeCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Link
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
          <ExpressiveFocusedOutlineLayer
            isFocusVisible={args.isFocusVisible}
          />
        </>
      )}
    </Link>
  );
}
