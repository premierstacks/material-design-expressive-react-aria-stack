import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { Link, type LinkProps, type LinkRenderProps } from 'react-aria-components';
import { toClass, toCssProperties } from '../helpers/styles';
import { expressivePresetFont, expressivePresetTransition } from '../stylex/preset.stylex';
import { expressiveSysColor, expressiveSysOpacity, expressiveSysRadius } from '../stylex/sys.stylex';
import { ExpressiveActivationLayer } from './ExpressiveActivationLayer';
import { ExpressiveFocusedStateLayer } from './ExpressiveFocusedStateLayer';
import { ExpressiveFocusedOutlineLayer } from './ExpressiveFocusedOutlineLayer';
import { ExpressiveHoveredStateLayer } from './ExpressiveHovererdStateLayer';
import { ExpressivePressedStateLayer } from './ExpressivePressedStateLayer';

export interface ExpressiveNavigationBarLinkProps extends Omit<LinkProps, 'style' | 'className' | 'children'> {
  readonly symbol: ReactNode;
  readonly label: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const rootStyles = stylex.create({
  base: {
    borderBottomLeftRadius: expressiveSysRadius.large,
    borderBottomRightRadius: expressiveSysRadius.large,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: expressiveSysRadius.large,
    borderTopRightRadius: expressiveSysRadius.large,
    borderTopStyle: 'none',
    color: `rgb(${expressiveSysColor.onSurfaceVariant})`,
    display: 'block',
    flexBasis: 0,
    flexGrow: 1,
    minWidth: 0,
    outlineStyle: 'none',
    outlineWidth: '0px',
    paddingBottom: 16,
    paddingTop: 12,
    position: 'relative',
    textAlign: 'center',
    transitionProperty: 'color',
    whiteSpace: 'nowrap',
  },
  isActive: {
    color: `rgb(${expressiveSysColor.onSurface})`,
  },
  isDisabled: {
    color: `rgb(${expressiveSysColor.onSurfaceVariant}/${expressiveSysOpacity.disabledContent})`,
  },
});

const indicatorStyles = stylex.create({
  base: {
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    display: 'flex',
    height: 32,
    justifyContent: 'center',
    lineHeight: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    textAlign: 'center',
    width: 56,
  },
  isActive: {
    color: `rgb(${expressiveSysColor.onSecondaryContainer})`,
  },
  isDisabled: {
    color: `rgb(${expressiveSysColor.onSurfaceVariant}/${expressiveSysOpacity.disabledContent})`,
  },
});

const symbolStyles = stylex.create({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    fontSize: 24,
    justifyContent: 'center',
    lineHeight: 1,
    maxHeight: 24,
    maxWidth: 24,
    position: 'relative',
  },
});

const labelStyles = stylex.create({
  base: {
    marginTop: 4,
    overflowX: 'hidden',
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export function ExpressiveNavigationBarLink({ label, symbol, xstyle, ...props }: ExpressiveNavigationBarLinkProps): ReactElement {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(rootStyles.base, args.isCurrent || args.isHovered ? rootStyles.isActive : null, args.isDisabled ? rootStyles.isDisabled : null, expressivePresetFont.labelMedium, expressivePresetTransition.effectsFast, xstyle);
  }, [xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClass(args.defaultClassName, ariax(args).className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax(args).style);
  }, [ariax]);

  return (
    <Link
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <div
            {...stylex.props(indicatorStyles.base, args.isCurrent ? indicatorStyles.isActive : null, args.isDisabled ? indicatorStyles.isDisabled : null)}
          >
            <ExpressiveActivationLayer
              isActive={args.isCurrent}
            />
            <ExpressiveHoveredStateLayer
              isHovered={args.isHovered}
            />
            <ExpressivePressedStateLayer
              isPressed={args.isPressed}
            />
            <ExpressiveFocusedStateLayer
              isFocused={args.isFocusVisible}
            />
            <span
              {...stylex.props(symbolStyles.base)}
            >
              {symbol}
            </span>
            <ExpressiveFocusedOutlineLayer
              isFocusVisible={args.isFocusVisible}
              isInset
            />
          </div>
          <div
            {...stylex.props(labelStyles.base)}
          >
            {label}
          </div>
        </>
      )}
    </Link>
  );
}
