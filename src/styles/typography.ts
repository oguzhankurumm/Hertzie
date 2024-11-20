import { StyleSheet } from 'react-native';

import { moderateScale } from '_styles/scaling';

export const Fonts = {
  Poppins: 'Poppins-Regular',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsSemibold: 'Poppins-Semibold',
  PoppinsBold: 'Poppins-Bold',
  PoppinsExtraBold: 'Poppins-ExtraBold',
  PoppinsBlack: 'Poppins-Black',
};

const AppFonts = {
  regular: Fonts.Poppins,
  medium: Fonts.PoppinsMedium,
  semibold: Fonts.PoppinsSemibold,
  bold: Fonts.PoppinsBold,
  extrabold: Fonts.PoppinsExtraBold,
  black: Fonts.PoppinsBlack,
};

export const TextStyle = StyleSheet.create({
  headlineXXL: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(48),
    lineHeight: undefined,
  },
  headlineXL: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(32),
    lineHeight: undefined,
  },
  headlineL: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(28),
    lineHeight: undefined,
  },
  displayXXL: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(24),
    lineHeight: undefined,
  },
  displayXXL500: {
    fontFamily: AppFonts.regular,
    fontWeight: '500',
    fontSize: moderateScale(24),
    lineHeight: undefined,
  },
  displayXL: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(20),
    lineHeight: undefined,
  },
  displayL: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(18),
    lineHeight: undefined,
  },
  body: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(16),
    lineHeight: undefined,
  },
  body400: {
    fontFamily: AppFonts.regular,
    fontWeight: '400',
    fontSize: moderateScale(16),
    lineHeight: undefined,
  },
  paragraph: {
    fontFamily: AppFonts.semibold,
    fontSize: moderateScale(14),
    lineHeight: undefined,
  },
  paragraph400: {
    fontFamily: AppFonts.regular,
    fontWeight: '400',
    fontSize: moderateScale(14),
    lineHeight: undefined,
  },
  paragraph500: {
    fontFamily: AppFonts.regular,
    fontWeight: '500',
    fontSize: moderateScale(14),
    lineHeight: undefined,
  },
  caption: {
    fontFamily: AppFonts.semibold,
    fontSize: moderateScale(12),
    lineHeight: undefined,
  },
  footnote: {
    fontFamily: AppFonts.bold,
    fontSize: moderateScale(10),
    lineHeight: undefined,
  },
});

export type TextStyleTypes = keyof typeof TextStyle;
