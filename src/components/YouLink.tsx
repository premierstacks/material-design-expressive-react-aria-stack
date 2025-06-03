import * as stylex from '@stylexjs/stylex';
import { useCallback, type CSSProperties, type ReactElement, type ReactNode } from 'react';
import type { LinkProps, LinkRenderProps } from 'react-aria-components';
import { Link } from 'react-aria-components';
import { toClassName, toCssProperties } from '../helpers/styles';
import { YouFocusLayer } from './YouFocusLayer';

export interface YouLinkProps extends Omit<LinkProps, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly label?: ReactNode;
}

const styles = stylex.create({
  base: {
    backgroundColor: 'inherit',
    color: 'inherit',
    outlineStyle: 'none',
    position: 'relative',
    textDecorationLine: 'inherit',
  },
  label: {
    display: 'inline-block',
    position: 'relative',
  },
});

export function YouLink({ xstyle, label, ...props }: YouLinkProps): ReactElement {
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
          <span {...stylex.props(styles.label)}>{label}</span>
          <YouFocusLayer isFocusVisible={args.isFocusVisible} />
        </>
      )}
    </Link>
  );
}
