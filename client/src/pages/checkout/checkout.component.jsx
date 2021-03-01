import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from 'components/checkout-form/checkout-form.component';
import CheckoutItem from 'components/checkout-item/checkout-item.component';
import { addItem, removeItem, clearItemFromCart } from 'redux/cart/cart.reducer';
import ELEMENTS_OPTIONS from './options';
import CheckoutResult from '../../components/checkout-result/checkout-result.component';
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	CheckoutTitle,
	HeaderBlockContainer,
	WarningContainer
} from './checkout.styles';
import { paymentIntentStart } from '../../redux/billing/billing.reducer';
import { selectTotalCount } from '../../redux/cart/cart.selectors';

const promise = loadStripe('pk_test_51IHOnNIj06bgxfNM9ISMDoO4Bd4wfe4XA2ktTuA8DixjLvS9F9o8vHo0Eq5zhJqXna94e6HexJ4tC1NYrXqQ3g4O00qEjutKTF');

const CheckoutPage = ({ headerItems }) => {
	const { items } = useSelector((state) => state.cart);
	const totalCount = useSelector(selectTotalCount);
	const { paymentIntent } = useSelector((state) => state.billing, shallowEqual);

	const dispatch = useDispatch();

	useEffect(() => {
		if (totalCount) {
			dispatch(paymentIntentStart());
		}
	}, [ totalCount, dispatch ]);

	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				{
					headerItems.map((item, i) =>
						<HeaderBlockContainer key={i}>
							<span>{item}</span>
						</HeaderBlockContainer>
					)}
			</CheckoutHeaderContainer>
			{items.map(item =>
				<CheckoutItem
					key={item.id}
					item={item}
					clearItemFromCart={() => dispatch(clearItemFromCart(item))}
					addItem={() => dispatch(addItem(item))}
					removeItem={() => dispatch(removeItem(item))}
				/>
			)}
			<CheckoutTitle>Payment Information</CheckoutTitle>
			<Elements stripe={promise} options={ELEMENTS_OPTIONS}>
				{paymentIntent ? <CheckoutResult paymentIntent={paymentIntent}/> : <CheckoutForm/>}
			</Elements>
			<WarningContainer>
				The demo is running in test mode -- use 4242424242424242 as a test card number with any CVC + future expiration
				date.
				<br/>
				Use the 4000002500003155 test card number to trigger a 3D Secure challenge flow.
			</WarningContainer>
		</CheckoutPageContainer>
	);
};

CheckoutPage.defaultProps = {
	headerItems: [ 'product', 'description', 'quantity', 'price', 'remove' ]
};

export default CheckoutPage;