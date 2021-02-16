import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from 'components/_common/form-input/form-input.component';
import Button from 'components/_common/button/button.component';
import { signUpStart } from 'redux/user/user.reducer';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = () => {
	const dispatch = useDispatch();
	const initialState = {
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	const [ userCredentials, setCredentials ] = useState(initialState);
	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = e => {
		e.preventDefault();
	
		if (password !== confirmPassword) {
			alert('passwords don\'t match');
			return;
		}

		dispatch(signUpStart(userCredentials));
		setCredentials(initialState);

	};

	const handleChange = ({ target: { value, name } }) => {
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have account</SignUpTitle>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='displayName'
					type='text'
					label='Display Name'
					value={displayName}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name='email'
					type='email'
					label='Email'
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name='password'
					type='password'
					label='Password'
					required
					value={password}
					handleChange={handleChange}
				/>
				<FormInput
					name='confirmPassword'
					type='password'
					label='Confirm Password'
					required
					value={confirmPassword}
					handleChange={handleChange}
				/>
				<Button type='submit'>
					Sign Up
				</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;