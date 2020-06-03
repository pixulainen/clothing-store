import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
const config = {
	apiKey: 'AIzaSyC_-_CGdn7IBnmtd0lgForXu4G4IiMnK1w',
	authDomain: 'store-db-6e930.firebaseapp.com',
	databaseURL: 'https://store-db-6e930.firebaseio.com',
	projectId: 'store-db-6e930',
	storageBucket: 'store-db-6e930.appspot.com',
	messagingSenderId: '45501792626',
	appId: '1:45501792626:web:572831691a7441117d9deb',
	measurementId: 'G-0H3KHJLN23'
};

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	console.log(snapShot);
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...AdditionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
