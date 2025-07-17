import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../api/categories';
import { setCategories, setLoadingCategories } from '../redux/explore/exploreSlice';

export function useLoadCategories() {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      dispatch(setLoadingCategories(true));
      const data = await getAllCategories();
      dispatch(setCategories(data));
      dispatch(setLoadingCategories(false));
    };

    load();
  }, [dispatch]);
}