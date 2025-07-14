import React from 'react';
import { FaStar } from 'react-icons/fa';
import { NavButton, FavoritesCount } from './styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { saveExploreState } from '../../utils/sessionUtils';
import type { RootState } from '../../redux/store';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const favoriteCount = favorites.length;

  const goTo = (path: string, state?: any) => {
    if (path === '/favoritos') saveExploreState();
    navigate(path, state ? { state } : undefined);
  };

  return (
    <>
      <NavButton onClick={() => goTo('/')}>Produtos</NavButton>
      <NavButton onClick={() => goTo('/favoritos', { fromFavorites: true })}>
        <FaStar />
        Favoritos
        {favoriteCount > 0 && <FavoritesCount>{favoriteCount}</FavoritesCount>}
      </NavButton>
    </>
  );
};

export default Navigation;
