import {StyleSheet, ViewStyle} from 'react-native';

export default (styleProps: ViewStyle) =>
  StyleSheet.create({
    HStack: {
      flexDirection: 'row',
      ...styleProps,
    },

    VStack: {
      flexDirection: 'column',
      ...styleProps,
    },
  });
