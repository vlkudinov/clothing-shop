import React, { Component } from 'react';
import FormInput from 'components/_common/form-input/form-input.component';
import Button from 'components/_common/button/button.component';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';
import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({ email: '', password: '' });

		} catch (e) {
			console.error(e);
		}
	};

	handleChange = ({ target: { value, name } }) => {
		this.setState({ [name]: value });
	};

	render(){
		const { email, password } = this.state;

		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						label='Email'
						value={email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name='password'
						type='password'
						label='Password'
						required
						value={password}
						handleChange={this.handleChange}
					/>
					<ButtonsBarContainer>
						<Button type='submit'>
							Sign In
						</Button>
						<Button color='blue' onClick={signInWithGoogle}>
							Sign In With Google
						</Button>
					</ButtonsBarContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;