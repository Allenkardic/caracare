import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import { colors } from '../constants';

export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    text: colors.black,
    lightText: colors.lightText,
    primary: colors.primaryColor,
    background: colors.ghostWhite,
    backgroundAlternate: colors.white,
    greyLight: colors.greyAlternate,
  },
};

export const DarkThemeSJ = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    text: colors.white,
    lightText: colors.lightText,
    primary: colors.primaryColor,
    background: colors.defaultBlack,
    backgroundAlternate: colors.alternateBlack,
    greyLight: colors.greyAlternate,
  },
};
