import * as stylex from '@stylexjs/stylex';
import type { HTMLAttributes, ReactElement } from 'react';
import { youSysColor } from '../vars/sys.stylex';

interface YouHorizontalRuleProps extends Omit<HTMLAttributes<HTMLHRElement>, 'style' | 'className' | 'children'> {
  readonly xstyle?: stylex.StyleXStyles;
}

const styles = stylex.create({
  base: {
    borderBottomStyle: 'none',
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderLeftWidth: 0,
    borderRightStyle: 'none',
    borderRightWidth: 0,
    borderTopColor: `rgb(${youSysColor.outlineVariant})`,
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    position: 'relative',
  },
});

export function YouHorizontalRule({ xstyle, ...props }: YouHorizontalRuleProps): ReactElement {
  return <hr {...stylex.props(styles.base, xstyle)} {...props} />;
}
