import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {selectTotalCount, selectCartItems} from 'redux/cart/cart.selectors';
import CheckoutItem from 'components/checkout-item/checkout-item.component';
import {addItem, removeItem, clearItemFromCart} from 'redux/cart/cart.reducer';
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
		</div>
	);
}

CheckoutPage.defaultProps = {
	headerItems: ['product', 'description', 'quantity', 'price', 'remove']
}

export default CheckoutPage;