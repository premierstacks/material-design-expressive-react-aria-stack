import * as stylex from '@stylexjs/stylex';
import type { LinkProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { youSysColor, youSysShape } from '../vars/sys.stylex';
import { YouBackgroundLayer } from './YouBackgroundLayer';
import { YouFocusLayer } from './YouFocusLayer';
import { YouInteractionLayer } from './YouInteractionLayer';
import { YouOutlineLayer } from './YouOutlineLayer';

interface YouCardLinkProps extends Omit<LinkProps, 'style'> {
  isElevated?: boolean | undefined;
  isFilled?: boolean | undefined;
  isOutlined?: boolean | undefined;
  isPadded?: boolean | undefined;
  before?: React.ReactNode | undefined;
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    borderRadius: youSysShape.cornerMedium,
    appearance: 'none',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    backgroundColor: 'transparent',
    color: `rgb(${youSysColor.onSurface})`,
    outlineStyle: 'none',
    position: 'relative',
    textDecorationLine: 'none',
    display: 'block',
    borderStyle: 'none',
    boxShadow: 'none',
  },
  isElevated: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerLow})`,
  },
  isFilled: {
    backgroundColor: `rgb(${youSysColor.surfaceContainerHighest})`,
  },
  isOutlined: {
    backgroundColor: `rgb(${youSysColor.surface})`,
  },
  children: {
    position: 'relative',
    borderRadius: 'inherit',
  },
});

export function YouCardLink({ xstyle, children, isElevated, isFilled, isOutlined, before, ...props }: YouCardLinkProps) {
  return (
    <Link {...stylex.props(styles.base, xstyle)} {...props}>
      {(args) => (
        <>
          {before}
          <YouBackgroundLayer isDisabled={args.isDisabled} {...stylex.props(isElevated ? styles.isElevated : null, isFilled ? styles.isFilled : null, isOutlined ? styles.isOutlined : null)} />
          <YouInteractionLayer isHovered={args.isHovered} isDragged={false} isFocused={args.isFocused} isPressed={args.isPressed} />
          <div {...stylex.props(styles.children)}>{args.defaultChildren ?? (typeof children === 'function' ? children(args) : children)}</div>
          {isOutlined ? <YouOutlineLayer isDisabled={args.isDisabled} /> : null}
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}
