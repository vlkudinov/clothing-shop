import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { signOutStart } from 'redux/user/user.reducer';
import { toggleCartHidden } from 'redux/cart/cart.reducer';
import { ReactComponent as Logo } from 'assets/crown.svg';
import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './header.styles.jsx';

const Header = () => {
	const { currentUser } = useSelector((state) => state.user, shallowEqual);
	const { hidden } = useSelector((state) => state.cart, shallowEqual);
	const dispatch = useDispatch();

	return (
		<HeaderContainer>
			<LogoContainer className='logo-container' to='/'>
				<Logo/>
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/contact'>CONTACT</OptionLink>
				{currentUser
					? <OptionLink as='div' onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink>
					: <OptionLink to='/sign-in'>SIGN IN</OptionLink>
				}
				<CartIcon handleClick={() => dispatch(toggleCartHidden())}/>
				<CartDropdown hidden={hidden}/>
			</OptionsContainer>
		</HeaderContainer>);
};

export default Header;