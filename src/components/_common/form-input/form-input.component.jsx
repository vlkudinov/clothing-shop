import React from 'react';
import PropTypes from 'prop-types';

import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
	<div className='group'>
		<input
			className='form-input'
			onChange={e => handleChange(e)}
			{...otherProps}
		/>
		{label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
	</div>
);

FormInput.defaultProps = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	required: PropTypes.bool
}

export default FormInput;
