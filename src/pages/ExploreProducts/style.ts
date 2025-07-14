import styled from 'styled-components';

export const FilterRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 24px 0;
  width: 100%;
`;

export const FilterLeft = styled.div`
  flex-grow: 1;
  min-width: 280px;
`;

export const FilterRight = styled.div`
  width: 240px;

  @media (max-width: 768px) {
    margin: 0 auto;
    min-width: 100%;
  }
`;

export const Alert = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

export const Container = styled.div`
  padding: 25px;
`;