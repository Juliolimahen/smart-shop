import styled from 'styled-components';

interface CategoryTabProps {
  $active: boolean;
}

export const TabsWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  padding-bottom: 50px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  min-width: max-content;
`;

export const Tab = styled.button<CategoryTabProps>`
  padding: 8px 16px;
  background-color: ${({ $active }) => ($active ? '#007bff' : '#f0f0f0')};
  color: ${({ $active }) => ($active ? 'white' : '#333')};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d0e6ff;
  }
`;