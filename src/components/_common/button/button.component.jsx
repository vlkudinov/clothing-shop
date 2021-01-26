import React from 'react';
import PropTypes from 'prop-types';

import './button.styles.scss'

const Button = ({children, color, ...props}) => {
	return (
		<button className={`button button_${color}`} {...props}>
			<span className='button__title'>{children}</span>
		</button>
	);
};

Button.defaultProps = {
	color: 'black',
	type: 'button'
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default Button;