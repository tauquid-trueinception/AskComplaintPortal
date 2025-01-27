'use client';

import React, { ReactNode, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/themeStore';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const customTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 768,
      tabletLandscape: 1133,
      desktop: 1440,
    },
  },
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    tabletLandscape: true;
    desktop: true;
  }
}

const createCustomTheme = (mode: 'light' | 'dark') => {
  return createTheme({
    palette: {
      mode,
    },
    breakpoints: customTheme.breakpoints, // Applying the custom breakpoints
  });
};

export const ThemeRegistry = ({ children }: { children: ReactNode }) => {
  const mode = useSelector((state: RootState) => state.theme.mode || 'light');

  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};
