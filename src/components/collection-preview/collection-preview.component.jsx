import React from 'react';
import CollectionItem from "components/collection-item/collection-item.component";

import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => (
	 <div className='collection-preview'>
		 <h1 className='collection-preview__title'>{title.toUpperCase()}</h1>
		 <ul className='collection-preview__list'>
			 {
			 	items.slice(0,4).map(item =>
				  <CollectionItem key={item.id} item={item}/>
			  )
			 }
		 </ul>
	 </div>
);

export default CollectionPreview;