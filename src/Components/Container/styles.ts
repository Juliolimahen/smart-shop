import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;

   @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 16px;
`;
