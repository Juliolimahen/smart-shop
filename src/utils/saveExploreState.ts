import { normalizeProducts } from '../utils/normalizeProducts';

export const saveExploreState = () => {
  const scrollY = window.scrollY;

  const currentCategory = Number(localStorage.getItem('activeCategory'));
  const currentSearchTerm = localStorage.getItem('searchTerm') ?? '';
  const currentPage = Number(localStorage.getItem('currentPage'));

  const rawProducts = JSON.parse(sessionStorage.getItem('productsContent') ?? '[]');
  const productsState = normalizeProducts(rawProducts); 

  const serializableProducts = productsState.map(product => {
    return Object.fromEntries(
      Object.entries(product).filter(([_, value]) => typeof value !== 'function')
    );
  });

  const stateToSave = {
    scrollY,
    currentCategory,
    currentSearchTerm,
    currentPage,
    products: serializableProducts,
    totalPages: 1
  };

  sessionStorage.setItem('exploreState', JSON.stringify(stateToSave));
};
