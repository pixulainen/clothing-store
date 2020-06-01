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
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
