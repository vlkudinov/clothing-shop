import {firestore} from "./firebase.utils";

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = await firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const {displayName, email, photoURL} = userAuth;
		const creatAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				creatAt,
				...additionalData
			})
		} catch (e) {
			console.log('error creating user', e.message)
		}
	}

	return userRef;
}