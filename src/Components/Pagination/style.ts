import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 30px 0;
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? '#ff6b6b' : '#f0f0f0')};
  color: ${({ $active }) => ($active ? 'white' : '#333')};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ $active }) => ($active ? '#ff8787' : '#ddd')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export const PageInfo = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-left: 10px;
`;

export const Dropdown = styled.select`
  margin-left: 10px;
  padding: 6px;
  font-size: 0.9rem;
  border-radius: 4px;
`;
