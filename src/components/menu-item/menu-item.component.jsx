import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, subtitle = 'SHOP NOW', size = 'normal', linkUrl, history, match}, ) => {
	return (
			<div className={`menu-item menu-item_${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
				<div className="menu-item__background-image" style={{backgroundImage : `url(${imageUrl})`}}/>
				<div className="menu-item__content">
					<h1 className="menu-item__title">{title}</h1>
					<span className="menu-item__subtitle">{subtitle}</span>
				</div>
			</div>
	);
};

export default withRouter(MenuItem);