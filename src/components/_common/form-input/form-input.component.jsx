import React from 'react';
import PropTypes from 'prop-types';

import { FormInputContainer, GroupContainer, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<GroupContainer>
		<FormInputContainer
			className='form-input'
			onChange={e => handleChange(e)}
			{...otherProps}
		/>
		{label && <FormInputLabel>{label}</FormInputLabel>}
	</GroupContainer>
);

FormInput.defaultProps = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	required: PropTypes.bool
};

export default FormInput;
