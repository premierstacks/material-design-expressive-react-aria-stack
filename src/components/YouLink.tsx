import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import type { LinkProps, LinkRenderProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/utils';
import { YouFocusLayer } from './YouFocusLayer';

interface YouLinkProps extends Omit<LinkProps, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly text?: ReactNode;
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

export function YouLink({ xstyle, children, text, ...props }: YouLinkProps): ReactElement {
  const ariax = useCallback(() => {
    return stylex.props(styles.base, xstyle);
  }, [xstyle]);

  const handleClassName = useCallback((args: LinkRenderProps & { defaultClassName: string | undefined }) => {
    return toClassName(args.defaultClassName, ariax().className);
  }, [ariax]);

  const handleStyle = useCallback((args: LinkRenderProps & { defaultStyle: CSSProperties | undefined }) => {
    return toCssProperties(args.defaultStyle, ariax().style);
  }, [ariax]);

  return (
    <Link
      style={handleStyle}
      className={handleClassName}
      {...props}
    >
      {(args) => (
        <>
          <span {...stylex.props(styles.children)}>{(typeof children === 'function' ? children(args) : (children ?? text)) ?? args.defaultChildren}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}
