import styled from 'styled-components';
import Button from 'components/_common/button/button.component';

export const CollectionItemContainer = styled.li`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 210px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0 10px 10px 5px;
  background-color: gray;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;