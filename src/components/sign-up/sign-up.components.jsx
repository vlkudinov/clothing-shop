import React, { Component } from 'react';
import FormInput from 'components/_common/form-input/form-input.component';
import Button from 'components/_common/button/button.component';
import { auth } from 'firebase/firebase.utils';
import { createUserProfileDocument } from 'firebase/firebase.users.api';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends Component {
	constructor(props){
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('passwords don\'t match');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});

		} catch (e) {
			console.error(e);
		}
	};

	handleChange = ({ target: { value, name } }) => {
		this.setState({ [name]: value });
	};

	render(){
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<SignUpContainer>
				<SignUpTitle>I do not have account</SignUpTitle>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='displayName'
						type='text'
						label='Display Name'
						value={displayName}
						handleChange={this.handleChange}
						required
					/>
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
					<FormInput
						name='confirmPassword'
						type='password'
						label='Confirm Password'
						required
						value={confirmPassword}
						handleChange={this.handleChange}
					/>
					<Button type='submit'>
						Sign Up
					</Button>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUp;