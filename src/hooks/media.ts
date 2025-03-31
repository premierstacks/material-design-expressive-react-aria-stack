import { useEffect, useMemo, useState } from 'react';

export const compactQuery = 'screen and (max-width: 599px)';
export const mediumQuery = 'screen and (min-width: 600px) and (max-width: 839px)';
export const expandedQuery = 'screen and (min-width: 840px) and (max-width: 1199px)';
export const largeQuery = 'screen and (min-width: 1200px) and (max-width: 1599px)';
export const extraLargeQuery = 'screen and (min-width: 1600px)';
export const portraitQuery = '(orientation: portrait)';
export const landscapeQuery = '(orientation: landscape)';
export const phoneQuery = 'screen and (max-width: 599px)';
export const tabletQuery = 'screen and (min-width: 600px) and (max-width: 1199px)';
export const desktopQuery = 'screen and (min-width: 1200px)';
export const darkThemeQuery = '(prefers-color-scheme: dark)';
export const noAnimationQuery = '(prefers-reduced-motion: reduce)';

export const compactMedia: MediaQueryList = window.matchMedia(compactQuery);
export const mediumMedia: MediaQueryList = window.matchMedia(mediumQuery);
export const expandedMedia: MediaQueryList = window.matchMedia(expandedQuery);
export const largeMedia: MediaQueryList = window.matchMedia(largeQuery);
export const extraLargeMedia: MediaQueryList = window.matchMedia(extraLargeQuery);
export const portraitMedia: MediaQueryList = window.matchMedia(portraitQuery);
export const landscapeMedia: MediaQueryList = window.matchMedia(landscapeQuery);
export const phoneMedia: MediaQueryList = window.matchMedia(phoneQuery);
export const tabletMedia: MediaQueryList = window.matchMedia(tabletQuery);
export const desktopMedia: MediaQueryList = window.matchMedia(desktopQuery);
export const darkThemeMedia: MediaQueryList = window.matchMedia(darkThemeQuery);
export const noAnimationMedia: MediaQueryList = window.matchMedia(noAnimationQuery);

export function useMediaCompact(): boolean {
  return useMatchMedia(compactMedia);
}

export function useMediaMedium(): boolean {
  return useMatchMedia(mediumMedia);
}

export function useMediaExpanded(): boolean {
  return useMatchMedia(expandedMedia);
}

export function useMediaLarge(): boolean {
  return useMatchMedia(largeMedia);
}

export function useMediaExtraLarge(): boolean {
  return useMatchMedia(extraLargeMedia);
}

export function useMediaPortrait(): boolean {
  return useMatchMedia(portraitMedia);
}

export function useMediaLandscape(): boolean {
  return useMatchMedia(landscapeMedia);
}

export function useMediaPhone(): boolean {
  return useMatchMedia(phoneMedia);
}

export function useMediaTablet(): boolean {
  return useMatchMedia(tabletMedia);
}

export function useMediaDesktop(): boolean {
  return useMatchMedia(desktopMedia);
}

export function useMediaDarkTheme(): boolean {
  return useMatchMedia(darkThemeMedia);
}

export function useMediaNoAnimation(): boolean {
  return useMatchMedia(noAnimationMedia);
}

export function useMatchQuery(query: string): boolean {
  const media = useMemo(() => window.matchMedia(query), [query]);

  return useMatchMedia(media);
}

export function useMatchMedia(media: MediaQueryList): boolean {
  const [matches, setMatches] = useState<boolean>(media.matches);

  void matches;

  useEffect(() => {
    setMatches(media.matches);

    const handleChange = (e: MediaQueryListEvent): void => {
      setMatches(e.matches);
    };

    media.addEventListener('change', handleChange);

    return (): void => {
      media.removeEventListener('change', handleChange);
    };
  }, [media]);

  return media.matches;
}

export interface DeviceArgs {
  phone: boolean;
  tablet: boolean;
  desktop: boolean;
}

export function useDevice(): DeviceArgs {
  return {
    phone: useMediaPhone(),
    tablet: useMediaTablet(),
    desktop: useMediaDesktop(),
  };
}

export interface ScreenArgs {
  compact: boolean;
  medium: boolean;
  expanded: boolean;
  large: boolean;
  extraLarge: boolean;
}

export function useScreen(): ScreenArgs {
  return {
    compact: useMediaCompact(),
    medium: useMediaMedium(),
    expanded: useMediaExpanded(),
    large: useMediaLarge(),
    extraLarge: useMediaExtraLarge(),
  };
}
