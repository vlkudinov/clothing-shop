import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectTotalCount } from 'redux/cart/cart.selectors';
import { paymentConfirmStart } from 'redux/billing/billing.reducer';
import { ReactComponent as CrossIconSVG } from 'assets/cross.svg';
import options from './options';
import FormInput from 'components/_common/form-input/form-input.component';
import Button from 'components/_common/button/button.component';
import {
	CardElement,
	useStripe,
	useElements
} from '@stripe/react-stripe-js';
import {
	CheckoutFormContainer,
	CardElementContainer,
	CardElementErrorMessage
} from './checkout-form.styles';


const CheckoutForm = () => {
	const totalCount = useSelector(selectTotalCount);
	const { processing } = useSelector((state) => state.billing, shallowEqual);
	const [ error, setError ] = useState(null);
	const [ cardComplete, setCardComplete ] = useState(false);
	const [ billingDetails, setBillingDetails ] = useState({
		email: '',
		phone: '',
		name: ''
	});

	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();

	const handleChange = ({ target: { name, value } }) => {
		setBillingDetails({ ...billingDetails, [name]: value });
	};

	const handleCardElementChange = async ({ complete, error }) => {
		setCardComplete(complete);
		setError(error ? error.message : '');
	};

	const handleSubmit = async ev => {
		ev.preventDefault();

		if (cardComplete) {

			const data = {
				payment_method: {
					card: elements.getElement(CardElement),
					billing_details: billingDetails
				}
			};
			dispatch(paymentConfirmStart({ stripe, data }));
		}
	};

	return (
		<CheckoutFormContainer onSubmit={handleSubmit}>
			<FormInput
				label="Name"
				type="text"
				name="name"
				required
				value={billingDetails.name}
				onChange={handleChange}
			/>
			<FormInput
				label="Email"
				type="email"
				name="email"
				required
				autoComplete="email"
				value={billingDetails.email}
				onChange={handleChange}
			/>
			<FormInput
				label="Phone"
				name="phone"
				type="tel"
				required
				autoComplete="tel"
				value={billingDetails.phone}
				onChange={handleChange}
			/>
			<CardElementContainer>
				<CardElement
					options={options}
					onChange={handleCardElementChange}/>
			</CardElementContainer>
			{error && <CardElementErrorMessage><CrossIconSVG/>{error}</CardElementErrorMessage>}
			<Button
				type="submit"
				color="stripe"
				disabled={processing || !cardComplete}>
				{`Pay $${totalCount}`}
			</Button>
		</CheckoutFormContainer>
	);
};

export default CheckoutForm;
