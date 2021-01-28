import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { toggleCartHidden } from 'redux/cart';
import {Link} from 'react-router-dom';
import {auth} from 'firebase/firebase.utils';

import {ReactComponent as Logo} from 'assets/crown.svg';
import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";

import './header.styles.scss';

const Header = () => {
	const {currentUser} = useSelector((state) => state.user, shallowEqual)
	const {hidden} = useSelector((state) => state.cart, shallowEqual)
	const dispatch = useDispatch();

	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo'/>
			</Link>
			<div className="options">
				<Link className='option' to='/shop'>SHOP</Link>
				<Link className='option' to='/contact'>CONTACT</Link>
				{currentUser
					? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
					: <Link className='option' to='/sign-in'>SIGN IN</Link>
				}
				<CartIcon handleClick={() => dispatch(toggleCartHidden())}/>
				<CartDropdown hidden={hidden}/>
			</div>
		</div>)
};

export default Header;