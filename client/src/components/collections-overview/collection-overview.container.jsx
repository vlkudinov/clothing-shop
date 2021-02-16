import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import WithSpinner from 'components/with-spinner/with-spinner.component';
import CollectionOverview from 'components/collections-overview/collections-overview.component';

const mapStateToProps = state => ({
	isLoading: state.shop.loading
});

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;