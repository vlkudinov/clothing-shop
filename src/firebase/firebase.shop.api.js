import { firestore } from './firebase.utils';
import { convertCollectionsSnapshotToMap } from './firebase.utils';

const fetchCollections = async () => {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = await collectionRef.get();
		return convertCollectionsSnapshotToMap(snapshot);

	} catch (e) {
		throw new Error(e);
	}
};

export { fetchCollections };