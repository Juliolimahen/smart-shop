/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import Pagination from '../../Components/Pagination';
import useAppDispatch from '../../hooks/useAppDispatch';
import ProductList from '../../Components/ProductList';
import ProductSearch from '../../Components/ProductSearch';
import { CategoryTabs } from '../../Components/CategoryTabs';
import { ProductModal } from '../../Components/ProductModal';
import { SkeletonGrid } from '../../Components/SkeletonGrid';
import { useLoadProducts } from '../../hooks/useLoadProducts';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import OrderByPriceSelector from '../../Components/OrderByPriceSelector';
import PriceRangeFilter from '../../Components/PriceRangeFilter/PriceRangeFilter';

import {
  setCategory,
  setSearchTerm,
  setPage,
  setSelectedProduct
} from '../../redux/explore/exploreSlice';

import {
  Container,
  FilterRow,
  FilterLeft,
  FilterRight,
  Alert
} from './style';

const ExploreProducts: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    category,
    searchTerm,
    currentPage,
    selectedProduct,
    loadingProducts
  } = useSelector((state: RootState) => state.explore);

  useLoadProducts();
  const { paginated, totalPages } = useFilteredProducts();

  const handlers = {
    category: (id: number | null) => {
      dispatch(setCategory(id));
      dispatch(setPage(0));
    },
    search: (term: string) => {
      dispatch(setSearchTerm(term));
      dispatch(setPage(0));
    },
    page: (p: number) => dispatch(setPage(p)),
    select: (product: any) => dispatch(setSelectedProduct(product)),
    closeModal: () => dispatch(setSelectedProduct(null))
  };

  return (
    <Container>
      <ProductSearch
        searchTerm={searchTerm}
        onSearchChange={handlers.search}
      />

      <CategoryTabs
        activeCategory={category}
        onSelectCategory={handlers.category}
      />

      <FilterRow>
        <FilterLeft>
          <PriceRangeFilter />
        </FilterLeft>
        <FilterRight>
          <OrderByPriceSelector />
        </FilterRight>
      </FilterRow>

      {loadingProducts ? (
        <SkeletonGrid />
      ) : paginated.length === 0 ? (
        <Alert>Nenhum produto disponível para os critérios atuais.</Alert>
      ) : (
        <ProductList
          products={paginated}
          onProductClick={handlers.select}
        />
      )}

      <Pagination
        page={currentPage}
        totalPages={totalPages}
        isFirst={currentPage === 0}
        isLast={currentPage === totalPages - 1}
        onPageChange={handlers.page}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handlers.closeModal}
        />
      )}
    </Container>
  );
};

export default ExploreProducts;
