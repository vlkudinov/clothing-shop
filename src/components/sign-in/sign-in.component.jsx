import React, {Component} from 'react';
import FormInput from "components/_common/form-input/form-input.component";
import Button from "components/_common/button/button.component";
import {auth, signInWithGoogle} from 'firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);

			this.setState({email: '', password: ''})

		} catch(e) {
			console.error(e);
		}
	}

	handleChange = ({target: {value, name}}) => {
		this.setState({[name]: value})
	}

	render() {
		const { email, password } = this.state;

		return (
			<div className='sign-in'>
				<h2 className='sign-in__title'>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form className='sign-in__form' onSubmit={this.handleSubmit}>
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
					<div className='buttons-group'>
						<Button type='submit'>
							Sign In
						</Button>
						<Button color='blue' onClick={signInWithGoogle}>
							Sign In With Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;