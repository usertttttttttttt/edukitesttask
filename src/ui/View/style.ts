import {StyleSheet, ViewStyle} from 'react-native';

export default (styleProps: ViewStyle) =>
  StyleSheet.create({
    view: {
      ...styleProps,
    },
  });
