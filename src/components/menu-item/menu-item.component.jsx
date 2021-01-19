import React from 'react';

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, subtitle = 'SHOP NOW', size = 'normal'}) => {
	return (
			<div className={`menu-item menu-item_${size}`} >
				<div className="menu-item__background-image" style={{backgroundImage : `url(${imageUrl})`}}/>
				<div className="menu-item__content">
					<h1 className="menu-item__title">{title}</h1>
					<span className="menu-item__subtitle">{subtitle}</span>
				</div>
			</div>
	);
};

export default MenuItem;