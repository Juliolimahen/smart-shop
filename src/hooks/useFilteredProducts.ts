import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { filterByCategory } from '../utils/filterByCategory';
import { filterByPriceRange } from '../utils/filterByPriceRange';
import { sortByPrice, sortByPriceDesc } from '../utils/sortByPrice';

export const useFilteredProducts = () => {
  const {
    products,
    searchTerm,
    category,
    minPrice,
    maxPrice,
    orderByPrice,
    totalPages 
  } = useSelector((state: RootState) => state.explore);

  const searched = searchTerm.trim()
    ? products.filter(p =>
        (p.nome ?? '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.descricao ?? '').toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const categorized = filterByCategory(searched, category);
  const filtered = filterByPriceRange(categorized, minPrice ?? 0, maxPrice ?? Infinity);
  const ordered = orderByPrice === 'desc' ? sortByPriceDesc(filtered) : sortByPrice(filtered);

  return { paginated: ordered, totalPages };
};
