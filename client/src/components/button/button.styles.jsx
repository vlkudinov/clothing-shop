import styled, { css } from 'styled-components';

const getButtonStyles = props =>
	colorMapping[props.color] || blackButtonStyles;

const blackButtonStyles = css`
	background-color: black;
  color: white;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const blueButtonStyles = css`
	background-color: #4285f4;
  border: 1px solid #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

const stripeButtonStyles = css`
	background-color: #5469d4;
  border: none;
  color: white;
  margin-right: auto;

  &:hover {
    background-color: #364696;
  }
  &:disabled {
  	background-color: #a4a5bc;
  }
`;


const colorMapping = {
	black: blackButtonStyles,
	blue: blueButtonStyles,
	stripe: stripeButtonStyles
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: none;
 
  ${getButtonStyles}
`;
