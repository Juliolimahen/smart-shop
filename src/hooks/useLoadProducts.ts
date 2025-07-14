import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../api/products';
import { setProducts } from '../redux/explore/exploreSlice';

export const useLoadProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      const response = await getProducts(0, 9999, null);
      dispatch(setProducts({ products: response.content, totalPages: 1 }));
    };
    load();
  }, [dispatch]);
};
