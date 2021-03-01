import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from 'components/collection-item/collection-item.component';
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
	<CollectionPreviewContainer>
		<TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
			{title}
		</TitleContainer>
		<PreviewContainer>
			{
				items.slice(0, 4).map(item =>
					<CollectionItem key={item.id} item={item}/>
				)
			}
		</PreviewContainer>
	</CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);