import React from 'react';
import Directory from 'components/directory-menu/directory-menu.component';
import { HomePageContainer } from './homepage.styles';

const Homepage = () => {
	return (
		<HomePageContainer>
			<Directory/>
		</HomePageContainer>
	);
};

export default Homepage;