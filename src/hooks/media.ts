import { useEffect, useMemo, useState } from 'react';

export const expressiveCompactQuery = 'screen and (max-width: 599px)';
export const expressiveMediumQuery = 'screen and (min-width: 600px) and (max-width: 839px)';
export const expressiveExpandedQuery = 'screen and (min-width: 840px) and (max-width: 1199px)';
export const expressiveLargeQuery = 'screen and (min-width: 1200px) and (max-width: 1599px)';
export const expressiveExtraLargeQuery = 'screen and (min-width: 1600px)';
export const expressivePortraitQuery = '(orientation: portrait)';
export const expressiveLandscapeQuery = '(orientation: landscape)';
export const expressivePhoneQuery = 'screen and (max-width: 599px)';
export const expressiveTabletQuery = 'screen and (min-width: 600px) and (max-width: 1199px)';
export const expressiveDesktopQuery = 'screen and (min-width: 1200px)';
export const expressivePrefersDarkQuery = '(prefers-color-scheme: dark)';
export const expressivePrefersReduceMotionQuery = '(prefers-reduced-motion: reduce)';

export const expressiveCompactMedia: MediaQueryList = window.matchMedia(expressiveCompactQuery);
export const expressiveMediumMedia: MediaQueryList = window.matchMedia(expressiveMediumQuery);
export const expressiveExpandedMedia: MediaQueryList = window.matchMedia(expressiveExpandedQuery);
export const expressiveLargeMedia: MediaQueryList = window.matchMedia(expressiveLargeQuery);
export const expressiveExtraLargeMedia: MediaQueryList = window.matchMedia(expressiveExtraLargeQuery);
export const expressivePortraitMedia: MediaQueryList = window.matchMedia(expressivePortraitQuery);
export const expressiveLandscapeMedia: MediaQueryList = window.matchMedia(expressiveLandscapeQuery);
export const expressivePhoneMedia: MediaQueryList = window.matchMedia(expressivePhoneQuery);
export const expressiveTabletMedia: MediaQueryList = window.matchMedia(expressiveTabletQuery);
export const expressiveDesktopMedia: MediaQueryList = window.matchMedia(expressiveDesktopQuery);
export const expressivePrefersDarkMedia: MediaQueryList = window.matchMedia(expressivePrefersDarkQuery);
export const expressivePrefersReduceMotionMedia: MediaQueryList = window.matchMedia(expressivePrefersReduceMotionQuery);

export function useExpressiveMedia(media: MediaQueryList): boolean {
  const [matches, setMatches] = useState<boolean>(media.matches);

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

  return matches;
}

export function useExpressiveCompactMedia(): boolean {
  return useExpressiveMedia(expressiveCompactMedia);
}

export function useExpressiveMediumMedia(): boolean {
  return useExpressiveMedia(expressiveMediumMedia);
}

export function useExpressiveExpandedMedia(): boolean {
  return useExpressiveMedia(expressiveExpandedMedia);
}

export function useExpressiveLargeMedia(): boolean {
  return useExpressiveMedia(expressiveLargeMedia);
}

export function useExpressiveExtraLargeMedia(): boolean {
  return useExpressiveMedia(expressiveExtraLargeMedia);
}

export function useExpressivePortraitMedia(): boolean {
  return useExpressiveMedia(expressivePortraitMedia);
}

export function useExpressiveLandscapeMedia(): boolean {
  return useExpressiveMedia(expressiveLandscapeMedia);
}

export function useExpressivePhoneMedia(): boolean {
  return useExpressiveMedia(expressivePhoneMedia);
}

export function useExpressiveTabletMedia(): boolean {
  return useExpressiveMedia(expressiveTabletMedia);
}

export function useExpressiveDesktopMedia(): boolean {
  return useExpressiveMedia(expressiveDesktopMedia);
}

export function useExpressiveDarkDarkMedia(): boolean {
  return useExpressiveMedia(expressivePrefersDarkMedia);
}

export function useExpressivePrefersReduceMotionMedia(): boolean {
  return useExpressiveMedia(expressivePrefersReduceMotionMedia);
}

export function useExpressiveMediaQuery(query: string): boolean {
  const media = useMemo(() => window.matchMedia(query), [query]);

  return useExpressiveMedia(media);
}

export interface ExpressiveDevices {
  phone: boolean;
  tablet: boolean;
  desktop: boolean;
}

export function useExpressiveDevices(): ExpressiveDevices {
  return {
    phone: useExpressivePhoneMedia(),
    tablet: useExpressiveTabletMedia(),
    desktop: useExpressiveDesktopMedia(),
  };
}

export interface ExpressiveScreens {
  compact: boolean;
  medium: boolean;
  expanded: boolean;
  large: boolean;
  extraLarge: boolean;
}

export function useExpressiveScreens(): ExpressiveScreens {
  return {
    compact: useExpressiveCompactMedia(),
    medium: useExpressiveMediumMedia(),
    expanded: useExpressiveExpandedMedia(),
    large: useExpressiveLargeMedia(),
    extraLarge: useExpressiveExtraLargeMedia(),
  };
}
