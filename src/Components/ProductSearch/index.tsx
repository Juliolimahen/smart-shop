import React from 'react';
import { TextField, Box } from '@mui/material';
import { useTheme } from 'styled-components';

interface Props {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const ProductSearch: React.FC<Props> = ({ searchTerm, onSearchChange }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
      <TextField
        variant="outlined"
        label="Buscar produtos"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        size="small"
        sx={{
          width: '100%',
          maxWidth: '100%',
          '& .MuiInputLabel-root': { color: theme.text },
          '& .MuiOutlinedInput-input': { color: theme.text },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.text
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.text
          }
        }}
      />
    </Box>
  );
};

export default ProductSearch;
