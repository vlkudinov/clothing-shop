import React, {Component} from 'react';
import FormInput from "components/_common/form-input/form-input.component";
import Button from "components/_common/button/button.component";
import { signInWithGoogle } from 'firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({email: '', password: ''});
	}

	handleChange = ({target: {value, name}}) => {
		this.setState({[name]: value})
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='text'
						label='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name='password'
						type='password'
						label='password'
						required
						value={this.state.password}
						handleChange={this.handleChange}
					/>
				</form>
				<div className="buttons-group">
					<Button type='submit'>
						Sign In
					</Button>
					<Button type='submit' color='blue' onClick={signInWithGoogle}>
						Sign In With Google
					</Button>
				</div>
			</div>
		);
	}
}

export default SignIn;