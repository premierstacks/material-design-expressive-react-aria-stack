import * as stylex from '@stylexjs/stylex';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { youSysColor } from '../vars/sys.stylex';

interface YouHorizontalRuleProps extends Omit<HTMLAttributes<HTMLHRElement>, 'style'> {
  xstyle?: stylex.StyleXStyles | undefined;
}

const styles = stylex.create({
  base: {
    position: 'relative',
    borderTopColor: `rgb(${youSysColor.outlineVariant})`,
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderBottomStyle: 'none',
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderLeftWidth: 0,
    borderRightStyle: 'none',
    borderRightWidth: 0,
    margin: 0,
  },
});

export const YouHorizontalRule: FC<YouHorizontalRuleProps> = ({ xstyle, ...props }: YouHorizontalRuleProps): ReactNode => {
  return <hr {...stylex.props(styles.base, xstyle)} {...props} />;
};
