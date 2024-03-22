import {Image, TouchableOpacity} from 'react-native';
import React, {FC, memo} from 'react';

import {Stack, Text} from 'ui';

import style from './style';

type Props = {
  author: string;
  image: string;
  onPress: () => void;
  price: number;
  title: string;
};

const MaterialItem: FC<Props> = ({image, price, author, title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Stack.Vertical gap={5}>
      <Image source={{uri: image}} style={style.image} />
      <Text.Regular color={'#000'} fontWeight={'bold'}>
        {title}
      </Text.Regular>
      <Text.Small>
        {author} · {price}€
      </Text.Small>
    </Stack.Vertical>
  </TouchableOpacity>
);

export default memo(MaterialItem);
