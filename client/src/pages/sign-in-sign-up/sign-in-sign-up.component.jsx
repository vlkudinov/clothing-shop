import React from 'react';
import SignIn from 'components/sign-in/sign-in.component';
import SignUp from 'components/sign-up/sign-up.components';

import { SignInAndSignUpContainer } from './sign-in-sign-up.styles';

const SignInSignUp = () => (
	<SignInAndSignUpContainer>
		<SignIn/>
		<SignUp/>
	</SignInAndSignUpContainer>
);

export default SignInSignUp;