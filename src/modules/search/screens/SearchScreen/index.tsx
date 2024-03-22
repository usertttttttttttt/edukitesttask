import React, {FC, useEffect, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';

import {Stack, TextField, View} from 'ui';
import {useDebounce, useFetch} from 'hooks';

import {Material} from 'modules/search/types';
import {getMaterials} from 'modules/search/services';
import MaterialItem from 'modules/search/components/MaterialItem';

const DEBOUNCE = 300;
const END_THRESHOLD = 0.5;
const INITIAL_PAGE = 1;

type Props = {
  navigation: NavigationProp<any>;
};

const SearchScreen: FC<Props> = ({navigation}) => {
  console.log(navigation);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, DEBOUNCE);
  const [page, setPage] = useState(1);
  const {
    isLoading,
    data: materials,
    mutateData,
  } = useFetch<Material>(() => getMaterials(), []);

  const handleLazyLoad = () => {
    if (materials.length > 0) {
      const newPage = page + 1;
      setPage(newPage);
      mutateData(async () => {
        const newData = await getMaterials(searchValue, newPage);
        return [...materials, ...newData];
      });
    }
  };

  useEffect(() => {
    mutateData(async () => {
      const res = getMaterials(searchValue);
      setPage(INITIAL_PAGE);
      return res;
    }, true);
  }, [debouncedSearch]);

  const renderMaterialItem = ({item}: ListRenderItemInfo<Material>) => (
    <MaterialItem
      onPress={() =>
        navigation.navigate('MaterialDetails', {
          author: item.author.details.publicName,
          description: item.description,
          image: item.firstPreviewImage.watermarked,
          price: item.price,
          title: item.title,
        })
      }
      author={item.author.details.publicName}
      title={item.title}
      image={item.firstPreviewImage.watermarked}
      price={item.price}
    />
  );

  return (
    <Stack.Vertical gap={3} padding={5} flex={1}>
      <TextField
        placeholder={'Search'}
        value={searchValue}
        onChange={setSearchValue}
      />
      {isLoading ? (
        <View flex={1} alignItems={'center'} justifyContent={'center'}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={materials}
          contentContainerStyle={{
            gap: 50,
          }}
          onEndReached={handleLazyLoad}
          onEndReachedThreshold={END_THRESHOLD}
          renderItem={renderMaterialItem}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          ListFooterComponent={
            <View
              flex={1}
              justifyContent={'center'}
              alignItems={'center'}
              padding={10}
              paddingBottom={200}>
              <ActivityIndicator />
            </View>
          }
        />
      )}
    </Stack.Vertical>
  );
};

export default SearchScreen;
