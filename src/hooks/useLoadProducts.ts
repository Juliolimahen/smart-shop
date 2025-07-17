import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../api/products';
import {
  setProducts,
  setLoadingProducts
} from '../redux/explore/exploreSlice';
import type { RootState } from '../redux/store';

export const useLoadProducts = () => {
  const dispatch = useDispatch();
  const { category, searchTerm, currentPage } = useSelector((state: RootState) => state.explore);

  useEffect(() => {
    const load = async () => {
      dispatch(setLoadingProducts(true));

      const response = await getProducts(currentPage, 8, category, searchTerm);
      dispatch(setProducts({ products: response.content, totalPages: response.totalPages }));

      dispatch(setLoadingProducts(false));
    };

    load();
  }, [category, searchTerm, currentPage, dispatch]);
};
