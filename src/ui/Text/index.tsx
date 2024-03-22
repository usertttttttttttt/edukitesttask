import React, {FC, useMemo} from 'react';
import {Text as RNText} from 'react-native';

import style from './style';
import {TextProps, TextType} from './types';

const wrapTextComponent = (props: TextProps, type: TextType) => (
  <Text {...props} type={type} />
);

type Props = TextProps & {
  type: TextType;
};

const Text: FC<Props> = ({children, type, ...styleProps}) => {
  const styleWithProps = useMemo(() => style(styleProps), [styleProps]);

  return <RNText style={styleWithProps[type]}>{children}</RNText>;
};

const exports = {} as Record<TextType, FC<TextProps>>;

Object.values(TextType).forEach(type => {
  exports[type] = (props: TextProps) => wrapTextComponent(props, type);
});

export default exports;
