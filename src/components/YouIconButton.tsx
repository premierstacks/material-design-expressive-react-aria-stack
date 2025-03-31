import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import type { ButtonProps, ButtonRenderProps } from 'react-aria-components';
import { Button } from 'react-aria-components';
import { toClassName, toStyle } from '../helpers/utils';
import { youSysColor, youSysMotion, youSysShape, youSysState } from '../vars/sys.stylex';
import { YouBackgroundLayer } from './YouBackgroundLayer';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouIconButtonProps extends Omit<ButtonProps, 'style' | 'className'> {
  interactionLayer?: ((args: ButtonRenderProps) => ReactNode) | undefined;
  backgroundLyer?: ((args: ButtonRenderProps) => ReactNode) | undefined;
  outlineLayer?: ((args: ButtonRenderProps) => ReactNode) | undefined;
  focusLayer?: ((args: ButtonRenderProps) => ReactNode) | undefined;
  isFilled?: boolean | undefined;
  isOutlined?: boolean | undefined;
  isStandard?: boolean | undefined;
  isTonal?: boolean | undefined;
  icon?: ReactNode | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    appearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: youSysShape.cornerFull,
    borderStyle: 'none',
    color: 'inherit',
    display: 'inline-flex',
    height: 40,
    justifyContent: 'center',
    outlineStyle: 'none',
    position: 'relative',
    textAlign: 'center',
    textDecorationLine: 'inherit',
    whiteSpace: 'nowrap',
    width: 40,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    tranisitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'color',
  },
  isStandard: {
    color: `rgb(${youSysColor.onSurfaceVariant})`,
  },
  isFilled: {
    color: `rgb(${youSysColor.onPrimary})`,
  },
  isTonal: {
    color: `rgb(${youSysColor.onSecondaryContainer})`,
  },
  isDisabled: {
    color: `rgb(${youSysColor.onSurfaceVariant}/${youSysState.disabledContentOpacity})`,
  },
});

const backgroundStyles = stylex.create({
  isFilled: {
    backgroundColor: `rgb(${youSysColor.primary})`,
  },
  isTonal: {
    backgroundColor: `rgb(${youSysColor.secondaryContainer})`,
  },
  isDisabled: {
    backgroundColor: 'transparent',
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

export function YouIconButton({ isStandard, isFilled, isTonal, isOutlined, children, interactionLayer, xstyle, backgroundLyer, outlineLayer, focusLayer, icon, ...props }: YouIconButtonProps) {
  return (
    <Button
      style={(args) =>
        toStyle(
          args.defaultStyle,
          stylex.props(
            styles.base,
            isStandard ? styles.isStandard : null,
            isFilled ? styles.isFilled : null,
            isTonal ? styles.isTonal : null,
            args.isDisabled || args.isPending ? styles.isDisabled : null,
            xstyle,
          ).style,
        )
      }
      className={(args) =>
        toClassName(
          args.defaultClassName,
          stylex.props(
            styles.base,
            isStandard ? styles.isStandard : null,
            isFilled ? styles.isFilled : null,
            isTonal ? styles.isTonal : null,
            args.isDisabled || args.isPending ? styles.isDisabled : null,
            xstyle,
          ).className,
        )
      }
      {...props}
    >
      {(args) => (
        <>
          {backgroundLyer ? (
            backgroundLyer(args)
          ) : (
            <YouBackgroundLayer
              xstyle={[
                isFilled ? backgroundStyles.isFilled : null,
                isTonal ? backgroundStyles.isTonal : null,
                args.isDisabled || args.isPending ? backgroundStyles.isDisabled : null,
                (args.isDisabled || args.isPending) && (isFilled || isTonal) ? backgroundStyles.isDisabledBackground : null,
              ]}
            />
          )}
          {interactionLayer ? interactionLayer(args) : <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />}
          <span {...stylex.props(childrenStyles.base)}>{args.defaultChildren ?? (typeof children === 'function' ? children(args) : (children ?? icon))}</span>
          {outlineLayer ? outlineLayer(args) : isOutlined ? <YouOutlineLayer isDisabled={args.isDisabled || args.isPending} /> : null}
          {focusLayer ? focusLayer(args) : <YouFocusLayer isFocusVisible={args.isFocusVisible} />}
        </>
      )}
    </Button>
  );
}
