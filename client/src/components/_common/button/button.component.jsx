import React from 'react';
import { ButtonContainer } from './button.styles';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
	return (
		<ButtonContainer {...props}>
			{children}
		</ButtonContainer>
	);
};

Button.defaultProps = {
	color: 'black'
};

Button.propTypes = {
	children: PropTypes.string.isRequired
};

export default Button;