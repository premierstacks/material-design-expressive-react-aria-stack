import * as stylex from '@stylexjs/stylex';
import type { ReactElement, ReactNode } from 'react';
import { ExpressiveHeadingHeadlineLarge } from '../../src';
import { expressiveSysColor } from '../../src/stylex/sys.stylex';

const itemStyles = stylex.create({
  base: {
    backgroundImage: `radial-gradient(circle, rgb(${expressiveSysColor.primary} / 0.2) 1px, transparent 1px), radial-gradient(circle, rgb(${expressiveSysColor.primary} / 0.2) 1px, transparent 1px)`,
    backgroundPositionX: '0px, 5px',
    backgroundPositionY: '0px, 5px',
    backgroundRepeat: 'repeat',
    backgroundSize: '10px 10px',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingBottom: '4rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '4rem',
  },
});

const labelStyles = stylex.create({
  base: {
    paddingLeft: '2rem',
  },
});

interface PrototypeDisplayItemProps {
  readonly children: ReactNode;
  readonly xstyle?: stylex.StyleXStyles;
  readonly label?: ReactNode;
}

export function PrototypeDisplayItem({ children, label, xstyle }: PrototypeDisplayItemProps): ReactElement {
  return (
    <div>
      {label !== undefined
        ? (
            <ExpressiveHeadingHeadlineLarge
              bottom
              block
              xstyle={labelStyles.base}
            >
              {label}
            </ExpressiveHeadingHeadlineLarge>
          )
        : null}
      <div
        {...stylex.props(itemStyles.base, xstyle)}
      >
        {children}
      </div>
    </div>
  );
}
