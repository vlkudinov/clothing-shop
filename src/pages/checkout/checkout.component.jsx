import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {selectTotalCount} from 'redux/cart/cart.selectors';
import CheckoutItem from 'components/checkout-item/checkout-item.component';
import {addItem, removeItem, clearItemFromCart} from 'redux/cart/cart.reducer';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import './checkout.styles.scss';

const CheckoutPage = ({headerItems}) => {
	const {items} = useSelector((state) => state.cart, shallowEqual)
	const total = useSelector(selectTotalCount);
	const dispatch = useDispatch();

	return (
		<div className='checkout-page'>
			<div className="checkout-header">
				{
					headerItems.map((item, i) =>
						<div key={i} className="checkout-header__block">
							<span>{item}</span>
						</div>
					)}
			</div>
			{items.map(item =>
				<CheckoutItem
					key={item.id}
					item={item}
					clearItemFromCart={() => dispatch(clearItemFromCart(item))}
					addItem={() => dispatch(addItem(item))}
					removeItem={() => dispatch(removeItem(item))}
				/>
			)}
			<div className="total">TOTAL ${total}</div>
			<StripeCheckoutButton price={total}/>
			<div className="test-warning">
				*Please use following test credit card for payments
				<br/>
				4242 4242 4242 4242 /CVC - Any 3 digits /Date - any future date
			</div>
		</div>
	);
}

CheckoutPage.defaultProps = {
	headerItems: ['product', 'description', 'quantity', 'price', 'remove']
}

export default CheckoutPage;