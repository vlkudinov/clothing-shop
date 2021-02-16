import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenuContainer } from './directory-menu.styles';

const Directory = () => {
	const { sections } = useSelector(state => state.directory);

	return (
		<DirectoryMenuContainer>
			{sections.map(({ id, ...props }) => (
					<MenuItem key={id} {...props}/>
				)
			)}
		</DirectoryMenuContainer>
	);
};

export default Directory;
