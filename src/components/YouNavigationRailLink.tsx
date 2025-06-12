import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import { Link, type LinkProps, type LinkRenderProps } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/styles';
import { youPresetMotion, youPresetTypography } from '../stylex/preset.stylex';
import { youSysColor, youSysShape, youSysState } from '../stylex/sys.stylex';
import { YouActivationLayer } from './YouActivationLayer';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

export interface YouNavigationRailLinkProps extends Omit<LinkProps, 'style' | 'className' | 'children'> {
  readonly symbol?: ReactNode;
  readonly label?: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    borderBottomLeftRadius: youSysShape.cornerLarge,
    borderBottomRightRadius: youSysShape.cornerLarge,
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopLeftRadius: youSysShape.cornerLarge,
    borderTopRightRadius: youSysShape.cornerLarge,
    borderTopStyle: 'none',
    color: `rgb(${youSysColor.onSurfaceVariant})`,
    display: 'block',
    minWidth: 0,
    outlineStyle: 'none',
    outlineWidth: '0px',
    paddingBottom: 12,
    position: 'relative',
    textAlign: 'center',
  },
  isActive: {
    color: `rgb(${youSysColor.onSurface})`,
  },
  isDisabled: {
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
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
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    textAlign: 'center',
    width: 56,
  },
  isActive: {
    color: `rgb(${youSysColor.onSecondaryContainer})`,
  },
  isDisabled: {
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContainerOpacity})`,
  },
});

const symbolStyles = stylex.create({
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

const labelStyles = stylex.create({
  base: {
    marginTop: 4,
    overflowX: 'hidden',
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

export function YouNavigationRailLink({ xstyle, label, symbol, ...props }: YouNavigationRailLinkProps): ReactElement {
  const ariax = useCallback((args: LinkRenderProps) => {
    return stylex.props(styles.base, youPresetTypography.emphasizedLabelMedium, args.isCurrent || args.isHovered ? styles.isActive : null, args.isDisabled ? styles.isDisabled : null, youPresetMotion.expressiveFastEffects, xstyle);
  }, [xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax(args).className);
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
            <YouActivationLayer
              isActive={args.isCurrent}
            />
            <YouInteractionLayer
              isHovered={args.isHovered}
              isDragged={false}
              isFocused={args.isFocused}
              isPressed={args.isPressed}
            />
            <span
              {...stylex.props(symbolStyles.base)}
            >
              {symbol}
            </span>
            <YouFocusLayer
              isFocusVisible={args.isFocusVisible}
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
