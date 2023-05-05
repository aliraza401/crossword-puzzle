import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const GridContainer = styled.div`
  margin: 1rem;
  /* Add custom styles for your grid container */
`;

export const CluesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  & > div {
    width: 50%;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  /* Add custom styles for your buttons container */
`;
