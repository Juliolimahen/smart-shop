import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderByPrice } from '../../redux/explore/exploreSlice';
import type { RootState } from '../../redux/store';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent
} from '@mui/material';
import { useTheme } from 'styled-components';

const OrderByPriceSelector: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const orderByPrice = useSelector((state: RootState) => state.explore.orderByPrice) ?? 'asc';

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setOrderByPrice(e.target.value as 'asc' | 'desc'));
  };

  return (
    <FormControl fullWidth size="small" sx={{ marginBottom: 2 }}>
      <InputLabel id="order-price-label" sx={{ color: theme.text }}>
        Ordenar por preço
      </InputLabel>
      <Select
        labelId="order-price-label"
        label="Ordenar por preço"
        value={orderByPrice}
        onChange={handleChange}
        sx={{
          color: theme.text,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.text
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.text
          }
        }}
      >
        <MenuItem value="asc">Menor preço</MenuItem>
        <MenuItem value="desc">Maior preço</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OrderByPriceSelector;
