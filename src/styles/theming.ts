import { createTheming } from '@callstack/react-theme-provider';
import colors from 'tailwindcss/colors';

import { AppThemes, ThemeProviderType } from '_types/index';
import { ThemeType } from '_types/theme';

export const themes = {
  dark: {
    title: AppThemes.Dark,
    transparent: 'transparent',
    black: colors.black,
    white: colors.white,
    success: colors.emerald,
    info: colors.sky,
    warning: colors.orange,
    danger: colors.rose,
    disabled: colors.slate,
    gray: {
      50: '#FAFAFA',
      100: '#F4F4F4',
      200: '#E9E9E9',
      300: '#D0D0D0',
      400: '#ACACAC',
      500: '#848484',
      600: '#636363',
      700: '#444444',
      800: '#2B2B2B',
      900: '#1C1C1C',
    },
    pink: {
      50: '#FDF2FF',
      100: '#FBE4FF',
      200: '#F7C9FF',
      300: '#F59FFF',
      400: '#EF65FF',
      500: '#E32CFF',
      600: '#C30BE4',
      700: '#AD05C6',
      800: '#8E07A1',
      900: '#500059',
    },
    red: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#FB2626',
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D',
    },
    yellow: {
      50: '#FFFBEC',
      100: '#FFF6D3',
      200: '#FFEAA5',
      300: '#FFD86D',
      400: '#FFBC32',
      500: '#FFA40A',
      600: '#F58700',
      700: '#CC6702',
      800: '#A14F0B',
      900: '#82430C',
    },
    green: {
      50: '#F7FEE7',
      100: '#ECFCCB',
      200: '#D9F99D',
      300: '#BEF264',
      400: '#A3E635',
      500: '#84CC16',
      600: '#65A30D',
      700: '#4D7C0F',
      800: '#3F6212',
      900: '#365314',
    },

    // NEW COLORS
    background: '#181818',
    tabBackground: '#0F0E0E',
    night: '#050939',
    turquoise: '#6AFCFC',
    blue: '#1AA3E4',
    purple: '#A44AC8',
    gray2: '#CFCECC',
    gray3: '#A8A6A2',
    gray4: '#797979',
    gray5: '#959595',
  } as ThemeType,
};

const { ThemeProvider, withTheme, useTheme } = createTheming(themes?.dark);

const IThemeProviders = ThemeProvider as ThemeProviderType<ThemeType>;

export { IThemeProviders, useTheme, withTheme };
