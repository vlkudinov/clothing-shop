import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-transform: uppercase;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  padding: 0;
  
  
  @media screen and (max-width: 800px) {
  	display: grid;
  	grid-template-columns: 1fr 1fr;
  	grid-gap: 15px;
  }
`;