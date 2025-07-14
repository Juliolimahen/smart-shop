import React from 'react';
import { getAllCategories } from '../../api/categories';
import { Tab, TabsContainer, TabsWrapper } from './styles';

interface Props {
  activeCategory: number | null;
  onSelectCategory: (id: number | null) => void;
}

export const CategoryTabs: React.FC<Props> = ({ activeCategory, onSelectCategory }) => {
  const categories = getAllCategories();

  return (
    <TabsWrapper>
      <TabsContainer>
        <Tab
          $active={activeCategory === null}
          onMouseEnter={() => onSelectCategory(null)}
        >
          Todas as Categorias
        </Tab>
        {categories.map(category => (
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
