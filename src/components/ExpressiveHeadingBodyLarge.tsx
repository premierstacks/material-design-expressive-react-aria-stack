import * as stylex from '@stylexjs/stylex';
import { useContext } from 'react';
import type { HeadingProps } from 'react-aria-components';
import { Heading } from 'react-aria-components';
import { expressivePresetFont } from '../stylex/preset.stylex';
import { ExpressiveHeadingContextValue } from './ExpressiveHeadingContext';

export interface ExpressiveHeadingBodyLargeProps extends Omit<HeadingProps, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
  readonly level?: 1 | 2 | 3 | 4 | 5 | 6;
  readonly top?: boolean | string | number;
  readonly bottom?: boolean | string | number;
  readonly block?: boolean;
  readonly inline?: boolean;
}

const rootStyles = stylex.create({
  base: {
    marginBottom: 0,
    marginTop: 0,
  },
  topDefault: {
    marginTop: '0.5lh',
  },
  bottomDefault: {
    marginBottom: '0.5lh',
  },
  topCustom: (value: string | number) => ({
    marginTop: value,
  }),
  bottomCustom: (value: string | number) => ({
    marginBottom: value,
  }),
  block: {
    display: 'block',
  },
  inline: {
    display: 'inline-block',
  },
});

export function ExpressiveHeadingBodyLarge({ xstyle, level, top, bottom, block, inline, children, ...props }: ExpressiveHeadingBodyLargeProps) {
  const context = useContext(ExpressiveHeadingContextValue);

  return (
    <Heading
      {...stylex.props(
        expressivePresetFont.bodyLarge,
        rootStyles.base,
        top === true ? rootStyles.topDefault : null,
        typeof top === 'string' || typeof top === 'number' ? rootStyles.topCustom(top) : null,
        bottom === true ? rootStyles.bottomDefault : null,
        typeof bottom === 'string' || typeof bottom === 'number' ? rootStyles.bottomCustom(bottom) : null,
        bottom !== undefined || top !== undefined ? rootStyles.block : null,
        block === true ? rootStyles.block : null,
        inline === true ? rootStyles.inline : null,
        xstyle,
      )}
      level={level ?? context}
      {...props}
    >
      {children}
    </Heading>
  );
}
