import styled from 'styled-components';

export const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

export const Alert = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

export const Container = styled.div`
  padding: '25px';
`;