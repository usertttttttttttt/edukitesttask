import {StyleSheet} from 'react-native';

import {TextProps, TextType} from './types';

export default (styleProps: Omit<TextProps, 'children'>) =>
  StyleSheet.create({
    [TextType.TINY]: {
      fontSize: 10,
      ...styleProps,
    },

    [TextType.SMALL]: {
      fontSize: 14,
      ...styleProps,
    },

    [TextType.LABEL]: {
      fontSize: 16,
      ...styleProps,
    },

    [TextType.REGULAR]: {
      fontSize: 18,
      ...styleProps,
    },

    [TextType.MEDIUM]: {
      fontSize: 22,
      ...styleProps,
    },

    [TextType.LARGE]: {
      fontSize: 24,
      ...styleProps,
    },

    [TextType.TITLE]: {
      fontSize: 26,
      ...styleProps,
    },

    [TextType.HUGE]: {
      fontSize: 35,
      ...styleProps,
    },
  });
