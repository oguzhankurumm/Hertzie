import { StyleSheet } from 'react-native';

const styles = () =>
  StyleSheet.create({
    container: {
      zIndex: 99,
      width: '100%',
      height: '100%',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  });

export default styles;
