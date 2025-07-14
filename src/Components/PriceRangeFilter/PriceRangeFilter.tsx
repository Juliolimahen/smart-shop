import React, { useState, useEffect } from 'react';
import { Slider, Typography, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setPriceRange } from '../../redux/explore/exploreSlice';
import { useTheme } from 'styled-components';

const PriceRangeFilter: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [range, setRange] = useState<[number, number]>([0, 5000]);

  useEffect(() => {
    dispatch(setPriceRange({ minPrice: range[0], maxPrice: range[1] }));
  }, [range, dispatch]);

  const handleClear = () => {
    const resetRange: [number, number] = [0, 5000];
    setRange(resetRange);
    dispatch(setPriceRange({ minPrice: resetRange[0], maxPrice: resetRange[1] }));
  };

  return (
    <Box
      sx={{
        width: '100%',
        paddingY: 2,
        paddingX: { xs: 2, sm: 0 },
        display: { xs: 'flex', sm: 'block' },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '100%' }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: theme.text, textAlign: { xs: 'center', sm: 'left' } }}
        >
          Faixa de Preço (R$)
        </Typography>

        <Slider
          value={range}
          onChange={(_, newValue) => setRange(newValue as [number, number])}
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          step={50}
          sx={{ width: '100%' }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            mt: 2,
            gap: { xs: 1, sm: 0 },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          <Typography variant="body2" sx={{ color: theme.text }}>
            De <strong>R$ {range[0].toLocaleString('pt-BR')}</strong> até{' '}
            <strong>R$ {range[1].toLocaleString('pt-BR')}</strong>
          </Typography>

          <Button sx={{ height: 40 }} variant="outlined" onClick={handleClear}>Limpar Faixa</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceRangeFilter;
