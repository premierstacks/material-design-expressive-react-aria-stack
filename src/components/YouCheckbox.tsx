import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import type { CheckboxProps as CheckboxArgs } from 'react-aria-components';
import { Checkbox } from 'react-aria-components';
import { toClassName, toStyle } from '../helpers/utils';
import { youSysColor, youSysMotion, youSysShape } from '../vars/sys.stylex';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';

interface CheckboxProps extends CheckboxArgs {
  leading?: ReactNode | undefined;
  trailing?: ReactNode | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    display: 'inline-flex',
    position: 'relative',
    width: 40,
    height: 40,
    whiteSpace: 'nowrap',
    backgroundColor: 'transparent',
    color: 'inherit',
    inset: 0,
    padding: 0,
    borderStyle: 'none',
    outlineStyle: 'none',
    appearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    borderRadius: youSysShape.cornerFull,
    transitionTimingFunction: youSysMotion.easingEmphasized,
    transitionDuration: youSysMotion.durationEmphasized,
    transitionProperty: 'background-color, color',
  },
  outline: {
    position: 'absolute',
    left: 11,
    top: 11,
    width: 18,
    height: 18,
    borderStyle: 'solid',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderTopColor: `rgb(${youSysColor.onSurfaceVariant})`,
    borderRightColor: `rgb(${youSysColor.onSurfaceVariant})`,
    borderBottomColor: `rgb(${youSysColor.onSurfaceVariant})`,
    borderLeftColor: `rgb(${youSysColor.onSurfaceVariant})`,
    pointerEvents: 'none',
    userSelect: 'none',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    display: 'block',
  },
  check: {
    position: 'absolute',
    left: 11,
    top: 11,
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: `rgb(${youSysColor.primary})`,
    color: `rgb(${youSysColor.onPrimary})`,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
});

export function CheckBox({ xstyle, children, leading, trailing, ...props }: CheckboxProps) {
  return (
    <Checkbox
      style={(args) => toStyle(args.defaultStyle, stylex.props(styles.base, xstyle).style)}
      className={(args) => toClassName(args.defaultClassName, stylex.props(styles.base, xstyle).className)}
      {...props}
    >
      {(args) => (
        <>
          <YouInteractionLayer isHovered={args.isHovered} isFocused={args.isFocused} isDragged={false} isPressed={args.isPressed} />
          {leading}
          <span role="presentation" {...stylex.props(styles.outline)} />
          {args.isSelected ? (
            <svg role="presentation" {...stylex.props(styles.check)} xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor">
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          ) : null}
          {trailing}
          {typeof children === 'function' ? children(args) : children}
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Checkbox>
  );
}
