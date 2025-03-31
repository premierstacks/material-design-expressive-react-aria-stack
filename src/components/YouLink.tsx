import * as stylex from '@stylexjs/stylex';
import type { ReactNode } from 'react';
import type { LinkProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { toClassName, toStyle } from '../helpers/utils';
import { YouFocusLayer } from './YouFocusLayer';

interface YouLinkProps extends Omit<LinkProps, 'style' | 'className'> {
  xstyle?: stylex.StyleXStyles | undefined;
  text?: ReactNode | undefined;
}

const styles = stylex.create({
  base: {
    backgroundColor: 'inherit',
    color: 'inherit',
    outlineStyle: 'none',
    position: 'relative',
    textDecorationLine: 'inherit',
  },
  children: {
    position: 'relative',
  },
});

export function YouLink({ xstyle, children, text, ...props }: YouLinkProps) {
  return (
    <Link
      style={(args) => toStyle(args.defaultStyle, stylex.props(styles.base, xstyle).style)}
      className={(args) => toClassName(args.defaultClassName, stylex.props(styles.base, xstyle).className)}
      {...props}
    >
      {(args) => (
        <>
          <span {...stylex.props(styles.children)}>{args.defaultChildren ?? (typeof children === 'function' ? children(args) : (children ?? text))}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}
