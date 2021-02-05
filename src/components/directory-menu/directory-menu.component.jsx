import React from 'react';
import {useSelector} from 'react-redux';
import MenuItem from "../menu-item/menu-item.component";
import './directory-menu.styles.scss'

const Directory = () => {
	const {sections} = useSelector(state => state.directory)

	return (
		<div className="directory-menu">
			{sections.map(({id, ...props}) => (
					<MenuItem key={id} {...props}/>
				)
			)}
		</div>
	)
}

export default Directory;
