import type { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { styles, toRem } from '../helpers/styles';

export interface ExpressiveIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'className' | 'children'> {
  readonly size?: number | string;
  readonly symbol?: ReactNode;
}

export function ExpressiveIcon({ size, symbol, ...props }: ExpressiveIconProps): ReactElement {
  return (
    <span
      {...props}
      style={styles(
        {
          alignItems: 'center',
          display: 'inline-flex',
          flexShrink: 0,
          fontSize: toRem(24),
          height: '1em',
          maxHeight: '100%',
          position: 'relative',
          whiteSpace: 'nowrap',
        },
        size !== undefined
          ? { fontSize: toRem(size) }
          : {},
      )}
    >
      {symbol}
    </span>
  );
}
