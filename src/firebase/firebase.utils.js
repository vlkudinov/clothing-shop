import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAKUHa2H08KnGGFBYVuTWI6gw1OdpUYo-g",
	authDomain: "e-shop-12aa8.firebaseapp.com",
	projectId: "e-shop-12aa8",
	storageBucket: "e-shop-12aa8.appspot.com",
	messagingSenderId: "655207169369",
	appId: "1:655207169369:web:1fee944fa40148c3702048",
	measurementId: "G-HCY23ZB84L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
