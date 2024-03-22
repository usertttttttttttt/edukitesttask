import Config from 'react-native-config';

import {Material} from '../types';

const LIMIT = 20;
const WORLD = 'de';
const SEARCH_URL = `${Config.BASE_URL}/elastic`;
const AUTHORIZATION = `Bearer ${Config.ACCESS_TOKEN}`;

interface DataResponse {
  items: {
    materials: Material[];
  };
  total: number;
}

interface APIResponse {
  code: number;
  data: DataResponse;
  errors: string[];
  status: string;
}

export const getMaterials = async (
  searchQuery: string = '',
  page: number = 1,
): Promise<Material[]> => {
  const url = `${SEARCH_URL}?limit=${LIMIT}&p=${page}&q=${searchQuery}&world=${WORLD}`;
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: AUTHORIZATION,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const resJSON: APIResponse = await res.json();
    return resJSON.data.items.materials || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
