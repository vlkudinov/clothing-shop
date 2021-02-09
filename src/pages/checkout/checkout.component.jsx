import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectTotalCount } from 'redux/cart/cart.selectors';
import CheckoutItem from 'components/checkout-item/checkout-item.component';
import { addItem, removeItem, clearItemFromCart } from 'redux/cart/cart.reducer';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer
} from './checkout.styles';

const CheckoutPage = ({ headerItems }) => {
	const { items } = useSelector((state) => state.cart, shallowEqual);
	const total = useSelector(selectTotalCount);
	const dispatch = useDispatch();

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
			<TotalContainer>TOTAL ${total}</TotalContainer>
			<StripeCheckoutButton price={total}/>
			<WarningContainer>
				*Please use following test credit card for payments
				<br/>
				4242 4242 4242 4242 /CVC - Any 3 digits /Date - any future date
			</WarningContainer>
		</CheckoutPageContainer>
	);
};

CheckoutPage.defaultProps = {
	headerItems: [ 'product', 'description', 'quantity', 'price', 'remove' ]
};

export default CheckoutPage;