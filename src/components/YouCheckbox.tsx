import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import type { CheckboxProps as CheckboxArgs, CheckboxRenderProps } from 'react-aria-components';
import { Checkbox } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/utils';
import { youSysColor, youSysMotion, youSysShape } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface CheckboxProps extends Omit<CheckboxArgs, 'style' | 'className' | 'children'> {
  readonly leading?: ReactNode;
  readonly trailing?: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
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
    bottom: 0,
    color: 'inherit',
    display: 'inline-flex',
    height: 40,
    left: 0,
    outlineStyle: 'none',
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    position: 'relative',
    right: 0,
    top: 0,
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'background-color, color',
    transitionTimingFunction: youSysMotion.easingEmphasized,
    whiteSpace: 'nowrap',
    width: 40,
  },
  outline: {
    borderBottomColor: `rgb(${youSysColor.onSurfaceVariant})`,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    borderLeftColor: `rgb(${youSysColor.onSurfaceVariant})`,
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    borderRightColor: `rgb(${youSysColor.onSurfaceVariant})`,
    borderRightStyle: 'solid',
    borderRightWidth: 2,
    borderTopColor: `rgb(${youSysColor.onSurfaceVariant})`,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderTopStyle: 'solid',
    borderTopWidth: 2,
    display: 'block',
    height: 18,
    left: 11,
    pointerEvents: 'none',
    position: 'absolute',
    top: 11,
    userSelect: 'none',
    width: 18,
  },
  check: {
    backgroundColor: `rgb(${youSysColor.primary})`,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    color: `rgb(${youSysColor.onPrimary})`,
    left: 11,
    pointerEvents: 'none',
    position: 'absolute',
    top: 11,
    userSelect: 'none',
  },
});

export function CheckBox({ xstyle, leading, trailing, ...props }: CheckboxProps): ReactElement {
  const ariax = useCallback(() => {
    return stylex.props(styles.base, xstyle);
  }, [xstyle]);

  const handleClassName = useCallback((args: CheckboxRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax().className);
  }, [ariax]);

  const handleStyle = useCallback((args: CheckboxRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax().style);
  }, [ariax]);

  return (
    <Checkbox
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isFocused={args.isFocused} isDragged={false} isPressed={args.isPressed} />
          {leading}
          <span {...stylex.props(styles.outline)} />
          {args.isSelected
            ? (
                <svg {...stylex.props(styles.check)} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
              )
            : null}
          {trailing}
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Checkbox>
  );
}
