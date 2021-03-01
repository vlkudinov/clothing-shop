import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from 'components/form-input/form-input.component';
import Button from 'components/button/button.component';
import { emailSignInStart, googleSignInStart } from 'redux/user/user.reducer';
import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer
} from './sign-in.styles';

const SignIn = () => {
	const dispatch = useDispatch();
	const initialState = { email: '', password: '' };
	const [ userCredentials, setCredentials ] = useState(initialState);
	const { email, password } = userCredentials;

	const handleSubmit = e => {
		e.preventDefault();
		
		dispatch(emailSignInStart({ email, password }));
		setCredentials(initialState);
	};

	const handleChange = ({ target: { value, name } }) => {
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
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
				<ButtonsBarContainer>
					<Button type='submit'>
						Sign In
					</Button>
					<Button color='blue' onClick={() => dispatch(googleSignInStart())}>
						Sign In With Google
					</Button>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;