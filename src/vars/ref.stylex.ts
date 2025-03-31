import * as stylex from '@stylexjs/stylex';

export const youRefTypeface = stylex.defineVars({
  brand: '"Roboto Flex", system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  plain: '"Roboto Flex", system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  weightBold: stylex.types.integer(700),
  weightMedium: stylex.types.integer(500),
  weightRegular: stylex.types.integer(400),
  trackingNone: stylex.types.length(0),
  fontStyleNormal: 'normal',
  textTransformNone: 'none',
  textDecorationNone: 'none',
});
