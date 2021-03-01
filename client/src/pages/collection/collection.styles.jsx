import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 28px;;
  margin-bottom: 25px;
  text-transform: uppercase;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
`;

export const CollectionItemsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 0;
  & > div {
    margin-bottom: 30px;
  }
  
  @media screen and (max-width: 800px) {
  	grid-template-columns: 1fr 1fr;
  	grid-gap: 15px;
  }
`;