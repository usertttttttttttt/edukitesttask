import React, {FC} from 'react';
import {Image, ScrollView} from 'react-native';
import {Route} from '@react-navigation/native';

import {Stack, Text} from 'ui';

import style from './style';

type Params = {
  author: string;
  description: string;
  image: string;
  price: number;
  title: string;
};

type Props = {
  route: Route<any, Params>;
};

const MaterialDetails: FC<Props> = ({route}) => {
  const {title, description, image, price, author} = route.params;
  return (
    <ScrollView>
      <Stack.Vertical gap={20} padding={10}>
        <Image source={{uri: image}} style={style.image} />
        <Text.Medium fontWeight={'bold'} color={'#000'}>
          {title}
        </Text.Medium>
        <Text.Small>
          {author} ·{' '}
          <Text.Small fontWeight={'bold'} color={'green'}>
            {price}€
          </Text.Small>
        </Text.Small>
        <Text.Label fontWeight={'300'}>{description}</Text.Label>
      </Stack.Vertical>
    </ScrollView>
  );
};

export default MaterialDetails;
