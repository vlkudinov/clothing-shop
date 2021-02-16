import React from 'react';
import { CheckoutResultContainer, CheckoutResultTitle, CheckoutResultMessage } from './checkout-result.styles';

const CheckoutResult = ({ paymentIntent }) => (
	<CheckoutResultContainer>
		<CheckoutResultTitle>
			Payment successful
		</CheckoutResultTitle>
		<CheckoutResultMessage>
			Thanks for trying Stripe Elements. No money was charged, but we
			generated a PaymentIntent: {paymentIntent.id}
		</CheckoutResultMessage>
	</CheckoutResultContainer>
);

export default CheckoutResult;