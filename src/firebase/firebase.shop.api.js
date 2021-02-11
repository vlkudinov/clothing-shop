import { firestore } from './firebase.utils';
import { convertCollectionsSnapshotToMap } from './firebase.utils';

export const getCollections = async () => {
	const collectionRef = firestore.collection('collections');
	const snapshot = await collectionRef.get();

	return convertCollectionsSnapshotToMap(snapshot);
};
