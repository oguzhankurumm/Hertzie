import { StyleSheet } from 'react-native';

import { ThemeType } from '_types/theme';

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    textStyle: {
      color: theme?.gray3,
    },
  });

export default styles;
