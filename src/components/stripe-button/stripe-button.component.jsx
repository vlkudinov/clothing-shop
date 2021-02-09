import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publicKey = 'pk_test_51IHOnNIj06bgxfNM9ISMDoO4Bd4wfe4XA2ktTuA8DixjLvS9F9o8vHo0Eq5zhJqXna94e6HexJ4tC1NYrXqQ3g4O00qEjutKTF';
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publicKey}
		/>
	)
}

export default StripeCheckoutButton;