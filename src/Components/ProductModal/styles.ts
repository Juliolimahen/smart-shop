import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 560px;
  width: 90%;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 16px;
  transform: translate(-50%, -50%);
  z-index: 1000;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 16px;
    width: 95%;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.body};
  ${({ theme }) => theme.filter && `filter: ${theme.filter};`}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
`;

export const FavoriteButtonArea = styled.button`
  font-size: 1.4rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const ModalBody = styled.div`
  padding: 0 16px 16px;
  color: ${({ theme }) => theme.text};
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalLabel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

export const ModalValue = styled.span`
  color: ${({ theme }) => theme.text};
`;

export const CategoryChip = styled.span`
  display: inline-block;
  background-color: #e0f3ff;
  color: #007bff;
  ${({ theme }) => theme.filter && `filter: ${theme.filter};`}
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 12px;
  margin: 4px 4px 0 0;
`;

export const ModalClose = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  padding: 12px 16px;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.body};
  }
`;

export const VariantBlock = styled.div`
  background-color: ${({ theme }) => theme.body};
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  font-size: 0.85rem;
  line-height: 1.5;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  color: ${({ theme }) => theme.text};

  p {
    margin: 4px 0;
  }
`;

export const VariantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;

export const FavoriteButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const InfoBlock = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.6;
`;

export const InfoLine = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

export const Label = styled.strong`
  margin-right: 4px;
  color: ${({ theme }) => theme.text};
`;

export const VariationsContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-top: 16px;
  padding-right: 8px; // reserva espaço pro scrollbar

  // suaviza a rolagem no mobile
  scroll-behavior: smooth;

  @media (max-width: 480px) {
    max-height: 200px;
  }
`;