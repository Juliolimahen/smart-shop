import React from 'react';
import { useSelector } from 'react-redux';
import { useLoadCategories } from '../../hooks/useLoadCategories';
import type { RootState } from '../../redux/store';

import { Tab, TabsContainer, TabsWrapper } from './styles';

interface Props {
  activeCategory: number | null;
  onSelectCategory: (id: number | null) => void;
}

export const CategoryTabs: React.FC<Props> = ({ activeCategory, onSelectCategory }) => {
  useLoadCategories(); // dispara carregamento via Redux

  const { categories, loadingCategories } = useSelector((state: RootState) => state.explore);

  if (loadingCategories) {
    return <div>Carregando categorias...</div>; // ou SkeletonTabs
  }

  return (
    <TabsWrapper>
      <TabsContainer>
        <Tab $active={activeCategory === null} onMouseEnter={() => onSelectCategory(null)}>
          Todas as Categorias
        </Tab>
        {categories.map((category) => (
          <Tab
            key={category.id}
            $active={activeCategory === category.id}
            onMouseEnter={() => onSelectCategory(category.id)}
          >
            {category.nome}
          </Tab>
        ))}
      </TabsContainer>
    </TabsWrapper>
  );
};

export default CategoryTabs;
