import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

const SkeletonItem = styled.div`
  height: 320px;
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
`;

export const SkeletonGrid = () => (
  <Grid>
    {Array.from({ length: 8 }).map((_, i) => (
      <SkeletonItem key={i} />
    ))}
  </Grid>
);
