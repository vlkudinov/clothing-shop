import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  
  button {
    margin-left: auto;
    margin-top: 50px;
  }
  
  @media screen and (max-width: 800px) {
  	width: auto;
  }
  
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const CheckoutTitle = styled.h2`
  margin-top: 80px;
  text-align: center;
  font-size: 28px;
  text-transform: uppercase;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
  color: red;
`;
