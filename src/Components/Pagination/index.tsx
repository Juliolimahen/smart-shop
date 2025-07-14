import React from 'react';
import {
  PaginationContainer,
  PaginationButton,
  PageInfo
} from './style';

interface Props {
  page: number;
  totalPages: number;
  isFirst: boolean;
  isLast: boolean;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  page,
  totalPages,
  isFirst,
  isLast,
  onPageChange
}) => {
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onPageChange(0)}
        disabled={isFirst}
      >
        Primeira
      </PaginationButton>

      <PaginationButton
        onClick={() => onPageChange(page - 1)}
        disabled={isFirst}
      >
        Anterior
      </PaginationButton>

      <PageInfo>
        Página {page + 1} de {totalPages}
      </PageInfo>

      <PaginationButton
        onClick={() => onPageChange(page + 1)}
        disabled={isLast}
      >
        Próxima
      </PaginationButton>

      <PaginationButton
        onClick={() => onPageChange(totalPages - 1)}
        disabled={isLast}
      >
        Última
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
