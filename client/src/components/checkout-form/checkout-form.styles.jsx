import styled from 'styled-components';

export const CheckoutFormContainer = styled.form`
  animation: fade 200ms ease-out;
  width: 100%;
  max-width: 800px;
  position: relative;
`;

export const CardElementContainer = styled.div`
	border-bottom: 1px solid gray;
	padding: 11px 15px 11px 0;
`;

export const CardElementErrorMessage = styled.div`
	color: black;
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 13px;
  margin-top: 20px;
  width: 100%;
  
  svg {
  	margin-right: 10px;
	}
`;