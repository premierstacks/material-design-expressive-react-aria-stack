import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes } from 'react';
import { expressivePresetFont } from '../stylex/preset.stylex';

export interface ExpressiveFontLabelSmallProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className'> {
  readonly xstyle?: stylex.StyleXStyles;
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

export function ExpressiveFontLabelSmall({ xstyle, top, bottom, block, inline, children, ...props }: ExpressiveFontLabelSmallProps) {
  return (
    <span
      {...stylex.props(
        expressivePresetFont.labelSmall,
        rootStyles.base,
        top === true ? rootStyles.topDefault : null,
        typeof top === 'string' || typeof top === 'number' ? rootStyles.topCustom(top) : null,
        bottom === true ? rootStyles.bottomDefault : null,
        typeof bottom === 'string' || typeof bottom === 'number' ? rootStyles.bottomCustom(bottom) : null,
        bottom !== undefined || top !== undefined ? rootStyles.inline : null,
        block === true ? rootStyles.block : null,
        inline === true ? rootStyles.inline : null,
        xstyle,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
