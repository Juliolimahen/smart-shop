import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background-color: white;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  overflow: hidden;
  background-color: ${({ theme }) => theme.inside};
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

export const FavoriteArea = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
`;

export const ImageArea = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NoImage = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  font-size: 0.9rem;
  color: #999;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

export const Price = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: #e74c3c;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
  max-height: 4.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.text};
`;

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Chip = styled.span`
  background-color: #e0f3ff;
  color: #007bff;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 12px;
`;
