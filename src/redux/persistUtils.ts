import type { Reducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const createPersistedReducer = <State>(
  key: string,
  reducer: Reducer<State, any>
) => {
  const config = {
    key,
    storage
  };

  return persistReducer<State>(config, reducer);
};
