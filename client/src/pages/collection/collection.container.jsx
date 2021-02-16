import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import WithSpinner from 'components/with-spinner/with-spinner.component';
import CollectionPage from 'pages/collection/collection.component';

const mapStateToProps = state => ({
	isLoading: state.shop.loading
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage);

export default CollectionPageContainer;