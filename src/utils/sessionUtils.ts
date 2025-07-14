export const saveExploreState = () => {
  const scrollY = window.scrollY;
  const currentCategory = Number(localStorage.getItem('activeCategory'));
  const currentSearchTerm = localStorage.getItem('searchTerm') ?? '';
  const currentPage = Number(localStorage.getItem('currentPage'));
  const productsState = JSON.parse(sessionStorage.getItem('productsContent') ?? '[]');

  sessionStorage.setItem('exploreState', JSON.stringify({
    scrollY,
    currentCategory,
    currentSearchTerm,
    currentPage,
    products: productsState,
    totalPages: 1
  }));
};
