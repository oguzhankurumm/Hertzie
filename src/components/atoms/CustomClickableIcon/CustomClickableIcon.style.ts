import { StyleSheet } from 'react-native';

import { ThemeType } from '_types/theme';

export default (theme: ThemeType) =>
  StyleSheet.create({
    iconStyle: {
      tintColor: theme?.gray2,
    },
  });
