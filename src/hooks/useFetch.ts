import {useState, useEffect, useCallback} from 'react';

const useFetch = <T>(getFunc: () => Promise<T[]>, initialData: T[]) => {
  const [data, setData] = useState<T[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await getFunc();
        setData(res);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const mutateData = async (
    getFunc: () => Promise<T[]>,
    isLoading?: boolean,
  ) => {
    const loader = isLoading ? setIsLoading : setIsPending;
    loader(true);
    try {
      const res = await getFunc();
      setData(res);
    } catch (error) {
      console.error(error);
    } finally {
      loader(false);
    }
  };

  return {
    data,
    isLoading,
    isPending,
    mutateData,
  };
};

export default useFetch;
