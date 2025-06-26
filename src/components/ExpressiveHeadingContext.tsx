import { createContext, useContext, type ReactElement, type ReactNode } from 'react';

type ExpressiveHeadingLevelEnum = 1 | 2 | 3 | 4 | 5 | 6;

export interface ExpressiveHeadingContextProps {
  readonly children: ReactNode;
}

export const ExpressiveHeadingContextValue = createContext<ExpressiveHeadingLevelEnum | undefined>(undefined);

function assertExpressiveHeadingLevel(level: number): asserts level is ExpressiveHeadingLevelEnum {
  if (level < 1 || level > 6) {
    throw new Error('ExpressiveHeadingContext: level must be between 1 and 6');
  }
}

export function ExpressiveHeadingContext({ children }: ExpressiveHeadingContextProps): ReactElement {
  const parent = useContext(ExpressiveHeadingContextValue) ?? 0;

  const level = parent + 1;

  assertExpressiveHeadingLevel(level);

  return (
    <ExpressiveHeadingContextValue.Provider
      value={level}
    >
      {children}
    </ExpressiveHeadingContextValue.Provider>
  );
}
